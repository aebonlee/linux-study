import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Grade2P2Ch1 = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="2급 2차 - 리눅스 운영 및 관리 - Linux Study"
        description="부팅 과정 상세, 패키지 관리, 로그 관리, 작업 스케줄링을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">2차 - 리눅스 운영 및 관리</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            부팅 과정 상세, 패키지 관리, 로그 관리, 작업 스케줄링
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* 부팅 과정 상세 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>1. 부팅 과정 상세</h2>
          <p>리눅스 시스템의 부팅은 다음 순서로 진행됩니다.</p>

          <h3>부팅 순서</h3>
          <ol>
            <li><strong>BIOS/UEFI:</strong> 하드웨어 초기화, POST(Power-On Self Test) 수행, 부팅 장치 선택</li>
            <li><strong>부트로더(GRUB2):</strong> 커널 이미지와 initramfs를 메모리에 로드</li>
            <li><strong>커널 초기화:</strong> 하드웨어 감지, 드라이버 로드, 루트 파일 시스템 마운트</li>
            <li><strong>init/systemd:</strong> PID 1 프로세스 시작, 서비스 초기화</li>
            <li><strong>런레벨/타겟:</strong> 지정된 런레벨(타겟)에 따라 서비스 시작</li>
            <li><strong>로그인 프롬프트:</strong> 사용자 로그인 대기</li>
          </ol>

          <h3>BIOS vs UEFI</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>BIOS</th>
                  <th>UEFI</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>파티션 테이블</strong></td><td>MBR</td><td>GPT</td></tr>
                <tr><td><strong>최대 디스크 크기</strong></td><td>2TB</td><td>9.4ZB</td></tr>
                <tr><td><strong>최대 파티션 수</strong></td><td>4개 (주 파티션)</td><td>128개</td></tr>
                <tr><td><strong>부팅 속도</strong></td><td>느림</td><td>빠름</td></tr>
                <tr><td><strong>보안 부팅</strong></td><td>미지원</td><td>Secure Boot 지원</td></tr>
              </tbody>
            </table>
          </div>

          <h3>init vs systemd</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>SysV init</th>
                  <th>systemd</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>시작 방식</strong></td><td>순차적 (직렬)</td><td>병렬 시작</td></tr>
                <tr><td><strong>서비스 관리</strong></td><td>셸 스크립트</td><td>유닛(Unit) 파일</td></tr>
                <tr><td><strong>설정 위치</strong></td><td>/etc/init.d/</td><td>/usr/lib/systemd/system/</td></tr>
                <tr><td><strong>관리 명령</strong></td><td>service, chkconfig</td><td>systemctl</td></tr>
                <tr><td><strong>로그 관리</strong></td><td>syslog 텍스트</td><td>journald 바이너리</td></tr>
                <tr><td><strong>런레벨</strong></td><td>0~6</td><td>타겟(target)</td></tr>
              </tbody>
            </table>
          </div>

          <h3>런레벨과 systemd 타겟</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>런레벨</th>
                  <th>systemd 타겟</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>poweroff.target</td><td>시스템 종료</td></tr>
                <tr><td>1</td><td>rescue.target</td><td>단일 사용자 모드 (복구)</td></tr>
                <tr><td>2</td><td>multi-user.target</td><td>다중 사용자 (NFS 없음)</td></tr>
                <tr><td>3</td><td>multi-user.target</td><td>다중 사용자 (텍스트 모드)</td></tr>
                <tr><td>4</td><td>multi-user.target</td><td>사용자 정의</td></tr>
                <tr><td>5</td><td>graphical.target</td><td>다중 사용자 + GUI</td></tr>
                <tr><td>6</td><td>reboot.target</td><td>시스템 재부팅</td></tr>
              </tbody>
            </table>
          </div>

          <div className="code-block">
            <div className="code-header">런레벨/타겟 관리 명령어</div>
            <pre>{`# 현재 런레벨 확인
$ runlevel
N 5

# 현재 타겟 확인
$ systemctl get-default
graphical.target

# 기본 타겟 변경
$ systemctl set-default multi-user.target

# 타겟 전환 (즉시)
$ systemctl isolate multi-user.target

# 시스템 종료/재부팅
$ systemctl poweroff       # 종료
$ systemctl reboot         # 재부팅
$ shutdown -h now          # 즉시 종료
$ shutdown -r +5           # 5분 후 재부팅
$ shutdown -c              # 예약 종료 취소`}</pre>
          </div>
        </section>

        {/* 패키지 관리 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>2. 패키지 관리</h2>

          <h3>RPM (Red Hat Package Manager)</h3>
          <div className="code-block">
            <div className="code-header">rpm 명령어</div>
            <pre>{`# 패키지 설치
$ rpm -ivh package.rpm          # 설치 (i:install, v:verbose, h:hash)

# 패키지 업그레이드
$ rpm -Uvh package.rpm          # 업그레이드 (없으면 설치)
$ rpm -Fvh package.rpm          # 업그레이드만 (없으면 무시)

# 패키지 삭제
$ rpm -e package_name

# 패키지 조회
$ rpm -qa                       # 설치된 모든 패키지
$ rpm -qa | grep httpd          # 특정 패키지 검색
$ rpm -qi httpd                 # 패키지 상세 정보
$ rpm -ql httpd                 # 패키지 파일 목록
$ rpm -qf /etc/passwd           # 파일이 속한 패키지
$ rpm -qR httpd                 # 의존성 확인

# 미설치 패키지 조회 (-p 옵션)
$ rpm -qip package.rpm          # 미설치 패키지 정보
$ rpm -qlp package.rpm          # 미설치 패키지 파일 목록`}</pre>
          </div>

          <h3>YUM / DNF</h3>
          <div className="code-block">
            <div className="code-header">yum/dnf 명령어 (의존성 자동 해결)</div>
            <pre>{`# 패키지 설치
$ yum install httpd
$ dnf install httpd             # RHEL 8+, Fedora

# 패키지 삭제
$ yum remove httpd
$ dnf remove httpd

# 패키지 업데이트
$ yum update                    # 전체 업데이트
$ yum update httpd              # 특정 패키지 업데이트

# 패키지 검색
$ yum search keyword
$ yum info httpd

# 패키지 목록
$ yum list installed            # 설치된 패키지
$ yum list available            # 설치 가능한 패키지

# 저장소(Repository) 관리
$ yum repolist                  # 활성 저장소 목록
# 설정 파일: /etc/yum.repos.d/*.repo`}</pre>
          </div>

          <h3>APT (Debian/Ubuntu)</h3>
          <div className="code-block">
            <div className="code-header">apt/dpkg 명령어</div>
            <pre>{`# dpkg (저수준)
$ dpkg -i package.deb           # 설치
$ dpkg -r package_name          # 삭제
$ dpkg -l                       # 설치된 패키지 목록
$ dpkg -L package_name          # 패키지 파일 목록
$ dpkg -S /path/to/file         # 파일이 속한 패키지

# apt-get / apt (고수준, 의존성 자동 해결)
$ apt update                    # 패키지 목록 갱신
$ apt install httpd             # 설치
$ apt remove httpd              # 삭제
$ apt upgrade                   # 전체 업그레이드
$ apt search keyword            # 검색
$ apt show package              # 패키지 정보

# 저장소 설정: /etc/apt/sources.list`}</pre>
          </div>

          <div className="callout-box tip">
            <strong>시험 빈출:</strong> rpm -qa는 "설치된 모든 패키지 조회",
            rpm -qf는 "특정 파일이 어느 패키지에 속하는지 확인"하는 명령입니다.
          </div>
        </section>

        {/* 로그 관리 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>3. 로그 관리</h2>

          <h3>주요 로그 파일</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>로그 파일</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>/var/log/messages</strong></td><td>시스템 전반 로그 (CentOS/RHEL)</td></tr>
                <tr><td><strong>/var/log/syslog</strong></td><td>시스템 전반 로그 (Ubuntu/Debian)</td></tr>
                <tr><td><strong>/var/log/secure</strong></td><td>인증/보안 관련 (CentOS/RHEL)</td></tr>
                <tr><td><strong>/var/log/auth.log</strong></td><td>인증/보안 관련 (Ubuntu/Debian)</td></tr>
                <tr><td><strong>/var/log/boot.log</strong></td><td>부팅 과정 로그</td></tr>
                <tr><td><strong>/var/log/dmesg</strong></td><td>커널 부팅 메시지</td></tr>
                <tr><td><strong>/var/log/cron</strong></td><td>cron 작업 로그</td></tr>
                <tr><td><strong>/var/log/maillog</strong></td><td>메일 서비스 로그</td></tr>
                <tr><td><strong>/var/log/httpd/</strong></td><td>Apache 웹 서버 로그</td></tr>
                <tr><td><strong>/var/log/lastlog</strong></td><td>마지막 로그인 기록 (바이너리)</td></tr>
                <tr><td><strong>/var/log/wtmp</strong></td><td>로그인/로그아웃 기록 (바이너리)</td></tr>
                <tr><td><strong>/var/log/btmp</strong></td><td>실패한 로그인 기록 (바이너리)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="code-block">
            <div className="code-header">journalctl - systemd 저널 로그 조회</div>
            <pre>{`# 전체 로그 조회
$ journalctl

# 최근 로그
$ journalctl -n 50               # 최근 50줄
$ journalctl -f                  # 실시간 모니터링 (tail -f 유사)

# 특정 서비스 로그
$ journalctl -u httpd            # httpd 서비스 로그
$ journalctl -u sshd --since today

# 시간 기반 필터
$ journalctl --since "2024-01-01"
$ journalctl --since "1 hour ago"
$ journalctl --since "2024-01-01" --until "2024-01-31"

# 우선순위 필터
$ journalctl -p err              # 에러 이상
# 우선순위: emerg, alert, crit, err, warning, notice, info, debug

# 부팅별 로그
$ journalctl -b                  # 현재 부팅
$ journalctl -b -1               # 이전 부팅

# 커널 메시지
$ journalctl -k
$ dmesg`}</pre>
          </div>
        </section>

        {/* 작업 스케줄링 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>4. 작업 스케줄링</h2>

          <h3>cron - 반복 작업 스케줄링</h3>
          <div className="code-block">
            <div className="code-header">crontab 설정</div>
            <pre>{`# crontab 관리
$ crontab -e                     # 편집
$ crontab -l                     # 조회
$ crontab -r                     # 삭제
$ crontab -u user1 -l            # 특정 사용자 조회 (root만)

# crontab 형식
# 분  시  일  월  요일  명령어
# 0-59 0-23 1-31 1-12 0-7(0,7=일요일)

# 예제
30 2 * * *   /home/user/backup.sh     # 매일 02:30 실행
0 */6 * * *  /usr/bin/updatedb         # 6시간마다 실행
0 9 * * 1    /home/user/weekly.sh      # 매주 월요일 09:00
0 0 1 * *    /home/user/monthly.sh     # 매월 1일 00:00
*/5 * * * *  /home/user/check.sh       # 5분마다 실행
0 9-18 * * 1-5  /home/user/work.sh     # 평일 9~18시 매시간

# 시스템 cron 설정 파일
# /etc/crontab           - 시스템 크론
# /etc/cron.d/           - 추가 크론 설정
# /etc/cron.daily/       - 매일 실행 스크립트
# /etc/cron.weekly/      - 매주 실행 스크립트
# /etc/cron.monthly/     - 매월 실행 스크립트

# cron 접근 제어
# /etc/cron.allow        - 허용 사용자 목록
# /etc/cron.deny         - 거부 사용자 목록`}</pre>
          </div>

          <h3>at - 일회성 작업 스케줄링</h3>
          <div className="code-block">
            <div className="code-header">at 명령어</div>
            <pre>{`# 특정 시간에 일회성 작업 예약
$ at 3:00 AM
at> /home/user/backup.sh
at> <Ctrl+D>

$ at now + 30 minutes
at> echo "30분 후 실행" >> /tmp/at_log.txt
at> <Ctrl+D>

$ at 10:00 AM 2024-12-25
at> /home/user/christmas.sh
at> <Ctrl+D>

# 예약 작업 확인
$ atq

# 예약 작업 삭제
$ atrm 작업번호

# 접근 제어
# /etc/at.allow
# /etc/at.deny`}</pre>
          </div>

          <div className="callout-box info">
            <strong>시험 빈출:</strong> crontab에서 "매주 일요일 새벽 3시에 실행"은 <code>0 3 * * 0</code>입니다.
            요일은 0(일)~6(토)이며, 7도 일요일을 의미합니다.
          </div>
        </section>

        {/* 연습문제 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>연습문제</h2>

          <div className="callout-box info">
            <strong>문제 1:</strong> systemd에서 런레벨 3에 해당하는 타겟(target)은?<br />
            (1) graphical.target &nbsp; (2) multi-user.target &nbsp; (3) rescue.target &nbsp; (4) poweroff.target<br /><br />
            <strong>정답:</strong> (2) multi-user.target - 런레벨 3(다중 사용자, 텍스트 모드)에 해당합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 2:</strong> rpm 명령으로 /usr/bin/wget 파일이 어떤 패키지에 속하는지 확인하는 명령은?<br />
            (1) rpm -qi wget &nbsp; (2) rpm -ql wget &nbsp; (3) rpm -qf /usr/bin/wget &nbsp; (4) rpm -qa wget<br /><br />
            <strong>정답:</strong> (3) rpm -qf /usr/bin/wget - -qf 옵션은 파일이 속한 패키지를 조회합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 3:</strong> crontab에서 "매일 새벽 2시 30분에 실행"을 설정하는 올바른 형식은?<br />
            (1) 2 30 * * * cmd &nbsp; (2) 30 2 * * * cmd &nbsp; (3) * 2 30 * * cmd &nbsp; (4) 30 * 2 * * cmd<br /><br />
            <strong>정답:</strong> (2) 30 2 * * * cmd - 형식은 "분 시 일 월 요일" 순서입니다.
          </div>
        </section>

        {/* 다음 학습 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade2/part2-ch2" className="btn btn-primary">2차 - 리눅스 활용 &rarr;</Link>
            <Link to="/grade2/part1-ch3" className="btn btn-secondary">&larr; 1차 - 리눅스 기초 명령어</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Grade2P2Ch1;
