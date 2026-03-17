import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { getBadges } from '../config/badges';
import { lessons, exams, categories, getLessonsByCategory } from '../config/studyItems';
import BadgeCard from '../components/BadgeCard';
import Certificate from '../components/Certificate';
import StampGrid from '../components/StampGrid';

export default function Profile() {
  const { user, profile, isAuthenticated, loading, signOut, updateDisplayName } = useAuth();
  const { t } = useLanguage();
  const { completedLessons, examResults, syncing, getCompletedCount } = useProgress();
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
  const totalLessons = lessons.length;
  const completedCount = completedLessons.length;
  const remainingCount = totalLessons - completedCount;
  const completionRate = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

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

        {/* ── 나의 학습 진도 ── */}
        <div className="profile-section">
          <h3 className="profile-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: '-3px', marginRight: '6px' }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            {t('myProgress')}
          </h3>

          {/* Stats Cards */}
          <div className="progress-stats">
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="progress-stat-value">{completedCount}</div>
              <div className="progress-stat-label">{t('totalCompleted')}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div className="progress-stat-value">{remainingCount}</div>
              <div className="progress-stat-label">{t('totalRemaining')}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <div className="progress-stat-value">{completionRate}%</div>
              <div className="progress-stat-label">{t('completionRate')}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <div className="progress-stat-value">{examCount}/{exams.length}</div>
              <div className="progress-stat-label">{t('examsTaken')}</div>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="progress-bar-section">
            <div className="progress-bar-header">
              <span className="progress-bar-title">{t('overallProgress')}</span>
              <span className="progress-bar-percent">{completionRate}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${completionRate}%` }} />
            </div>
          </div>

          {/* Category Progress */}
          <div className="category-progress">
            {categories.filter(c => c.id !== 'exam').map(cat => {
              const catLessons = getLessonsByCategory(cat.id);
              const catCompleted = getCompletedCount(catLessons.map(l => l.id));
              const catTotal = catLessons.length;
              const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;

              return (
                <div key={cat.id} className="category-progress-card">
                  <div className="category-progress-header">
                    <span className="category-progress-name">{t(cat.labelKey)}</span>
                    <span className="category-progress-count">{catCompleted}/{catTotal}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${catPercent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lesson Stamp Grids per category */}
          {categories.filter(c => c.id !== 'exam').map(cat => {
            const catLessons = getLessonsByCategory(cat.id);
            if (catLessons.length === 0) return null;

            return (
              <div key={cat.id} className="stamp-section">
                <h3 className="stamp-section-title">
                  {t(cat.labelKey)} {t('stampCollection')}
                </h3>
                <StampGrid items={catLessons} type="lesson" />
              </div>
            );
          })}

          {/* Exam Stamp Grid */}
          <div className="stamp-section">
            <h3 className="stamp-section-title">
              {t('site.nav.exam')} {t('stampCollection')}
            </h3>
            <StampGrid items={exams} type="exam" />
          </div>
        </div>
      </div>
    </div>
  );
}
