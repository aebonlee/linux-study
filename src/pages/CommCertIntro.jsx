import { useLanguage } from '../contexts/LanguageContext';
import { certIntro } from '../config/progressData';
import useAOS from '../hooks/useAOS';

export default function CommCertIntro() {
  useAOS();
  const { t, language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('certIntroTitle')}</h1>
          <p>{t('certIntroDesc')}</p>
        </div>
      </section>

      <div className="container">
        <div className="cert-intro-section" data-aos="fade-up">
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
      </div>
    </div>
  );
}
