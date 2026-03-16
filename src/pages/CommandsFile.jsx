import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const CommandsFile = () => {
  useAOS();
  const { t } = useLanguage();

  const commands = [
    { cmd: 'cp', desc: '파일/디렉터리 복사', options: [
      { opt: '-r', ex: '$ cp -r dir1 dir2', result: '디렉터리 재귀 복사' },
      { opt: '-p', ex: '$ cp -p file1 file2', result: '속성(퍼미션, 소유자, 시간) 보존' },
      { opt: '-i', ex: '$ cp -i file1 file2', result: '덮어쓰기 전 확인' },
      { opt: '-f', ex: '$ cp -f file1 file2', result: '강제 복사 (확인 없이)' },
      { opt: '-a', ex: '$ cp -a dir1 dir2', result: '아카이브 모드 (-rpd와 동일)' }
    ]},
    { cmd: 'mv', desc: '파일 이동/이름 변경', options: [
      { opt: '(기본)', ex: '$ mv old.txt new.txt', result: '파일 이름 변경' },
      { opt: '(이동)', ex: '$ mv file.txt /tmp/', result: '파일을 /tmp/로 이동' },
      { opt: '-i', ex: '$ mv -i file1 file2', result: '덮어쓰기 전 확인' },
      { opt: '-f', ex: '$ mv -f file1 file2', result: '강제 이동' }
    ]},
    { cmd: 'rm', desc: '파일/디렉터리 삭제', options: [
      { opt: '-r', ex: '$ rm -r dir/', result: '디렉터리 재귀 삭제' },
      { opt: '-f', ex: '$ rm -f file.txt', result: '강제 삭제 (확인 없이)' },
      { opt: '-i', ex: '$ rm -i file.txt', result: '삭제 전 확인' },
      { opt: '-rf', ex: '$ rm -rf dir/', result: '디렉터리 강제 재귀 삭제 (주의!)' }
    ]},
    { cmd: 'mkdir', desc: '디렉터리 생성', options: [
      { opt: '(기본)', ex: '$ mkdir newdir', result: '디렉터리 생성' },
      { opt: '-p', ex: '$ mkdir -p a/b/c', result: '중간 디렉터리 자동 생성' },
      { opt: '-m', ex: '$ mkdir -m 755 dir', result: '퍼미션 지정하여 생성' }
    ]},
    { cmd: 'rmdir', desc: '빈 디렉터리 삭제', options: [
      { opt: '(기본)', ex: '$ rmdir emptydir', result: '빈 디렉터리만 삭제' },
      { opt: '-p', ex: '$ rmdir -p a/b/c', result: '비어있는 상위 디렉터리도 삭제' }
    ]},
    { cmd: 'find', desc: '파일 검색', options: [
      { opt: '-name', ex: '$ find / -name "*.log"', result: '이름 패턴으로 검색' },
      { opt: '-type', ex: '$ find / -type f', result: 'f:파일, d:디렉터리, l:링크' },
      { opt: '-size', ex: '$ find / -size +100M', result: '100MB 이상 파일' },
      { opt: '-mtime', ex: '$ find / -mtime -7', result: '7일 이내 수정된 파일' },
      { opt: '-user', ex: '$ find /home -user user1', result: '특정 사용자 소유 파일' },
      { opt: '-perm', ex: '$ find / -perm 777', result: '특정 퍼미션 파일' },
      { opt: '-exec', ex: '$ find / -name "*.tmp" -exec rm {} \\;', result: '찾은 파일에 명령 실행' }
    ]},
    { cmd: 'locate', desc: '데이터베이스 기반 파일 검색', options: [
      { opt: '(기본)', ex: '$ locate passwd', result: 'passwd 포함 파일 빠르게 검색' },
      { opt: '-i', ex: '$ locate -i readme', result: '대소문자 무시 검색' },
      { opt: 'updatedb', ex: '$ updatedb', result: '데이터베이스 갱신 (root)' }
    ]},
    { cmd: 'cat', desc: '파일 내용 출력', options: [
      { opt: '(기본)', ex: '$ cat file.txt', result: '파일 전체 내용 출력' },
      { opt: '-n', ex: '$ cat -n file.txt', result: '줄 번호 표시' },
      { opt: '연결', ex: '$ cat f1 f2 > merged', result: '여러 파일 연결' }
    ]},
    { cmd: 'head', desc: '파일 앞부분 출력', options: [
      { opt: '(기본)', ex: '$ head file.txt', result: '처음 10줄 출력' },
      { opt: '-n', ex: '$ head -n 20 file.txt', result: '처음 20줄 출력' }
    ]},
    { cmd: 'tail', desc: '파일 뒷부분 출력', options: [
      { opt: '(기본)', ex: '$ tail file.txt', result: '마지막 10줄 출력' },
      { opt: '-n', ex: '$ tail -n 20 file.txt', result: '마지막 20줄 출력' },
      { opt: '-f', ex: '$ tail -f /var/log/syslog', result: '실시간 모니터링 (로그 추적)' }
    ]},
    { cmd: 'less', desc: '페이지 단위 파일 보기', options: [
      { opt: '(기본)', ex: '$ less file.txt', result: '양방향 스크롤, /검색 가능' },
      { opt: 'Space', ex: '(내부)', result: '다음 페이지' },
      { opt: 'b', ex: '(내부)', result: '이전 페이지' },
      { opt: '/pattern', ex: '(내부)', result: '검색' },
      { opt: 'q', ex: '(내부)', result: '종료' }
    ]},
    { cmd: 'more', desc: '페이지 단위 출력 (앞으로만)', options: [
      { opt: '(기본)', ex: '$ more file.txt', result: '페이지 단위 출력' },
      { opt: 'Space', ex: '(내부)', result: '다음 페이지' },
      { opt: 'Enter', ex: '(내부)', result: '한 줄씩 이동' }
    ]}
  ];

  return (
    <>
      <SEOHead
        title="파일/디렉터리 관리 명령어 - Linux Study"
        description="cp, mv, rm, mkdir, find, locate, cat, head, tail, less, more 등 파일 관리 명령어를 정리합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">파일/디렉터리 관리</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            cp, mv, rm, mkdir, find, locate, cat, head, tail, less, more
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
          <h2>다른 명령어 카테고리</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/commands/basic" className="btn btn-secondary">&larr; 기본 명령어</Link>
            <Link to="/commands/process" className="btn btn-primary">프로세스 관리 &rarr;</Link>
            <Link to="/commands/network" className="btn btn-secondary">네트워크 명령어</Link>
            <Link to="/commands/admin" className="btn btn-secondary">시스템 관리</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommandsFile;
