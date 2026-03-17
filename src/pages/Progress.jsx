import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchSiteStats } from '../hooks/usePageTracker';

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
  const [siteStats, setSiteStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    fetchSiteStats().then(data => {
      setSiteStats(data);
      setStatsLoading(false);
    });
  }, []);

  const maxDaily = siteStats ? Math.max(...siteStats.dailyStats.map(d => d.count), 1) : 1;

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('progressTitle')}</h1>
          <p>{t('progressSubtitle')}</p>
        </div>
      </section>

      <div className="container">

        {/* ── 사이트 방문 통계 ── */}
        <div className="visitor-section" data-aos="fade-up" style={{ borderBottom: 'none', paddingBottom: 0 }}>
          <h2 className="visitor-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            {language === 'ko' ? '사이트 방문 통계' : 'Site Visitor Statistics'}
          </h2>

          {statsLoading ? (
            <div className="visitor-loading">
              <div className="loading-spinner" />
              <p>{language === 'ko' ? '통계 불러오는 중...' : 'Loading statistics...'}</p>
            </div>
          ) : siteStats ? (
            <>
              <div className="visitor-stats-grid">
                <div className="visitor-stat-card">
                  <div className="visitor-stat-value">{siteStats.todayVisitors}</div>
                  <div className="visitor-stat-label">{language === 'ko' ? '오늘 방문자' : 'Today'}</div>
                </div>
                <div className="visitor-stat-card">
                  <div className="visitor-stat-value">{siteStats.totalVisitors}</div>
                  <div className="visitor-stat-label">{language === 'ko' ? '총 방문자' : 'Total Visitors'}</div>
                </div>
                <div className="visitor-stat-card">
                  <div className="visitor-stat-value">{siteStats.totalPageViews.toLocaleString()}</div>
                  <div className="visitor-stat-label">{language === 'ko' ? '총 페이지뷰' : 'Total Page Views'}</div>
                </div>
              </div>

              {/* 최근 7일 차트 */}
              <div className="visitor-chart-section">
                <h3 className="visitor-chart-title">{language === 'ko' ? '최근 7일 방문 추이' : 'Last 7 Days'}</h3>
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

              {/* 인기 페이지 */}
              {siteStats.popularPages.length > 0 && (
                <div className="visitor-popular">
                  <h3 className="visitor-chart-title">{language === 'ko' ? '인기 페이지 (최근 7일)' : 'Popular Pages (7 days)'}</h3>
                  <div className="visitor-popular-list">
                    {siteStats.popularPages.map((p, i) => (
                      <div key={i} className="visitor-popular-item">
                        <span className="visitor-popular-rank">{i + 1}</span>
                        <span className="visitor-popular-path">{PAGE_LABELS[p.path] || p.path}</span>
                        <span className="visitor-popular-count">{p.count}{language === 'ko' ? '회' : ' views'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="visitor-empty">
              <p>{language === 'ko' ? '방문 통계를 불러올 수 없습니다.' : 'Could not load visitor statistics.'}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
