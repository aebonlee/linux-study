import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const WhatIsLinux = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="리눅스란? - Linux Study"
        description="리눅스 운영체제의 정의, 커널 구조, 오픈소스 라이선스, 다른 OS와의 비교를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">리눅스란?</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            리눅스 운영체제의 개념, 커널 구조, 오픈소스 라이선스를 이해합니다.
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* 리눅스 운영체제란 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>리눅스 운영체제란?</h2>
          <p>
            리눅스(Linux)는 1991년 핀란드 대학생 리누스 토르발스(Linus Torvalds)가 개발한 오픈 소스 운영체제 커널을 기반으로 하는 운영체제입니다.
            정확히는 리눅스는 <strong>커널(Kernel)</strong>의 이름이며, 이 커널 위에 GNU 프로젝트의 소프트웨어와 다양한 응용 프로그램을 결합한 것을
            <strong>리눅스 배포판(Distribution)</strong>이라고 합니다.
          </p>
          <p>
            리눅스는 유닉스(Unix) 운영체제를 모델로 설계되었으며, POSIX 표준을 준수합니다.
            서버, 데스크톱, 모바일(Android), 임베디드 시스템, 슈퍼컴퓨터 등 거의 모든 컴퓨팅 분야에서 사용됩니다.
          </p>

          <div className="callout-box info">
            <strong>참고:</strong> 전 세계 슈퍼컴퓨터 TOP 500 중 100%가 리눅스를 사용하고 있으며,
            전 세계 서버의 약 70% 이상이 리눅스 기반으로 운영됩니다.
          </div>

          <h3>리눅스의 주요 특징</h3>
          <ul>
            <li><strong>오픈 소스(Open Source):</strong> 소스 코드가 공개되어 있어 누구나 자유롭게 사용, 수정, 배포할 수 있습니다.</li>
            <li><strong>다중 사용자(Multi-User):</strong> 여러 사용자가 동시에 시스템에 접속하여 작업할 수 있습니다.</li>
            <li><strong>다중 작업(Multi-Tasking):</strong> 여러 프로세스를 동시에 실행할 수 있습니다.</li>
            <li><strong>이식성(Portability):</strong> x86, ARM, MIPS 등 다양한 하드웨어 아키텍처에서 동작합니다.</li>
            <li><strong>안정성과 보안성:</strong> 커널 수준의 보안 기능과 안정적인 시스템 운영을 제공합니다.</li>
            <li><strong>네트워크 지원:</strong> TCP/IP를 포함한 다양한 네트워크 프로토콜을 내장합니다.</li>
            <li><strong>계층적 파일 시스템:</strong> 루트(/) 디렉터리를 최상위로 하는 트리 구조의 파일 시스템을 사용합니다.</li>
          </ul>
        </section>

        {/* 리눅스 커널 아키텍처 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>리눅스 커널 아키텍처</h2>
          <p>
            리눅스 커널은 운영체제의 핵심으로, 하드웨어와 소프트웨어 사이의 중재자 역할을 합니다.
            모놀리식(Monolithic) 아키텍처를 기반으로 하되, 모듈(Module) 시스템을 통해 유연성을 확보합니다.
          </p>

          <h3>커널의 주요 구성 요소</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구성 요소</th>
                  <th>역할</th>
                  <th>주요 기능</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>프로세스 관리</strong></td>
                  <td>프로세스 생성, 스케줄링, 종료</td>
                  <td>CFS 스케줄러, fork(), exec()</td>
                </tr>
                <tr>
                  <td><strong>메모리 관리</strong></td>
                  <td>물리/가상 메모리 관리</td>
                  <td>페이징, 스왑, 메모리 매핑</td>
                </tr>
                <tr>
                  <td><strong>파일 시스템</strong></td>
                  <td>파일 및 디렉터리 관리</td>
                  <td>VFS, ext4, xfs, btrfs</td>
                </tr>
                <tr>
                  <td><strong>장치 드라이버</strong></td>
                  <td>하드웨어 제어</td>
                  <td>문자/블록/네트워크 장치</td>
                </tr>
                <tr>
                  <td><strong>네트워크 서브시스템</strong></td>
                  <td>네트워크 프로토콜 처리</td>
                  <td>TCP/IP 스택, 소켓 인터페이스</td>
                </tr>
                <tr>
                  <td><strong>시스템 호출 인터페이스</strong></td>
                  <td>사용자 공간과 커널 공간 연결</td>
                  <td>open(), read(), write(), ioctl()</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>사용자 공간과 커널 공간</h3>
          <p>
            리눅스는 보안과 안정성을 위해 메모리를 <strong>사용자 공간(User Space)</strong>과 <strong>커널 공간(Kernel Space)</strong>으로 분리합니다.
          </p>
          <ul>
            <li><strong>사용자 공간:</strong> 응용 프로그램이 실행되는 영역. 커널에 직접 접근할 수 없으며, 시스템 호출(System Call)을 통해 커널 기능을 요청합니다.</li>
            <li><strong>커널 공간:</strong> 커널과 장치 드라이버가 동작하는 영역. 하드웨어에 직접 접근할 수 있는 특권 모드(Ring 0)에서 실행됩니다.</li>
          </ul>

          <div className="code-block">
            <div className="code-header">리눅스 시스템 구조 (계층도)</div>
            <pre>{`┌─────────────────────────────────────┐
│         응용 프로그램 (Application)    │
│    (웹 브라우저, 편집기, 셸 등)         │
├─────────────────────────────────────┤
│         C 라이브러리 (glibc)           │
│    (시스템 호출 래퍼 함수 제공)          │
├─────────────────────────────────────┤
│    시스템 호출 인터페이스 (System Call)  │
├─────────────────────────────────────┤
│              리눅스 커널               │
│  ┌──────┬──────┬──────┬──────┐      │
│  │프로세스│메모리 │파일   │네트워크│      │
│  │ 관리  │ 관리  │시스템 │서브시스템│     │
│  └──────┴──────┴──────┴──────┘      │
├─────────────────────────────────────┤
│           장치 드라이버               │
├─────────────────────────────────────┤
│             하드웨어                  │
└─────────────────────────────────────┘`}</pre>
          </div>
        </section>

        {/* 오픈소스 라이선스 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>오픈소스 라이선스</h2>
          <p>
            리눅스 커널은 <strong>GPL(GNU General Public License) v2</strong> 라이선스로 배포됩니다.
            오픈소스 소프트웨어에는 다양한 라이선스가 존재하며, 각 라이선스마다 사용 조건이 다릅니다.
          </p>

          <h3>주요 오픈소스 라이선스 비교</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>라이선스</th>
                  <th>소스 공개 의무</th>
                  <th>2차 저작물 라이선스</th>
                  <th>특허 허용</th>
                  <th>대표 소프트웨어</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GPL v2</strong></td>
                  <td>있음 (강력)</td>
                  <td>동일 라이선스 적용</td>
                  <td>명시 없음</td>
                  <td>Linux 커널</td>
                </tr>
                <tr>
                  <td><strong>GPL v3</strong></td>
                  <td>있음 (강력)</td>
                  <td>동일 라이선스 적용</td>
                  <td>명시적 허용</td>
                  <td>GCC, bash</td>
                </tr>
                <tr>
                  <td><strong>LGPL</strong></td>
                  <td>라이브러리만</td>
                  <td>라이브러리만 적용</td>
                  <td>명시 없음</td>
                  <td>glibc</td>
                </tr>
                <tr>
                  <td><strong>BSD</strong></td>
                  <td>없음</td>
                  <td>자유</td>
                  <td>해당 없음</td>
                  <td>FreeBSD, nginx</td>
                </tr>
                <tr>
                  <td><strong>MIT</strong></td>
                  <td>없음</td>
                  <td>자유</td>
                  <td>해당 없음</td>
                  <td>jQuery, Node.js</td>
                </tr>
                <tr>
                  <td><strong>Apache 2.0</strong></td>
                  <td>없음</td>
                  <td>자유</td>
                  <td>명시적 허용</td>
                  <td>Apache HTTP, Android</td>
                </tr>
                <tr>
                  <td><strong>MPL 2.0</strong></td>
                  <td>파일 단위</td>
                  <td>파일 단위</td>
                  <td>명시적 허용</td>
                  <td>Firefox</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box tip">
            <strong>시험 포인트:</strong> GPL은 소스 코드 공개 의무가 있는 카피레프트(Copyleft) 라이선스이고,
            BSD/MIT는 소스 공개 의무가 없는 퍼미시브(Permissive) 라이선스입니다.
            이 차이는 리눅스 마스터 시험에서 자주 출제됩니다.
          </div>

          <h3>GPL의 핵심 원칙</h3>
          <ul>
            <li><strong>자유 실행:</strong> 어떤 목적으로든 프로그램을 실행할 수 있는 자유</li>
            <li><strong>소스 코드 접근:</strong> 소스 코드를 연구하고 수정할 수 있는 자유</li>
            <li><strong>재배포:</strong> 복사본을 재배포할 수 있는 자유</li>
            <li><strong>개선 배포:</strong> 수정한 버전을 배포할 수 있는 자유 (동일 라이선스 적용)</li>
          </ul>
        </section>

        {/* 리눅스 vs 다른 OS 비교 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>리눅스 vs 다른 운영체제 비교</h2>
          <p>
            리눅스는 Windows, macOS 등 다른 운영체제와 여러 면에서 차이가 있습니다.
            각 운영체제의 특성을 비교하여 리눅스의 장단점을 이해합니다.
          </p>

          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>비교 항목</th>
                  <th>Linux</th>
                  <th>Windows</th>
                  <th>macOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>커널</strong></td>
                  <td>Linux (모놀리식)</td>
                  <td>NT 커널 (하이브리드)</td>
                  <td>XNU (하이브리드)</td>
                </tr>
                <tr>
                  <td><strong>라이선스</strong></td>
                  <td>GPL (무료/오픈소스)</td>
                  <td>상용 (유료)</td>
                  <td>상용 (Apple 하드웨어 번들)</td>
                </tr>
                <tr>
                  <td><strong>소스 코드</strong></td>
                  <td>공개</td>
                  <td>비공개</td>
                  <td>일부 공개 (Darwin)</td>
                </tr>
                <tr>
                  <td><strong>주요 용도</strong></td>
                  <td>서버, 클라우드, IoT</td>
                  <td>데스크톱, 게이밍</td>
                  <td>데스크톱, 창작</td>
                </tr>
                <tr>
                  <td><strong>파일 시스템</strong></td>
                  <td>ext4, xfs, btrfs</td>
                  <td>NTFS, FAT32</td>
                  <td>APFS, HFS+</td>
                </tr>
                <tr>
                  <td><strong>패키지 관리</strong></td>
                  <td>apt, yum, dnf, pacman</td>
                  <td>MSI, Windows Store</td>
                  <td>App Store, Homebrew</td>
                </tr>
                <tr>
                  <td><strong>CLI 환경</strong></td>
                  <td>Bash, Zsh (기본)</td>
                  <td>cmd, PowerShell</td>
                  <td>Zsh (기본)</td>
                </tr>
                <tr>
                  <td><strong>보안</strong></td>
                  <td>SELinux, AppArmor</td>
                  <td>Windows Defender</td>
                  <td>Gatekeeper, SIP</td>
                </tr>
                <tr>
                  <td><strong>서버 점유율</strong></td>
                  <td>약 70% 이상</td>
                  <td>약 25%</td>
                  <td>약 1% 미만</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box info">
            <strong>알아두기:</strong> 리눅스는 서버 환경에서 압도적인 점유율을 보이며,
            AWS, Google Cloud, Azure 등 주요 클라우드 서비스에서도 기본 OS로 리눅스를 채택하고 있습니다.
          </div>
        </section>

        {/* 다음 학습 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/intro/history" className="btn btn-primary">리눅스의 역사 &rarr;</Link>
            <Link to="/intro/distributions" className="btn btn-secondary">리눅스 배포판</Link>
          </div>
        </section>
        <LessonComplete lessonId="intro-what-is-linux" />
      </div>
    </>
  );
};

export default WhatIsLinux;
