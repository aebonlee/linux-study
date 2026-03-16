import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const CommandsBasic = () => {
  useAOS();
  const { t } = useLanguage();

  const commands = [
    { cmd: 'pwd', desc: '현재 작업 디렉터리 출력', options: [
      { opt: '(옵션 없음)', ex: '$ pwd', result: '/home/user' },
      { opt: '-P', ex: '$ pwd -P', result: '심볼릭 링크 해석한 실제 경로 출력' },
      { opt: '-L', ex: '$ pwd -L', result: '심볼릭 링크 경로 그대로 출력 (기본값)' }
    ]},
    { cmd: 'ls', desc: '디렉터리 내용 나열', options: [
      { opt: '-l', ex: '$ ls -l', result: '상세 정보 (퍼미션, 소유자, 크기, 날짜)' },
      { opt: '-a', ex: '$ ls -a', result: '숨김 파일 포함 (. 으로 시작하는 파일)' },
      { opt: '-h', ex: '$ ls -lh', result: '파일 크기를 읽기 쉬운 형태로 (K, M, G)' },
      { opt: '-R', ex: '$ ls -R', result: '하위 디렉터리 재귀 출력' },
      { opt: '-t', ex: '$ ls -lt', result: '수정 시간순 정렬' },
      { opt: '-S', ex: '$ ls -lS', result: '파일 크기순 정렬' },
      { opt: '-r', ex: '$ ls -lr', result: '역순 정렬' },
      { opt: '-i', ex: '$ ls -li', result: 'inode 번호 표시' },
      { opt: '-d', ex: '$ ls -ld /etc', result: '디렉터리 자체 정보 표시' }
    ]},
    { cmd: 'cd', desc: '디렉터리 이동', options: [
      { opt: '~', ex: '$ cd ~', result: '홈 디렉터리로 이동' },
      { opt: '..', ex: '$ cd ..', result: '상위 디렉터리로 이동' },
      { opt: '-', ex: '$ cd -', result: '이전 디렉터리로 돌아감' },
      { opt: '/', ex: '$ cd /', result: '루트 디렉터리로 이동' },
      { opt: '경로', ex: '$ cd /etc/sysconfig', result: '절대 경로로 이동' }
    ]},
    { cmd: 'echo', desc: '텍스트 출력', options: [
      { opt: '문자열', ex: '$ echo "Hello World"', result: 'Hello World' },
      { opt: '-n', ex: '$ echo -n "no newline"', result: '줄바꿈 없이 출력' },
      { opt: '-e', ex: '$ echo -e "line1\\nline2"', result: '이스케이프 문자 처리 (\\n, \\t 등)' },
      { opt: '$변수', ex: '$ echo $HOME', result: '/home/user (환경 변수 출력)' },
      { opt: '$(...)', ex: '$ echo $(date)', result: '명령어 실행 결과 출력' }
    ]},
    { cmd: 'man', desc: '명령어 매뉴얼 페이지', options: [
      { opt: '명령어', ex: '$ man ls', result: 'ls 명령어 매뉴얼 표시' },
      { opt: '-k', ex: '$ man -k password', result: '키워드로 매뉴얼 검색 (apropos)' },
      { opt: '섹션', ex: '$ man 5 passwd', result: '/etc/passwd 파일 형식 매뉴얼 (섹션 5)' },
      { opt: '-f', ex: '$ man -f ls', result: '명령어의 간단 설명 (whatis)' }
    ]},
    { cmd: 'help', desc: '셸 내장 명령어 도움말', options: [
      { opt: '내장명령', ex: '$ help cd', result: 'cd 명령어 사용법 표시' },
      { opt: '--help', ex: '$ ls --help', result: '명령어 자체 도움말 출력' },
      { opt: 'type', ex: '$ type cd', result: 'cd is a shell builtin (타입 확인)' }
    ]}
  ];

  return (
    <>
      <SEOHead
        title="기본 명령어 - Linux Study"
        description="pwd, ls, cd, echo, man, help 등 리눅스 기본 명령어의 주요 옵션과 예제를 정리합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">기본 명령어</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            pwd, ls, cd, echo, man, help - 리눅스 필수 기본 명령어
          </p>
        </div>
      </section>

      <div className="lesson-body container">
        {commands.map((command, idx) => (
          <section className="lesson-section" data-aos="fade-up" key={idx}>
            <h2>{command.cmd} - {command.desc}</h2>
            <div className="lesson-table-wrapper">
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th>옵션</th>
                    <th>사용 예</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {command.options.map((opt, i) => (
                    <tr key={i}>
                      <td><strong>{opt.opt}</strong></td>
                      <td><code>{opt.ex}</code></td>
                      <td>{opt.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section className="lesson-section" data-aos="fade-up">
          <h2>man 매뉴얼 섹션 번호</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>섹션</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>사용자 명령어</td></tr>
                <tr><td>2</td><td>시스템 호출 (커널 함수)</td></tr>
                <tr><td>3</td><td>라이브러리 함수 (C)</td></tr>
                <tr><td>4</td><td>특수 파일 (/dev)</td></tr>
                <tr><td>5</td><td>파일 형식, 설정 파일</td></tr>
                <tr><td>6</td><td>게임</td></tr>
                <tr><td>7</td><td>기타 (프로토콜, 파일 시스템 등)</td></tr>
                <tr><td>8</td><td>시스템 관리 명령어 (root)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>다른 명령어 카테고리</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/commands/file" className="btn btn-primary">파일/디렉터리 관리 &rarr;</Link>
            <Link to="/commands/process" className="btn btn-secondary">프로세스 관리</Link>
            <Link to="/commands/network" className="btn btn-secondary">네트워크 명령어</Link>
            <Link to="/commands/admin" className="btn btn-secondary">시스템 관리</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommandsBasic;
