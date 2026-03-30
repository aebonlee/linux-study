import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(isSupabaseConfigured());
  const [accountBlock, setAccountBlock] = useState(null);

  const clearAccountBlock = useCallback(() => setAccountBlock(null), []);

  const fetchProfile = useCallback(async (userId) => {
    if (!supabase) return null;
    const { data } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    // signup_domain / visited_sites / check_user_status 자동 처리
    if (data) {
      const currentDomain = window.location.hostname;
      const updates = {};
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
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        if (currentUser) {
          const p = await fetchProfile(currentUser.id);
          setProfile(p);
          if (event === 'SIGNED_IN') {
            supabase.from('user_profiles')
              .update({ last_sign_in_at: new Date().toISOString() })
              .eq('id', currentUser.id)
              .then(() => {});
          }
        } else {
          setProfile(null);
        }
        if (event === 'INITIAL_SESSION') {
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
      provider: 'kakao',
      options: {
        redirectTo: window.location.origin + window.location.pathname,
        scopes: 'profile_nickname profile_image account_email',
      }
    });
    return { data, error };
  }, []);

  const signInWithEmail = useCallback(async (email, password) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  }, []);

  const signUpWithEmail = useCallback(async (email, password, displayName) => {
    if (!supabase) return { error: { message: 'Supabase not configured' } };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } }
    });
    return { data, error };
  }, []);

  const resetPassword = useCallback(async (email) => {
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

  const updateDisplayName = useCallback(async (displayName) => {
    if (!supabase || !user) return { error: { message: 'Not authenticated' } };
    const { error } = await supabase
      .from('user_profiles')
      .update({ display_name: displayName })
      .eq('id', user.id);
    if (!error) {
      setProfile(prev => prev ? { ...prev, display_name: displayName } : prev);
    }
    return { error };
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isAuthenticated: !!user,
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
