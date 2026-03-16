import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  useAOS();
  const { t } = useLanguage();

  const grade2Curriculum = [
    {
      title: '2급 시험 개요',
      desc: '시험 구성, 합격 기준, 출제 범위, 접수 방법 등 2급 시험의 전반적인 안내',
      path: '/grade2/overview',
      icon: '📋'
    },
    {
      title: '1차 - 리눅스 운영 및 관리',
      desc: '리눅스의 이해, 설치, 기본 명령어, 사용자 관리, 파일 시스템 관리',
      path: '/grade2/part1-ch1',
      icon: '🖥️'
    },
    {
      title: '1차 - 리눅스 활용',
      desc: 'X 윈도, 인터넷 활용, 응용 프로그램, 프로세스 관리, 셸 스크립트',
      path: '/grade2/part1-ch2',
      icon: '⚙️'
    },
    {
      title: '1차 - 리눅스 기초 명령어',
      desc: '파일 관련 명령어, 텍스트 처리, 압축/아카이브, 네트워크 기본',
      path: '/grade2/part1-ch3',
      icon: '💻'
    },
    {
      title: '2차 - 리눅스 운영 및 관리',
      desc: '부팅 과정 상세, 패키지 관리, 로그 관리, 작업 스케줄링',
      path: '/grade2/part2-ch1',
      icon: '🔧'
    },
    {
      title: '2차 - 리눅스 활용',
      desc: '네트워크 설정, 방화벽 기초, 서비스 관리, 프린터 관리',
      path: '/grade2/part2-ch2',
      icon: '🌐'
    },
    {
      title: '2차 - 리눅스 기초 명령어',
      desc: '고급 파일 관리, 디스크 관리, 권한 관리 심화 (ACL, setuid 등)',
      path: '/grade2/part2-ch3',
      icon: '🔑'
    }
  ];

  const grade1Curriculum = [
    {
      title: '1급 시험 개요',
      desc: '1급 시험 구성, 난이도 안내, 출제 범위, 합격 전략',
      path: '/grade1/overview',
      icon: '📋'
    },
    {
      title: '1차 - 리눅스 실무의 이해',
      desc: '커널 상세, 부팅 심화, 파일 시스템 심화, 가상화 기술',
      path: '/grade1/part1-ch1',
      icon: '🏗️'
    },
    {
      title: '1차 - 리눅스 시스템 관리',
      desc: 'PAM/LDAP, LVM/RAID, 커널 파라미터 튜닝, 시스템 모니터링',
      path: '/grade1/part1-ch2',
      icon: '📊'
    },
    {
      title: '2차 - 네트워크 및 서비스 관리',
      desc: 'TCP/IP 심화, 서버 구축, 메일 서버, NFS/Samba',
      path: '/grade1/part2-ch1',
      icon: '🌍'
    },
    {
      title: '2차 - 보안 및 시스템 최적화',
      desc: 'SELinux, 방화벽 심화, SSH 보안, 로그 분석, 성능 최적화',
      path: '/grade1/part2-ch2',
      icon: '🛡️'
    },
    {
      title: '실기 - 서버 구축 실무',
      desc: 'LAMP/LEMP 스택, SSL/TLS, 웹서버+DB 서버 구축 시나리오',
      path: '/grade1/part3-ch1',
      icon: '🏢'
    },
    {
      title: '실기 - 네트워크 보안 실무',
      desc: 'VPN, IDS/IPS, 백업 및 복구, 고난도 실무 시나리오',
      path: '/grade1/part3-ch2',
      icon: '🔐'
    }
  ];

  const commandCards = [
    { title: '기본 명령어', desc: 'pwd, ls, cd, echo, man 등 필수 명령어', path: '/commands/basic', icon: '📝' },
    { title: '파일/디렉터리 관리', desc: 'cp, mv, rm, mkdir, find, cat, head, tail 등', path: '/commands/file', icon: '📁' },
    { title: '프로세스 관리', desc: 'ps, top, kill, nice, nohup, bg, fg, jobs 등', path: '/commands/process', icon: '⚡' },
    { title: '네트워크 명령어', desc: 'ifconfig, ip, ping, netstat, ss, curl, wget 등', path: '/commands/network', icon: '🔗' },
    { title: '시스템 관리', desc: 'systemctl, journalctl, useradd, chmod, mount 등', path: '/commands/admin', icon: '🛠️' }
  ];

  return (
    <>
      <SEOHead
        title="Linux Study - 리눅스 마스터 자격증 학습"
        description="리눅스 마스터 2급/1급 자격증 취득을 위한 체계적인 학습 플랫폼"
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              Linux <span className="hero-highlight">Master</span>
            </h1>
            <p className="hero-description">{t('site.home.heroDesc')}</p>
            <div className="hero-actions">
              <Link to="/grade2/overview" className="btn btn-primary">
                {t('site.home.startLearning')}
              </Link>
              <Link to="/references" className="btn btn-secondary">
                {t('site.home.goToRef')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Linux Master Certification */}
      <section className="section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">{t('site.home.whatIsLinux')}</h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-secondary)', textAlign: 'center' }}>
              {t('site.home.linuxDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="section" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">{t('site.home.learningGoals')}</h2>
          </div>
          <div className="home-goals-grid" data-aos="fade-up" data-aos-delay="100">
            {[t('site.home.goal1'), t('site.home.goal2'), t('site.home.goal3'), t('site.home.goal4')].map((goal, i) => (
              <div key={i} className="home-goal-card" data-aos="fade-up" data-aos-delay={150 + i * 50}>
                <div className="home-goal-number">{i + 1}</div>
                <p className="home-goal-text">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade 2 Curriculum */}
      <section className="section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">리눅스 마스터 2급</h2>
            <p className="section-subtitle">기초부터 중급까지, 리눅스 운영체제의 핵심 개념과 실무 능력을 체계적으로 학습합니다.</p>
          </div>
          <div className="home-curriculum-grid">
            {grade2Curriculum.map((item, i) => (
              <Link to={item.path} key={i} className="home-curriculum-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <span className="home-curriculum-icon">{item.icon}</span>
                <h3 className="home-curriculum-title">{item.title}</h3>
                <p className="home-curriculum-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grade 1 Curriculum */}
      <section className="section" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">리눅스 마스터 1급</h2>
            <p className="section-subtitle">고급 실무 수준의 리눅스 시스템 관리, 네트워크 서비스, 보안 역량을 갖춥니다.</p>
          </div>
          <div className="home-curriculum-grid">
            {grade1Curriculum.map((item, i) => (
              <Link to={item.path} key={i} className="home-curriculum-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <span className="home-curriculum-icon">{item.icon}</span>
                <h3 className="home-curriculum-title">{item.title}</h3>
                <p className="home-curriculum-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Command Reference */}
      <section className="section" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">명령어 사전</h2>
            <p className="section-subtitle">리눅스 핵심 명령어를 카테고리별로 정리하여 빠르게 참고할 수 있습니다.</p>
          </div>
          <div className="home-commands-grid">
            {commandCards.map((item, i) => (
              <Link to={item.path} key={i} className="home-command-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <span className="home-command-icon">{item.icon}</span>
                <h3 className="home-command-title">{item.title}</h3>
                <p className="home-command-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Exam CTA */}
      <section className="section" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-light-gray)' }}>
        <div className="container text-center" data-aos="fade-up">
          <h2 className="section-title">모의고사로 실력을 점검하세요</h2>
          <p className="section-subtitle mb-4">실전과 유사한 문제로 시험 대비 실력을 확인할 수 있습니다.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/exam/grade2-round1" className="btn btn-primary">2급 1차 모의고사</Link>
            <Link to="/exam/grade2-round2" className="btn btn-secondary">2급 2차 모의고사</Link>
            <Link to="/exam/grade1-round1" className="btn btn-primary">1급 1차 모의고사</Link>
            <Link to="/exam/grade1-round2" className="btn btn-secondary">1급 2차 모의고사</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
