import{u as a,j as e,L as s}from"./index-DlC1-ik2.js";import{u as r,S as n}from"./SEOHead-CBdU9Lmi.js";import{L as t}from"./LessonComplete-hHyfxVIi.js";const o=()=>{r();const{t:c}=a();return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"1급 실기 - 네트워크 보안 실무 - Linux Study",description:"VPN 구축, IDS/IPS, 백업 및 복구 전략, 고난도 실무 시나리오를 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"실기 - 네트워크 보안 실무"}),e.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"VPN 구축, IDS/IPS, 백업 및 복구, 고난도 실무 시나리오 (고난도)"})]})}),e.jsxs("div",{className:"lesson-body container",children:[e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"1. VPN 구축 (OpenVPN)"}),e.jsx("p",{children:"VPN(Virtual Private Network)은 공용 네트워크를 통해 안전한 사설 네트워크 연결을 구축하는 기술입니다. OpenVPN은 SSL/TLS 기반의 오픈소스 VPN 솔루션입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"OpenVPN 서버 구축"}),e.jsx("pre",{children:`# 설치
$ yum install epel-release
$ yum install openvpn easy-rsa

# PKI 환경 구축
$ mkdir -p /etc/openvpn/easy-rsa
$ cp -r /usr/share/easy-rsa/3/* /etc/openvpn/easy-rsa/
$ cd /etc/openvpn/easy-rsa

# CA 초기화 및 인증서 생성
$ ./easyrsa init-pki
$ ./easyrsa build-ca nopass
$ ./easyrsa gen-req server nopass
$ ./easyrsa sign-req server server
$ ./easyrsa gen-dh
$ openvpn --genkey --secret ta.key

# 클라이언트 인증서 생성
$ ./easyrsa gen-req client1 nopass
$ ./easyrsa sign-req client client1

# 서버 설정: /etc/openvpn/server.conf
port 1194
proto udp
dev tun
ca /etc/openvpn/easy-rsa/pki/ca.crt
cert /etc/openvpn/easy-rsa/pki/issued/server.crt
key /etc/openvpn/easy-rsa/pki/private/server.key
dh /etc/openvpn/easy-rsa/pki/dh.pem
tls-auth /etc/openvpn/easy-rsa/ta.key 0
server 10.8.0.0 255.255.255.0
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 8.8.8.8"
keepalive 10 120
cipher AES-256-GCM
user nobody
group nobody
persist-key
persist-tun
log /var/log/openvpn/openvpn.log

# IP 포워딩 활성화
$ sysctl -w net.ipv4.ip_forward=1

# 방화벽 설정
$ firewall-cmd --permanent --add-service=openvpn
$ firewall-cmd --permanent --add-masquerade
$ firewall-cmd --reload

# 서비스 시작
$ systemctl enable --now openvpn@server`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"2. IDS/IPS"}),e.jsx("h3",{children:"Snort (IDS/IPS)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Snort 기본 설정"}),e.jsx("pre",{children:`# Snort 설치
$ yum install snort

# /etc/snort/snort.conf 주요 설정
var HOME_NET 192.168.1.0/24
var EXTERNAL_NET any
var RULE_PATH /etc/snort/rules

# 규칙 예제
# /etc/snort/rules/local.rules
alert tcp any any -> $HOME_NET 22 \\
  (msg:"SSH Brute Force Attempt"; \\
  flow:to_server,established; \\
  threshold:type both, track by_src, count 5, seconds 60; \\
  sid:1000001; rev:1;)

alert tcp any any -> $HOME_NET 80 \\
  (msg:"SQL Injection Attempt"; \\
  content:"UNION SELECT"; nocase; \\
  sid:1000002; rev:1;)

# Snort 실행 모드
$ snort -A console -q -c /etc/snort/snort.conf -i eth0  # IDS
$ snort -Q --daq afpacket -c /etc/snort/snort.conf -i eth0  # IPS`})]}),e.jsx("h3",{children:"fail2ban (침입 방지)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"fail2ban 설정"}),e.jsx("pre",{children:`# 설치
$ yum install fail2ban
$ systemctl enable --now fail2ban

# /etc/fail2ban/jail.local
[DEFAULT]
bantime = 3600           # 차단 시간 (1시간)
findtime = 600           # 감시 시간 (10분)
maxretry = 3             # 최대 시도 횟수
ignoreip = 127.0.0.1/8 192.168.1.0/24
banaction = firewallcmd-ipset

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/secure
maxretry = 3
bantime = 7200

[apache-auth]
enabled = true
port = http,https
filter = apache-auth
logpath = /var/log/httpd/error_log
maxretry = 5

# 상태 확인
$ fail2ban-client status
$ fail2ban-client status sshd

# 차단 해제
$ fail2ban-client set sshd unbanip 192.168.1.50`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"3. 백업 및 복구 전략"}),e.jsx("h3",{children:"백업 유형"}),e.jsx("div",{className:"lesson-table-wrapper",children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"백업 유형"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"장점"}),e.jsx("th",{children:"단점"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"전체 백업 (Full)"})}),e.jsx("td",{children:"모든 데이터 백업"}),e.jsx("td",{children:"복구 간단"}),e.jsx("td",{children:"시간/공간 많이 소모"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"증분 백업 (Incremental)"})}),e.jsx("td",{children:"마지막 백업 이후 변경분만"}),e.jsx("td",{children:"빠른 백업"}),e.jsx("td",{children:"복구 시 모든 증분 필요"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"차등 백업 (Differential)"})}),e.jsx("td",{children:"마지막 전체 백업 이후 변경분"}),e.jsx("td",{children:"복구 비교적 간단"}),e.jsx("td",{children:"크기 점점 증가"})]})]})]})}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"rsync를 이용한 백업"}),e.jsx("pre",{children:`# rsync 기본 사용법
$ rsync -avz /source/ /backup/          # 로컬 백업
$ rsync -avz -e ssh /source/ user@remote:/backup/  # 원격 백업

# 주요 옵션
# -a: 아카이브 모드 (퍼미션, 소유자, 시간 보존)
# -v: 상세 출력
# -z: 전송 시 압축
# --delete: 원본에 없는 파일은 대상에서 삭제
# --exclude: 제외 패턴
# --backup: 덮어쓸 파일 백업 보관

# 증분 백업 스크립트 (rsync + hard link)
#!/bin/bash
DATE=$(date +%Y%m%d)
BACKUP_DIR="/backup"
LATEST="$BACKUP_DIR/latest"
TARGET="$BACKUP_DIR/$DATE"

rsync -avz --delete \\
  --link-dest=$LATEST \\
  /data/ $TARGET/

rm -f $LATEST
ln -s $TARGET $LATEST

# cron으로 자동화
0 3 * * * /usr/local/bin/incremental-backup.sh`})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"시스템 복구"}),e.jsx("pre",{children:`# 복구 모드 부팅
# GRUB 메뉴에서 'e' 키 → 커널 라인 끝에 추가:
# single 또는 init=/bin/bash 또는 systemd.unit=rescue.target

# 응급 모드 진입
$ systemctl rescue           # 복구 모드
$ systemctl emergency        # 응급 모드

# 파일 시스템 복구
$ fsck -y /dev/sda1

# GRUB 복구
$ grub2-install /dev/sda
$ grub2-mkconfig -o /boot/grub2/grub.cfg

# root 비밀번호 재설정 (GRUB에서)
# 1. GRUB 메뉴에서 'e' → 커널 라인에 rd.break 추가
# 2. Ctrl+X로 부팅
# 3. mount -o remount,rw /sysroot
# 4. chroot /sysroot
# 5. passwd root
# 6. touch /.autorelabel (SELinux 환경)
# 7. exit && reboot`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"4. 고난도 실무 시나리오"}),e.jsxs("div",{className:"callout-box warning",children:[e.jsx("strong",{children:"시나리오: 종합 보안 환경 구축"}),e.jsx("br",{}),"다음 요구사항을 모두 만족하는 서버를 구축하세요.",e.jsx("br",{}),"1. SSH 포트를 2222로 변경하고 키 기반 인증만 허용",e.jsx("br",{}),"2. fail2ban으로 SSH 브루트포스 차단 (5회 실패 시 1시간 차단)",e.jsx("br",{}),"3. 방화벽에서 HTTP(80), HTTPS(443), SSH(2222)만 허용",e.jsx("br",{}),"4. SELinux Enforcing 모드 유지",e.jsx("br",{}),"5. 시스템 로그를 매주 백업"]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"종합 시나리오 풀이"}),e.jsx("pre",{children:`# 1. SSH 보안 설정
$ vi /etc/ssh/sshd_config
Port 2222
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
MaxAuthTries 3

# SELinux 포트 라벨 변경 (SELinux가 2222 허용하도록)
$ semanage port -a -t ssh_port_t -p tcp 2222
$ systemctl restart sshd

# 2. fail2ban 설정
$ vi /etc/fail2ban/jail.local
[sshd]
enabled = true
port = 2222
filter = sshd
logpath = /var/log/secure
maxretry = 5
findtime = 600
bantime = 3600

$ systemctl restart fail2ban

# 3. 방화벽 설정
$ firewall-cmd --permanent --remove-service=ssh    # 기본 22 제거
$ firewall-cmd --permanent --add-port=2222/tcp
$ firewall-cmd --permanent --add-service=http
$ firewall-cmd --permanent --add-service=https
$ firewall-cmd --reload
$ firewall-cmd --list-all

# 4. SELinux 확인
$ getenforce
Enforcing
$ sestatus

# 5. 로그 백업 cron
$ vi /usr/local/bin/log-backup.sh
#!/bin/bash
DATE=$(date +%Y%m%d)
BACKUP_DIR="/backup/logs"
mkdir -p $BACKUP_DIR
tar czvf $BACKUP_DIR/syslog_$DATE.tar.gz /var/log/messages /var/log/secure
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

$ chmod 700 /usr/local/bin/log-backup.sh
$ crontab -e
0 4 * * 0 /usr/local/bin/log-backup.sh`})]}),e.jsxs("div",{className:"callout-box tip",children:[e.jsx("strong",{children:"실기 시험 대비:"})," 실기 시험에서는 정확한 명령어와 설정 파일 경로를 작성해야 합니다. 실제 환경에서 반복 연습하여 명령어를 체화하는 것이 핵심입니다."]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"다음 학습"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(s,{to:"/exam/grade1-round1",className:"btn btn-primary",children:"1급 1차 모의고사 →"}),e.jsx(s,{to:"/grade1/part3-ch1",className:"btn btn-secondary",children:"← 실기 - 서버 구축 실무"}),e.jsx(s,{to:"/commands/basic",className:"btn btn-secondary",children:"명령어 사전"})]})]}),e.jsx(t,{lessonId:"grade1-p3ch2"})]})]})};export{o as default};
