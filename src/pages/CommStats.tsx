import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { lessons, exams, categories, getLessonsByCategory } from '../config/studyItems';
import { fetchSiteStats } from '../hooks/usePageTracker';
import useAOS from '../hooks/useAOS';

const PAGE_LABELS: Record<string, string> = {
  '/': '홈',
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
  '/progress': '학습 현황',
  '/login': '로그인',
  '/profile': '프로필',
  '/community': '커뮤니티',
  '/community/cert-intro': '자격증 소개',
  '/community/stats': '학습 현황',
  '/community/announcements': '공지사항',
  '/community/stamps': '모의고사 도장깨기',
  '/community/board': '게시판',
  '/community/gallery': '갤러리',
};

interface SiteStats {
  todayVisitors: number;
  totalVisitors: number;
  totalPageViews: number;
  popularPages: { path: string; count: number }[];
  dailyStats: { date: string; count: number }[];
}

export default function CommStats() {
  useAOS();
  const { t, language } = useLanguage();
  const [siteStats, setSiteStats] = useState<SiteStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatsLoading(false);
    }, 8000);

    fetchSiteStats()
      .then(data => {
        clearTimeout(timeout);
        setSiteStats(data as SiteStats | null);
        setStatsLoading(false);
      })
      .catch(() => {
        clearTimeout(timeout);
        setStatsLoading(false);
      });

    return () => clearTimeout(timeout);
  }, []);

  const isKo = language === 'ko';
  const maxDaily = siteStats ? Math.max(...siteStats.dailyStats.map(d => d.count), 1) : 1;
  const totalLessons = lessons.length;
  const totalExams = exams.length;
  const totalContent = totalLessons + totalExams;

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{isKo ? '학습 현황' : 'Learning Stats'}</h1>
          <p>{isKo ? '사이트 방문 통계와 학습 커리큘럼 현황을 확인하세요' : 'View visitor statistics and curriculum overview'}</p>
        </div>
      </section>

      <div className="container">
        {/* 사이트 방문 통계 */}
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

        {/* 학습 콘텐츠 현황 */}
        <div className="my-progress-section" data-aos="fade-up">
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            {isKo ? '학습 콘텐츠 현황' : 'Curriculum Overview'}
          </h2>

          <div className="progress-stats">
            <div className="progress-stat-card">
              <div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
              <div className="progress-stat-value">{totalContent}</div>
              <div className="progress-stat-label">{isKo ? '전체 콘텐츠' : 'Total Content'}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
              <div className="progress-stat-value">{totalLessons}</div>
              <div className="progress-stat-label">{isKo ? '학습 레슨' : 'Lessons'}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
              <div className="progress-stat-value">{totalExams}</div>
              <div className="progress-stat-label">{isKo ? '모의고사' : 'Mock Exams'}</div>
            </div>
            <div className="progress-stat-card">
              <div className="progress-stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></div>
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
                  <span className="curriculum-category-count">{catLessons.length}{isKo ? '개 레슨' : ' lessons'}</span>
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
              <span className="curriculum-category-count">{totalExams}{isKo ? '개 시험' : ' exams'}</span>
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
      </div>
    </div>
  );
}
