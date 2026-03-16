import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { lessons, exams, categories, getLessonsByCategory } from '../config/studyItems';
import StampGrid from '../components/StampGrid';

export default function Progress() {
  const { t, language } = useLanguage();
  const { getCompletedCount, completedLessons, examResults } = useProgress();

  const totalLessons = lessons.length;
  const completedCount = completedLessons.length;
  const remainingCount = totalLessons - completedCount;
  const completionRate = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const examsTaken = Object.keys(examResults).length;

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('progressTitle')}</h1>
          <p>{t('progressSubtitle')}</p>
        </div>
      </section>

      <div className="container">
        {/* Stats Cards */}
        <div className="progress-stats" data-aos="fade-up" data-aos-delay="200">
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
            <div className="progress-stat-value">{examsTaken}/{exams.length}</div>
            <div className="progress-stat-label">{t('examsTaken')}</div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="progress-bar-section" data-aos="fade-up" data-aos-delay="300">
          <div className="progress-bar-header">
            <span className="progress-bar-title">{t('overallProgress')}</span>
            <span className="progress-bar-percent">{completionRate}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${completionRate}%` }} />
          </div>
        </div>

        {/* Category Progress */}
        <div className="category-progress" data-aos="fade-up" data-aos-delay="400">
          {categories.filter(c => c.id !== 'exam').map(cat => {
            const catLessons = getLessonsByCategory(cat.id);
            const catCompleted = getCompletedCount(catLessons.map(l => l.id));
            const catTotal = catLessons.length;
            const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;

            return (
              <div key={cat.id} className="category-progress-card">
                <div className="category-progress-header">
                  <span className="category-progress-name">
                    {t(cat.labelKey)}
                  </span>
                  <span className="category-progress-count">
                    {catCompleted}/{catTotal}
                  </span>
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
            <div key={cat.id} className="stamp-section" data-aos="fade-up">
              <h3 className="stamp-section-title">
                {t(cat.labelKey)} {t('stampCollection')}
              </h3>
              <StampGrid items={catLessons} type="lesson" />
            </div>
          );
        })}

        {/* Exam Stamp Grid */}
        <div className="stamp-section" data-aos="fade-up">
          <h3 className="stamp-section-title">
            {t('site.nav.exam')} {t('stampCollection')}
          </h3>
          <StampGrid items={exams} type="exam" />
        </div>
      </div>
    </div>
  );
}
