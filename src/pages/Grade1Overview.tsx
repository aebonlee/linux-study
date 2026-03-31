import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const Grade1Overview = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="리눅스 마스터 1급 시험 개요 - Linux Study"
        description="리눅스 마스터 1급 시험 구성, 난이도, 출제 범위, 합격 전략을 안내합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">리눅스 마스터 1급 시험 개요</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            고급 실무 수준의 리눅스 마스터 1급 시험 안내
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        <section className="lesson-section" data-aos="fade-up">
          <h2>시험 구성</h2>
          <p>
            리눅스 마스터 1급은 고급 수준의 리눅스 시스템 관리 능력을 평가하는 국가공인 자격증입니다.
            1차 필기 시험과 2차 실기 시험으로 구성됩니다.
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
                  <td>오프라인 필기</td>
                  <td>오프라인 실기 (작업형)</td>
                </tr>
                <tr>
                  <td><strong>문항 수</strong></td>
                  <td>100문항</td>
                  <td>작업형 (10~12문항)</td>
                </tr>
                <tr>
                  <td><strong>시험 시간</strong></td>
                  <td>100분</td>
                  <td>90분</td>
                </tr>
                <tr>
                  <td><strong>문제 형태</strong></td>
                  <td>객관식 (4지선다)</td>
                  <td>주관식/실기 (단답형, 서술형)</td>
                </tr>
                <tr>
                  <td><strong>응시 자격</strong></td>
                  <td>2급 합격자 또는 제한 없음</td>
                  <td>1차 합격자</td>
                </tr>
                <tr>
                  <td><strong>응시료</strong></td>
                  <td>22,000원</td>
                  <td>44,000원</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout-box warning">
            <strong>난이도:</strong> 1급은 2급에 비해 난이도가 상당히 높습니다.
            합격률은 보통 20~30% 수준이며, 특히 2차 실기 시험은 실무 경험이 필수적입니다.
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>출제 범위 상세</h2>

          <h3>1차 시험 (필기)</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>과목</th>
                  <th>내용</th>
                  <th>비중</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>리눅스 실무의 이해</strong></td>
                  <td>커널 구조, 부팅 심화, 파일 시스템 심화, 가상화</td>
                  <td>50문항</td>
                </tr>
                <tr>
                  <td><strong>리눅스 시스템 관리</strong></td>
                  <td>사용자/스토리지 관리, 커널 튜닝, 모니터링</td>
                  <td>50문항</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2차 시험 (실기)</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>과목</th>
                  <th>내용</th>
                  <th>형태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>네트워크 및 서비스 관리</strong></td>
                  <td>TCP/IP, 서버 구축 (Apache, DNS, DHCP, 메일 등)</td>
                  <td>단답형/서술형</td>
                </tr>
                <tr>
                  <td><strong>보안 및 시스템 최적화</strong></td>
                  <td>SELinux, 방화벽 심화, SSH 보안, 로그 분석, 성능 튜닝</td>
                  <td>단답형/서술형</td>
                </tr>
                <tr>
                  <td><strong>서버 구축 실무</strong></td>
                  <td>LAMP/LEMP 스택, SSL/TLS, 서버 구축 시나리오</td>
                  <td>작업형</td>
                </tr>
                <tr>
                  <td><strong>네트워크 보안 실무</strong></td>
                  <td>VPN, IDS/IPS, 백업/복구</td>
                  <td>작업형</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>합격 전략</h2>

          <h3>1차 시험 합격 전략</h3>
          <ol>
            <li><strong>2급 내용 완전 숙지:</strong> 1급은 2급 내용을 기반으로 심화된 문제가 출제됩니다.</li>
            <li><strong>커널 구조 이해:</strong> 커널 모듈, 컴파일, 파라미터 관련 내용을 집중 학습하세요.</li>
            <li><strong>시스템 관리 실습:</strong> LVM, RAID, PAM 등 실무 관련 내용을 실습하세요.</li>
            <li><strong>기출 문제 분석:</strong> 최근 3년 기출 문제의 출제 패턴을 분석하세요.</li>
          </ol>

          <h3>2차 시험 합격 전략</h3>
          <ol>
            <li><strong>실제 서버 구축 경험:</strong> 가상 머신에서 서버를 직접 구축해 보세요.</li>
            <li><strong>설정 파일 위치 암기:</strong> 주요 서비스의 설정 파일 경로와 옵션을 외우세요.</li>
            <li><strong>명령어 옵션 숙지:</strong> 2차는 실기이므로 정확한 명령어 사용이 필수입니다.</li>
            <li><strong>시나리오 연습:</strong> "웹서버+DB 구축", "방화벽 설정" 등 종합 시나리오를 연습하세요.</li>
          </ol>

          <div className="callout-box tip">
            <strong>Tip:</strong> 가상 머신(VirtualBox, VMware)에 CentOS/Rocky Linux와 Ubuntu를 모두 설치하여
            두 계열의 차이점을 체험하며 학습하는 것이 가장 효과적입니다.
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>학습 시작하기</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade1/part1-ch1" className="btn btn-primary">1차 - 리눅스 실무의 이해 &rarr;</Link>
            <Link to="/grade1/part1-ch2" className="btn btn-secondary">1차 - 리눅스 시스템 관리</Link>
            <Link to="/grade1/part2-ch1" className="btn btn-secondary">2차 - 네트워크 및 서비스 관리</Link>
          </div>
        </section>
        <LessonComplete lessonId="grade1-overview" />
      </div>
    </>
  );
};

export default Grade1Overview;
