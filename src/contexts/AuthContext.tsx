import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { supabase, isSupabaseConfigured, setSharedSession, getSharedSession, clearSharedSession } from '../lib/supabase';
import { ADMIN_EMAILS } from '../config/admin';
import type { User } from '@supabase/supabase-js';
import { useIdleTimeout } from '../hooks/useIdleTimeout';

interface AccountBlock {
  status: string;
  reason: string;
  suspended_until: string | null;
}

interface AuthResult {
  data?: any;
  error?: any;
}

interface AuthContextValue {
  user: User | null;
  profile: any;
  loading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSupabaseAvailable: boolean;
  accountBlock: AccountBlock | null;
  clearAccountBlock: () => void;
  signInWithGoogle: () => Promise<AuthResult>;
  signInWithKakao: () => Promise<AuthResult>;
  signInWithEmail: (email: string, password: string) => Promise<AuthResult>;
  signUpWithEmail: (email: string, password: string, displayName: string) => Promise<AuthResult>;
  resetPassword: (email: string) => Promise<AuthResult>;
  signOut: () => Promise<void>;
  updateDisplayName: (displayName: string) => Promise<{ error?: any }>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured());
  const [accountBlock, setAccountBlock] = useState<AccountBlock | null>(null);

  const clearAccountBlock = useCallback(() => setAccountBlock(null), []);

  const fetchProfile = useCallback(async (userId: string) => {
    if (!supabase) return null;
    const { data } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    // signup_domain / visited_sites / check_user_status 자동 처리
    if (data) {
      const currentDomain = window.location.hostname;
      const updates: Record<string, any> = {};
      if (!data.signup_domain) updates.signup_domain = currentDomain;
      const sites = Array.isArray(data.visited_sites) ? data.visited_sites : [];
      if (!sites.includes(currentDomain)) {
        updates.visited_sites = [...sites, currentDomain];
      }
      if (Object.keys(updates).length > 0) {
        supabase.from('user_profiles').update(updates).eq('id', userId).then(() => {});
      }

      // 계정 상태 체크
      try {
        const { data: statusData } = await supabase.rpc('check_user_status', {
          target_user_id: userId,
          current_domain: currentDomain,
        });
        if (statusData && statusData.status && statusData.status !== 'active') {
          setAccountBlock({
            status: statusData.status,
            reason: statusData.reason || '',
            suspended_until: statusData.suspended_until || null,
          });
          await supabase.auth.signOut();
          setUser(null);
          setProfile(null);
          return null;
        }
      } catch {
        // check_user_status 함수 미존재 시 무시
      }
    }

    return data;
  }, []);

  useEffect(() => {
    if (!supabase) return;

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.refresh_token) setSharedSession(session.refresh_token);
        if (event === 'SIGNED_OUT') clearSharedSession();

        const currentUser = session?.user ?? null;
        setUser(currentUser);
        if (currentUser) {
          const p = await fetchProfile(currentUser.id);
          setProfile(p);
          if (event === 'SIGNED_IN') {
            supabase!.from('user_profiles')
              .update({ last_sign_in_at: new Date().toISOString() })
              .eq('id', currentUser.id)
              .then(() => {});
          }
        } else {
          setProfile(null);
        }
        if (event === 'INITIAL_SESSION') {
          if (!currentUser) {
            const rt = getSharedSession();
            if (rt) {
              try {
                const { data } = await supabase!.auth.refreshSession({ refresh_token: rt });
                if (!data.session) clearSharedSession();
              } catch { clearSharedSession(); }
            }
          }
          setLoading(false);
        }
      }
    );

    // Fallback: force loading=false if INITIAL_SESSION doesn't fire
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const signInWithGoogle = useCallback(async () => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + window.location.pathname }
    });
    return { data, error };
  }, []);

  const signInWithKakao = useCallback(async () => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao' as any,
      options: {
        redirectTo: window.location.origin + window.location.pathname,
        scopes: 'profile_nickname profile_image account_email',
      }
    });
    return { data, error };
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  }, []);

  const signUpWithEmail = useCallback(async (email: string, password: string, displayName: string) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } }
    });
    return { data, error };
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/login',
    });
    return { data, error };
  }, []);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut({ scope: 'local' });
    setUser(null);
    setProfile(null);
  }, []);

  const updateDisplayName = useCallback(async (displayName: string) => {
    if (!supabase || !user) return { error: { message: 'Not authenticated' } };
    const { error } = await supabase
      .from('user_profiles')
      .update({ display_name: displayName })
      .eq('id', user.id);
    if (!error) {
      setProfile((prev: any) => prev ? { ...prev, display_name: displayName } : prev);
    }
    return { error };
  }, [user]);

  const allEmails = [
    user?.email,
    (user?.user_metadata as any)?.email,
    user?.identities?.[0]?.identity_data?.email,
    profile?.email,
  ].filter((e): e is string => typeof e === 'string').map((e) => e.toLowerCase());
  const isAdmin = allEmails.some((e) => ADMIN_EMAILS.includes(e));


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: !!user,
  onTimeout: () => {
  supabase.auth.signOut();
  clearSharedSession();
  },
  });

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isAuthenticated: !!user,
      isAdmin,
      isSupabaseAvailable: isSupabaseConfigured(),
      accountBlock,
      clearAccountBlock,
      signInWithGoogle,
      signInWithKakao,
      signInWithEmail,
      signUpWithEmail,
      resetPassword,
      signOut,
      updateDisplayName
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
