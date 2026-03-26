import{u as d,j as e,L as s}from"./index-IBFrzUFB.js";import{u as a}from"./useAOS-C8YkIDkx.js";import{S as c}from"./SEOHead-C4QkrERr.js";import{L as r}from"./LessonComplete-B6tlr2Ct.js";const h=()=>{a();const{t}=d();return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"1급 1차 - 리눅스 시스템 관리 - Linux Study",description:"PAM/LDAP, LVM/RAID, 커널 파라미터 튜닝, 시스템 모니터링을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"1차 - 리눅스 시스템 관리"}),e.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"사용자/그룹 관리 심화, 디스크/스토리지 관리, 커널 튜닝, 시스템 모니터링 (고급)"})]})}),e.jsxs("div",{className:"lesson-body container",children:[e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"1. 사용자/그룹 관리 심화"}),e.jsx("h3",{children:"PAM (Pluggable Authentication Modules)"}),e.jsx("p",{children:"PAM은 리눅스에서 인증 메커니즘을 모듈화하여 관리하는 프레임워크입니다. 응용 프로그램은 PAM을 통해 다양한 인증 방법(패스워드, 지문, OTP 등)을 유연하게 사용할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PAM 설정 구조"}),e.jsx("pre",{children:`# PAM 설정 파일 위치
# /etc/pam.d/          - 서비스별 PAM 설정
# /etc/security/       - PAM 모듈 설정 파일

# PAM 설정 파일 형식
# 타입    제어플래그    모듈경로    [모듈인수]

# /etc/pam.d/system-auth 예제
auth      required    pam_env.so
auth      sufficient  pam_unix.so nullok try_first_pass
auth      requisite   pam_succeed_if.so uid >= 1000 quiet_success
auth      required    pam_deny.so

account   required    pam_unix.so
account   sufficient  pam_localuser.so
account   required    pam_permit.so

password  requisite   pam_pwquality.so try_first_pass retry=3
password  sufficient  pam_unix.so sha512 shadow nullok try_first_pass use_authtok
password  required    pam_deny.so

session   required    pam_limits.so
session   required    pam_unix.so

# 타입(Type):
# auth      - 사용자 인증
# account   - 계정 관리 (접근 허용 여부)
# password  - 패스워드 변경
# session   - 세션 관리 (로그인/로그아웃)

# 제어 플래그(Control):
# required  - 필수 (실패해도 나머지 모듈 실행)
# requisite - 필수 (실패 시 즉시 거부)
# sufficient - 성공하면 바로 허용
# optional  - 선택적`})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"PAM을 이용한 비밀번호 정책 설정"}),e.jsx("pre",{children:`# /etc/security/pwquality.conf
minlen = 8          # 최소 길이
dcredit = -1        # 최소 숫자 1개
ucredit = -1        # 최소 대문자 1개
lcredit = -1        # 최소 소문자 1개
ocredit = -1        # 최소 특수문자 1개
maxrepeat = 3       # 연속 동일 문자 최대 3개

# /etc/security/limits.conf (리소스 제한)
# 사용자   타입   항목     값
user1      hard   nproc    100    # 최대 프로세스 수
user1      hard   nofile   8192   # 최대 열린 파일 수
@group1    soft   nproc    50     # 그룹 단위 설정`})]}),e.jsx("h3",{children:"LDAP (Lightweight Directory Access Protocol)"}),e.jsx("p",{children:"LDAP는 네트워크를 통해 사용자 정보를 중앙 집중식으로 관리하는 디렉터리 서비스 프로토콜입니다. 리눅스에서는 OpenLDAP이 대표적인 LDAP 서버 구현체입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"LDAP 기본 명령어"}),e.jsx("pre",{children:`# OpenLDAP 서버 설치
$ yum install openldap openldap-servers openldap-clients

# LDAP 검색
$ ldapsearch -x -b "dc=example,dc=com" "(uid=user1)"

# LDAP 사용자 추가 (LDIF 파일)
$ cat user.ldif
dn: uid=user1,ou=People,dc=example,dc=com
objectClass: inetOrgPerson
objectClass: posixAccount
uid: user1
cn: User One
sn: One
uidNumber: 10001
gidNumber: 10001
homeDirectory: /home/user1
loginShell: /bin/bash

$ ldapadd -x -D "cn=admin,dc=example,dc=com" -W -f user.ldif

# LDAP 포트: 389 (LDAP), 636 (LDAPS)`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"2. 디스크/스토리지 관리"}),e.jsx("h3",{children:"LVM (Logical Volume Manager)"}),e.jsx("p",{children:"LVM은 물리 디스크를 논리적으로 관리하여, 파티션 크기를 유연하게 조절할 수 있는 기술입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"LVM 구조와 관리"}),e.jsx("pre",{children:`# LVM 계층 구조:
# 물리 볼륨(PV) → 볼륨 그룹(VG) → 논리 볼륨(LV)

# 1. 물리 볼륨(PV) 생성
$ pvcreate /dev/sdb1 /dev/sdc1
$ pvdisplay                      # PV 정보 확인
$ pvs                            # PV 요약

# 2. 볼륨 그룹(VG) 생성
$ vgcreate data_vg /dev/sdb1 /dev/sdc1
$ vgdisplay data_vg              # VG 정보 확인
$ vgs                            # VG 요약

# 3. 논리 볼륨(LV) 생성
$ lvcreate -L 50G -n data_lv data_vg
$ lvcreate -l 100%FREE -n data_lv data_vg  # 전체 공간 사용
$ lvdisplay /dev/data_vg/data_lv
$ lvs                            # LV 요약

# 4. 파일 시스템 생성 및 마운트
$ mkfs.ext4 /dev/data_vg/data_lv
$ mount /dev/data_vg/data_lv /data

# LV 확장 (온라인 가능!)
$ lvextend -L +20G /dev/data_vg/data_lv
$ resize2fs /dev/data_vg/data_lv   # ext4 파일 시스템 확장
$ xfs_growfs /data                 # XFS 파일 시스템 확장

# LV 축소 (ext4만, 오프라인 필요)
$ umount /data
$ e2fsck -f /dev/data_vg/data_lv
$ resize2fs /dev/data_vg/data_lv 30G
$ lvreduce -L 30G /dev/data_vg/data_lv

# VG에 PV 추가
$ pvcreate /dev/sdd1
$ vgextend data_vg /dev/sdd1`})]}),e.jsx("h3",{children:"RAID (Redundant Array of Independent Disks)"}),e.jsx("div",{className:"lesson-table-wrapper",children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"RAID 레벨"}),e.jsx("th",{children:"최소 디스크"}),e.jsx("th",{children:"특징"}),e.jsx("th",{children:"용량 효율"}),e.jsx("th",{children:"내결함성"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"RAID 0"})}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"스트라이핑 (속도 향상)"}),e.jsx("td",{children:"100%"}),e.jsx("td",{children:"없음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"RAID 1"})}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"미러링 (복제)"}),e.jsx("td",{children:"50%"}),e.jsx("td",{children:"1개 디스크 장애"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"RAID 5"})}),e.jsx("td",{children:"3"}),e.jsx("td",{children:"분산 패리티 스트라이핑"}),e.jsx("td",{children:"(N-1)/N"}),e.jsx("td",{children:"1개 디스크 장애"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"RAID 6"})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"이중 분산 패리티"}),e.jsx("td",{children:"(N-2)/N"}),e.jsx("td",{children:"2개 디스크 장애"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"RAID 10"})}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"미러링 + 스트라이핑"}),e.jsx("td",{children:"50%"}),e.jsx("td",{children:"각 미러 1개씩"})]})]})]})}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"mdadm으로 소프트웨어 RAID 구성"}),e.jsx("pre",{children:`# RAID 5 생성 (3개 디스크)
$ mdadm --create /dev/md0 --level=5 --raid-devices=3 \\
  /dev/sdb1 /dev/sdc1 /dev/sdd1

# RAID 상태 확인
$ cat /proc/mdstat
$ mdadm --detail /dev/md0

# 파일 시스템 생성 및 마운트
$ mkfs.ext4 /dev/md0
$ mount /dev/md0 /raid_data

# 설정 저장
$ mdadm --detail --scan >> /etc/mdadm.conf

# 디스크 장애 시뮬레이션
$ mdadm /dev/md0 --fail /dev/sdc1
$ mdadm /dev/md0 --remove /dev/sdc1

# 새 디스크로 교체
$ mdadm /dev/md0 --add /dev/sde1`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"3. 커널 파라미터 튜닝"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"/proc 파일 시스템과 sysctl"}),e.jsx("pre",{children:`# /proc 주요 파일
$ cat /proc/cpuinfo              # CPU 정보
$ cat /proc/meminfo              # 메모리 정보
$ cat /proc/version              # 커널 버전
$ cat /proc/loadavg              # 시스템 부하
$ cat /proc/sys/net/ipv4/ip_forward  # IP 포워딩 상태

# sysctl - 커널 파라미터 조회/설정
$ sysctl -a                      # 모든 파라미터 조회
$ sysctl -a | grep ip_forward

# 임시 설정 (재부팅 시 초기화)
$ sysctl -w net.ipv4.ip_forward=1
$ echo 1 > /proc/sys/net/ipv4/ip_forward

# 영구 설정 (/etc/sysctl.conf 또는 /etc/sysctl.d/*.conf)
# net.ipv4.ip_forward = 1
# net.ipv4.tcp_syncookies = 1
# vm.swappiness = 10
# fs.file-max = 65536
# net.core.somaxconn = 65535

# 설정 적용
$ sysctl -p                      # /etc/sysctl.conf 적용
$ sysctl -p /etc/sysctl.d/custom.conf

# 주요 튜닝 파라미터
# vm.swappiness       - 스왑 사용 비율 (0~100, 낮을수록 RAM 선호)
# fs.file-max          - 시스템 전체 최대 파일 디스크립터 수
# net.core.somaxconn   - TCP 연결 대기 큐 최대 길이
# net.ipv4.tcp_max_syn_backlog  - SYN 대기 큐 크기
# kernel.shmmax        - 공유 메모리 최대 크기`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"4. 시스템 모니터링"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"시스템 모니터링 도구"}),e.jsx("pre",{children:`# sar - 시스템 활동 보고 (sysstat 패키지)
$ sar -u 1 5                     # CPU 사용률 (1초 간격, 5회)
$ sar -r 1 5                     # 메모리 사용률
$ sar -d 1 5                     # 디스크 I/O
$ sar -n DEV 1 5                 # 네트워크 통계
$ sar -q 1 5                     # 시스템 부하 (Load Average)

# vmstat - 가상 메모리 통계
$ vmstat 1 10                    # 1초 간격 10회
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 245680  89712 678432    0    0     2     5   45   89  3  1 96  0  0

# iostat - I/O 통계
$ iostat -x 1 5                  # 확장 디스크 통계

# free - 메모리 사용량
$ free -h
              total   used   free  shared  buff/cache available
Mem:           7.8G   2.1G   3.2G    256M       2.5G      5.1G
Swap:          2.0G      0B   2.0G

# uptime - 시스템 가동 시간과 부하
$ uptime
 14:30:00 up 45 days,  3:22,  2 users,  load average: 0.15, 0.20, 0.18

# Load Average 해석 (1분, 5분, 15분 평균)
# CPU 코어 수 이하 = 정상
# CPU 코어 수 초과 = 과부하

# nmon - 종합 모니터링 (대화형)
$ nmon

# dstat - 실시간 시스템 통계
$ dstat -cdnm 1                  # CPU, 디스크, 네트워크, 메모리`})]}),e.jsxs("div",{className:"callout-box tip",children:[e.jsx("strong",{children:"시험 팁:"})," Load Average에서 값이 CPU 코어 수보다 높으면 시스템이 과부하 상태입니다. 예) 4코어 시스템에서 Load Average가 4.0이면 CPU가 100% 사용 중이라는 의미입니다."]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"다음 학습"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(s,{to:"/grade1/part2-ch1",className:"btn btn-primary",children:"2차 - 네트워크 및 서비스 관리 →"}),e.jsx(s,{to:"/grade1/part1-ch1",className:"btn btn-secondary",children:"← 1차 - 리눅스 실무의 이해"})]})]}),e.jsx(r,{lessonId:"grade1-p1ch2"})]})]})};export{h as default};
