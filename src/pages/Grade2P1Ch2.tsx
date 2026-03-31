import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const Grade2P1Ch2 = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="2급 1차 - 리눅스 활용 - Linux Study"
        description="X 윈도 시스템, 인터넷 활용, 응용 프로그램, 프로세스 관리, 셸 스크립트 기초를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">1차 - 리눅스 활용</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            X 윈도 시스템, 인터넷 활용, 응용 프로그램, 프로세스 관리, 셸 스크립트 기초
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* X 윈도 시스템 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>1. X 윈도 시스템</h2>
          <p>
            X 윈도 시스템(X Window System, X11)은 유닉스/리눅스에서 GUI 환경을 제공하는 네트워크 프로토콜 기반의 윈도 시스템입니다.
            1984년 MIT에서 개발되었으며, 클라이언트-서버 모델을 사용합니다.
          </p>

          <h3>X 윈도의 구성 요소</h3>
          <ul>
            <li><strong>X 서버(X Server):</strong> 화면 출력과 입력 장치(키보드, 마우스)를 관리. 사용자의 로컬 머신에서 실행</li>
            <li><strong>X 클라이언트(X Client):</strong> 실제 응용 프로그램. 원격 또는 로컬에서 실행 가능</li>
            <li><strong>윈도 매니저(Window Manager):</strong> 창의 배치, 크기 조절, 이동 등 관리 (Mutter, KWin, i3 등)</li>
            <li><strong>데스크톱 환경(Desktop Environment):</strong> 완전한 GUI 환경 (GNOME, KDE, Xfce 등)</li>
          </ul>

          <div className="callout-box tip">
            <strong>시험 포인트:</strong> X 윈도에서 X 서버는 화면을 표시하는 쪽(사용자 앞),
            X 클라이언트는 프로그램이 실행되는 쪽입니다. 일반적인 클라이언트-서버 개념과 반대이므로 주의하세요.
          </div>

          <h3>주요 데스크톱 환경</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>데스크톱 환경</th>
                  <th>툴킷</th>
                  <th>특징</th>
                  <th>기본 배포판</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GNOME</strong></td>
                  <td>GTK</td>
                  <td>현대적, 심플한 UI</td>
                  <td>Fedora, Ubuntu, RHEL</td>
                </tr>
                <tr>
                  <td><strong>KDE Plasma</strong></td>
                  <td>Qt</td>
                  <td>커스터마이징 풍부</td>
                  <td>Kubuntu, openSUSE</td>
                </tr>
                <tr>
                  <td><strong>Xfce</strong></td>
                  <td>GTK</td>
                  <td>경량, 빠름</td>
                  <td>Xubuntu</td>
                </tr>
                <tr>
                  <td><strong>LXDE/LXQt</strong></td>
                  <td>GTK/Qt</td>
                  <td>초경량</td>
                  <td>Lubuntu</td>
                </tr>
                <tr>
                  <td><strong>MATE</strong></td>
                  <td>GTK</td>
                  <td>GNOME 2 포크</td>
                  <td>Ubuntu MATE</td>
                </tr>
                <tr>
                  <td><strong>Cinnamon</strong></td>
                  <td>GTK</td>
                  <td>Windows 유사 UI</td>
                  <td>Linux Mint</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="code-block">
            <div className="code-header">X 윈도 관련 명령어</div>
            <pre>{`# 디스플레이 매니저 확인
$ systemctl status gdm       # GNOME Display Manager
$ systemctl status lightdm   # LightDM
$ systemctl status sddm      # KDE Display Manager

# X 서버 정보 확인
$ xdpyinfo | head -20

# 원격 X 클라이언트 실행 (SSH X11 포워딩)
$ ssh -X user@remote_host
$ xclock &                    # 원격에서 X 프로그램 실행

# 디스플레이 환경 변수
$ echo $DISPLAY
:0

# Wayland 사용 여부 확인
$ echo $XDG_SESSION_TYPE
wayland`}</pre>
          </div>
        </section>

        {/* 인터넷 활용 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>2. 인터넷 활용</h2>

          <h3>웹 서버</h3>
          <p>
            리눅스에서 가장 많이 사용되는 웹 서버는 <strong>Apache HTTP Server</strong>와 <strong>Nginx</strong>입니다.
          </p>
          <div className="code-block">
            <div className="code-header">Apache 웹 서버 기본 관리</div>
            <pre>{`# Apache 설치
$ yum install httpd          # CentOS/RHEL
$ apt install apache2        # Ubuntu/Debian

# Apache 시작/중지/재시작
$ systemctl start httpd
$ systemctl stop httpd
$ systemctl restart httpd
$ systemctl enable httpd     # 부팅 시 자동 시작

# 설정 파일 위치
# CentOS: /etc/httpd/conf/httpd.conf
# Ubuntu: /etc/apache2/apache2.conf

# 기본 포트: 80 (HTTP), 443 (HTTPS)
# 기본 문서 루트: /var/www/html`}</pre>
          </div>

          <h3>FTP</h3>
          <p>
            FTP(File Transfer Protocol)는 파일 전송을 위한 프로토콜입니다. 리눅스에서는 vsftpd가 대표적입니다.
          </p>
          <div className="code-block">
            <div className="code-header">FTP 관련 명령어</div>
            <pre>{`# vsftpd 설치
$ yum install vsftpd

# FTP 클라이언트 사용
$ ftp hostname
ftp> ls
ftp> get filename
ftp> put filename
ftp> bye

# 포트: 20 (데이터), 21 (제어)`}</pre>
          </div>

          <h3>DNS</h3>
          <p>
            DNS(Domain Name System)는 도메인 이름을 IP 주소로 변환합니다. 리눅스에서는 BIND가 대표적인 DNS 서버입니다.
          </p>
          <div className="code-block">
            <div className="code-header">DNS 조회 명령어</div>
            <pre>{`# DNS 조회
$ nslookup www.example.com
$ dig www.example.com
$ host www.example.com

# DNS 설정 파일
$ cat /etc/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4

# 호스트 파일 (로컬 DNS 역할)
$ cat /etc/hosts
127.0.0.1   localhost
192.168.1.10 myserver`}</pre>
          </div>
        </section>

        {/* 응용 프로그램 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>3. 응용 프로그램</h2>

          <h3>vi/vim 편집기</h3>
          <p>
            vi(Visual editor)는 유닉스/리눅스의 대표적인 텍스트 편집기입니다.
            vim(Vi IMproved)은 vi의 개선 버전으로 구문 강조, 플러그인 등을 지원합니다.
          </p>

          <h3>vi의 세 가지 모드</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>모드</th>
                  <th>설명</th>
                  <th>진입 방법</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>명령 모드 (Command)</strong></td>
                  <td>커서 이동, 삭제, 복사 등</td>
                  <td>Esc 키</td>
                </tr>
                <tr>
                  <td><strong>입력 모드 (Insert)</strong></td>
                  <td>텍스트 입력/편집</td>
                  <td>i, a, o, I, A, O</td>
                </tr>
                <tr>
                  <td><strong>라인 모드 (Ex/Last Line)</strong></td>
                  <td>저장, 종료, 검색, 치환 등</td>
                  <td>: (콜론)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="code-block">
            <div className="code-header">vi/vim 주요 명령어</div>
            <pre>{`# 입력 모드 진입
i    - 현재 커서 위치에서 입력
a    - 현재 커서 다음 위치에서 입력
o    - 현재 줄 아래에 새 줄 삽입 후 입력
I    - 줄의 맨 앞에서 입력
A    - 줄의 맨 끝에서 입력
O    - 현재 줄 위에 새 줄 삽입 후 입력

# 명령 모드 (커서 이동)
h, j, k, l  - 좌, 하, 상, 우
gg   - 파일 처음으로
G    - 파일 끝으로
0    - 줄의 처음으로
$    - 줄의 끝으로
w    - 다음 단어로
b    - 이전 단어로

# 명령 모드 (편집)
x    - 문자 삭제
dd   - 줄 삭제
yy   - 줄 복사
p    - 붙여넣기
u    - 실행 취소 (Undo)
.    - 마지막 명령 반복

# 라인 모드
:w   - 저장
:q   - 종료
:wq  - 저장 후 종료
:q!  - 저장하지 않고 강제 종료
:set number   - 줄 번호 표시
/pattern      - 앞으로 검색
?pattern      - 뒤로 검색
:%s/old/new/g - 전체 치환`}</pre>
          </div>

          <div className="callout-box tip">
            <strong>시험 빈출:</strong> vi에서 "저장하지 않고 종료"하는 명령은 <code>:q!</code>이고,
            "저장 후 종료"는 <code>:wq</code> 또는 <code>ZZ</code>입니다.
          </div>
        </section>

        {/* 프로세스 관리 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>4. 프로세스 관리</h2>

          <div className="code-block">
            <div className="code-header">프로세스 관리 명령어</div>
            <pre>{`# ps - 프로세스 상태 확인
$ ps               # 현재 터미널의 프로세스
$ ps aux           # 모든 프로세스 상세 정보
$ ps -ef           # 모든 프로세스 (풀 포맷)

# top - 실시간 프로세스 모니터링
$ top
# top 내부 명령:
# q - 종료, k - 프로세스 종료, M - 메모리순, P - CPU순

# kill - 프로세스 종료
$ kill PID              # SIGTERM (기본, 15)
$ kill -9 PID           # SIGKILL (강제 종료)
$ kill -15 PID          # SIGTERM (정상 종료 요청)
$ kill -1 PID           # SIGHUP (재시작)
$ killall processname   # 이름으로 종료
$ pkill processname     # 패턴으로 종료

# nice / renice - 우선순위 조절
$ nice -n 10 command    # 낮은 우선순위로 실행 (-20~19, 기본 0)
$ renice 5 -p PID       # 실행 중인 프로세스 우선순위 변경

# nohup - 로그아웃 후에도 실행 유지
$ nohup command &
$ nohup ./script.sh > output.log 2>&1 &

# 백그라운드/포그라운드
$ command &             # 백그라운드 실행
$ jobs                  # 백그라운드 작업 목록
$ bg %1                 # 중지된 작업을 백그라운드로
$ fg %1                 # 백그라운드 작업을 포그라운드로
$ Ctrl+Z               # 포그라운드 프로세스 중지`}</pre>
          </div>

          <h3>주요 시그널</h3>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td><strong>SIGHUP</strong></td><td>터미널 종료 / 재시작 요청</td></tr>
                <tr><td>2</td><td><strong>SIGINT</strong></td><td>인터럽트 (Ctrl+C)</td></tr>
                <tr><td>9</td><td><strong>SIGKILL</strong></td><td>강제 종료 (무조건 종료)</td></tr>
                <tr><td>15</td><td><strong>SIGTERM</strong></td><td>정상 종료 요청 (기본 시그널)</td></tr>
                <tr><td>18</td><td><strong>SIGCONT</strong></td><td>중지된 프로세스 재개</td></tr>
                <tr><td>19</td><td><strong>SIGSTOP</strong></td><td>프로세스 중지</td></tr>
                <tr><td>20</td><td><strong>SIGTSTP</strong></td><td>터미널 중지 (Ctrl+Z)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 셸 스크립트 기초 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>5. 셸 스크립트 기초</h2>

          <div className="code-block">
            <div className="code-header">셸 스크립트 기본 구조</div>
            <pre>{`#!/bin/bash
# 이 줄은 주석입니다

# 변수 사용
NAME="Linux"
echo "Hello, $NAME!"

# 조건문
if [ -f /etc/passwd ]; then
    echo "/etc/passwd 파일이 존재합니다."
else
    echo "파일이 없습니다."
fi

# 반복문 (for)
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

# 반복문 (while)
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done

# 함수
greet() {
    echo "안녕하세요, $1님!"
}
greet "리눅스"

# 사용자 입력
read -p "이름을 입력하세요: " username
echo "입력된 이름: $username"`}</pre>
          </div>

          <h3>리다이렉션과 파이프</h3>
          <div className="code-block">
            <div className="code-header">리다이렉션과 파이프</div>
            <pre>{`# 출력 리다이렉션
$ command > file.txt       # 표준 출력을 파일로 (덮어쓰기)
$ command >> file.txt      # 표준 출력을 파일로 (추가)
$ command 2> error.txt     # 표준 에러를 파일로
$ command > out.txt 2>&1   # 표준 출력과 에러를 같은 파일로

# 입력 리다이렉션
$ command < input.txt      # 파일에서 입력 받기

# 파이프 (|) - 앞 명령의 출력을 뒤 명령의 입력으로
$ ls -l | grep ".txt"
$ ps aux | grep httpd
$ cat file.txt | sort | uniq
$ history | tail -20`}</pre>
          </div>

          <div className="callout-box info">
            <strong>시험 빈출:</strong> 리다이렉션 기호의 의미를 정확히 알아야 합니다.
            특히 <code>2&gt;&amp;1</code>은 표준 에러(2)를 표준 출력(1)으로 리다이렉션하는 것입니다.
          </div>
        </section>

        {/* 다음 학습 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade2/part1-ch3" className="btn btn-primary">1차 - 리눅스 기초 명령어 &rarr;</Link>
            <Link to="/grade2/part1-ch1" className="btn btn-secondary">&larr; 1차 - 리눅스 운영 및 관리</Link>
          </div>
        </section>
        <LessonComplete lessonId="grade2-p1ch2" />
      </div>
    </>
  );
};

export default Grade2P1Ch2;
