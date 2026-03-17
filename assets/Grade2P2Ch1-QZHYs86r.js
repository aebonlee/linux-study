import{u as r,j as s,L as e}from"./index-D7ZL6_nQ.js";import{u as d}from"./useAOS-DI4pK1Xt.js";import{S as t}from"./SEOHead-DDG9ah2A.js";import{L as l}from"./LessonComplete-C0JnKgiB.js";const j=()=>{d();const{t:c}=r();return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"2급 2차 - 리눅스 운영 및 관리 - Linux Study",description:"부팅 과정 상세, 패키지 관리, 로그 관리, 작업 스케줄링을 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"2차 - 리눅스 운영 및 관리"}),s.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"부팅 과정 상세, 패키지 관리, 로그 관리, 작업 스케줄링"})]})}),s.jsxs("div",{className:"lesson-body container",children:[s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"1. 부팅 과정 상세"}),s.jsx("p",{children:"리눅스 시스템의 부팅은 다음 순서로 진행됩니다."}),s.jsx("h3",{children:"부팅 순서"}),s.jsxs("ol",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"BIOS/UEFI:"})," 하드웨어 초기화, POST(Power-On Self Test) 수행, 부팅 장치 선택"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"부트로더(GRUB2):"})," 커널 이미지와 initramfs를 메모리에 로드"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"커널 초기화:"})," 하드웨어 감지, 드라이버 로드, 루트 파일 시스템 마운트"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"init/systemd:"})," PID 1 프로세스 시작, 서비스 초기화"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"런레벨/타겟:"})," 지정된 런레벨(타겟)에 따라 서비스 시작"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"로그인 프롬프트:"})," 사용자 로그인 대기"]})]}),s.jsx("h3",{children:"BIOS vs UEFI"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"구분"}),s.jsx("th",{children:"BIOS"}),s.jsx("th",{children:"UEFI"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"파티션 테이블"})}),s.jsx("td",{children:"MBR"}),s.jsx("td",{children:"GPT"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"최대 디스크 크기"})}),s.jsx("td",{children:"2TB"}),s.jsx("td",{children:"9.4ZB"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"최대 파티션 수"})}),s.jsx("td",{children:"4개 (주 파티션)"}),s.jsx("td",{children:"128개"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"부팅 속도"})}),s.jsx("td",{children:"느림"}),s.jsx("td",{children:"빠름"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"보안 부팅"})}),s.jsx("td",{children:"미지원"}),s.jsx("td",{children:"Secure Boot 지원"})]})]})]})}),s.jsx("h3",{children:"init vs systemd"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"구분"}),s.jsx("th",{children:"SysV init"}),s.jsx("th",{children:"systemd"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"시작 방식"})}),s.jsx("td",{children:"순차적 (직렬)"}),s.jsx("td",{children:"병렬 시작"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"서비스 관리"})}),s.jsx("td",{children:"셸 스크립트"}),s.jsx("td",{children:"유닛(Unit) 파일"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"설정 위치"})}),s.jsx("td",{children:"/etc/init.d/"}),s.jsx("td",{children:"/usr/lib/systemd/system/"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"관리 명령"})}),s.jsx("td",{children:"service, chkconfig"}),s.jsx("td",{children:"systemctl"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"로그 관리"})}),s.jsx("td",{children:"syslog 텍스트"}),s.jsx("td",{children:"journald 바이너리"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"런레벨"})}),s.jsx("td",{children:"0~6"}),s.jsx("td",{children:"타겟(target)"})]})]})]})}),s.jsx("h3",{children:"런레벨과 systemd 타겟"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"런레벨"}),s.jsx("th",{children:"systemd 타겟"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"0"}),s.jsx("td",{children:"poweroff.target"}),s.jsx("td",{children:"시스템 종료"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"1"}),s.jsx("td",{children:"rescue.target"}),s.jsx("td",{children:"단일 사용자 모드 (복구)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"2"}),s.jsx("td",{children:"multi-user.target"}),s.jsx("td",{children:"다중 사용자 (NFS 없음)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"3"}),s.jsx("td",{children:"multi-user.target"}),s.jsx("td",{children:"다중 사용자 (텍스트 모드)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"4"}),s.jsx("td",{children:"multi-user.target"}),s.jsx("td",{children:"사용자 정의"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"5"}),s.jsx("td",{children:"graphical.target"}),s.jsx("td",{children:"다중 사용자 + GUI"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"6"}),s.jsx("td",{children:"reboot.target"}),s.jsx("td",{children:"시스템 재부팅"})]})]})]})}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"런레벨/타겟 관리 명령어"}),s.jsx("pre",{children:`# 현재 런레벨 확인
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
$ shutdown -c              # 예약 종료 취소`})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"2. 패키지 관리"}),s.jsx("h3",{children:"RPM (Red Hat Package Manager)"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"rpm 명령어"}),s.jsx("pre",{children:`# 패키지 설치
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
$ rpm -qlp package.rpm          # 미설치 패키지 파일 목록`})]}),s.jsx("h3",{children:"YUM / DNF"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"yum/dnf 명령어 (의존성 자동 해결)"}),s.jsx("pre",{children:`# 패키지 설치
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
# 설정 파일: /etc/yum.repos.d/*.repo`})]}),s.jsx("h3",{children:"APT (Debian/Ubuntu)"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"apt/dpkg 명령어"}),s.jsx("pre",{children:`# dpkg (저수준)
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

# 저장소 설정: /etc/apt/sources.list`})]}),s.jsxs("div",{className:"callout-box tip",children:[s.jsx("strong",{children:"시험 빈출:"}),' rpm -qa는 "설치된 모든 패키지 조회", rpm -qf는 "특정 파일이 어느 패키지에 속하는지 확인"하는 명령입니다.']})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"3. 로그 관리"}),s.jsx("h3",{children:"주요 로그 파일"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"로그 파일"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/messages"})}),s.jsx("td",{children:"시스템 전반 로그 (CentOS/RHEL)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/syslog"})}),s.jsx("td",{children:"시스템 전반 로그 (Ubuntu/Debian)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/secure"})}),s.jsx("td",{children:"인증/보안 관련 (CentOS/RHEL)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/auth.log"})}),s.jsx("td",{children:"인증/보안 관련 (Ubuntu/Debian)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/boot.log"})}),s.jsx("td",{children:"부팅 과정 로그"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/dmesg"})}),s.jsx("td",{children:"커널 부팅 메시지"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/cron"})}),s.jsx("td",{children:"cron 작업 로그"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/maillog"})}),s.jsx("td",{children:"메일 서비스 로그"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/httpd/"})}),s.jsx("td",{children:"Apache 웹 서버 로그"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/lastlog"})}),s.jsx("td",{children:"마지막 로그인 기록 (바이너리)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/wtmp"})}),s.jsx("td",{children:"로그인/로그아웃 기록 (바이너리)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var/log/btmp"})}),s.jsx("td",{children:"실패한 로그인 기록 (바이너리)"})]})]})]})}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"journalctl - systemd 저널 로그 조회"}),s.jsx("pre",{children:`# 전체 로그 조회
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
$ dmesg`})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"4. 작업 스케줄링"}),s.jsx("h3",{children:"cron - 반복 작업 스케줄링"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"crontab 설정"}),s.jsx("pre",{children:`# crontab 관리
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
# /etc/cron.deny         - 거부 사용자 목록`})]}),s.jsx("h3",{children:"at - 일회성 작업 스케줄링"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"at 명령어"}),s.jsx("pre",{children:`# 특정 시간에 일회성 작업 예약
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
# /etc/at.deny`})]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"시험 빈출:"}),' crontab에서 "매주 일요일 새벽 3시에 실행"은 ',s.jsx("code",{children:"0 3 * * 0"}),"입니다. 요일은 0(일)~6(토)이며, 7도 일요일을 의미합니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"연습문제"}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 1:"})," systemd에서 런레벨 3에 해당하는 타겟(target)은?",s.jsx("br",{}),"(1) graphical.target   (2) multi-user.target   (3) rescue.target   (4) poweroff.target",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (2) multi-user.target - 런레벨 3(다중 사용자, 텍스트 모드)에 해당합니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 2:"})," rpm 명령으로 /usr/bin/wget 파일이 어떤 패키지에 속하는지 확인하는 명령은?",s.jsx("br",{}),"(1) rpm -qi wget   (2) rpm -ql wget   (3) rpm -qf /usr/bin/wget   (4) rpm -qa wget",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (3) rpm -qf /usr/bin/wget - -qf 옵션은 파일이 속한 패키지를 조회합니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 3:"}),' crontab에서 "매일 새벽 2시 30분에 실행"을 설정하는 올바른 형식은?',s.jsx("br",{}),"(1) 2 30 * * * cmd   (2) 30 2 * * * cmd   (3) * 2 30 * * cmd   (4) 30 * 2 * * cmd",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"}),' (2) 30 2 * * * cmd - 형식은 "분 시 일 월 요일" 순서입니다.']})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"다음 학습"}),s.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[s.jsx(e,{to:"/grade2/part2-ch2",className:"btn btn-primary",children:"2차 - 리눅스 활용 →"}),s.jsx(e,{to:"/grade2/part1-ch3",className:"btn btn-secondary",children:"← 1차 - 리눅스 기초 명령어"})]})]}),s.jsx(l,{lessonId:"grade2-p2ch1"})]})]})};export{j as default};
