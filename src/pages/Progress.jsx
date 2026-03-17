import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { lessons, exams, categories, getLessonsByCategory } from '../config/studyItems';
import { certIntro, announcements, boardPosts, galleryItems } from '../config/progressData';
import { fetchSiteStats } from '../hooks/usePageTracker';
import StampGrid from '../components/StampGrid';

const PAGE_LABELS = {
  '/intro/what-is-linux': '리눅스란?',
  '/intro/history': '리눅스의 역사',
  '/intro/distributions': '리눅스 배포판',
  '/grade2/overview': '2급 시험 개요',
  '/grade2/part1-ch1': '2급 1차-Ch1',
  '/grade2/part1-ch2': '2급 1차-Ch2',
  '/grade2/part1-ch3': '2급 1차-Ch3',
  '/grade2/part2-ch1': '2급 2차-Ch1',
  '/grade2/part2-ch2': '2급 2차-Ch2',
  '/grade2/part2-ch3': '2급 2차-Ch3',
  '/grade1/overview': '1급 시험 개요',
  '/grade1/part1-ch1': '1급 1차-Ch1',
  '/grade1/part1-ch2': '1급 1차-Ch2',
  '/grade1/part2-ch1': '1급 2차-Ch1',
  '/grade1/part2-ch2': '1급 2차-Ch2',
  '/grade1/part3-ch1': '1급 실기-Ch1',
  '/grade1/part3-ch2': '1급 실기-Ch2',
  '/commands/basic': '기본 명령어',
  '/commands/file': '파일 관리',
  '/commands/process': '프로세스 관리',
  '/commands/network': '네트워크 명령어',
  '/commands/admin': '시스템 관리',
  '/exam/grade2-round1': '2급 1차 모의고사',
  '/exam/grade2-round2': '2급 2차 모의고사',
  '/exam/grade1-round1': '1급 1차 모의고사',
  '/exam/grade1-round2': '1급 2차 모의고사',
  '/references': '참고자료',
  '/training': '교육신청',
  '/progress': '학습현황',
  '/login': '로그인',
  '/profile': '프로필'
};

