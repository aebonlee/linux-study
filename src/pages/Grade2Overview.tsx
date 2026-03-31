import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const Grade2Overview = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="리눅스 마스터 2급 시험 개요 - Linux Study"
        description="리눅스 마스터 2급 시험 구성, 합격 기준, 출제 범위, 시험 일정, 학습 전략을 안내합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">리눅스 마스터 2급 시험 개요</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            시험 구성, 합격 기준, 출제 범위, 학습 전략을 확인하세요.
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* 시험 구성 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>시험 구성</h2>
          <p>
            리눅스 마스터 2급은 <strong>1차 시험</strong>과 <strong>2차 시험</strong>으로 구성됩니다.
            두 시험 모두 객관식(4지선다형) 형태로 출제됩니다.
          </p>

          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>1차 시험</th>
                  <th>2차 시험</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>시험 형태</strong></td>
                  <td>온라인 (CBT)</td>
                  <td>오프라인 (필기)</td>
                </tr>
                <tr>
                  <td><strong>문항 수</strong></td>
                  <td>60문항</td>
                  <td>60문항</td>
                </tr>
                <tr>
                  <td><strong>시험 시간</strong></td>
                  <td>60분</td>
                  <td>60분</td>
                </tr>
                <tr>
                  <td><strong>문제 형태</strong></td>
                  <td>객관식 (4지선다)</td>
                  <td>객관식 (4지선다)</td>
                </tr>
                <tr>
                  <td><strong>응시 자격</strong></td>
                  <td>제한 없음</td>
                  <td>1차 합격자</td>
                </tr>
                <tr>
                  <td><strong>응시료</strong></td>
                  <td>없음 (무료)</td>
                  <td>22,000원</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box info">
            <strong>참고:</strong> 1차 시험(온라인)은 상시 시험으로 KAIT 사이트에서 원하는 시간에 응시 가능합니다.
            2차 시험은 연 4회(3, 6, 9, 12월) 정기적으로 시행됩니다.
          </div>
        </section>

        {/* 합격 기준 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>합격 기준</h2>

          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>과목별 기준</th>
                  <th>평균 기준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1차 시험</strong></td>
                  <td>각 과목 40점 이상 (과락 없어야 함)</td>
                  <td>평균 60점 이상</td>
                </tr>
                <tr>
                  <td><strong>2차 시험</strong></td>
                  <td>각 과목 40점 이상 (과락 없어야 함)</td>
                  <td>평균 60점 이상</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box warning">
            <strong>주의:</strong> 전체 평균이 60점 이상이더라도, 특정 과목이 40점 미만이면 과락으로 불합격 처리됩니다.
            모든 과목을 고르게 학습해야 합니다.
          </div>
        </section>

        {/* 출제 범위 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>출제 범위</h2>

          <h3>1차 시험 출제 범위</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>과목</th>
                  <th>내용</th>
                  <th>문항 수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>리눅스 운영 및 관리</strong></td>
                  <td>리눅스 이해, 설치, 기본 명령어, 사용자 관리, 파일 시스템</td>
                  <td>20문항</td>
                </tr>
                <tr>
                  <td><strong>리눅스 활용</strong></td>
                  <td>X 윈도, 인터넷 활용, 응용 프로그램, 프로세스 관리, 셸 스크립트</td>
                  <td>20문항</td>
                </tr>
                <tr>
                  <td><strong>리눅스 기초 명령어</strong></td>
                  <td>파일 명령어, 텍스트 처리, 압축, 네트워크 기본</td>
                  <td>20문항</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2차 시험 출제 범위</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>과목</th>
                  <th>내용</th>
                  <th>문항 수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>리눅스 운영 및 관리</strong></td>
                  <td>부팅 과정, 패키지 관리, 로그 관리, 작업 스케줄링</td>
                  <td>20문항</td>
                </tr>
                <tr>
                  <td><strong>리눅스 활용</strong></td>
                  <td>네트워크 설정, 방화벽 기초, 서비스 관리, 프린터 관리</td>
                  <td>20문항</td>
                </tr>
                <tr>
                  <td><strong>리눅스 기초 명령어</strong></td>
                  <td>고급 파일 관리, 디스크 관리, 권한 관리 심화</td>
                  <td>20문항</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 시험 일정 및 접수 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>시험 일정 및 접수 방법</h2>

          <h3>시험 일정</h3>
          <ul>
            <li><strong>1차 시험:</strong> 상시 (KAIT 사이트에서 온라인 응시)</li>
            <li><strong>2차 시험:</strong> 연 4회 (3월, 6월, 9월, 12월)</li>
            <li><strong>1차 합격 유효기간:</strong> 합격일로부터 2년 이내에 2차 시험 합격해야 함</li>
          </ul>

          <h3>접수 방법</h3>
          <ol>
            <li>한국정보통신진흥협회(KAIT) 자격검정 사이트 접속 (ihd.or.kr)</li>
            <li>회원 가입 및 로그인</li>
            <li>시험 접수 메뉴에서 "리눅스마스터 2급" 선택</li>
            <li>시험 일정 확인 후 접수</li>
            <li>응시료 결제 (2차 시험만 해당)</li>
          </ol>

          <div className="callout-box tip">
            <strong>Tip:</strong> 1차 시험은 무료이므로 부담 없이 먼저 응시해 보는 것도 좋은 전략입니다.
            시험 환경에 익숙해지고 부족한 부분을 파악할 수 있습니다.
          </div>
        </section>

        {/* 학습 전략 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>학습 전략 팁</h2>

          <h3>효과적인 학습 순서</h3>
          <ol>
            <li><strong>기본 개념 학습:</strong> 리눅스의 정의, 역사, 배포판을 먼저 이해합니다.</li>
            <li><strong>명령어 실습:</strong> 실제 리눅스 환경에서 명령어를 직접 입력하며 학습합니다.</li>
            <li><strong>1차 범위 집중:</strong> 1차 시험 3개 과목의 핵심 개념을 정리합니다.</li>
            <li><strong>모의고사 풀이:</strong> 실전 감각을 키우고 부족한 부분을 보완합니다.</li>
            <li><strong>2차 범위 학습:</strong> 1차 합격 후 심화 내용을 학습합니다.</li>
          </ol>

          <h3>자주 출제되는 분야</h3>
          <ul>
            <li>파일 및 디렉터리 관련 명령어 (ls, cp, mv, rm, chmod, chown)</li>
            <li>사용자 및 그룹 관리 (useradd, usermod, userdel)</li>
            <li>파일 시스템과 마운트 (mount, umount, fdisk, df)</li>
            <li>프로세스 관리 (ps, top, kill)</li>
            <li>패키지 관리 (rpm, yum, apt-get)</li>
            <li>vi/vim 편집기 사용법</li>
            <li>셸 환경 변수와 리다이렉션</li>
            <li>네트워크 기본 명령어 (ifconfig, ping, netstat)</li>
            <li>cron 작업 스케줄링</li>
            <li>퍼미션(허가권)과 소유권</li>
          </ul>

          <h3>학습 환경 구축</h3>
          <div className="code-block">
            <div className="code-header">학습을 위한 리눅스 환경 준비</div>
            <pre>{`# 방법 1: VirtualBox + Ubuntu/CentOS 설치
# - VirtualBox 다운로드: https://www.virtualbox.org
# - Ubuntu ISO: https://ubuntu.com/download
# - Rocky Linux ISO: https://rockylinux.org/download

# 방법 2: WSL (Windows Subsystem for Linux) 사용
# PowerShell 관리자 모드에서 실행
wsl --install

# 방법 3: 클라우드 환경 활용
# - AWS Free Tier EC2 인스턴스
# - Google Cloud Free Tier
# - Oracle Cloud Always Free`}</pre>
          </div>

          <div className="callout-box info">
            <strong>합격률 정보:</strong> 리눅스 마스터 2급의 합격률은 보통 40~55% 수준입니다.
            충분한 실습과 개념 이해를 통해 준비하면 합격이 어렵지 않습니다.
          </div>
        </section>

        {/* 커리큘럼 링크 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>학습 시작하기</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade2/part1-ch1" className="btn btn-primary">1차 - 리눅스 운영 및 관리 &rarr;</Link>
            <Link to="/grade2/part1-ch2" className="btn btn-secondary">1차 - 리눅스 활용</Link>
            <Link to="/grade2/part1-ch3" className="btn btn-secondary">1차 - 리눅스 기초 명령어</Link>
          </div>
        </section>
        <LessonComplete lessonId="grade2-overview" />
      </div>
    </>
  );
};

export default Grade2Overview;
