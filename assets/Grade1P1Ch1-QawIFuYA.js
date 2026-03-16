import{u as d,j as e,L as s}from"./index-DlC1-ik2.js";import{u as r,S as i}from"./SEOHead-CBdU9Lmi.js";import{L as n}from"./LessonComplete-hHyfxVIi.js";const o=()=>{r();const{t:l}=d();return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"1급 1차 - 리눅스 실무의 이해 - Linux Study",description:"리눅스 커널 상세, 부팅 심화, 파일 시스템 심화, 가상화 기술을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"page-title","data-aos":"fade-up",children:"1차 - 리눅스 실무의 이해"}),e.jsx("p",{className:"page-subtitle","data-aos":"fade-up","data-aos-delay":"100",children:"커널 상세, 부팅 심화, 파일 시스템 심화, 가상화 기술 (고급)"})]})}),e.jsxs("div",{className:"lesson-body container",children:[e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"1. 리눅스 커널 상세"}),e.jsx("h3",{children:"커널 모듈 관리"}),e.jsx("p",{children:"리눅스 커널은 모놀리식 구조이지만, 커널 모듈(Loadable Kernel Module, LKM) 시스템을 통해 필요한 기능을 동적으로 로드하거나 언로드할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"커널 모듈 관리 명령어"}),e.jsx("pre",{children:`# 현재 로드된 모듈 확인
$ lsmod
Module                  Size  Used by
ext4                  729088  1
mbcache                16384  1 ext4
jbd2                  131072  1 ext4
...

# 모듈 상세 정보
$ modinfo ext4
filename:       /lib/modules/6.1.0/kernel/fs/ext4/ext4.ko
license:        GPL
description:    Fourth Extended Filesystem
author:         Theodore Ts'o, ...
depends:        mbcache,jbd2

# 모듈 로드
$ modprobe module_name        # 의존성 자동 해결
$ insmod /path/to/module.ko   # 직접 로드 (의존성 해결 안 됨)

# 모듈 언로드
$ modprobe -r module_name     # 의존성 포함 제거
$ rmmod module_name           # 직접 제거

# 부팅 시 모듈 자동 로드 설정
# /etc/modules-load.d/custom.conf

# 모듈 블랙리스트 (로드 금지)
# /etc/modprobe.d/blacklist.conf
# blacklist module_name`})]}),e.jsx("h3",{children:"커널 컴파일"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"커널 컴파일 과정"}),e.jsx("pre",{children:`# 1. 소스 다운로드
$ wget https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.1.tar.xz
$ tar xJvf linux-6.1.tar.xz
$ cd linux-6.1

# 2. 설정
$ make menuconfig              # TUI 기반 설정
$ make xconfig                 # GUI 기반 설정 (Qt)
$ make gconfig                 # GUI 기반 설정 (GTK)
$ make oldconfig               # 기존 설정 기반 업데이트

# 3. 컴파일
$ make -j$(nproc)              # CPU 코어 수만큼 병렬 컴파일

# 4. 모듈 설치
$ make modules_install

# 5. 커널 설치
$ make install

# 6. 부트로더 갱신
$ grub2-mkconfig -o /boot/grub2/grub.cfg  # CentOS
$ update-grub                              # Ubuntu

# 커널 설정 파일: .config
# 현재 커널 설정 복사
$ cp /boot/config-$(uname -r) .config`})]}),e.jsx("h3",{children:"커널 패치"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"커널 패치 적용"}),e.jsx("pre",{children:`# 패치 적용
$ cd /usr/src/linux
$ patch -p1 < /path/to/patch-file.diff

# 패치 되돌리기
$ patch -R -p1 < /path/to/patch-file.diff

# 패치 테스트 (실제 적용하지 않음)
$ patch --dry-run -p1 < /path/to/patch-file.diff`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"2. 부팅 과정 심화"}),e.jsx("h3",{children:"systemd 유닛 파일"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"systemd 유닛 파일 구조"}),e.jsx("pre",{children:`# 유닛 파일 위치
# /usr/lib/systemd/system/    - 패키지에서 제공하는 기본 유닛
# /etc/systemd/system/        - 관리자 커스텀 유닛 (우선순위 높음)
# /run/systemd/system/        - 런타임 유닛

# 유닛 파일 예제: /etc/systemd/system/myapp.service
[Unit]
Description=My Application Service
After=network.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/usr/local/bin/myapp
ExecReload=/bin/kill -HUP $MAINPID
ExecStop=/bin/kill -TERM $MAINPID
Restart=on-failure
RestartSec=5
User=appuser
Group=appgroup
WorkingDirectory=/opt/myapp
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target

# 유닛 파일 변경 후 적용
$ systemctl daemon-reload
$ systemctl enable --now myapp.service`})]}),e.jsx("h3",{children:"유닛 타입"}),e.jsx("div",{className:"lesson-table-wrapper",children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"타입"}),e.jsx("th",{children:"확장자"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Service"})}),e.jsx("td",{children:".service"}),e.jsx("td",{children:"데몬 프로세스 관리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Socket"})}),e.jsx("td",{children:".socket"}),e.jsx("td",{children:"소켓 기반 활성화"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Target"})}),e.jsx("td",{children:".target"}),e.jsx("td",{children:"유닛 그룹 (런레벨 대체)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Mount"})}),e.jsx("td",{children:".mount"}),e.jsx("td",{children:"파일 시스템 마운트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Timer"})}),e.jsx("td",{children:".timer"}),e.jsx("td",{children:"타이머 기반 활성화 (cron 대체)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Path"})}),e.jsx("td",{children:".path"}),e.jsx("td",{children:"파일 시스템 경로 감시"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Device"})}),e.jsx("td",{children:".device"}),e.jsx("td",{children:"장치 관리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Swap"})}),e.jsx("td",{children:".swap"}),e.jsx("td",{children:"스왑 관리"})]})]})]})})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"3. 파일 시스템 심화"}),e.jsx("h3",{children:"inode 구조"}),e.jsx("p",{children:"inode(Index Node)는 파일의 메타데이터를 저장하는 데이터 구조입니다. 파일 이름은 디렉터리 엔트리에 저장되고, inode에는 파일의 실제 데이터 블록 위치, 소유자, 퍼미션, 타임스탬프 등이 저장됩니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"inode 관련 명령어"}),e.jsx("pre",{children:`# inode 번호 확인
$ ls -i file.txt
1234567 file.txt

# inode 상세 정보
$ stat file.txt

# inode 사용량 확인
$ df -i
Filesystem      Inodes  IUsed   IFree IUse% Mounted on
/dev/sda1      3276800 234567 3042233    8% /

# inode가 부족하면 디스크 공간이 남아 있어도 파일 생성 불가!`})]}),e.jsx("h3",{children:"하드 링크와 심볼릭 링크 심화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"링크 동작 원리"}),e.jsx("pre",{children:`# 하드 링크: 같은 inode를 가리키는 디렉터리 엔트리
$ echo "original" > file.txt
$ ln file.txt hardlink.txt
$ ls -li file.txt hardlink.txt
1234567 -rw-r--r-- 2 user user 9 Jan 1 12:00 file.txt
1234567 -rw-r--r-- 2 user user 9 Jan 1 12:00 hardlink.txt
# inode 번호(1234567)가 동일, 링크 카운트가 2

# 원본 삭제해도 데이터 유지 (링크 카운트가 0이 될 때만 삭제)
$ rm file.txt
$ cat hardlink.txt    # 여전히 "original" 출력

# 심볼릭 링크: 경로 문자열을 저장하는 별도 파일
$ ln -s /etc/passwd link_to_passwd
$ ls -l link_to_passwd
lrwxrwxrwx 1 user user 11 Jan 1 12:00 link_to_passwd -> /etc/passwd
# 크기가 11 = "/etc/passwd" 문자열 길이`})]}),e.jsx("h3",{children:"디스크 쿼터 (Quota)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"디스크 쿼터 설정"}),e.jsx("pre",{children:`# 1. /etc/fstab에 쿼터 옵션 추가
# /dev/sda3  /home  ext4  defaults,usrquota,grpquota  1  2

# 2. 재마운트
$ mount -o remount /home

# 3. 쿼터 데이터베이스 생성
$ quotacheck -cugm /home

# 4. 쿼터 활성화
$ quotaon /home

# 5. 사용자 쿼터 편집
$ edquota -u username
# Blocks: soft=500000, hard=600000 (KB)
# Inodes: soft=10000, hard=12000

# 6. 쿼터 확인
$ repquota -a                  # 전체 사용자 쿼터 보고
$ quota -u username            # 특정 사용자 쿼터 확인

# 7. 유예 기간 설정
$ edquota -t`})]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"4. 가상화 기술"}),e.jsx("h3",{children:"KVM (Kernel-based Virtual Machine)"}),e.jsx("p",{children:"KVM은 리눅스 커널에 내장된 가상화 기술로, 전가상화(Full Virtualization)를 지원합니다. Intel VT-x 또는 AMD-V 하드웨어 가상화 지원이 필요합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"KVM 관리"}),e.jsx("pre",{children:`# CPU 가상화 지원 확인
$ grep -E '(vmx|svm)' /proc/cpuinfo
# vmx: Intel VT-x, svm: AMD-V

# KVM 모듈 확인
$ lsmod | grep kvm
kvm_intel             368640  0
kvm                  1028096  1 kvm_intel

# 필수 패키지 설치
$ yum install qemu-kvm libvirt virt-install virt-manager

# libvirtd 서비스 시작
$ systemctl enable --now libvirtd

# 가상 머신 생성
$ virt-install \\
  --name centos9 \\
  --ram 2048 \\
  --vcpus 2 \\
  --disk size=20 \\
  --os-variant centos-stream9 \\
  --cdrom /var/lib/libvirt/images/CentOS-Stream-9.iso

# virsh 관리 명령어
$ virsh list --all               # 모든 VM 목록
$ virsh start vm_name            # VM 시작
$ virsh shutdown vm_name         # VM 정상 종료
$ virsh destroy vm_name          # VM 강제 종료
$ virsh suspend vm_name          # VM 일시 정지
$ virsh resume vm_name           # VM 재개
$ virsh snapshot-create-as vm_name snap1  # 스냅샷 생성`})]}),e.jsx("h3",{children:"Docker 기초"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Docker 기본 명령어"}),e.jsx("pre",{children:`# Docker 설치 및 시작
$ yum install docker-ce
$ systemctl enable --now docker

# 이미지 관리
$ docker pull nginx              # 이미지 다운로드
$ docker images                  # 이미지 목록
$ docker rmi image_id            # 이미지 삭제

# 컨테이너 관리
$ docker run -d --name web -p 80:80 nginx   # 컨테이너 실행
$ docker ps                      # 실행 중인 컨테이너
$ docker ps -a                   # 모든 컨테이너
$ docker stop web                # 컨테이너 중지
$ docker start web               # 컨테이너 시작
$ docker rm web                  # 컨테이너 삭제
$ docker exec -it web bash       # 컨테이너 내부 접속
$ docker logs web                # 컨테이너 로그

# 가상화 vs 컨테이너 비교
# VM: 하이퍼바이저 위에 전체 OS 실행 (무거움, 격리 강함)
# 컨테이너: 호스트 커널 공유, 프로세스 격리 (가벼움, 빠름)`})]}),e.jsxs("div",{className:"callout-box info",children:[e.jsx("strong",{children:"시험 포인트:"})," KVM은 커널 기반 전가상화, Xen은 반가상화(Para-virtualization)를 주로 사용, Docker는 컨테이너 가상화(OS 수준 가상화)입니다. 각 기술의 차이를 구분하세요."]})]}),e.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[e.jsx("h2",{children:"다음 학습"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(s,{to:"/grade1/part1-ch2",className:"btn btn-primary",children:"1차 - 리눅스 시스템 관리 →"}),e.jsx(s,{to:"/grade1/overview",className:"btn btn-secondary",children:"← 1급 시험 개요"})]})]}),e.jsx(n,{lessonId:"grade1-p1ch1"})]})]})};export{o as default};
