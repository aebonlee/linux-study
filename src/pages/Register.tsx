import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Register() {
  const { isAuthenticated, loading, signUpWithEmail } = useAuth();
  const { t } = useLanguage();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError('올바른 이메일 주소를 입력해주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password)) {
      setError('비밀번호는 8자 이상, 영문과 숫자를 포함해야 합니다.');
      return;
    }

    setSubmitting(true);
    try {
      const { error: err } = await signUpWithEmail(email, password, displayName);
      if (err) {
        setError(err.message);
      } else {
        setSuccess(true);
      }
    } catch {
      setError(t('authError'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1>{t('signUpTitle')}</h1>
        </div>
      </section>

      <div className="auth-page">
        <div className="auth-card">
          {success ? (
            <div className="auth-success-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p>{t('signUpSuccess')}</p>
              <Link to="/login" className="auth-submit-btn" style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                {t('login')}
              </Link>
            </div>
          ) : (
            <>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                  <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder={t('displayName')} required autoFocus />
                </div>
                <div className="auth-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('email')} required />
                </div>
                <div className="auth-field">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호 (8자 이상, 영문+숫자)" required minLength={8} />
                </div>
                <div className="auth-field">
                  <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="비밀번호 확인" required />
                </div>
                {error && <div className="auth-message auth-error">{error}</div>}
                <button type="submit" className="auth-submit-btn" style={{ width: '100%' }} disabled={submitting}>
                  {submitting ? '가입 중...' : t('signUp')}
                </button>
              </form>
              <div className="auth-bottom-link">
                <span>{t('hasAccount')}</span>
                <Link to="/login">{t('login')}</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
