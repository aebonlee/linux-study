import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const NotFound = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="404 - 페이지를 찾을 수 없습니다 - Linux Study"
        description="요청하신 페이지를 찾을 수 없습니다."
      />

      <div className="not-found-page">
        <div className="not-found-content" data-aos="fade-up">
          <div className="not-found-code">404</div>
          <h1 className="not-found-title">페이지를 찾을 수 없습니다</h1>
          <p className="not-found-desc">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
            URL을 확인하시거나, 아래 링크를 통해 이동해 주세요.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="not-found-btn primary">홈으로</Link>
            <Link to="/grade2/overview" className="not-found-btn secondary">2급 학습 시작</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
