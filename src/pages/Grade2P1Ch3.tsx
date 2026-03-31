import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const Grade2P1Ch3 = () => {
  useAOS();
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="2급 1차 - 리눅스 기초 명령어 - Linux Study"
        description="파일 관련 명령어, 텍스트 처리(grep, sed, awk), 압축/아카이브, 네트워크 기본 명령어를 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">1차 - 리눅스 기초 명령어</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            파일 관련 명령어, 텍스트 처리, 압축 및 아카이브, 네트워크 기본 명령어
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        {/* 파일 관련 명령어 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>1. 파일 관련 명령어 상세</h2>

          <div className="code-block">
            <div className="code-header">파일 내용 확인 명령어</div>
            <pre>{`# cat - 파일 내용 전체 출력
$ cat file.txt
$ cat -n file.txt          # 줄 번호 포함
$ cat file1.txt file2.txt  # 여러 파일 연결 출력

# head - 파일 앞부분 출력 (기본 10줄)
$ head file.txt
$ head -n 20 file.txt      # 처음 20줄
$ head -5 file.txt         # 처음 5줄

# tail - 파일 뒷부분 출력 (기본 10줄)
$ tail file.txt
$ tail -n 20 file.txt      # 마지막 20줄
$ tail -f /var/log/syslog  # 실시간 모니터링 (로그 감시)

# more - 페이지 단위 출력
$ more file.txt
# Space: 다음 페이지, Enter: 한 줄씩, q: 종료

# less - 더 강력한 페이지 단위 출력 (양방향 스크롤)
$ less file.txt
# Space: 다음 페이지, b: 이전 페이지, /: 검색, q: 종료

# wc - 줄, 단어, 바이트 수 세기
$ wc file.txt              # 줄수 단어수 바이트수 파일명
$ wc -l file.txt           # 줄 수만
$ wc -w file.txt           # 단어 수만
$ wc -c file.txt           # 바이트 수만`}</pre>
          </div>

          <div className="code-block">
            <div className="code-header">파일 검색 명령어</div>
            <pre>{`# find - 파일 검색
$ find /home -name "*.txt"           # 이름으로 검색
$ find / -type f -name "passwd"      # 파일만 검색
$ find / -type d -name "log"         # 디렉터리만 검색
$ find /tmp -mtime -7                # 7일 이내 수정된 파일
$ find /home -size +100M             # 100MB 이상 파일
$ find /home -user user1             # 특정 사용자 소유 파일
$ find /home -perm 755               # 특정 퍼미션 파일
$ find / -name "*.log" -exec rm {} \\; # 찾은 파일 삭제

# locate - 데이터베이스를 이용한 빠른 검색
$ locate passwd
$ updatedb                           # 데이터베이스 갱신

# which - 명령어의 경로 찾기
$ which python
/usr/bin/python

# whereis - 명령어의 바이너리, 소스, 매뉴얼 위치
$ whereis ls
ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz

# file - 파일 타입 확인
$ file document.pdf
document.pdf: PDF document, version 1.4`}</pre>
          </div>

          <div className="callout-box tip">
            <strong>시험 팁:</strong> find와 locate의 차이: find는 실시간으로 파일 시스템을 탐색하여 느리지만 정확하고,
            locate는 미리 만들어진 데이터베이스(mlocate.db)를 검색하여 빠르지만 최신 정보가 아닐 수 있습니다.
          </div>
        </section>

        {/* 텍스트 처리 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>2. 텍스트 처리</h2>

          <div className="code-block">
            <div className="code-header">grep - 패턴 검색</div>
            <pre>{`# 기본 사용
$ grep "error" /var/log/syslog
$ grep -i "error" logfile.txt        # 대소문자 무시
$ grep -n "error" logfile.txt        # 줄 번호 표시
$ grep -c "error" logfile.txt        # 매치 건수
$ grep -v "comment" file.txt         # 패턴이 없는 줄
$ grep -r "pattern" /etc/            # 재귀 검색
$ grep -l "pattern" *.txt            # 파일명만 출력
$ grep -w "root" /etc/passwd         # 단어 단위 매치

# 정규표현식
$ grep "^root" /etc/passwd           # root로 시작하는 줄
$ grep "bash$" /etc/passwd           # bash로 끝나는 줄
$ grep "[0-9]" file.txt              # 숫자 포함 줄
$ grep -E "error|warning" logfile    # OR 조건 (확장 정규식)
$ egrep "error|warning" logfile      # egrep = grep -E`}</pre>
          </div>

          <div className="code-block">
            <div className="code-header">sed - 스트림 편집기</div>
            <pre>{`# 문자열 치환
$ sed 's/old/new/' file.txt          # 각 줄의 첫 번째만
$ sed 's/old/new/g' file.txt         # 모든 매치 치환
$ sed -i 's/old/new/g' file.txt      # 파일 직접 수정

# 줄 삭제
$ sed '3d' file.txt                  # 3번째 줄 삭제
$ sed '2,5d' file.txt                # 2~5번째 줄 삭제
$ sed '/pattern/d' file.txt          # 패턴 포함 줄 삭제

# 줄 출력
$ sed -n '5p' file.txt               # 5번째 줄만 출력
$ sed -n '1,10p' file.txt            # 1~10번째 줄 출력

# 줄 추가/삽입
$ sed '3a\\new line' file.txt        # 3번째 줄 뒤에 추가
$ sed '3i\\new line' file.txt        # 3번째 줄 앞에 삽입`}</pre>
          </div>

          <div className="code-block">
            <div className="code-header">awk - 텍스트 처리 도구</div>
            <pre>{`# 필드 기반 처리 (기본 구분자: 공백/탭)
$ awk '{print $1}' file.txt           # 첫 번째 필드
$ awk '{print $1, $3}' file.txt       # 1, 3번째 필드
$ awk '{print NR, $0}' file.txt       # 줄 번호와 내용

# 구분자 지정
$ awk -F: '{print $1, $3}' /etc/passwd  # : 구분자

# 조건부 출력
$ awk '$3 >= 1000' /etc/passwd          # 3번째 필드가 1000 이상
$ awk -F: '$3 >= 1000 {print $1}' /etc/passwd  # UID 1000 이상 사용자

# 내장 변수
# $0: 전체 줄, $1~$N: N번째 필드
# NR: 줄 번호, NF: 필드 개수
# FS: 필드 구분자, RS: 레코드 구분자`}</pre>
          </div>

          <div className="code-block">
            <div className="code-header">sort, cut, uniq, tr</div>
            <pre>{`# sort - 정렬
$ sort file.txt                  # 알파벳순 정렬
$ sort -r file.txt               # 역순 정렬
$ sort -n file.txt               # 숫자순 정렬
$ sort -t: -k3 -n /etc/passwd    # : 구분, 3번째 필드, 숫자순

# cut - 필드 추출
$ cut -d: -f1 /etc/passwd        # : 구분, 1번째 필드
$ cut -d: -f1,3 /etc/passwd      # 1, 3번째 필드
$ cut -c1-10 file.txt            # 1~10번째 문자

# uniq - 중복 제거 (sort와 함께 사용)
$ sort file.txt | uniq           # 중복 줄 제거
$ sort file.txt | uniq -c        # 중복 횟수 표시
$ sort file.txt | uniq -d        # 중복된 줄만 출력

# tr - 문자 변환
$ echo "hello" | tr 'a-z' 'A-Z'  # 소문자를 대문자로
$ cat file.txt | tr -d ' '       # 공백 삭제
$ cat file.txt | tr -s ' '       # 연속 공백을 하나로`}</pre>
          </div>
        </section>

        {/* 압축 및 아카이브 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>3. 압축 및 아카이브</h2>

          <div className="code-block">
            <div className="code-header">tar - 아카이브 (묶기/풀기)</div>
            <pre>{`# tar 주요 옵션
# c: 아카이브 생성 (Create)
# x: 아카이브 풀기 (Extract)
# t: 내용 확인 (lisT)
# v: 상세 출력 (Verbose)
# f: 파일 지정 (File)
# z: gzip 압축 (.tar.gz)
# j: bzip2 압축 (.tar.bz2)
# J: xz 압축 (.tar.xz)

# 아카이브 생성
$ tar cvf archive.tar dir/           # tar로 묶기
$ tar czvf archive.tar.gz dir/       # gzip 압축
$ tar cjvf archive.tar.bz2 dir/      # bzip2 압축
$ tar cJvf archive.tar.xz dir/       # xz 압축

# 아카이브 풀기
$ tar xvf archive.tar
$ tar xzvf archive.tar.gz
$ tar xjvf archive.tar.bz2
$ tar xJvf archive.tar.xz

# 내용 확인 (풀지 않고)
$ tar tvf archive.tar`}</pre>
          </div>

          <div className="code-block">
            <div className="code-header">gzip, bzip2, zip 압축</div>
            <pre>{`# gzip (가장 일반적)
$ gzip file.txt                # 압축 (원본 삭제, file.txt.gz 생성)
$ gzip -d file.txt.gz          # 압축 해제
$ gunzip file.txt.gz           # 압축 해제 (gzip -d와 동일)
$ gzip -k file.txt             # 원본 유지하며 압축
$ zcat file.txt.gz             # 압축 해제 없이 내용 보기

# bzip2 (gzip보다 높은 압축률)
$ bzip2 file.txt               # 압축
$ bzip2 -d file.txt.bz2        # 압축 해제
$ bunzip2 file.txt.bz2         # 압축 해제

# xz (가장 높은 압축률)
$ xz file.txt                  # 압축
$ xz -d file.txt.xz            # 압축 해제
$ unxz file.txt.xz             # 압축 해제

# zip/unzip (Windows 호환)
$ zip archive.zip file1 file2
$ zip -r archive.zip dir/       # 디렉터리 재귀 압축
$ unzip archive.zip
$ unzip -l archive.zip          # 내용 확인`}</pre>
          </div>

          <div className="callout-box tip">
            <strong>시험 빈출:</strong> tar의 옵션 조합을 잘 기억하세요.
            생성은 <code>c</code>, 풀기는 <code>x</code>, gzip은 <code>z</code>, bzip2는 <code>j</code>입니다.
            압축률 비교: xz &gt; bzip2 &gt; gzip (압축률 높을수록 속도 느림)
          </div>
        </section>

        {/* 네트워크 기본 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>4. 네트워크 기본</h2>

          <div className="code-block">
            <div className="code-header">네트워크 기본 명령어</div>
            <pre>{`# ifconfig - 네트워크 인터페이스 설정/확인 (구 방식)
$ ifconfig
$ ifconfig eth0
$ ifconfig eth0 192.168.1.100 netmask 255.255.255.0 up

# ip - 네트워크 설정 (신 방식, ifconfig 대체)
$ ip addr show              # IP 주소 확인
$ ip link show              # 인터페이스 상태
$ ip route show             # 라우팅 테이블

# ping - 네트워크 연결 확인
$ ping 8.8.8.8
$ ping -c 5 google.com      # 5번만 ping
$ ping -i 2 google.com      # 2초 간격

# netstat - 네트워크 상태 (구 방식)
$ netstat -tlnp              # TCP 리스닝 포트
$ netstat -an                # 모든 연결 상태
# t: TCP, u: UDP, l: Listening, n: 숫자표시, p: 프로세스

# ss - 소켓 통계 (netstat 대체, 더 빠름)
$ ss -tlnp                   # TCP 리스닝 포트
$ ss -an                     # 모든 소켓 상태

# traceroute - 경로 추적
$ traceroute google.com

# hostname - 호스트명 확인/변경
$ hostname
$ hostnamectl set-hostname newname`}</pre>
          </div>
        </section>

        {/* 연습문제 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>연습문제</h2>

          <div className="callout-box info">
            <strong>문제 1:</strong> /etc/passwd 파일에서 사용자 이름(첫 번째 필드)만 출력하는 명령으로 올바른 것은?<br />
            (1) grep -f1 /etc/passwd<br />
            (2) cut -d: -f1 /etc/passwd<br />
            (3) awk -f1 /etc/passwd<br />
            (4) sed -f1 /etc/passwd<br /><br />
            <strong>정답:</strong> (2) cut -d: -f1 /etc/passwd - 콜론(:)을 구분자로 첫 번째 필드를 추출합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 2:</strong> tar czvf backup.tar.gz /home 명령에서 z 옵션의 의미는?<br />
            (1) xz 압축 &nbsp; (2) bzip2 압축 &nbsp; (3) gzip 압축 &nbsp; (4) zip 압축<br /><br />
            <strong>정답:</strong> (3) gzip 압축 - z 옵션은 gzip으로 압축합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 3:</strong> grep 명령에서 대소문자를 구분하지 않고 검색하는 옵션은?<br />
            (1) -n &nbsp; (2) -v &nbsp; (3) -i &nbsp; (4) -c<br /><br />
            <strong>정답:</strong> (3) -i (ignore case) - 대소문자를 무시하고 검색합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 4:</strong> 실시간으로 로그 파일의 변화를 모니터링하는 명령은?<br />
            (1) head -f /var/log/syslog<br />
            (2) cat -f /var/log/syslog<br />
            (3) tail -f /var/log/syslog<br />
            (4) more -f /var/log/syslog<br /><br />
            <strong>정답:</strong> (3) tail -f - 파일 끝에 추가되는 내용을 실시간으로 출력합니다.
          </div>

          <div className="callout-box info">
            <strong>문제 5:</strong> find 명령으로 /home 디렉터리에서 7일 이내에 수정된 파일을 찾는 명령은?<br />
            (1) find /home -ctime 7<br />
            (2) find /home -mtime -7<br />
            (3) find /home -atime 7<br />
            (4) find /home -mtime 7<br /><br />
            <strong>정답:</strong> (2) find /home -mtime -7 - -mtime -7은 7일 이내에 수정된 파일을 의미합니다.
          </div>
        </section>

        {/* 다음 학습 */}
        <section className="lesson-section" data-aos="fade-up">
          <h2>다음 학습</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/grade2/part2-ch1" className="btn btn-primary">2차 - 리눅스 운영 및 관리 &rarr;</Link>
            <Link to="/grade2/part1-ch2" className="btn btn-secondary">&larr; 1차 - 리눅스 활용</Link>
          </div>
        </section>
        <LessonComplete lessonId="grade2-p1ch3" />
      </div>
    </>
  );
};

export default Grade2P1Ch3;
