import { useLanguage } from '../contexts/LanguageContext';
import { boardPosts } from '../config/progressData';
import useAOS from '../hooks/useAOS';

export default function CommBoard() {
  useAOS();
  const { t, language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('boardTitle')}</h1>
          <p>{isKo ? '학습 관련 질문과 정보를 나눠보세요' : 'Share questions and tips about learning'}</p>
        </div>
      </section>

      <div className="container">
        <div className="community-section" data-aos="fade-up" style={{ borderBottom: 'none' }}>
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
      </div>
    </div>
  );
}
