import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Grade1P2Ch2 = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="1급 2차 - 보안 및 시스템 최적화 - Linux Study"
        description="SELinux, AppArmor, 방화벽 심화, SSH 보안, 로그 분석, 성능 최적화를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">2차 - 보안 및 시스템 최적화</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            SELinux, 방화벽 심화, SSH 보안, 로그 분석 및 감사, 성능 최적화 (고급)
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        <section className="lesson-section" data-aos="fade-up">
          <h2>1. SELinux / AppArmor</h2>

          <h3>SELinux (Security-Enhanced Linux)</h3>
          <p>
            SELinux는 NSA가 개발한 MAC(Mandatory Access Control) 보안 모듈로,
            기존 DAC(Discretionary Access Control) 위에 추가적인 보안 계층을 제공합니다.
          </p>

          <div className="code-block">
            <div className="code-header">SELinux 관리</div>
            <pre>{`# SELinux 상태 확인
$ getenforce
Enforcing

$ sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
Current mode:                   enforcing
Mode from config file:          enforcing
Policy:                         targeted

# SELinux 모드
# Enforcing  - 정책 위반 차단 + 로그
# Permissive - 정책 위반 허용 + 로그 (테스트용)
# Disabled   - SELinux 비활성화

# 모드 변경 (임시)
$ setenforce 0              # Permissive
$ setenforce 1              # Enforcing

# 모드 변경 (영구) - /etc/selinux/config
SELINUX=enforcing
# enforcing, permissive, disabled

# SELinux 컨텍스트 확인
$ ls -Z /var/www/html/
-rw-r--r--. root root unconfined_u:object_r:httpd_sys_content_t:s0 index.html

# 컨텍스트 형식: user:role:type:level
# type이 가장 중요 (타입 강제 정책)

# 컨텍스트 변경
$ chcon -t httpd_sys_content_t /var/www/html/newfile.html
$ restorecon -Rv /var/www/html/   # 기본 컨텍스트 복원

# SELinux Boolean 관리
$ getsebool -a                    # 모든 Boolean 확인
$ getsebool httpd_can_network_connect
$ setsebool -P httpd_can_network_connect on  # 영구 설정

# SELinux 문제 해결
$ ausearch -m avc -ts recent      # AVC 거부 로그 확인
$ sealert -a /var/log/audit/audit.log  # 분석 도구
$ audit2why < /var/log/audit/audit.log # 거부 이유 분석
$ audit2allow -a                   # 허용 정책 생성`}</pre>
          </div>

          <h3>AppArmor</h3>
          <div className="code-block">
            <div className="code-header">AppArmor 관리 (Ubuntu/Debian)</div>
            <pre>{`# AppArmor 상태 확인
$ aa-status
$ apparmor_status

# 프로파일 모드 변경
$ aa-enforce /etc/apparmor.d/usr.sbin.nginx   # Enforce 모드
$ aa-complain /etc/apparmor.d/usr.sbin.nginx  # Complain 모드
$ aa-disable /etc/apparmor.d/usr.sbin.nginx   # 비활성화

# 프로파일 위치: /etc/apparmor.d/`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>2. 방화벽 심화</h2>

          <h3>iptables 체인과 테이블</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>테이블</th><th>용도</th><th>체인</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>filter</strong></td><td>패킷 필터링 (기본)</td><td>INPUT, OUTPUT, FORWARD</td></tr>
                <tr><td><strong>nat</strong></td><td>주소 변환</td><td>PREROUTING, POSTROUTING, OUTPUT</td></tr>
                <tr><td><strong>mangle</strong></td><td>패킷 변조</td><td>모든 체인</td></tr>
                <tr><td><strong>raw</strong></td><td>연결 추적 제외</td><td>PREROUTING, OUTPUT</td></tr>
              </tbody>
            </table>
          </div>

          <div className="code-block">
            <div className="code-header">iptables 고급 설정</div>
            <pre>{`# NAT 설정 (IP 마스커레이드)
$ iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# 포트 포워딩 (DNAT)
$ iptables -t nat -A PREROUTING -p tcp --dport 8080 \\
  -j DNAT --to-destination 192.168.1.100:80

# 연결 상태 기반 필터링
$ iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
$ iptables -A INPUT -m conntrack --ctstate NEW -p tcp --dport 22 -j ACCEPT

# 로깅
$ iptables -A INPUT -j LOG --log-prefix "IPT-DROP: " --log-level 4
$ iptables -A INPUT -j DROP

# 속도 제한 (DDoS 방어)
$ iptables -A INPUT -p tcp --dport 80 -m limit \\
  --limit 25/minute --limit-burst 100 -j ACCEPT

# SYN Flood 방어
$ iptables -A INPUT -p tcp --syn -m connlimit \\
  --connlimit-above 50 -j DROP`}</pre>
          </div>

          <h3>nftables (iptables 후속)</h3>
          <div className="code-block">
            <div className="code-header">nftables 기본 설정</div>
            <pre>{`# nftables 관리
$ nft list ruleset               # 전체 규칙 확인
$ nft flush ruleset               # 모든 규칙 삭제

# 테이블 생성
$ nft add table inet my_table

# 체인 생성
$ nft add chain inet my_table input \\
  '{ type filter hook input priority 0; policy drop; }'

# 규칙 추가
$ nft add rule inet my_table input tcp dport 22 accept
$ nft add rule inet my_table input tcp dport {80, 443} accept
$ nft add rule inet my_table input ct state established,related accept

# 설정 파일: /etc/nftables.conf
$ systemctl enable --now nftables`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>3. SSH 보안 설정</h2>

          <div className="code-block">
            <div className="code-header">SSH 보안 강화 (/etc/ssh/sshd_config)</div>
            <pre>{`# 기본 포트 변경
Port 2222

# root 로그인 비활성화
PermitRootLogin no

# 비밀번호 인증 비활성화 (키 인증만 허용)
PasswordAuthentication no
PubkeyAuthentication yes

# 빈 비밀번호 거부
PermitEmptyPasswords no

# 최대 인증 시도 횟수
MaxAuthTries 3

# 접속 허용 사용자/그룹 제한
AllowUsers user1 user2
AllowGroups sshusers

# 접속 시간 제한
LoginGraceTime 30
ClientAliveInterval 300
ClientAliveCountMax 2

# 프로토콜 버전 (SSH v2만)
Protocol 2

# X11 포워딩 비활성화
X11Forwarding no

# SSH 키 기반 인증 설정
$ ssh-keygen -t ed25519 -C "user@host"
$ ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server
$ ssh -i ~/.ssh/id_ed25519 user@server

# SSH 설정 적용
$ systemctl restart sshd
$ sshd -t                        # 설정 구문 검사`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>4. 로그 분석 및 감사 (audit)</h2>

          <div className="code-block">
            <div className="code-header">audit 시스템</div>
            <pre>{`# auditd 서비스 시작
$ systemctl enable --now auditd

# 감사 규칙 추가
$ auditctl -w /etc/passwd -p wa -k passwd_changes
# -w: 감시 파일, -p: 퍼미션(w=쓰기, a=속성변경, r=읽기, x=실행)
# -k: 키(태그)

$ auditctl -w /etc/shadow -p wa -k shadow_changes
$ auditctl -a always,exit -F arch=b64 -S execve -k commands

# 영구 규칙: /etc/audit/rules.d/audit.rules
-w /etc/passwd -p wa -k passwd_changes
-w /etc/shadow -p wa -k shadow_changes
-w /var/log/ -p wa -k log_changes

# 감사 로그 검색
$ ausearch -k passwd_changes     # 키로 검색
$ ausearch -m USER_AUTH           # 인증 이벤트
$ ausearch -ui 1000               # 특정 UID
$ ausearch -ts today              # 오늘 이벤트

# 감사 보고서
$ aureport                        # 종합 보고서
$ aureport -au                    # 인증 보고서
$ aureport -l                     # 로그인 보고서
$ aureport -f                     # 파일 관련 보고서`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>5. 성능 최적화</h2>

          <div className="code-block">
            <div className="code-header">시스템 성능 최적화 기법</div>
            <pre>{`# I/O 스케줄러 변경
$ cat /sys/block/sda/queue/scheduler
[mq-deadline] none
$ echo "deadline" > /sys/block/sda/queue/scheduler

# 파일 디스크립터 제한 늘리기
$ ulimit -n                       # 현재 제한 확인
$ ulimit -n 65536                 # 임시 변경

# /etc/security/limits.conf (영구)
*    soft    nofile    65536
*    hard    nofile    65536

# 시스템 전체 파일 디스크립터
$ sysctl -w fs.file-max=200000

# 네트워크 스택 튜닝
$ sysctl -w net.core.somaxconn=65535
$ sysctl -w net.ipv4.tcp_max_syn_backlog=65535
$ sysctl -w net.ipv4.tcp_fin_timeout=15
$ sysctl -w net.ipv4.tcp_tw_reuse=1
$ sysctl -w net.core.rmem_max=16777216
$ sysctl -w net.core.wmem_max=16777216

# 스왑 동작 최적화
$ sysctl -w vm.swappiness=10      # 스왑 사용 최소화

# 디스크 I/O 성능 테스트
$ hdparm -tT /dev/sda             # 디스크 읽기 속도

# 프로세스별 리소스 사용 분석
$ strace -c -p PID                # 시스템 호출 통계
$ lsof -p PID                    # 열린 파일 목록
$ perf top                       # CPU 사용 핫스팟`}</pre>
          </div>

          <div className="callout-box tip">
            <strong>실기 대비:</strong> 성능 최적화 문제는 "주어진 상황에서 어떤 파라미터를 조정해야 하는가"를
            묻는 형태로 출제됩니다. 각 sysctl 파라미터의 역할을 정확히 이해하세요.
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade1/part3-ch1" className="btn btn-primary">실기 - 서버 구축 실무 &rarr;</Link>
            <Link to="/grade1/part2-ch1" className="btn btn-secondary">&larr; 2차 - 네트워크 및 서비스 관리</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Grade1P2Ch2;
