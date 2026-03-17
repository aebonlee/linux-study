import { useLanguage } from '../contexts/LanguageContext';
import { galleryItems } from '../config/progressData';
import useAOS from '../hooks/useAOS';

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

export default function CommGallery() {
  useAOS();
  const { t, language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('galleryTitle')}</h1>
          <p>{isKo ? '리눅스 학습에 도움이 되는 인포그래픽 모음' : 'Infographic collection for Linux learning'}</p>
        </div>
      </section>

      <div className="container">
        <div className="gallery-prog-section" data-aos="fade-up">
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
