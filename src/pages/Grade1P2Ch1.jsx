import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Grade1P2Ch1 = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="1급 2차 - 네트워크 및 서비스 관리 - Linux Study"
        description="TCP/IP 심화, 서버 구축(Apache, Nginx, DNS, DHCP), 메일/파일 공유 서버를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">2차 - 네트워크 및 서비스 관리</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            네트워크 심화, 서버 구축, 메일 서버, NFS/Samba 파일 공유 (고급)
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        <section className="lesson-section" data-aos="fade-up">
          <h2>1. 네트워크 심화</h2>

          <h3>TCP/IP 모델</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>계층</th><th>TCP/IP</th><th>OSI 모델</th><th>프로토콜/기술</th></tr>
              </thead>
              <tbody>
                <tr><td>4</td><td><strong>응용 계층</strong></td><td>응용/표현/세션</td><td>HTTP, FTP, SSH, DNS, SMTP</td></tr>
                <tr><td>3</td><td><strong>전송 계층</strong></td><td>전송</td><td>TCP, UDP</td></tr>
                <tr><td>2</td><td><strong>인터넷 계층</strong></td><td>네트워크</td><td>IP, ICMP, ARP</td></tr>
                <tr><td>1</td><td><strong>네트워크 접근 계층</strong></td><td>데이터링크/물리</td><td>Ethernet, Wi-Fi</td></tr>
              </tbody>
            </table>
          </div>

          <h3>라우팅</h3>
          <div className="code-block">
            <div className="code-header">라우팅 관리</div>
            <pre>{`# 라우팅 테이블 확인
$ ip route show
default via 192.168.1.1 dev eth0 proto dhcp metric 100
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100

$ route -n
$ netstat -rn

# 정적 라우팅 추가
$ ip route add 10.0.0.0/8 via 192.168.1.254 dev eth0
$ ip route add default via 192.168.1.1

# 라우팅 삭제
$ ip route del 10.0.0.0/8

# IP 포워딩 활성화 (라우터 역할)
$ sysctl -w net.ipv4.ip_forward=1
# /etc/sysctl.conf에 영구 설정: net.ipv4.ip_forward = 1

# traceroute - 경로 추적
$ traceroute 8.8.8.8
$ tracepath 8.8.8.8`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>2. 서버 구축</h2>

          <h3>Apache 웹 서버 심화</h3>
          <div className="code-block">
            <div className="code-header">Apache 가상 호스트 설정</div>
            <pre>{`# /etc/httpd/conf.d/vhost.conf (CentOS)
# /etc/apache2/sites-available/site1.conf (Ubuntu)

<VirtualHost *:80>
    ServerName www.example.com
    ServerAlias example.com
    DocumentRoot /var/www/example
    ErrorLog /var/log/httpd/example-error.log
    CustomLog /var/log/httpd/example-access.log combined

    <Directory /var/www/example>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

# 주요 설정 지시어
# ServerRoot    - Apache 설치 기본 디렉터리
# Listen        - 수신 포트 (기본 80)
# ServerName    - 서버 호스트명
# DocumentRoot  - 웹 문서 루트 디렉터리
# DirectoryIndex - 기본 문서 (index.html)
# MaxClients    - 최대 동시 접속 수
# KeepAlive     - 지속 연결 여부

# 설정 테스트
$ apachectl configtest
$ httpd -t

# 모듈 관리
$ apachectl -M                   # 로드된 모듈 목록
$ a2enmod rewrite                # 모듈 활성화 (Ubuntu)
$ a2dismod rewrite               # 모듈 비활성화 (Ubuntu)`}</pre>
          </div>

          <h3>Nginx 웹 서버</h3>
          <div className="code-block">
            <div className="code-header">Nginx 설정</div>
            <pre>{`# /etc/nginx/nginx.conf
# /etc/nginx/conf.d/default.conf

server {
    listen 80;
    server_name www.example.com;
    root /var/www/example;
    index index.html index.php;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \\.php$ {
        fastcgi_pass unix:/var/run/php-fpm/www.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    access_log /var/log/nginx/example-access.log;
    error_log /var/log/nginx/example-error.log;
}

# Nginx 관리
$ nginx -t                       # 설정 테스트
$ systemctl reload nginx         # 설정 리로드`}</pre>
          </div>

          <h3>DNS 서버 (BIND)</h3>
          <div className="code-block">
            <div className="code-header">BIND DNS 서버 설정</div>
            <pre>{`# 설치
$ yum install bind bind-utils

# 주 설정 파일: /etc/named.conf
options {
    listen-on port 53 { any; };
    directory "/var/named";
    allow-query { any; };
    recursion yes;
    forwarders { 8.8.8.8; 8.8.4.4; };
};

zone "example.com" IN {
    type master;
    file "example.com.zone";
    allow-update { none; };
};

# 존 파일: /var/named/example.com.zone
$TTL 86400
@       IN      SOA     ns1.example.com. admin.example.com. (
                        2024010101 ; Serial
                        3600       ; Refresh
                        1800       ; Retry
                        604800     ; Expire
                        86400 )    ; Minimum TTL

        IN      NS      ns1.example.com.
        IN      NS      ns2.example.com.
        IN      A       192.168.1.10
        IN      MX  10  mail.example.com.

ns1     IN      A       192.168.1.10
ns2     IN      A       192.168.1.11
www     IN      A       192.168.1.10
mail    IN      A       192.168.1.12
ftp     IN      CNAME   www.example.com.

# 레코드 타입: A(IPv4), AAAA(IPv6), CNAME(별칭),
# MX(메일), NS(네임서버), PTR(역방향), SOA(권한 시작)`}</pre>
          </div>

          <h3>DHCP 서버</h3>
          <div className="code-block">
            <div className="code-header">DHCP 서버 설정</div>
            <pre>{`# 설치
$ yum install dhcp-server

# /etc/dhcp/dhcpd.conf
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    option domain-name "example.com";
    option routers 192.168.1.1;
    option broadcast-address 192.168.1.255;
    default-lease-time 600;
    max-lease-time 7200;
}

# 고정 IP 할당
host server1 {
    hardware ethernet 00:11:22:33:44:55;
    fixed-address 192.168.1.50;
}

# DHCP 포트: 67 (서버), 68 (클라이언트)`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>3. 메일 서버</h2>

          <h3>Postfix (SMTP 서버)</h3>
          <div className="code-block">
            <div className="code-header">Postfix 설정</div>
            <pre>{`# 설치
$ yum install postfix

# /etc/postfix/main.cf 주요 설정
myhostname = mail.example.com
mydomain = example.com
myorigin = $mydomain
inet_interfaces = all
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
mynetworks = 192.168.1.0/24, 127.0.0.0/8
home_mailbox = Maildir/

# 서비스 관리
$ systemctl enable --now postfix
$ postfix check                  # 설정 검증

# 메일 관련 포트
# SMTP: 25, Submission: 587, SMTPS: 465`}</pre>
          </div>

          <h3>Dovecot (IMAP/POP3 서버)</h3>
          <div className="code-block">
            <div className="code-header">Dovecot 설정</div>
            <pre>{`# 설치
$ yum install dovecot

# /etc/dovecot/dovecot.conf
protocols = imap pop3
listen = *

# /etc/dovecot/conf.d/10-mail.conf
mail_location = maildir:~/Maildir

# POP3: 110, IMAP: 143, POP3S: 995, IMAPS: 993`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>4. NFS, Samba 파일 공유</h2>

          <h3>NFS (Network File System)</h3>
          <div className="code-block">
            <div className="code-header">NFS 서버/클라이언트 설정</div>
            <pre>{`# 서버 설정
$ yum install nfs-utils
$ systemctl enable --now nfs-server

# /etc/exports
/shared   192.168.1.0/24(rw,sync,no_root_squash)
/data     *(ro,sync)

# 옵션 설명:
# rw: 읽기/쓰기, ro: 읽기 전용
# sync: 동기 쓰기, async: 비동기 쓰기
# no_root_squash: 클라이언트 root를 서버 root로 매핑
# root_squash: 클라이언트 root를 nobody로 매핑 (기본값)

$ exportfs -r                    # 설정 적용
$ exportfs -v                    # 공유 목록 확인

# 클라이언트 마운트
$ mount -t nfs server:/shared /mnt/nfs
$ mount server:/shared /mnt/nfs

# /etc/fstab 영구 마운트
# server:/shared  /mnt/nfs  nfs  defaults  0  0

# NFS 포트: 2049`}</pre>
          </div>

          <h3>Samba (Windows 파일 공유)</h3>
          <div className="code-block">
            <div className="code-header">Samba 설정</div>
            <pre>{`# 설치
$ yum install samba samba-client

# /etc/samba/smb.conf
[global]
    workgroup = WORKGROUP
    security = user
    map to guest = Bad User

[shared]
    path = /srv/samba/shared
    browseable = yes
    writable = yes
    guest ok = no
    valid users = user1, @group1

# Samba 사용자 추가
$ smbpasswd -a user1

# 서비스 시작
$ systemctl enable --now smb nmb

# Samba 클라이언트
$ smbclient //server/shared -U user1
$ mount -t cifs //server/shared /mnt/samba -o username=user1

# 포트: 137-139 (NetBIOS), 445 (SMB/CIFS)`}</pre>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade1/part2-ch2" className="btn btn-primary">2차 - 보안 및 시스템 최적화 &rarr;</Link>
            <Link to="/grade1/part1-ch2" className="btn btn-secondary">&larr; 1차 - 리눅스 시스템 관리</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Grade1P2Ch1;
