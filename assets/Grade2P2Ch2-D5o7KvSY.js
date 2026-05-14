import{u as t,j as s,L as e}from"./index-DR72ppso.js";import{u as l}from"./useAOS-cxFSpkr1.js";import{S as d}from"./SEOHead-CiMDtqLw.js";import{L as r}from"./LessonComplete-aSxEk_H_.js";const x=()=>{l();const{t:c}=t();return s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"2급 2차 - 리눅스 활용 - Linux Study",description:"네트워크 설정, 방화벽 기초, 서비스 관리, 프린터 관리를 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"2차 - 리눅스 활용"}),s.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"네트워크 설정, 방화벽 기초, 서비스 관리, 프린터 관리"})]})}),s.jsxs("div",{className:"lesson-body container",children:[s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"1. 네트워크 설정"}),s.jsx("h3",{children:"IP 주소 체계"}),s.jsx("p",{children:"IPv4 주소는 32비트로 구성되며, 8비트씩 4개의 옥텟으로 나뉩니다. 각 옥텟은 0~255 범위의 값을 가집니다."}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"클래스"}),s.jsx("th",{children:"범위"}),s.jsx("th",{children:"기본 서브넷 마스크"}),s.jsx("th",{children:"네트워크 비트"}),s.jsx("th",{children:"호스트 수"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"A"})}),s.jsx("td",{children:"1.0.0.0 ~ 126.255.255.255"}),s.jsx("td",{children:"255.0.0.0 (/8)"}),s.jsx("td",{children:"8"}),s.jsx("td",{children:"약 1677만"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"B"})}),s.jsx("td",{children:"128.0.0.0 ~ 191.255.255.255"}),s.jsx("td",{children:"255.255.0.0 (/16)"}),s.jsx("td",{children:"16"}),s.jsx("td",{children:"약 6만 5천"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"C"})}),s.jsx("td",{children:"192.0.0.0 ~ 223.255.255.255"}),s.jsx("td",{children:"255.255.255.0 (/24)"}),s.jsx("td",{children:"24"}),s.jsx("td",{children:"254"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"D"})}),s.jsx("td",{children:"224.0.0.0 ~ 239.255.255.255"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"멀티캐스트"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"E"})}),s.jsx("td",{children:"240.0.0.0 ~ 255.255.255.255"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"실험용"})]})]})]})}),s.jsx("h3",{children:"사설 IP 주소 범위"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"클래스"}),s.jsx("th",{children:"사설 IP 범위"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"A"}),s.jsx("td",{children:"10.0.0.0 ~ 10.255.255.255"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"B"}),s.jsx("td",{children:"172.16.0.0 ~ 172.31.255.255"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"C"}),s.jsx("td",{children:"192.168.0.0 ~ 192.168.255.255"})]})]})]})}),s.jsx("h3",{children:"네트워크 설정 파일"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"CentOS/RHEL 네트워크 설정"}),s.jsx("pre",{children:`# 네트워크 인터페이스 설정 (CentOS/RHEL)
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
$ nmcli con up eth0`})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Ubuntu/Debian 네트워크 설정 (Netplan)"}),s.jsx("pre",{children:`# /etc/netplan/01-config.yaml
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
$ sudo netplan apply`})]}),s.jsx("h3",{children:"서브넷 마스크와 게이트웨이"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"서브넷 마스크:"})," 네트워크 부분과 호스트 부분을 구분하는 비트 마스크. 예) 255.255.255.0 = /24"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"게이트웨이:"})," 외부 네트워크로 나가는 출구 역할을 하는 라우터 IP 주소"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"DNS:"})," 도메인 이름을 IP 주소로 변환하는 서버. 설정 파일: /etc/resolv.conf"]})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"2. 방화벽 기초"}),s.jsx("h3",{children:"iptables"}),s.jsx("p",{children:"iptables는 리눅스 커널의 netfilter 프레임워크를 관리하는 명령어 도구입니다. 패킷 필터링, NAT, 패킷 변조 등의 기능을 제공합니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"iptables 기본 명령어"}),s.jsx("pre",{children:`# 규칙 조회
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
# LOG: 로그 기록`})]}),s.jsx("h3",{children:"firewalld"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"firewalld 관리 (CentOS 7+, RHEL 7+)"}),s.jsx("pre",{children:`# firewalld 상태 확인
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
$ firewall-cmd --reload`})]}),s.jsxs("div",{className:"callout-box tip",children:[s.jsx("strong",{children:"시험 포인트:"})," iptables의 -A(Append), -D(Delete), -P(Policy), -F(Flush) 옵션과 INPUT/OUTPUT/FORWARD 체인의 역할을 정확히 구분하세요."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"3. 서비스 관리"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"systemctl - 서비스 관리"}),s.jsx("pre",{children:`# 서비스 시작/중지/재시작
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
$ systemctl list-dependencies httpd`})]}),s.jsx("h3",{children:"주요 서비스 포트"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"서비스"}),s.jsx("th",{children:"포트"}),s.jsx("th",{children:"프로토콜"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"FTP (데이터)"}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"FTP (제어)"}),s.jsx("td",{children:"21"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"SSH"}),s.jsx("td",{children:"22"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Telnet"}),s.jsx("td",{children:"23"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"SMTP"}),s.jsx("td",{children:"25"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"DNS"}),s.jsx("td",{children:"53"}),s.jsx("td",{children:"TCP/UDP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"HTTP"}),s.jsx("td",{children:"80"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"POP3"}),s.jsx("td",{children:"110"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"IMAP"}),s.jsx("td",{children:"143"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"HTTPS"}),s.jsx("td",{children:"443"}),s.jsx("td",{children:"TCP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"NFS"}),s.jsx("td",{children:"2049"}),s.jsx("td",{children:"TCP/UDP"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"MySQL"}),s.jsx("td",{children:"3306"}),s.jsx("td",{children:"TCP"})]})]})]})})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"4. 프린터 관리 (CUPS)"}),s.jsx("p",{children:"CUPS(Common Unix Printing System)는 리눅스에서 프린터를 관리하는 표준 인쇄 시스템입니다. 웹 인터페이스(http://localhost:631)를 통해 관리할 수 있습니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"CUPS 관련 명령어"}),s.jsx("pre",{children:`# CUPS 서비스 관리
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
# /etc/cups/printers.conf       # 프린터 설정`})]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"시험 포인트:"})," lp, lpr, lpq, lprm, lpstat 명령어의 역할을 구분하세요. lp/lpr은 인쇄, lpq는 대기열 확인, lprm/cancel은 취소, lpstat은 상태 확인입니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"연습문제"}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 1:"})," iptables에서 HTTP(80번 포트) 트래픽을 허용하는 명령은?",s.jsx("br",{}),"(1) iptables -A INPUT -p tcp --dport 80 -j DROP",s.jsx("br",{}),"(2) iptables -A OUTPUT -p tcp --dport 80 -j ACCEPT",s.jsx("br",{}),"(3) iptables -A INPUT -p tcp --dport 80 -j ACCEPT",s.jsx("br",{}),"(4) iptables -A INPUT -p udp --dport 80 -j ACCEPT",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (3) INPUT 체인에서 TCP 80번 포트를 ACCEPT합니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 2:"})," SSH 서비스의 기본 포트 번호는?",s.jsx("br",{}),"(1) 21   (2) 22   (3) 23   (4) 25",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (2) 22 - SSH는 22번 포트를 사용합니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 3:"})," systemctl 명령으로 httpd 서비스를 부팅 시 자동 시작하도록 설정하는 명령은?",s.jsx("br",{}),"(1) systemctl start httpd",s.jsx("br",{}),"(2) systemctl enable httpd",s.jsx("br",{}),"(3) systemctl reload httpd",s.jsx("br",{}),"(4) systemctl restart httpd",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (2) systemctl enable - 부팅 시 자동 시작을 설정합니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"다음 학습"}),s.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[s.jsx(e,{to:"/grade2/part2-ch3",className:"btn btn-primary",children:"2차 - 리눅스 기초 명령어 →"}),s.jsx(e,{to:"/grade2/part2-ch1",className:"btn btn-secondary",children:"← 2차 - 리눅스 운영 및 관리"})]})]}),s.jsx(r,{lessonId:"grade2-p2ch2"})]})]})};export{x as default};
