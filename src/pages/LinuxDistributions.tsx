import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const LinuxDistributions = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="리눅스 배포판 - Linux Study"
        description="Ubuntu, CentOS, Fedora, Debian 등 주요 리눅스 배포판의 특징과 비교를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">리눅스 배포판</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            다양한 리눅스 배포판의 특징을 비교하고, 목적에 맞는 배포판을 선택하는 방법을 학습합니다.
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* 배포판이란 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>리눅스 배포판이란?</h2>
          <p>
            리눅스 배포판(Distribution, 줄여서 Distro)은 리눅스 커널에 GNU 소프트웨어, 패키지 관리 시스템,
            데스크톱 환경, 응용 프로그램 등을 결합하여 하나의 완성된 운영체제로 만든 것입니다.
          </p>
          <p>
            수백 개의 배포판이 존재하지만, 대부분은 몇 가지 주요 계열에서 파생되었습니다.
          </p>

          <h3>주요 배포판 계열</h3>
          <ul>
            <li><strong>Debian 계열:</strong> dpkg/apt 패키지 관리 - Debian, Ubuntu, Linux Mint, Kali Linux</li>
            <li><strong>Red Hat 계열:</strong> rpm/yum(dnf) 패키지 관리 - RHEL, CentOS, Fedora, Rocky Linux, AlmaLinux</li>
            <li><strong>SUSE 계열:</strong> rpm/zypper 패키지 관리 - openSUSE, SUSE Linux Enterprise</li>
            <li><strong>Arch 계열:</strong> pacman 패키지 관리 - Arch Linux, Manjaro</li>
            <li><strong>Slackware 계열:</strong> 가장 오래된 배포판 계열 중 하나</li>
          </ul>

          <div className="callout-box tip">
            <strong>시험 포인트:</strong> 리눅스 마스터 시험에서는 배포판 계열과 패키지 관리 도구의 관계를
            묻는 문제가 자주 출제됩니다. Debian 계열은 dpkg/apt, Red Hat 계열은 rpm/yum(dnf)를 기억하세요.
          </div>
        </section>

        {/* 주요 배포판 상세 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>주요 배포판 상세</h2>

          <h3>Ubuntu</h3>
          <p>
            Canonical사가 개발하며, Debian을 기반으로 합니다. 사용 편의성에 중점을 두어 리눅스 입문자에게 가장 인기 있습니다.
            6개월마다 일반 릴리즈, 2년마다 LTS(Long Term Support) 버전을 출시합니다.
          </p>
          <div className="code-block">
            <div className="code-header">Ubuntu 버전 확인</div>
            <pre>{`$ lsb_release -a
Distributor ID: Ubuntu
Description:    Ubuntu 22.04.3 LTS
Release:        22.04
Codename:       jammy

$ cat /etc/os-release
NAME="Ubuntu"
VERSION="22.04.3 LTS (Jammy Jellyfish)"
ID=ubuntu
ID_LIKE=debian`}</pre>
          </div>

          <h3>CentOS / Rocky Linux / AlmaLinux</h3>
          <p>
            CentOS는 RHEL(Red Hat Enterprise Linux)의 무료 클론으로 오랫동안 서버 환경에서 널리 사용되었습니다.
            2020년 CentOS 8의 지원이 조기 종료되면서, <strong>Rocky Linux</strong>와 <strong>AlmaLinux</strong>가
            CentOS의 대안으로 등장했습니다.
          </p>
          <div className="code-block">
            <div className="code-header">CentOS/Rocky 버전 확인</div>
            <pre>{`$ cat /etc/redhat-release
Rocky Linux release 9.3 (Blue Onyx)

$ cat /etc/os-release
NAME="Rocky Linux"
VERSION="9.3 (Blue Onyx)"
ID="rocky"
ID_LIKE="rhel centos fedora"`}</pre>
          </div>

          <h3>Fedora</h3>
          <p>
            Red Hat이 후원하는 커뮤니티 배포판으로, 최신 기술을 적극적으로 도입합니다.
            RHEL의 업스트림(upstream) 역할을 하며, 약 6개월마다 새 버전이 출시됩니다.
          </p>

          <h3>Debian</h3>
          <p>
            1993년부터 시작된 역사가 긴 배포판으로, 안정성과 자유 소프트웨어 철학을 중시합니다.
            Stable, Testing, Unstable(Sid) 세 가지 릴리즈 채널을 운영합니다.
            Ubuntu를 포함한 많은 배포판의 모체가 됩니다.
          </p>

          <h3>Arch Linux</h3>
          <p>
            최소주의(Minimalism)와 사용자 중심 설계를 추구합니다. 롤링 릴리즈(Rolling Release)를 채택하여
            항상 최신 소프트웨어를 사용할 수 있습니다. 설치부터 설정까지 직접 구성해야 하므로 숙련 사용자에게 적합합니다.
          </p>

          <h3>Kali Linux</h3>
          <p>
            Debian 기반의 보안 전문 배포판으로, 침투 테스트(Penetration Testing)와
            디지털 포렌식에 특화된 수백 가지 도구를 포함합니다.
          </p>
        </section>

        {/* 배포판 비교표 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>배포판 비교표</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>배포판</th>
                  <th>계열</th>
                  <th>패키지 관리</th>
                  <th>릴리즈 주기</th>
                  <th>주요 용도</th>
                  <th>난이도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ubuntu</strong></td>
                  <td>Debian</td>
                  <td>apt/dpkg</td>
                  <td>6개월 (LTS 2년)</td>
                  <td>데스크톱, 서버, 클라우드</td>
                  <td>초급</td>
                </tr>
                <tr>
                  <td><strong>Debian</strong></td>
                  <td>Debian</td>
                  <td>apt/dpkg</td>
                  <td>약 2년</td>
                  <td>서버, 개발</td>
                  <td>중급</td>
                </tr>
                <tr>
                  <td><strong>RHEL</strong></td>
                  <td>Red Hat</td>
                  <td>dnf/rpm</td>
                  <td>약 3년</td>
                  <td>기업 서버</td>
                  <td>중급</td>
                </tr>
                <tr>
                  <td><strong>Rocky Linux</strong></td>
                  <td>Red Hat</td>
                  <td>dnf/rpm</td>
                  <td>RHEL 추종</td>
                  <td>기업 서버 (CentOS 대체)</td>
                  <td>중급</td>
                </tr>
                <tr>
                  <td><strong>Fedora</strong></td>
                  <td>Red Hat</td>
                  <td>dnf/rpm</td>
                  <td>6개월</td>
                  <td>데스크톱, 개발</td>
                  <td>중급</td>
                </tr>
                <tr>
                  <td><strong>openSUSE</strong></td>
                  <td>SUSE</td>
                  <td>zypper/rpm</td>
                  <td>약 8개월 / 롤링</td>
                  <td>데스크톱, 서버</td>
                  <td>중급</td>
                </tr>
                <tr>
                  <td><strong>Arch Linux</strong></td>
                  <td>Arch</td>
                  <td>pacman</td>
                  <td>롤링 릴리즈</td>
                  <td>데스크톱, 고급 사용자</td>
                  <td>고급</td>
                </tr>
                <tr>
                  <td><strong>Linux Mint</strong></td>
                  <td>Debian (Ubuntu)</td>
                  <td>apt/dpkg</td>
                  <td>Ubuntu 추종</td>
                  <td>데스크톱</td>
                  <td>초급</td>
                </tr>
                <tr>
                  <td><strong>Kali Linux</strong></td>
                  <td>Debian</td>
                  <td>apt/dpkg</td>
                  <td>롤링 릴리즈</td>
                  <td>보안/침투 테스트</td>
                  <td>고급</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 배포판 선택 가이드 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>배포판 선택 가이드</h2>

          <h3>목적에 따른 추천</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>목적</th>
                  <th>추천 배포판</th>
                  <th>이유</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>리눅스 입문</strong></td>
                  <td>Ubuntu, Linux Mint</td>
                  <td>쉬운 설치, 풍부한 한글 자료</td>
                </tr>
                <tr>
                  <td><strong>서버 운영</strong></td>
                  <td>RHEL, Rocky Linux, Ubuntu Server</td>
                  <td>안정성, 기업 지원</td>
                </tr>
                <tr>
                  <td><strong>클라우드/DevOps</strong></td>
                  <td>Ubuntu, Amazon Linux</td>
                  <td>클라우드 플랫폼 기본 지원</td>
                </tr>
                <tr>
                  <td><strong>개발 환경</strong></td>
                  <td>Fedora, Ubuntu</td>
                  <td>최신 패키지, 개발 도구 풍부</td>
                </tr>
                <tr>
                  <td><strong>보안 테스트</strong></td>
                  <td>Kali Linux, Parrot OS</td>
                  <td>보안 도구 내장</td>
                </tr>
                <tr>
                  <td><strong>리눅스 마스터 시험 준비</strong></td>
                  <td>CentOS Stream, Rocky Linux, Ubuntu</td>
                  <td>시험 출제 기반 환경</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box info">
            <strong>시험 준비 팁:</strong> 리눅스 마스터 시험은 주로 CentOS/RHEL 계열과 Ubuntu/Debian 계열을
            기반으로 출제됩니다. 두 계열의 패키지 관리 방법과 설정 파일 위치의 차이를 모두 숙지하는 것이 좋습니다.
          </div>

          <div className="code-block">
            <div className="code-header">배포판 정보 확인 명령어</div>
            <pre>{`# 배포판 정보 확인
$ cat /etc/os-release

# LSB 정보 확인 (설치된 경우)
$ lsb_release -a

# 커널 정보 확인
$ uname -a

# Red Hat 계열 버전 확인
$ cat /etc/redhat-release

# Debian 계열 버전 확인
$ cat /etc/debian_version`}</pre>
          </div>
        </section>

        {/* 다음 학습 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade2/overview" className="btn btn-primary">2급 시험 개요 &rarr;</Link>
            <Link to="/intro/history" className="btn btn-secondary">&larr; 리눅스의 역사</Link>
          </div>
        </section>
        <LessonComplete lessonId="intro-distributions" />
      </div>
    </>
  );
};

export default LinuxDistributions;
