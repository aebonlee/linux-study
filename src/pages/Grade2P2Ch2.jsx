import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const Grade2P2Ch2 = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="2급 2차 - 리눅스 활용 - Linux Study"
        description="네트워크 설정, 방화벽 기초, 서비스 관리, 프린터 관리를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">2차 - 리눅스 활용</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            네트워크 설정, 방화벽 기초, 서비스 관리, 프린터 관리
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* 네트워크 설정 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>1. 네트워크 설정</h2>

          <h3>IP 주소 체계</h3>
          <p>
            IPv4 주소는 32비트로 구성되며, 8비트씩 4개의 옥텟으로 나뉩니다.
            각 옥텟은 0~255 범위의 값을 가집니다.
          </p>

          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>클래스</th>
                  <th>범위</th>
                  <th>기본 서브넷 마스크</th>
                  <th>네트워크 비트</th>
                  <th>호스트 수</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>A</strong></td><td>1.0.0.0 ~ 126.255.255.255</td><td>255.0.0.0 (/8)</td><td>8</td><td>약 1677만</td></tr>
                <tr><td><strong>B</strong></td><td>128.0.0.0 ~ 191.255.255.255</td><td>255.255.0.0 (/16)</td><td>16</td><td>약 6만 5천</td></tr>
                <tr><td><strong>C</strong></td><td>192.0.0.0 ~ 223.255.255.255</td><td>255.255.255.0 (/24)</td><td>24</td><td>254</td></tr>
                <tr><td><strong>D</strong></td><td>224.0.0.0 ~ 239.255.255.255</td><td>-</td><td>-</td><td>멀티캐스트</td></tr>
                <tr><td><strong>E</strong></td><td>240.0.0.0 ~ 255.255.255.255</td><td>-</td><td>-</td><td>실험용</td></tr>
              </tbody>
            </table>
          </div>

          <h3>사설 IP 주소 범위</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>클래스</th><th>사설 IP 범위</th></tr>
              </thead>
              <tbody>
                <tr><td>A</td><td>10.0.0.0 ~ 10.255.255.255</td></tr>
                <tr><td>B</td><td>172.16.0.0 ~ 172.31.255.255</td></tr>
                <tr><td>C</td><td>192.168.0.0 ~ 192.168.255.255</td></tr>
              </tbody>
            </table>
          </div>

          <h3>네트워크 설정 파일</h3>
          <div className="code-block">
            <div className="code-header">CentOS/RHEL 네트워크 설정</div>
            <pre>{`# 네트워크 인터페이스 설정 (CentOS/RHEL)
$ cat /etc/sysconfig/network-scripts/ifcfg-eth0
TYPE=Ethernet
DEVICE=eth0
BOOTPROTO=static          # static 또는 dhcp
ONBOOT=yes                # 부팅 시 자동 활성화
IPADDR=192.168.1.100
NETMASK=255.255.255.0
GATEWAY=192.168.1.1
DNS1=8.8.8.8
DNS2=8.8.4.4

# 네트워크 재시작
$ systemctl restart NetworkManager
$ nmcli connection reload

# nmcli로 설정 (NetworkManager CLI)
$ nmcli con show                        # 연결 목록
$ nmcli con mod eth0 ipv4.addresses 192.168.1.100/24
$ nmcli con mod eth0 ipv4.gateway 192.168.1.1
$ nmcli con mod eth0 ipv4.dns "8.8.8.8"
$ nmcli con mod eth0 ipv4.method manual
$ nmcli con up eth0`}</pre>
          </div>

          <div className="code-block">
            <div className="code-header">Ubuntu/Debian 네트워크 설정 (Netplan)</div>
            <pre>{`# /etc/netplan/01-config.yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]

# 적용
$ sudo netplan apply`}</pre>
          </div>

          <h3>서브넷 마스크와 게이트웨이</h3>
          <ul>
            <li><strong>서브넷 마스크:</strong> 네트워크 부분과 호스트 부분을 구분하는 비트 마스크. 예) 255.255.255.0 = /24</li>
            <li><strong>게이트웨이:</strong> 외부 네트워크로 나가는 출구 역할을 하는 라우터 IP 주소</li>
            <li><strong>DNS:</strong> 도메인 이름을 IP 주소로 변환하는 서버. 설정 파일: /etc/resolv.conf</li>
          </ul>
        </section>

        {/* 방화벽 기초 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>2. 방화벽 기초</h2>

          <h3>iptables</h3>
          <p>
            iptables는 리눅스 커널의 netfilter 프레임워크를 관리하는 명령어 도구입니다.
            패킷 필터링, NAT, 패킷 변조 등의 기능을 제공합니다.
          </p>

          <div className="code-block">
            <div className="code-header">iptables 기본 명령어</div>
            <pre>{`# 규칙 조회
$ iptables -L                    # 기본 (filter) 테이블 조회
$ iptables -L -n -v              # 상세 조회 (숫자 표시)

# 규칙 추가
$ iptables -A INPUT -p tcp --dport 80 -j ACCEPT     # HTTP 허용
$ iptables -A INPUT -p tcp --dport 443 -j ACCEPT    # HTTPS 허용
$ iptables -A INPUT -p tcp --dport 22 -j ACCEPT     # SSH 허용
$ iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT     # 서브넷 허용

# 규칙 삭제
$ iptables -D INPUT 3            # 3번째 규칙 삭제

# 기본 정책 설정
$ iptables -P INPUT DROP         # 기본 거부
$ iptables -P OUTPUT ACCEPT      # 기본 허용
$ iptables -P FORWARD DROP       # 기본 거부

# 규칙 초기화
$ iptables -F                    # 모든 규칙 삭제

# 규칙 저장/복원
$ iptables-save > /etc/iptables.rules
$ iptables-restore < /etc/iptables.rules

# 주요 체인
# INPUT: 들어오는 패킷
# OUTPUT: 나가는 패킷
# FORWARD: 통과하는 패킷 (라우팅)

# 주요 타겟
# ACCEPT: 허용
# DROP: 차단 (응답 없음)
# REJECT: 차단 (응답 보냄)
# LOG: 로그 기록`}</pre>
          </div>

          <h3>firewalld</h3>
          <div className="code-block">
            <div className="code-header">firewalld 관리 (CentOS 7+, RHEL 7+)</div>
            <pre>{`# firewalld 상태 확인
$ systemctl status firewalld
$ firewall-cmd --state

# 기본 존(zone) 확인
$ firewall-cmd --get-default-zone
$ firewall-cmd --get-active-zones

# 서비스 허용
$ firewall-cmd --permanent --add-service=http
$ firewall-cmd --permanent --add-service=https
$ firewall-cmd --permanent --add-service=ssh

# 포트 허용
$ firewall-cmd --permanent --add-port=8080/tcp
$ firewall-cmd --permanent --add-port=53/udp

# 설정 적용
$ firewall-cmd --reload

# 허용 목록 확인
$ firewall-cmd --list-all

# 서비스 제거
$ firewall-cmd --permanent --remove-service=ftp
$ firewall-cmd --reload`}</pre>
          </div>

          <div className="callout-box tip">
            <strong>시험 포인트:</strong> iptables의 -A(Append), -D(Delete), -P(Policy), -F(Flush) 옵션과
            INPUT/OUTPUT/FORWARD 체인의 역할을 정확히 구분하세요.
          </div>
        </section>

        {/* 서비스 관리 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>3. 서비스 관리</h2>

          <div className="code-block">
            <div className="code-header">systemctl - 서비스 관리</div>
            <pre>{`# 서비스 시작/중지/재시작
$ systemctl start httpd
$ systemctl stop httpd
$ systemctl restart httpd
$ systemctl reload httpd         # 설정만 다시 로드

# 서비스 상태 확인
$ systemctl status httpd
$ systemctl is-active httpd      # 실행 중인지 확인
$ systemctl is-enabled httpd     # 부팅 시 자동 시작 여부

# 부팅 시 자동 시작 설정
$ systemctl enable httpd
$ systemctl disable httpd

# 서비스 목록 조회
$ systemctl list-units --type=service
$ systemctl list-units --type=service --state=running
$ systemctl list-unit-files --type=service

# 의존성 확인
$ systemctl list-dependencies httpd`}</pre>
          </div>

          <h3>주요 서비스 포트</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>서비스</th><th>포트</th><th>프로토콜</th></tr>
              </thead>
              <tbody>
                <tr><td>FTP (데이터)</td><td>20</td><td>TCP</td></tr>
                <tr><td>FTP (제어)</td><td>21</td><td>TCP</td></tr>
                <tr><td>SSH</td><td>22</td><td>TCP</td></tr>
                <tr><td>Telnet</td><td>23</td><td>TCP</td></tr>
                <tr><td>SMTP</td><td>25</td><td>TCP</td></tr>
                <tr><td>DNS</td><td>53</td><td>TCP/UDP</td></tr>
                <tr><td>HTTP</td><td>80</td><td>TCP</td></tr>
                <tr><td>POP3</td><td>110</td><td>TCP</td></tr>
                <tr><td>IMAP</td><td>143</td><td>TCP</td></tr>
                <tr><td>HTTPS</td><td>443</td><td>TCP</td></tr>
                <tr><td>NFS</td><td>2049</td><td>TCP/UDP</td></tr>
                <tr><td>MySQL</td><td>3306</td><td>TCP</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 프린터 관리 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>4. 프린터 관리 (CUPS)</h2>
          <p>
            CUPS(Common Unix Printing System)는 리눅스에서 프린터를 관리하는 표준 인쇄 시스템입니다.
            웹 인터페이스(http://localhost:631)를 통해 관리할 수 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header">CUPS 관련 명령어</div>
            <pre>{`# CUPS 서비스 관리
$ systemctl start cups
$ systemctl enable cups

# 프린터 관리 명령어
$ lpstat -a                     # 프린터 상태 확인
$ lpstat -p                     # 프린터 목록
$ lpadmin -p printer1 -E -v socket://192.168.1.200  # 프린터 추가
$ lpadmin -x printer1           # 프린터 삭제

# 인쇄 명령어
$ lp file.txt                   # 기본 프린터로 인쇄
$ lp -d printer1 file.txt       # 특정 프린터로 인쇄
$ lpr file.txt                  # BSD 스타일 인쇄
$ lpq                           # 인쇄 대기열 확인
$ lprm job_id                   # 인쇄 작업 취소
$ cancel job_id                 # 인쇄 작업 취소

# CUPS 설정 파일
# /etc/cups/cupsd.conf          # CUPS 데몬 설정
# /etc/cups/printers.conf       # 프린터 설정`}</pre>
          </div>

          <div className="callout-box info">
            <strong>시험 포인트:</strong> lp, lpr, lpq, lprm, lpstat 명령어의 역할을 구분하세요.
            lp/lpr은 인쇄, lpq는 대기열 확인, lprm/cancel은 취소, lpstat은 상태 확인입니다.
          </div>
        </section>

        {/* 연습문제 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>연습문제</h2>

          <div className="callout-box info">
            <strong>문제 1:</strong> iptables에서 HTTP(80번 포트) 트래픽을 허용하는 명령은?<br />
            (1) iptables -A INPUT -p tcp --dport 80 -j DROP<br />
            (2) iptables -A OUTPUT -p tcp --dport 80 -j ACCEPT<br />
            (3) iptables -A INPUT -p tcp --dport 80 -j ACCEPT<br />
            (4) iptables -A INPUT -p udp --dport 80 -j ACCEPT<br /><br />
            <strong>정답:</strong> (3) INPUT 체인에서 TCP 80번 포트를 ACCEPT합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 2:</strong> SSH 서비스의 기본 포트 번호는?<br />
            (1) 21 &nbsp; (2) 22 &nbsp; (3) 23 &nbsp; (4) 25<br /><br />
            <strong>정답:</strong> (2) 22 - SSH는 22번 포트를 사용합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 3:</strong> systemctl 명령으로 httpd 서비스를 부팅 시 자동 시작하도록 설정하는 명령은?<br />
            (1) systemctl start httpd<br />
            (2) systemctl enable httpd<br />
            (3) systemctl reload httpd<br />
            (4) systemctl restart httpd<br /><br />
            <strong>정답:</strong> (2) systemctl enable - 부팅 시 자동 시작을 설정합니다.
          </div>
        </section>

        {/* 다음 학습 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade2/part2-ch3" className="btn btn-primary">2차 - 리눅스 기초 명령어 &rarr;</Link>
            <Link to="/grade2/part2-ch1" className="btn btn-secondary">&larr; 2차 - 리눅스 운영 및 관리</Link>
          </div>
        </section>
        <LessonComplete lessonId="grade2-p2ch2" />
      </div>
    </>
  );
};

export default Grade2P2Ch2;
