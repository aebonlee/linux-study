import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    try {
      const { error: err } = await resetPassword(email);
      if (err) throw err;
      setSent(true);
    } catch (err) {
      setError(err.message || '비밀번호 재설정 이메일 전송에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1>비밀번호 찾기</h1>
        </div>
      </section>

      <div className="auth-page">
        <div className="auth-card">
          {sent ? (
            <div className="auth-success-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p>재설정 이메일이 발송되었습니다!</p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                이메일을 확인하여 비밀번호를 재설정해주세요.
              </p>
              <Link to="/login" className="auth-submit-btn" style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                {t('login')}
              </Link>
            </div>
          ) : (
            <>
              <p className="auth-sub">가입한 이메일을 입력하면 비밀번호 재설정 링크를 보내드립니다.</p>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('email')} required autoFocus />
                </div>
                {error && <div className="auth-message auth-error">{error}</div>}
                <div className="auth-form-actions">
                  <Link to="/login" className="auth-back-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                    {t('back')}
                  </Link>
                  <button type="submit" className="auth-submit-btn" disabled={loading}>
                    {loading ? '보내는 중...' : '재설정 링크 보내기'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
