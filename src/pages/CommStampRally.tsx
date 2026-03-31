import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { exams } from '../config/studyItems';
import useAOS from '../hooks/useAOS';
import StampGrid from '../components/StampGrid';

export default function CommStampRally() {
  useAOS();
  const { t, language } = useLanguage();
  const { getExamResult } = useProgress();
  const isKo = language === 'ko';

  const completedExams = exams.filter(e => !!getExamResult(e.id)).length;
  const remainingExams = exams.length - completedExams;

  return (
    <div className="progress-page">
      <section className="page-header">
        <div className="container">
          <h1>{t('examStampTitle')}</h1>
          <p>{t('examStampDesc')}</p>
        </div>
      </section>

      <div className="container">
        <div className="exam-stamp-section" data-aos="fade-up" style={{ borderBottom: 'none' }}>
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
      </div>
    </div>
  );
}
