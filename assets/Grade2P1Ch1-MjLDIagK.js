import{u as d,j as s,L as e}from"./index-IBFrzUFB.js";import{u as r}from"./useAOS-C8YkIDkx.js";import{S as n}from"./SEOHead-C4QkrERr.js";import{L as l}from"./LessonComplete-B6tlr2Ct.js";const j=()=>{r();const{t:c}=d();return s.jsxs(s.Fragment,{children:[s.jsx(n,{title:"2급 1차 - 리눅스 운영 및 관리 - Linux Study",description:"리눅스 마스터 2급 1차 시험 - 리눅스의 이해, 설치, 기본 명령어, 사용자 관리, 파일 시스템 관리를 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"1차 - 리눅스 운영 및 관리"}),s.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"리눅스의 이해, 설치, 기본 명령어, 사용자 관리, 파일 시스템 관리"})]})}),s.jsxs("div",{className:"lesson-body container",children:[s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"1. 리눅스의 이해"}),s.jsx("h3",{children:"리눅스의 정의와 특징"}),s.jsx("p",{children:"리눅스는 1991년 리누스 토르발스가 개발한 오픈 소스 운영체제 커널입니다. GNU/Linux라고도 불리며, 리눅스 커널과 GNU 소프트웨어를 결합하여 완성된 운영체제를 구성합니다."}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"다중 사용자 시스템:"})," 여러 사용자가 동시에 접속하여 작업 가능"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"다중 작업 시스템:"})," 여러 프로세스를 동시에 수행 (시분할)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"계층적 파일 시스템:"})," 루트(/)를 최상위로 하는 트리 구조"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"대소문자 구분:"})," 파일명과 명령어에서 대소문자를 구별함"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"셸(Shell):"})," 사용자와 커널 사이의 인터페이스"]})]}),s.jsx("h3",{children:"리눅스 라이선스"}),s.jsx("p",{children:"리눅스 커널은 GPL v2 라이선스를 따릅니다. GPL은 소프트웨어의 자유로운 사용, 수정, 배포를 보장하면서, 수정된 소프트웨어도 동일한 라이선스로 공개하도록 요구합니다."}),s.jsxs("div",{className:"callout-box tip",children:[s.jsx("strong",{children:"시험 빈출:"}),' "리눅스 커널의 라이선스는?" - 정답: GPL v2. GPL, LGPL, BSD, MIT, Apache 라이선스의 차이점을 구분할 수 있어야 합니다.']})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"2. 리눅스 설치"}),s.jsx("h3",{children:"파티션(Partition)"}),s.jsx("p",{children:"하드 디스크를 논리적으로 분할하는 것을 파티션이라 합니다. 리눅스 설치 시 최소한 루트(/) 파티션과 스왑(swap) 파티션이 필요합니다."}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"파티션"}),s.jsx("th",{children:"마운트 포인트"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"권장 크기"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/"})}),s.jsx("td",{children:"/"}),s.jsx("td",{children:"루트 파티션 (전체 파일 시스템의 최상위)"}),s.jsx("td",{children:"20GB 이상"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/boot"})}),s.jsx("td",{children:"/boot"}),s.jsx("td",{children:"부트로더, 커널 이미지 저장"}),s.jsx("td",{children:"500MB~1GB"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/home"})}),s.jsx("td",{children:"/home"}),s.jsx("td",{children:"사용자 홈 디렉터리"}),s.jsx("td",{children:"용도에 따라"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var"})}),s.jsx("td",{children:"/var"}),s.jsx("td",{children:"로그, 메일, 프린트 스풀 등 가변 데이터"}),s.jsx("td",{children:"5GB 이상"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/tmp"})}),s.jsx("td",{children:"/tmp"}),s.jsx("td",{children:"임시 파일 저장"}),s.jsx("td",{children:"2GB 이상"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"swap"})}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"가상 메모리 (스왑 영역)"}),s.jsx("td",{children:"RAM의 1~2배"})]})]})]})}),s.jsx("h3",{children:"부트로더(Boot Loader)"}),s.jsx("p",{children:"부트로더는 시스템 시작 시 운영체제 커널을 메모리에 로드하는 프로그램입니다."}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"GRUB (GRand Unified Bootloader):"})," 현재 대부분의 리눅스 배포판에서 사용하는 부트로더"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"GRUB2:"})," GRUB의 개선 버전, 설정 파일은 ",s.jsx("code",{children:"/boot/grub2/grub.cfg"})]}),s.jsxs("li",{children:[s.jsx("strong",{children:"LILO (LInux LOader):"})," 과거에 사용되던 부트로더 (현재는 거의 사용하지 않음)"]})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"GRUB 설정 파일 확인"}),s.jsx("pre",{children:`# GRUB2 설정 파일 위치
$ cat /boot/grub2/grub.cfg    # CentOS/RHEL
$ cat /boot/grub/grub.cfg     # Ubuntu/Debian

# GRUB 설정 변경 후 적용
$ grub2-mkconfig -o /boot/grub2/grub.cfg  # CentOS
$ update-grub                              # Ubuntu`})]}),s.jsx("h3",{children:"패키지 관리"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"계열"}),s.jsx("th",{children:"저수준 도구"}),s.jsx("th",{children:"고수준 도구"}),s.jsx("th",{children:"패키지 확장자"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Red Hat 계열"})}),s.jsx("td",{children:"rpm"}),s.jsx("td",{children:"yum / dnf"}),s.jsx("td",{children:".rpm"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Debian 계열"})}),s.jsx("td",{children:"dpkg"}),s.jsx("td",{children:"apt / apt-get"}),s.jsx("td",{children:".deb"})]})]})]})})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"3. 기본 명령어"}),s.jsx("h3",{children:"파일 및 디렉터리 관리 명령어"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"ls - 디렉터리 내용 나열"}),s.jsx("pre",{children:`# 현재 디렉터리의 파일 목록
$ ls

# 상세 정보 출력 (퍼미션, 소유자, 크기, 날짜)
$ ls -l

# 숨김 파일 포함 전체 출력
$ ls -la

# 파일 크기를 읽기 쉬운 형태로 출력
$ ls -lh

# 최근 수정 시간순 정렬
$ ls -lt

# 재귀적으로 하위 디렉터리 포함
$ ls -R`})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"cd - 디렉터리 이동"}),s.jsx("pre",{children:`# 홈 디렉터리로 이동
$ cd ~
$ cd

# 상위 디렉터리로 이동
$ cd ..

# 절대 경로로 이동
$ cd /etc/sysconfig

# 이전 디렉터리로 돌아가기
$ cd -

# 현재 디렉터리 확인
$ pwd`})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"cp, mv, rm, mkdir - 파일/디렉터리 관리"}),s.jsx("pre",{children:`# 파일 복사
$ cp source.txt dest.txt
$ cp -r dir1 dir2          # 디렉터리 재귀 복사
$ cp -p file1 file2        # 속성(퍼미션, 소유자, 시간) 보존

# 파일 이동/이름 변경
$ mv oldname.txt newname.txt
$ mv file.txt /tmp/        # 파일 이동

# 파일 삭제
$ rm file.txt
$ rm -r directory/         # 디렉터리 재귀 삭제
$ rm -f file.txt           # 강제 삭제 (확인 없이)
$ rm -rf directory/        # 디렉터리 강제 재귀 삭제

# 디렉터리 생성
$ mkdir newdir
$ mkdir -p parent/child/grandchild  # 중간 디렉터리 자동 생성`})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"chmod - 권한 변경"}),s.jsx("pre",{children:`# 숫자 모드 (8진수)
# r=4, w=2, x=1
$ chmod 755 script.sh      # rwxr-xr-x
$ chmod 644 file.txt       # rw-r--r--
$ chmod 700 private/       # rwx------

# 기호 모드
$ chmod u+x script.sh      # 소유자에 실행 권한 추가
$ chmod g+w file.txt       # 그룹에 쓰기 권한 추가
$ chmod o-r file.txt       # 기타 사용자 읽기 권한 제거
$ chmod a+r file.txt       # 모든 사용자 읽기 권한 추가

# 재귀적 적용
$ chmod -R 755 directory/  # 디렉터리 내 모든 파일에 적용`})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"chown - 소유권 변경"}),s.jsx("pre",{children:`# 소유자 변경
$ chown user1 file.txt

# 소유자와 그룹 동시 변경
$ chown user1:group1 file.txt

# 재귀적 적용
$ chown -R user1:group1 directory/

# 그룹만 변경 (chgrp 명령어와 동일)
$ chown :group1 file.txt
$ chgrp group1 file.txt`})]}),s.jsxs("div",{className:"callout-box tip",children:[s.jsx("strong",{children:"시험 팁:"})," chmod의 숫자 모드를 빠르게 계산하는 방법: r=4, w=2, x=1을 더합니다. 예) rwxr-xr-- = 7(4+2+1) 5(4+0+1) 4(4+0+0) = 754"]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"4. 사용자 관리"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"사용자 관리 명령어"}),s.jsx("pre",{children:`# 사용자 추가
$ useradd username
$ useradd -m -s /bin/bash -G wheel username  # 홈 디렉터리 생성, 셸 지정, 보조 그룹

# 사용자 정보 수정
$ usermod -aG sudo username    # 사용자를 sudo 그룹에 추가
$ usermod -s /bin/zsh username # 기본 셸 변경
$ usermod -d /new/home username # 홈 디렉터리 변경
$ usermod -l newname oldname   # 로그인 이름 변경

# 사용자 삭제
$ userdel username             # 사용자 삭제 (홈 디렉터리 유지)
$ userdel -r username          # 사용자와 홈 디렉터리 함께 삭제

# 그룹 관리
$ groupadd groupname           # 그룹 추가
$ groupmod -n newname oldname  # 그룹 이름 변경
$ groupdel groupname           # 그룹 삭제

# 비밀번호 관리
$ passwd username              # 비밀번호 설정/변경
$ passwd -l username           # 계정 잠금
$ passwd -u username           # 계정 잠금 해제
$ passwd -d username           # 비밀번호 삭제`})]}),s.jsx("h3",{children:"사용자 관련 파일"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"파일"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"예시"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/etc/passwd"})}),s.jsx("td",{children:"사용자 계정 정보"}),s.jsx("td",{children:"user:x:1000:1000:User Name:/home/user:/bin/bash"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/etc/shadow"})}),s.jsx("td",{children:"비밀번호 해시 (암호화)"}),s.jsx("td",{children:"user:$6$hash...:19000:0:99999:7:::"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/etc/group"})}),s.jsx("td",{children:"그룹 정보"}),s.jsx("td",{children:"groupname:x:1000:user1,user2"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/etc/gshadow"})}),s.jsx("td",{children:"그룹 비밀번호"}),s.jsx("td",{children:"groupname:!::"})]})]})]})}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"/etc/passwd 파일 구조"}),s.jsx("pre",{children:`# 형식: 사용자명:패스워드:UID:GID:설명:홈디렉터리:셸
root:x:0:0:root:/root:/bin/bash
user1:x:1000:1000:User One:/home/user1:/bin/bash
nobody:x:65534:65534:Kernel Overflow User:/:/sbin/nologin

# 필드 설명:
# 1) 사용자명: 로그인 ID
# 2) 패스워드: x (shadow 파일에 저장)
# 3) UID: 사용자 고유 ID (0=root, 1-999=시스템, 1000+=일반)
# 4) GID: 기본 그룹 ID
# 5) 설명: 사용자 설명 (GECOS 필드)
# 6) 홈 디렉터리
# 7) 기본 셸`})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"5. 파일 시스템 관리"}),s.jsx("h3",{children:"주요 파일 시스템"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"파일 시스템"}),s.jsx("th",{children:"최대 파일 크기"}),s.jsx("th",{children:"최대 볼륨 크기"}),s.jsx("th",{children:"특징"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ext4"})}),s.jsx("td",{children:"16TB"}),s.jsx("td",{children:"1EB"}),s.jsx("td",{children:"저널링, 리눅스 기본 파일 시스템"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"xfs"})}),s.jsx("td",{children:"8EB"}),s.jsx("td",{children:"8EB"}),s.jsx("td",{children:"고성능, RHEL 7+ 기본"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"btrfs"})}),s.jsx("td",{children:"16EB"}),s.jsx("td",{children:"16EB"}),s.jsx("td",{children:"스냅샷, 압축, RAID"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ext3"})}),s.jsx("td",{children:"2TB"}),s.jsx("td",{children:"32TB"}),s.jsx("td",{children:"저널링 (ext4 이전 버전)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ext2"})}),s.jsx("td",{children:"2TB"}),s.jsx("td",{children:"32TB"}),s.jsx("td",{children:"저널링 없음 (가장 오래된 ext 시리즈)"})]})]})]})}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"파일 시스템 관리 명령어"}),s.jsx("pre",{children:`# 파일 시스템 생성
$ mkfs -t ext4 /dev/sdb1
$ mkfs.xfs /dev/sdb2

# 마운트
$ mount /dev/sdb1 /mnt/data
$ mount -t ext4 /dev/sdb1 /mnt/data
$ mount -o ro /dev/cdrom /mnt/cdrom    # 읽기 전용 마운트

# 마운트 해제
$ umount /mnt/data
$ umount /dev/sdb1

# 마운트 상태 확인
$ mount | grep sdb
$ df -h                                # 디스크 사용량 확인
$ df -T                                # 파일 시스템 타입 포함

# 파티션 관리 (fdisk)
$ fdisk /dev/sdb                       # 파티션 편집
$ fdisk -l                             # 파티션 목록 확인

# 영구 마운트 설정 (/etc/fstab)
$ cat /etc/fstab
# 장치          마운트포인트  파일시스템  옵션     dump  fsck
/dev/sda1       /boot         ext4      defaults   1     2
/dev/sda2       /             ext4      defaults   1     1
/dev/sda3       swap          swap      defaults   0     0`})]}),s.jsx("h3",{children:"리눅스 디렉터리 구조 (FHS)"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"디렉터리"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/"})}),s.jsx("td",{children:"루트 디렉터리 (최상위)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/bin"})}),s.jsx("td",{children:"기본 명령어 바이너리 (ls, cp, mv 등)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/sbin"})}),s.jsx("td",{children:"시스템 관리 명령어 (fdisk, mount 등)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/etc"})}),s.jsx("td",{children:"시스템 설정 파일"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/home"})}),s.jsx("td",{children:"사용자 홈 디렉터리"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/root"})}),s.jsx("td",{children:"root 사용자 홈 디렉터리"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/var"})}),s.jsx("td",{children:"가변 데이터 (로그, 메일, 스풀)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/tmp"})}),s.jsx("td",{children:"임시 파일"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/usr"})}),s.jsx("td",{children:"사용자 프로그램, 라이브러리"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/opt"})}),s.jsx("td",{children:"추가 응용 프로그램"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/dev"})}),s.jsx("td",{children:"장치 파일"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/proc"})}),s.jsx("td",{children:"프로세스/시스템 정보 (가상 파일 시스템)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/sys"})}),s.jsx("td",{children:"장치/드라이버 정보 (가상 파일 시스템)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/boot"})}),s.jsx("td",{children:"부트로더, 커널 이미지"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/lib"})}),s.jsx("td",{children:"공유 라이브러리"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"/mnt, /media"})}),s.jsx("td",{children:"임시 마운트 포인트"})]})]})]})}),s.jsxs("div",{className:"callout-box warning",children:[s.jsx("strong",{children:"주의:"})," /etc/fstab 파일을 잘못 편집하면 시스템이 부팅되지 않을 수 있습니다. 편집 전 반드시 백업하고, mount -a 명령으로 테스트 후 재부팅하세요."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"연습문제"}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 1:"})," 리눅스 커널의 라이선스는 무엇인가?",s.jsx("br",{}),"(1) MIT   (2) BSD   (3) GPL v2   (4) Apache 2.0",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (3) GPL v2 - 리눅스 커널은 GPL v2 라이선스로 배포됩니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 2:"})," 파일의 권한이 rwxr-x--- 일 때 8진수 표기는?",s.jsx("br",{}),"(1) 750   (2) 755   (3) 740   (4) 650",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (1) 750 - rwx(7) r-x(5) ---(0) = 750"]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 3:"})," 사용자 계정 정보가 저장된 파일은?",s.jsx("br",{}),"(1) /etc/shadow   (2) /etc/passwd   (3) /etc/group   (4) /etc/profile",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (2) /etc/passwd - 사용자 계정 기본 정보가 저장됩니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 4:"})," useradd 명령으로 사용자를 추가할 때 홈 디렉터리를 자동으로 생성하는 옵션은?",s.jsx("br",{}),"(1) -d   (2) -m   (3) -s   (4) -g",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (2) -m 옵션은 홈 디렉터리가 없을 경우 자동으로 생성합니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 5:"})," 리눅스에서 로그 파일이 저장되는 기본 디렉터리는?",s.jsx("br",{}),"(1) /etc   (2) /tmp   (3) /var/log   (4) /usr/log",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (3) /var/log - 시스템 로그 파일이 저장되는 기본 위치입니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"다음 학습"}),s.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[s.jsx(e,{to:"/grade2/part1-ch2",className:"btn btn-primary",children:"1차 - 리눅스 활용 →"}),s.jsx(e,{to:"/grade2/overview",className:"btn btn-secondary",children:"← 2급 시험 개요"})]})]}),s.jsx(l,{lessonId:"grade2-p1ch1"})]})]})};export{j as default};