export default function Progress() {
  const { t, language } = useLanguage();
  const { getExamResult } = useProgress();
  const [siteStats, setSiteStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [expandedAnnounce, setExpandedAnnounce] = useState(null);

  useEffect(() => {
    fetchSiteStats().then(data => {
      setSiteStats(data);
      setStatsLoading(false);
    });
  }, []);

  const isKo = language === 'ko';
  const maxDaily = siteStats ? Math.max(...siteStats.dailyStats.map(d => d.count), 1) : 1;
  const totalLessons = lessons.length;
  const totalExams = exams.length;
  const totalContent = totalLessons + totalExams;

  // Exam stamp counts
  const completedExams = exams.filter(e => !!getExamResult(e.id)).length;
  const remainingExams = totalExams - completedExams;

  const tagColors = {
    '시험일정': '#ef4444', 'Exam Schedule': '#ef4444',
    '콘텐츠': '#3b82f6', 'Content': '#3b82f6',
    '기능': '#10b981', 'Feature': '#10b981',
  };

  const galleryIcons = {
    folder: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
    ),
    shield: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    cpu: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
    ),
    network: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="17" y="1" width="6" height="6" rx="1"/><rect x="9" y="17" width="6" height="6" rx="1"/><line x1="4" y1="7" x2="4" y2="12"/><line x1="20" y1="7" x2="20" y2="12"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="12" y1="12" x2="12" y2="17"/></svg>
    ),
  };

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('progressTitle')}</h1>
          <p>{isKo ? '사이트 누적 통계와 학습 커리큘럼 현황을 확인하세요' : 'View site statistics and curriculum overview'}</p>
        </div>
      </section>

      <div className="container">

        {/* ══════════ 1. 리눅스 마스터 자격증 소개 ══════════ */}
        <div className="cert-intro-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
            {t('certIntroTitle')}
          </h2>
          <p className="cert-intro-desc">{t('certIntroDesc')}</p>

          <div className="cert-cards">
            {[certIntro.grade2, certIntro.grade1].map(cert => (
              <div key={cert.level} className="cert-card">
                <div className="cert-card-header">
                  <span className="cert-card-level">{isKo ? cert.level : cert.levelEn}</span>
                  <h3 className="cert-card-title">{isKo ? cert.title : cert.titleEn}</h3>
                </div>
                <div className="cert-card-body">
                  <div className="cert-card-info">
                    <span className="cert-info-label">{t('certType')}</span>
                    <span className="cert-info-value">{isKo ? cert.type : cert.typeEn}</span>
                  </div>
                  <div className="cert-card-info">
                    <span className="cert-info-label">{t('certOrganizer')}</span>
                    <span className="cert-info-value">{isKo ? cert.organizer : cert.organizerEn}</span>
                  </div>
                  {cert.rounds.map((round, i) => (
                    <div key={i} className="cert-round-block">
                      <div className="cert-round-name">{isKo ? round.name : round.nameEn}</div>
                      <div className="cert-card-info">
                        <span className="cert-info-label">{t('certFormat')}</span>
                        <span className="cert-info-value">{isKo ? round.format : round.formatEn}</span>
                      </div>
                      <div className="cert-card-info">
                        <span className="cert-info-label">{t('certPassing')}</span>
                        <span className="cert-info-value">{isKo ? round.passing : round.passingEn}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ 2. 사이트 방문 통계 (기존) ══════════ */}
        <div className="visitor-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {isKo ? '사이트 방문 통계' : 'Site Visitor Statistics'}
          </h2>

          {statsLoading ? (
            <div className="visitor-loading">
              <div className="loading-spinner" />
              <p>{isKo ? '통계 불러오는 중...' : 'Loading statistics...'}</p>
            </div>
          ) : siteStats ? (
            <>
              <div className="visitor-stats-grid">
                <div className="visitor-stat-card">
                  <div className="visitor-stat-value">{siteStats.todayVisitors}</div>
                  <div className="visitor-stat-label">{isKo ? '오늘 방문자' : 'Today'}</div>
                </div>
                <div className="visitor-stat-card">
                  <div className="visitor-stat-value">{siteStats.totalVisitors}</div>
                  <div className="visitor-stat-label">{isKo ? '총 방문자' : 'Total Visitors'}</div>
                </div>
                <div className="visitor-stat-card">
                  <div className="visitor-stat-value">{siteStats.totalPageViews.toLocaleString()}</div>
                  <div className="visitor-stat-label">{isKo ? '총 페이지뷰' : 'Total Page Views'}</div>
                </div>
              </div>

              <div className="visitor-chart-section">
                <h3 className="visitor-chart-title">{isKo ? '최근 7일 방문 추이' : 'Last 7 Days'}</h3>
                <div className="visitor-chart">
                  {siteStats.dailyStats.map((d, i) => (
                    <div key={i} className="visitor-chart-bar-wrapper">
                      <div className="visitor-chart-count">{d.count}</div>
                      <div className="visitor-chart-bar" style={{ height: `${Math.max((d.count / maxDaily) * 120, 4)}px` }} />
                      <div className="visitor-chart-label">{d.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {siteStats.popularPages.length > 0 && (
                <div className="visitor-popular">
                  <h3 className="visitor-chart-title">{isKo ? '인기 페이지 (최근 7일)' : 'Popular Pages (7 days)'}</h3>
                  <div className="visitor-popular-list">
                    {siteStats.popularPages.map((p, i) => (
                      <div key={i} className="visitor-popular-item">
                        <span className="visitor-popular-rank">{i + 1}</span>
                        <span className="visitor-popular-path">{PAGE_LABELS[p.path] || p.path}</span>
                        <span className="visitor-popular-count">{p.count}{isKo ? '회' : ' views'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="visitor-empty">
              <p>{isKo ? '방문 통계를 불러올 수 없습니다.' : 'Could not load visitor statistics.'}</p>
            </div>
          )}
        </div>

        {/* ══════════ 3. 공지사항 ══════════ */}
        <div className="announce-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            {t('announceTitle')}
          </h2>

          <div className="announce-list">
            {announcements.map(item => {
              const isOpen = expandedAnnounce === item.id;
              const tag = isKo ? item.tag : item.tagEn;
              const tagColor = tagColors[tag] || '#6b7280';

              return (
                <div key={item.id} className={`announce-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="announce-item-header"
                    onClick={() => setExpandedAnnounce(isOpen ? null : item.id)}
                  >
                    <span className="announce-tag" style={{ background: tagColor }}>{tag}</span>
                    <span className="announce-title-text">{isKo ? item.title : item.titleEn}</span>
                    <span className="announce-date">{item.date}</span>
                    <svg className={`announce-chevron ${isOpen ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {isOpen && (
                    <div className="announce-item-body">
                      <p>{isKo ? item.content : item.contentEn}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════ 4. 학습 콘텐츠 현황 (기존) ══════════ */}
        <div className="my-progress-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            {isKo ? '학습 콘텐츠 현황' : 'Curriculum Overview'}
          </h2>

          <div className="progress-stats">
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <div className="progress-stat-value">{totalContent}</div>
              <div className="progress-stat-label">{isKo ? '전체 콘텐츠' : 'Total Content'}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div className="progress-stat-value">{totalLessons}</div>
              <div className="progress-stat-label">{isKo ? '학습 레슨' : 'Lessons'}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <div className="progress-stat-value">{totalExams}</div>
              <div className="progress-stat-label">{isKo ? '모의고사' : 'Mock Exams'}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              </div>
              <div className="progress-stat-value">{categories.length}</div>
              <div className="progress-stat-label">{isKo ? '카테고리' : 'Categories'}</div>
            </div>
          </div>

          {categories.filter(c => c.id !== 'exam').map(cat => {
            const catLessons = getLessonsByCategory(cat.id);
            if (catLessons.length === 0) return null;

            return (
              <div key={cat.id} className="curriculum-category-section" data-aos="fade-up">
                <div className="curriculum-category-header">
                  <h3 className="curriculum-category-title">{t(cat.labelKey)}</h3>
                  <span className="curriculum-category-count">
                    {catLessons.length}{isKo ? '개 레슨' : ' lessons'}
                  </span>
                </div>
                <div className="curriculum-lesson-list">
                  {catLessons.map(lesson => (
                    <Link key={lesson.id} to={lesson.path} className="curriculum-lesson-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      <span>{isKo ? lesson.title : lesson.titleEn}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="curriculum-category-section" data-aos="fade-up">
            <div className="curriculum-category-header">
              <h3 className="curriculum-category-title">{t('site.nav.exam')}</h3>
              <span className="curriculum-category-count">
                {totalExams}{isKo ? '개 시험' : ' exams'}
              </span>
            </div>
            <div className="curriculum-lesson-list">
              {exams.map(exam => (
                <Link key={exam.id} to={exam.path} className="curriculum-lesson-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                  <span>{isKo ? exam.title : exam.titleEn}</span>
                  <span className="curriculum-lesson-meta">{exam.totalQuestions}{isKo ? '문항' : ' questions'}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ 5. 모의고사 도장깨기 ══════════ */}
        <div className="exam-stamp-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            {t('examStampTitle')}
          </h2>
          <p className="exam-stamp-desc">{t('examStampDesc')}</p>

          <div className="exam-stamp-counters">
            <div className="exam-stamp-counter done">
              <span className="exam-stamp-counter-value">{completedExams}</span>
              <span className="exam-stamp-counter-label">{t('examStampCompleted')}</span>
            </div>
            <div className="exam-stamp-counter remaining">
              <span className="exam-stamp-counter-value">{remainingExams}</span>
              <span className="exam-stamp-counter-label">{t('examStampRemaining')}</span>
            </div>
          </div>

          <StampGrid items={exams} type="exam" />
        </div>

        {/* ══════════ 6. 게시판 ══════════ */}
        <div className="community-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            {t('boardTitle')}
          </h2>

          <div className="coming-soon-banner">
            <span className="coming-soon-badge">{t('comingSoonBadge')}</span>
            <span>{t('boardComingSoon')}</span>
          </div>

          <div className="board-list">
            {boardPosts.map(post => (
              <div key={post.id} className="board-item">
                <span className="board-category">{isKo ? post.category : post.categoryEn}</span>
                <span className="board-title-text">{isKo ? post.title : post.titleEn}</span>
                <div className="board-meta">
                  <span className="board-author">{post.author}</span>
                  <span className="board-date">{post.date}</span>
                  <span className="board-replies">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    {post.replies}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ 7. 갤러리 ══════════ */}
        <div className="gallery-prog-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            {t('galleryTitle')}
          </h2>

          <div className="coming-soon-banner">
            <span className="coming-soon-badge">{t('comingSoonBadge')}</span>
            <span>{t('galleryComingSoon')}</span>
          </div>

          <div className="gallery-prog-grid">
            {galleryItems.map(item => (
              <div key={item.id} className="gallery-prog-card">
                <div className="gallery-prog-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  {galleryIcons[item.icon]}
                </div>
                <h4 className="gallery-prog-title">{isKo ? item.title : item.titleEn}</h4>
                <p className="gallery-prog-desc">{isKo ? item.description : item.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
