import{u as r,j as s,L as e}from"./index-DmzZhhxb.js";import{u as d}from"./useAOS-D9ZUpAXD.js";import{S as c}from"./SEOHead-CeDrdjx5.js";import{L as l}from"./LessonComplete-BTma4fPR.js";const o=()=>{d();const{t}=r();return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"2급 2차 - 리눅스 기초 명령어 - Linux Study",description:"고급 파일 관리, 디스크 관리(df, du, fsck), 권한 관리 심화(ACL, setuid, setgid, sticky bit)를 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"2차 - 리눅스 기초 명령어"}),s.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"고급 파일 관리 명령어, 디스크 관리, 권한 관리 심화"})]})}),s.jsxs("div",{className:"lesson-body container",children:[s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"1. 고급 파일 관리 명령어"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"링크 (Link)"}),s.jsx("pre",{children:`# 하드 링크 (Hard Link)
# - 같은 inode를 가리킴
# - 원본 삭제해도 데이터 유지
# - 다른 파일 시스템에 생성 불가
# - 디렉터리에 생성 불가
$ ln source.txt hardlink.txt
$ ls -li source.txt hardlink.txt    # inode 번호 동일 확인

# 심볼릭 링크 (Symbolic Link, 소프트 링크)
# - 파일의 경로를 가리킴 (바로가기)
# - 원본 삭제하면 링크 끊어짐 (dangling link)
# - 다른 파일 시스템에도 생성 가능
# - 디렉터리에도 생성 가능
$ ln -s source.txt symlink.txt
$ ls -l symlink.txt
lrwxrwxrwx 1 user user 10 Jan 1 12:00 symlink.txt -> source.txt`})]}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"비교 항목"}),s.jsx("th",{children:"하드 링크"}),s.jsx("th",{children:"심볼릭 링크"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"inode"})}),s.jsx("td",{children:"원본과 동일"}),s.jsx("td",{children:"별도의 inode"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"원본 삭제 시"})}),s.jsx("td",{children:"데이터 유지"}),s.jsx("td",{children:"링크 끊어짐"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"파일 시스템 간"})}),s.jsx("td",{children:"불가"}),s.jsx("td",{children:"가능"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"디렉터리"})}),s.jsx("td",{children:"불가"}),s.jsx("td",{children:"가능"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"생성 명령"})}),s.jsx("td",{children:"ln source link"}),s.jsx("td",{children:"ln -s source link"})]})]})]})}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"기타 고급 파일 명령어"}),s.jsx("pre",{children:`# stat - 파일의 상세 메타데이터 확인
$ stat file.txt
  File: file.txt
  Size: 1234      Blocks: 8          IO Block: 4096   regular file
  Device: fd00h/64768d  Inode: 1234567   Links: 1
  Access: (0644/-rw-r--r--)  Uid: (1000/user)   Gid: (1000/user)
  Access: 2024-01-15 10:30:00
  Modify: 2024-01-15 10:25:00
  Change: 2024-01-15 10:25:00

# touch - 파일 타임스탬프 변경 / 빈 파일 생성
$ touch newfile.txt              # 빈 파일 생성 (이미 있으면 시간 갱신)
$ touch -t 202401151030 file.txt # 특정 시간으로 변경 (YYYYMMDDhhmm)

# tee - 표준 출력과 파일에 동시 기록
$ command | tee output.txt       # 화면 + 파일
$ command | tee -a output.txt    # 화면 + 파일 (추가)

# dd - 블록 단위 복사
$ dd if=/dev/sda of=/dev/sdb bs=4M            # 디스크 복제
$ dd if=/dev/zero of=testfile bs=1M count=100  # 100MB 파일 생성
$ dd if=/dev/cdrom of=image.iso                # ISO 이미지 생성

# xargs - 표준 입력을 명령어 인자로 변환
$ find /tmp -name "*.tmp" | xargs rm
$ cat list.txt | xargs -I {} cp {} /backup/`})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"2. 디스크 관리"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"df - 디스크 사용량 확인"}),s.jsx("pre",{children:`# 파일 시스템별 사용량
$ df
Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sda1      51380000  8234000  40498000  17% /
tmpfs           8168400        0   8168400   0% /dev/shm

# 읽기 쉬운 형태
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        49G  7.9G   39G  17% /
tmpfs           7.8G     0  7.8G   0% /dev/shm

# 파일 시스템 타입 포함
$ df -T
$ df -hT

# 특정 파일 시스템만
$ df -h /home

# inode 사용량
$ df -i`})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"du - 디렉터리 사용량 확인"}),s.jsx("pre",{children:`# 디렉터리별 사용량
$ du -h /home/user
$ du -sh /home/user              # 합계만
$ du -sh /home/*                 # 하위 디렉터리별 합계
$ du -sh /var/log                # 특정 디렉터리

# 큰 디렉터리 찾기
$ du -sh /var/* | sort -rh | head -10

# 최대 깊이 설정
$ du -h --max-depth=1 /

# 특정 파일 시스템만
$ du -xsh /*                     # 다른 파일 시스템 제외`})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"fsck - 파일 시스템 검사/복구"}),s.jsx("pre",{children:`# 파일 시스템 검사 (마운트 해제 상태에서!)
$ umount /dev/sdb1
$ fsck /dev/sdb1
$ fsck -y /dev/sdb1              # 자동으로 yes 응답
$ fsck -t ext4 /dev/sdb1         # 파일 시스템 타입 지정

# e2fsck (ext 전용)
$ e2fsck -f /dev/sdb1            # 강제 검사

# xfs_repair (XFS 전용)
$ xfs_repair /dev/sdb2`})]}),s.jsxs("div",{className:"callout-box warning",children:[s.jsx("strong",{children:"주의:"})," fsck는 반드시 마운트가 해제된 파일 시스템에서 실행해야 합니다. 마운트된 상태에서 실행하면 데이터가 손상될 수 있습니다."]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"스왑(Swap) 관리"}),s.jsx("pre",{children:`# 스왑 파일 생성
$ dd if=/dev/zero of=/swapfile bs=1M count=2048  # 2GB
$ chmod 600 /swapfile
$ mkswap /swapfile
$ swapon /swapfile

# 스왑 상태 확인
$ swapon -s
$ free -h

# /etc/fstab에 영구 등록
# /swapfile  swap  swap  defaults  0  0

# 스왑 비활성화
$ swapoff /swapfile`})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"3. 권한 관리 심화"}),s.jsx("h3",{children:"특수 퍼미션 (Special Permissions)"}),s.jsx("div",{className:"lesson-table-wrapper",children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"특수 퍼미션"}),s.jsx("th",{children:"숫자"}),s.jsx("th",{children:"적용 대상"}),s.jsx("th",{children:"표시"}),s.jsx("th",{children:"효과"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"SetUID"})}),s.jsx("td",{children:"4000"}),s.jsx("td",{children:"실행 파일"}),s.jsxs("td",{children:["rw",s.jsx("strong",{children:"s"})]}),s.jsx("td",{children:"실행 시 파일 소유자의 권한으로 실행"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"SetGID"})}),s.jsx("td",{children:"2000"}),s.jsx("td",{children:"실행 파일/디렉터리"}),s.jsxs("td",{children:["rw",s.jsx("strong",{children:"s"})," (그룹)"]}),s.jsx("td",{children:"실행 시 파일 그룹의 권한으로 실행 / 디렉터리 내 파일이 그룹 상속"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Sticky Bit"})}),s.jsx("td",{children:"1000"}),s.jsx("td",{children:"디렉터리"}),s.jsxs("td",{children:["rwx",s.jsx("strong",{children:"t"})]}),s.jsx("td",{children:"디렉터리 내 파일을 소유자만 삭제 가능"})]})]})]})}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"특수 퍼미션 설정"}),s.jsx("pre",{children:`# SetUID 설정
$ chmod 4755 program              # SetUID + rwxr-xr-x
$ chmod u+s program               # SetUID 추가
$ ls -l program
-rwsr-xr-x 1 root root 12345 Jan 1 12:00 program

# SetUID 예제: passwd 명령
$ ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 68208 Mar 14 00:00 /usr/bin/passwd
# 일반 사용자도 root 권한으로 비밀번호 변경 가능

# SetGID 설정
$ chmod 2755 directory/           # SetGID + rwxr-xr-x
$ chmod g+s directory/
$ ls -ld directory/
drwxr-sr-x 2 user group 4096 Jan 1 12:00 directory/

# Sticky Bit 설정
$ chmod 1777 /shared/             # Sticky + rwxrwxrwx
$ chmod +t /shared/
$ ls -ld /tmp
drwxrwxrwt 10 root root 4096 Jan 1 12:00 /tmp
# /tmp는 대표적인 Sticky Bit 디렉터리

# 특수 퍼미션 제거
$ chmod u-s program               # SetUID 제거
$ chmod g-s directory/            # SetGID 제거
$ chmod -t /shared/               # Sticky Bit 제거`})]}),s.jsxs("div",{className:"callout-box tip",children:[s.jsx("strong",{children:"시험 빈출:"})," /tmp 디렉터리에 Sticky Bit가 설정되어 있는 이유는? - 모든 사용자가 파일을 생성할 수 있지만, 자신이 만든 파일만 삭제할 수 있도록 하기 위해서입니다."]}),s.jsx("h3",{children:"ACL (Access Control List)"}),s.jsx("p",{children:"ACL은 기존의 소유자/그룹/기타 3단계 퍼미션 체계를 넘어, 개별 사용자나 그룹에 대해 세밀한 권한을 설정할 수 있는 기능입니다."}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"ACL 관리 명령어"}),s.jsx("pre",{children:`# ACL 확인
$ getfacl file.txt
# file: file.txt
# owner: user1
# group: group1
user::rw-
user:user2:r--         # user2에게 읽기 권한
group::r--
group:team:rw-         # team 그룹에게 읽기/쓰기 권한
mask::rw-
other::r--

# ACL 설정
$ setfacl -m u:user2:rw file.txt       # user2에게 rw 권한
$ setfacl -m g:team:rx file.txt        # team 그룹에게 rx 권한
$ setfacl -m o::--- file.txt           # 기타 사용자 권한 제거

# ACL 삭제
$ setfacl -x u:user2 file.txt          # user2의 ACL 제거
$ setfacl -b file.txt                  # 모든 ACL 제거

# 기본 ACL (디렉터리에 설정, 새 파일에 자동 적용)
$ setfacl -m d:u:user2:rw directory/
$ setfacl -m d:g:team:rx directory/

# ACL이 설정된 파일은 ls -l에서 + 표시
$ ls -l file.txt
-rw-rw-r--+ 1 user1 group1 100 Jan 1 12:00 file.txt`})]}),s.jsx("h3",{children:"umask"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"umask - 기본 퍼미션 마스크"}),s.jsx("pre",{children:`# umask 확인
$ umask
0022

# 파일 기본 퍼미션: 666 - umask = 666 - 022 = 644 (rw-r--r--)
# 디렉터리 기본 퍼미션: 777 - umask = 777 - 022 = 755 (rwxr-xr-x)

# umask 변경
$ umask 027
# 파일: 666 - 027 = 640 (rw-r-----)
# 디렉터리: 777 - 027 = 750 (rwxr-x---)

# 영구 설정: ~/.bashrc 또는 /etc/profile에 추가
# umask 022`})]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"시험 포인트:"})," umask가 022일 때 새 파일의 기본 퍼미션은 644(rw-r--r--)이고, 새 디렉터리의 기본 퍼미션은 755(rwxr-xr-x)입니다. 파일은 666, 디렉터리는 777에서 umask를 뺍니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"연습문제"}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 1:"})," /tmp 디렉터리에 설정된 특수 퍼미션은?",s.jsx("br",{}),"(1) SetUID   (2) SetGID   (3) Sticky Bit   (4) ACL",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (3) Sticky Bit - 모든 사용자가 파일을 생성할 수 있지만, 자신의 파일만 삭제할 수 있습니다."]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 2:"})," umask가 027일 때 새로 생성되는 파일의 기본 퍼미션은?",s.jsx("br",{}),"(1) 750   (2) 640   (3) 644   (4) 660",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (2) 640 - 파일 기본 666 - umask 027 = 640 (rw-r-----)"]}),s.jsxs("div",{className:"callout-box info",children:[s.jsx("strong",{children:"문제 3:"})," 디스크 사용량을 파일 시스템 타입과 함께 확인하는 명령은?",s.jsx("br",{}),"(1) du -hT   (2) df -hT   (3) fdisk -l   (4) mount -a",s.jsx("br",{}),s.jsx("br",{}),s.jsx("strong",{children:"정답:"})," (2) df -hT - df에 -T 옵션을 추가하면 파일 시스템 타입이 표시됩니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"다음 학습"}),s.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[s.jsx(e,{to:"/grade1/overview",className:"btn btn-primary",children:"1급 시험 개요 →"}),s.jsx(e,{to:"/grade2/part2-ch2",className:"btn btn-secondary",children:"← 2차 - 리눅스 활용"}),s.jsx(e,{to:"/exam/grade2-round1",className:"btn btn-secondary",children:"2급 모의고사"})]})]}),s.jsx(l,{lessonId:"grade2-p2ch3"})]})]})};export{o as default};
