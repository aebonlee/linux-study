import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { getBadges } from '../config/badges';
import { lessons, exams } from '../config/studyItems';
import BadgeCard from '../components/BadgeCard';
import Certificate from '../components/Certificate';

export default function Profile() {
  const { user, profile, isAuthenticated, loading, signOut, updateDisplayName } = useAuth();
  const { t } = useLanguage();
  const { completedLessons, examResults, syncing } = useProgress();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');

  if (loading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const badges = getBadges(completedLessons);
  const earnedCount = badges.filter(b => b.earned).length;
  const displayName = profile?.display_name || user?.user_metadata?.display_name || user?.email?.split('@')[0] || '';

  // Check if any exam passed (60%+)
  const hasPassedExam = Object.values(examResults).some(r => r.score / r.total >= 0.6);

  // Best exam score percentage
  const bestExamScore = Object.values(examResults).length > 0
    ? Math.max(...Object.values(examResults).map(r => Math.round(r.score / r.total * 100)))
    : null;

  const examCount = Object.keys(examResults).length;

  const handleSaveName = async () => {
    if (nameInput.trim()) {
      await updateDisplayName(nameInput.trim());
    }
    setEditingName(false);
  };

  return (
    <div className="profile-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('profile')}</h1>
        </div>
      </section>

      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            {profile?.avatar_url ? (
              <img src={profile.avatar_url} alt="" className="profile-avatar-img" />
            ) : (
              <div className="profile-avatar-placeholder">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="profile-info">
            <div className="profile-name-row">
              {editingName ? (
                <div className="profile-name-edit">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    autoFocus
                  />
                  <button onClick={handleSaveName} className="profile-name-save">{t('saveName')}</button>
                  <button onClick={() => setEditingName(false)} className="profile-name-cancel">{t('cancelEdit')}</button>
                </div>
              ) : (
                <>
                  <h2 className="profile-display-name">{displayName}</h2>
                  <button
                    className="profile-edit-btn"
                    onClick={() => { setNameInput(displayName); setEditingName(true); }}
                  >
                    {t('editName')}
                  </button>
                </>
              )}
            </div>
            <p className="profile-email">{user?.email}</p>
            <div className="profile-stats">
              <span className="profile-stat">
                {t('completedLessons')}: <strong>{completedLessons.length}/{lessons.length}</strong>
              </span>
              <span className="profile-stat">
                {t('examsTaken')}: <strong>{examCount}/{exams.length}</strong>
              </span>
              <span className="profile-stat">
                {t('badgesTitle')}: <strong>{earnedCount}/{badges.length}</strong>
              </span>
              {syncing && <span className="profile-syncing">{t('syncing')}</span>}
            </div>
          </div>
          <button className="profile-logout-btn" onClick={signOut}>
            {t('logout')}
          </button>
        </div>

        {/* Badges Section */}
        <div className="profile-section">
          <h3 className="profile-section-title">{t('badgesTitle')}</h3>
          <div className="badges-grid">
            {badges.map(badge => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </div>

        {/* Certificate Section */}
        <div className="profile-section">
          <h3 className="profile-section-title">{t('certificateTitle')}</h3>
          <p className="profile-section-desc">{t('certificateSubtitle')}</p>
          {hasPassedExam ? (
            <Certificate
              displayName={displayName}
              completedLessons={completedLessons.length}
              totalLessons={lessons.length}
              bestExamScore={bestExamScore}
            />
          ) : (
            <div className="certificate-locked">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <p>{t('certificateLocked')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
