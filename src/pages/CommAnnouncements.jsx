import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { announcements } from '../config/progressData';
import useAOS from '../hooks/useAOS';

export default function CommAnnouncements() {
  useAOS();
  const { t, language } = useLanguage();
  const isKo = language === 'ko';
  const [expandedId, setExpandedId] = useState(null);

  const tagColors = {
    '시험일정': '#ef4444', 'Exam Schedule': '#ef4444',
    '콘텐츠': '#3b82f6', 'Content': '#3b82f6',
    '기능': '#10b981', 'Feature': '#10b981',
  };

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('announceTitle')}</h1>
          <p>{isKo ? '시험일정, 사이트 업데이트, 학습 관련 공지를 확인하세요' : 'Check exam schedules, site updates, and learning announcements'}</p>
        </div>
      </section>

      <div className="container">
        <div className="announce-section" data-aos="fade-up" style={{ borderBottom: 'none' }}>
          <div className="announce-list">
            {announcements.map(item => {
              const isOpen = expandedId === item.id;
              const tag = isKo ? item.tag : item.tagEn;
              const tagColor = tagColors[tag] || '#6b7280';

              return (
                <div key={item.id} className={`announce-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="announce-item-header"
                    onClick={() => setExpandedId(isOpen ? null : item.id)}
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
      </div>
    </div>
  );
}
