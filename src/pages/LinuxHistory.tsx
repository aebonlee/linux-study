import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const LinuxHistory = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="리눅스의 역사 - Linux Study"
        description="Unix 기원, GNU 프로젝트, 리누스 토르발스, 리눅스 커널 진화의 역사를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">리눅스의 역사</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            Unix에서 시작된 리눅스의 탄생과 발전 과정을 살펴봅니다.
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* Unix 기원 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>Unix의 기원</h2>
          <p>
            리눅스를 이해하려면 먼저 <strong>Unix</strong>의 역사를 알아야 합니다.
            Unix는 1969년 미국 AT&T 벨 연구소(Bell Labs)에서 <strong>켄 톰슨(Ken Thompson)</strong>과
            <strong>데니스 리치(Dennis Ritchie)</strong>가 개발한 운영체제입니다.
          </p>

          <h3>Unix의 탄생 배경</h3>
          <ul>
            <li>1964년: MIT, GE, 벨 연구소가 공동으로 <strong>Multics</strong> 프로젝트를 시작했으나, 복잡성과 비용 문제로 벨 연구소가 탈퇴합니다.</li>
            <li>1969년: 켄 톰슨이 Multics의 아이디어를 기반으로 간단한 운영체제를 PDP-7에서 개발합니다. 이것이 <strong>Unics</strong>(이후 Unix)입니다.</li>
            <li>1972년: 데니스 리치가 개발한 <strong>C 언어</strong>로 Unix를 재작성하여, 하드웨어 독립적인 이식성을 확보합니다.</li>
            <li>1973년: Unix가 C 언어로 완전히 재작성되어 다른 하드웨어 플랫폼으로의 이식이 용이해집니다.</li>
          </ul>

          <h3>Unix의 분화</h3>
          <p>
            AT&T의 <strong>System V</strong>와 UC 버클리의 <strong>BSD(Berkeley Software Distribution)</strong>로 크게 두 계열로 나뉘며,
            이후 다양한 상용 Unix(SunOS/Solaris, HP-UX, AIX 등)가 등장합니다.
          </p>

          <div className="callout-box info">
            <strong>시험 포인트:</strong> Unix는 AT&T 벨 연구소에서 켄 톰슨과 데니스 리치가 개발했으며,
            C 언어로 작성되어 이식성이 높았습니다. BSD와 System V 두 계열로 분화된 것은 자주 출제됩니다.
          </div>
        </section>

        {/* GNU 프로젝트 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>GNU 프로젝트</h2>
          <p>
            1983년 MIT 인공지능 연구소의 <strong>리처드 스톨먼(Richard Stallman)</strong>은 완전히 자유로운 Unix 호환 운영체제를 만들겠다는
            목표로 <strong>GNU 프로젝트</strong>를 시작합니다.
          </p>

          <h3>GNU의 의미와 목표</h3>
          <ul>
            <li><strong>GNU = "GNU's Not Unix"</strong>의 재귀적 약자</li>
            <li>목표: Unix와 호환되면서 완전히 자유로운 소프트웨어로 구성된 운영체제 개발</li>
            <li>1985년: <strong>자유 소프트웨어 재단(FSF, Free Software Foundation)</strong> 설립</li>
            <li>1989년: <strong>GPL(GNU General Public License)</strong> v1 발표</li>
          </ul>

          <h3>GNU 프로젝트의 주요 소프트웨어</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>소프트웨어</th>
                  <th>역할</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GCC</strong></td>
                  <td>C/C++ 컴파일러</td>
                  <td>GNU Compiler Collection</td>
                </tr>
                <tr>
                  <td><strong>GNU Bash</strong></td>
                  <td>셸(Shell)</td>
                  <td>Bourne Again Shell</td>
                </tr>
                <tr>
                  <td><strong>GNU Core Utils</strong></td>
                  <td>기본 명령어 (ls, cp, mv 등)</td>
                  <td>Unix 명령어의 자유 소프트웨어 버전</td>
                </tr>
                <tr>
                  <td><strong>Emacs</strong></td>
                  <td>텍스트 편집기</td>
                  <td>확장 가능한 에디터</td>
                </tr>
                <tr>
                  <td><strong>glibc</strong></td>
                  <td>C 표준 라이브러리</td>
                  <td>GNU C Library</td>
                </tr>
                <tr>
                  <td><strong>GNU Hurd</strong></td>
                  <td>마이크로커널</td>
                  <td>GNU의 자체 커널 (미완성)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box tip">
            <strong>핵심:</strong> GNU 프로젝트는 커널(GNU Hurd)을 제외한 거의 모든 운영체제 구성 요소를 완성했지만,
            커널 개발이 지연되었습니다. 이 빈자리를 리누스 토르발스의 리눅스 커널이 채우게 됩니다.
          </div>
        </section>

        {/* 리누스 토르발스와 리눅스의 탄생 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>리누스 토르발스와 리눅스의 탄생</h2>
          <p>
            1991년, 핀란드 헬싱키 대학교의 21세 학생이었던 <strong>리누스 토르발스(Linus Torvalds)</strong>는
            자신의 PC(Intel 386)에서 동작하는 Unix 호환 커널을 개발하기 시작합니다.
          </p>

          <h3>리눅스 커널 개발의 시작</h3>
          <p>
            토르발스는 앤드루 타넨바움(Andrew Tanenbaum) 교수의 교육용 운영체제인 <strong>MINIX</strong>를 사용하면서
            MINIX의 한계를 느꼈고, 자신만의 운영체제 커널을 개발하기로 결심합니다.
          </p>

          <div className="code-block">
            <div className="code-header">1991년 8월 25일 - 리누스 토르발스의 역사적인 뉴스그룹 포스팅</div>
            <pre>{`From: torvalds@klaava.Helsinki.FI (Linus Benedict Torvalds)
Newsgroups: comp.os.minix
Subject: What would you like to see most in minix?

Hello everybody out there using minix -

I'm doing a (free) operating system (just a hobby, won't be big
and professional like gnu) for 386(486) AT clones. This has been
brewing since april, and is starting to get ready. I'd like any
feedback on things people like/dislike in minix, as my OS
resembles it somewhat (same physical layout of the file-system
(due to practical reasons) among other things).

I've currently ported bash(1.08) and gcc(1.40), and things seem
to work. This implies that I'll get something practical within a
few months, and I'd like to know what features most people would
want. Any suggestions are welcome, but I won't promise I'll
implement them :-)

Linus (torvalds@kruuna.helsinki.fi)`}</pre>
          </div>

          <h3>초기 리눅스의 특징</h3>
          <ul>
            <li>1991년 9월: 리눅스 0.01 버전 공개 (약 10,000 줄의 코드)</li>
            <li>1991년 10월: 리눅스 0.02 버전 공개 (Bash와 GCC 실행 가능)</li>
            <li>1992년: GPL 라이선스로 전환, 전 세계 개발자들의 참여 시작</li>
            <li>1994년 3월: <strong>리눅스 1.0</strong> 공식 릴리즈</li>
          </ul>
        </section>

        {/* 리눅스 커널 주요 연대기 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>리눅스 주요 연대기</h2>

          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>연도</th>
                  <th>사건</th>
                  <th>의미</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1969</strong></td>
                  <td>Unix 개발 (벨 연구소)</td>
                  <td>현대 운영체제의 원형</td>
                </tr>
                <tr>
                  <td><strong>1983</strong></td>
                  <td>GNU 프로젝트 시작</td>
                  <td>자유 소프트웨어 운동의 시작</td>
                </tr>
                <tr>
                  <td><strong>1985</strong></td>
                  <td>FSF 설립</td>
                  <td>자유 소프트웨어 재단</td>
                </tr>
                <tr>
                  <td><strong>1987</strong></td>
                  <td>MINIX 공개</td>
                  <td>교육용 Unix 호환 OS</td>
                </tr>
                <tr>
                  <td><strong>1991</strong></td>
                  <td>리눅스 0.01 공개</td>
                  <td>리누스 토르발스가 커널 개발</td>
                </tr>
                <tr>
                  <td><strong>1992</strong></td>
                  <td>GPL 라이선스 채택</td>
                  <td>오픈소스 커뮤니티 성장 가속</td>
                </tr>
                <tr>
                  <td><strong>1993</strong></td>
                  <td>Debian, Slackware 배포판 등장</td>
                  <td>최초의 주요 리눅스 배포판</td>
                </tr>
                <tr>
                  <td><strong>1994</strong></td>
                  <td>리눅스 커널 1.0 릴리즈</td>
                  <td>안정 버전 첫 공개</td>
                </tr>
                <tr>
                  <td><strong>1996</strong></td>
                  <td>리눅스 커널 2.0 릴리즈</td>
                  <td>SMP(대칭 다중 처리) 지원</td>
                </tr>
                <tr>
                  <td><strong>1998</strong></td>
                  <td>IBM, Oracle 등 리눅스 지원 선언</td>
                  <td>기업 시장 진출</td>
                </tr>
                <tr>
                  <td><strong>2003</strong></td>
                  <td>리눅스 커널 2.6 릴리즈</td>
                  <td>선점형 스케줄러, 개선된 SMP</td>
                </tr>
                <tr>
                  <td><strong>2004</strong></td>
                  <td>Ubuntu 4.10 릴리즈</td>
                  <td>데스크톱 리눅스 대중화</td>
                </tr>
                <tr>
                  <td><strong>2005</strong></td>
                  <td>Git 개발</td>
                  <td>리누스 토르발스가 버전 관리 시스템 개발</td>
                </tr>
                <tr>
                  <td><strong>2007</strong></td>
                  <td>Android 발표</td>
                  <td>리눅스 커널 기반 모바일 OS</td>
                </tr>
                <tr>
                  <td><strong>2008</strong></td>
                  <td>리눅스 커널 2.6.28</td>
                  <td>ext4 파일 시스템 도입</td>
                </tr>
                <tr>
                  <td><strong>2011</strong></td>
                  <td>리눅스 커널 3.0 릴리즈</td>
                  <td>리눅스 20주년 기념 버전</td>
                </tr>
                <tr>
                  <td><strong>2013</strong></td>
                  <td>Docker 공개</td>
                  <td>리눅스 컨테이너 기술 혁신</td>
                </tr>
                <tr>
                  <td><strong>2015</strong></td>
                  <td>리눅스 커널 4.0 릴리즈</td>
                  <td>라이브 패치 기능 도입</td>
                </tr>
                <tr>
                  <td><strong>2019</strong></td>
                  <td>리눅스 커널 5.0 릴리즈</td>
                  <td>에너지 효율 스케줄링, AMD GPU 지원</td>
                </tr>
                <tr>
                  <td><strong>2022</strong></td>
                  <td>리눅스 커널 6.0 릴리즈</td>
                  <td>Rust 언어 지원 시작</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 리눅스 커널의 진화 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>리눅스 커널의 진화</h2>
          <p>
            리눅스 커널은 지속적으로 발전하면서 다양한 기능이 추가되어 왔습니다.
          </p>

          <h3>커널 버전 체계</h3>
          <p>
            리눅스 커널은 <strong>주 버전.부 버전.패치</strong> 형식의 버전 번호를 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">커널 버전 확인</div>
            <pre>{`# 커널 버전 확인
$ uname -r
6.1.0-18-amd64

# 상세 정보 확인
$ uname -a
Linux myhost 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC
Debian 6.1.76-1 (2024-02-01) x86_64 GNU/Linux

# /proc를 통한 확인
$ cat /proc/version
Linux version 6.1.0-18-amd64 (debian-kernel@lists.debian.org)
(gcc-12 (Debian 12.2.0-14) 12.2.0, GNU ld (GNU Binutils for
Debian) 2.40) #1 SMP PREEMPT_DYNAMIC ...`}</pre>
          </div>

          <h3>주요 커널 기능 진화</h3>
          <ul>
            <li><strong>커널 2.6:</strong> O(1) 스케줄러, NPTL 스레딩, udev, sysfs</li>
            <li><strong>커널 3.x:</strong> cgroups 개선, namespaces 완성 (컨테이너 기반 기술 가능)</li>
            <li><strong>커널 4.x:</strong> 라이브 패치(kpatch), eBPF, Spectre/Meltdown 대응</li>
            <li><strong>커널 5.x:</strong> io_uring 비동기 I/O, WireGuard VPN</li>
            <li><strong>커널 6.x:</strong> Rust 언어 지원, 실시간(RT) 패치 통합 진행</li>
          </ul>

          <div className="callout-box info">
            <strong>알아두기:</strong> 현재 리눅스 커널은 약 3,000만 줄 이상의 코드로 구성되어 있으며,
            전 세계 수천 명의 개발자가 참여하는 가장 큰 오픈소스 프로젝트 중 하나입니다.
          </div>
        </section>

        {/* 다음 학습 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/intro/distributions" className="btn btn-primary">리눅스 배포판 &rarr;</Link>
            <Link to="/intro/what-is-linux" className="btn btn-secondary">&larr; 리눅스란?</Link>
          </div>
        </section>
        <LessonComplete lessonId="intro-history" />
      </div>
    </>
  );
};

export default LinuxHistory;
