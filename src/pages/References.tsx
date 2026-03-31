import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const References = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="참고자료 - Linux Study"
        description="리눅스 마스터 자격증 학습을 위한 공식 문서, 시험 정보, 추천 도서, 온라인 리소스를 안내합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">참고자료</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            리눅스 마스터 자격증 학습을 위한 유용한 자료 모음
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        <section className="lesson-section" data-aos="fade-up">
          <h2>시험 공식 정보</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>사이트</th><th>URL</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>한국정보통신진흥협회 (KAIT)</strong></td>
                  <td><a href="https://www.ihd.or.kr" target="_blank" rel="noopener noreferrer">ihd.or.kr</a></td>
                  <td>리눅스 마스터 시험 접수, 일정, 합격자 발표</td>
                </tr>
                <tr>
                  <td><strong>KAIT 자격검정</strong></td>
                  <td><a href="https://www.ihd.or.kr/introducesubject.do" target="_blank" rel="noopener noreferrer">ihd.or.kr/introducesubject</a></td>
                  <td>시험 과목 및 출제 범위 안내</td>
                </tr>
                <tr>
                  <td><strong>큐넷 (Q-Net)</strong></td>
                  <td><a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer">q-net.or.kr</a></td>
                  <td>국가자격 정보 조회, 자격증 발급</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>공식 리눅스 문서</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>리소스</th><th>URL</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>The Linux Kernel Documentation</strong></td>
                  <td><a href="https://www.kernel.org/doc/html/latest/" target="_blank" rel="noopener noreferrer">kernel.org/doc</a></td>
                  <td>리눅스 커널 공식 문서</td>
                </tr>
                <tr>
                  <td><strong>GNU Project</strong></td>
                  <td><a href="https://www.gnu.org" target="_blank" rel="noopener noreferrer">gnu.org</a></td>
                  <td>GNU 프로젝트 공식 사이트</td>
                </tr>
                <tr>
                  <td><strong>Linux man pages</strong></td>
                  <td><a href="https://man7.org/linux/man-pages/" target="_blank" rel="noopener noreferrer">man7.org</a></td>
                  <td>온라인 리눅스 매뉴얼 페이지</td>
                </tr>
                <tr>
                  <td><strong>The Linux Documentation Project</strong></td>
                  <td><a href="https://tldp.org" target="_blank" rel="noopener noreferrer">tldp.org</a></td>
                  <td>리눅스 HOWTO, 가이드 문서</td>
                </tr>
                <tr>
                  <td><strong>ArchWiki</strong></td>
                  <td><a href="https://wiki.archlinux.org" target="_blank" rel="noopener noreferrer">wiki.archlinux.org</a></td>
                  <td>방대한 리눅스 위키 (배포판 무관 유용)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>배포판 공식 문서</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>배포판</th><th>URL</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ubuntu</strong></td>
                  <td><a href="https://help.ubuntu.com" target="_blank" rel="noopener noreferrer">help.ubuntu.com</a></td>
                  <td>Ubuntu 공식 도움말</td>
                </tr>
                <tr>
                  <td><strong>Red Hat (RHEL)</strong></td>
                  <td><a href="https://access.redhat.com/documentation/" target="_blank" rel="noopener noreferrer">access.redhat.com/documentation</a></td>
                  <td>RHEL 공식 문서</td>
                </tr>
                <tr>
                  <td><strong>Rocky Linux</strong></td>
                  <td><a href="https://docs.rockylinux.org" target="_blank" rel="noopener noreferrer">docs.rockylinux.org</a></td>
                  <td>Rocky Linux 공식 문서</td>
                </tr>
                <tr>
                  <td><strong>Debian</strong></td>
                  <td><a href="https://www.debian.org/doc/" target="_blank" rel="noopener noreferrer">debian.org/doc</a></td>
                  <td>Debian 공식 문서</td>
                </tr>
                <tr>
                  <td><strong>Fedora</strong></td>
                  <td><a href="https://docs.fedoraproject.org" target="_blank" rel="noopener noreferrer">docs.fedoraproject.org</a></td>
                  <td>Fedora 공식 문서</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>추천 도서</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>도서명</th><th>저자/출판사</th><th>대상</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>이것이 리눅스다</strong></td>
                  <td>우재남 / 한빛미디어</td>
                  <td>입문~중급 (2급 대비)</td>
                </tr>
                <tr>
                  <td><strong>리눅스 마스터 1급 2급 정복하기</strong></td>
                  <td>정성재 / 북스홀릭</td>
                  <td>시험 대비 (1급/2급)</td>
                </tr>
                <tr>
                  <td><strong>모두의 리눅스</strong></td>
                  <td>미야케 히데아키 / 길벗</td>
                  <td>입문자</td>
                </tr>
                <tr>
                  <td><strong>리눅스 실전 가이드</strong></td>
                  <td>넬슨 에릭 / 제이펍</td>
                  <td>실무 중급</td>
                </tr>
                <tr>
                  <td><strong>UNIX and Linux System Administration Handbook</strong></td>
                  <td>Evi Nemeth 외 / Addison-Wesley</td>
                  <td>고급 시스템 관리 (1급 대비)</td>
                </tr>
                <tr>
                  <td><strong>Linux Bible</strong></td>
                  <td>Christopher Negus / Wiley</td>
                  <td>종합 참고서 (영문)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>온라인 학습 리소스</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>URL</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Linux Journey</strong></td>
                  <td><a href="https://linuxjourney.com" target="_blank" rel="noopener noreferrer">linuxjourney.com</a></td>
                  <td>단계별 리눅스 학습 (영문, 무료)</td>
                </tr>
                <tr>
                  <td><strong>Linux Survival</strong></td>
                  <td><a href="https://linuxsurvival.com" target="_blank" rel="noopener noreferrer">linuxsurvival.com</a></td>
                  <td>대화형 리눅스 명령어 학습 (영문, 무료)</td>
                </tr>
                <tr>
                  <td><strong>OverTheWire Bandit</strong></td>
                  <td><a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noopener noreferrer">overthewire.org</a></td>
                  <td>리눅스 명령어 실습 게임 (영문, 무료)</td>
                </tr>
                <tr>
                  <td><strong>Explainshell</strong></td>
                  <td><a href="https://explainshell.com" target="_blank" rel="noopener noreferrer">explainshell.com</a></td>
                  <td>리눅스 명령어 해석기 (영문, 무료)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>실습 환경 구축 도구</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>도구</th><th>URL</th><th>용도</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>VirtualBox</strong></td>
                  <td><a href="https://www.virtualbox.org" target="_blank" rel="noopener noreferrer">virtualbox.org</a></td>
                  <td>무료 가상 머신 (리눅스 설치 실습)</td>
                </tr>
                <tr>
                  <td><strong>VMware Workstation Player</strong></td>
                  <td><a href="https://www.vmware.com" target="_blank" rel="noopener noreferrer">vmware.com</a></td>
                  <td>가상 머신 (개인 무료)</td>
                </tr>
                <tr>
                  <td><strong>WSL (Windows Subsystem for Linux)</strong></td>
                  <td><a href="https://learn.microsoft.com/ko-kr/windows/wsl/" target="_blank" rel="noopener noreferrer">Microsoft Learn</a></td>
                  <td>Windows에서 리눅스 실행</td>
                </tr>
                <tr>
                  <td><strong>Docker</strong></td>
                  <td><a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">docker.com</a></td>
                  <td>컨테이너 기반 리눅스 실습</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <div className="callout-box info">
            <strong>학습 팁:</strong> 리눅스 마스터 시험 합격의 핵심은 이론과 실습의 균형입니다.
            참고 자료를 읽는 것만으로는 부족하며, 반드시 가상 머신이나 WSL 환경에서
            직접 명령어를 입력하고 결과를 확인하는 실습을 병행하세요.
          </div>
        </section>
      </div>
    </>
  );
};

export default References;
