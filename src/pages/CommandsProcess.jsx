import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import LessonComplete from '../components/LessonComplete';

const CommandsProcess = () => {
  useAOS();
  const { t } = useLanguage();

  const commands = [
    { cmd: 'ps', desc: '프로세스 상태 확인', options: [
      { opt: '(기본)', ex: '$ ps', result: '현재 터미널의 프로세스만 표시' },
      { opt: 'aux', ex: '$ ps aux', result: '모든 프로세스 상세 정보 (BSD 스타일)' },
      { opt: '-ef', ex: '$ ps -ef', result: '모든 프로세스 풀 포맷 (System V 스타일)' },
      { opt: '-u', ex: '$ ps -u user1', result: '특정 사용자의 프로세스' },
      { opt: '--sort', ex: '$ ps aux --sort=-%mem', result: '메모리 사용량 순 정렬' },
      { opt: '-p', ex: '$ ps -p 1234', result: '특정 PID 프로세스 정보' },
      { opt: 'axjf', ex: '$ ps axjf', result: '프로세스 트리 형태로 표시' }
    ]},
    { cmd: 'top', desc: '실시간 프로세스 모니터링', options: [
      { opt: '(기본)', ex: '$ top', result: '실시간 프로세스 목록 (3초 갱신)' },
      { opt: '-d', ex: '$ top -d 1', result: '갱신 간격 1초로 설정' },
      { opt: '-p', ex: '$ top -p 1234', result: '특정 PID만 모니터링' },
      { opt: '-u', ex: '$ top -u user1', result: '특정 사용자 프로세스만' },
      { opt: 'q (내부)', ex: 'q', result: '종료' },
      { opt: 'k (내부)', ex: 'k → PID 입력', result: '프로세스 종료' },
      { opt: 'M (내부)', ex: 'M', result: '메모리 사용량 순 정렬' },
      { opt: 'P (내부)', ex: 'P', result: 'CPU 사용량 순 정렬' },
      { opt: '1 (내부)', ex: '1', result: 'CPU별 사용률 표시' }
    ]},
    { cmd: 'htop', desc: '향상된 프로세스 모니터링', options: [
      { opt: '(기본)', ex: '$ htop', result: '컬러 UI, 마우스 지원 프로세스 모니터' },
      { opt: '-u', ex: '$ htop -u user1', result: '특정 사용자 프로세스만' },
      { opt: 'F5 (내부)', ex: 'F5', result: '트리 뷰 토글' },
      { opt: 'F9 (내부)', ex: 'F9', result: '프로세스에 시그널 전송' },
      { opt: 'F6 (내부)', ex: 'F6', result: '정렬 기준 변경' }
    ]},
    { cmd: 'kill', desc: '프로세스에 시그널 전송', options: [
      { opt: '(기본)', ex: '$ kill 1234', result: 'SIGTERM(15) 전송 (정상 종료)' },
      { opt: '-9', ex: '$ kill -9 1234', result: 'SIGKILL 전송 (강제 종료)' },
      { opt: '-15', ex: '$ kill -15 1234', result: 'SIGTERM 전송 (기본 시그널)' },
      { opt: '-1', ex: '$ kill -1 1234', result: 'SIGHUP 전송 (재시작)' },
      { opt: '-l', ex: '$ kill -l', result: '사용 가능한 시그널 목록' }
    ]},
    { cmd: 'killall', desc: '이름으로 프로세스 종료', options: [
      { opt: '(기본)', ex: '$ killall httpd', result: '이름이 httpd인 모든 프로세스 종료' },
      { opt: '-9', ex: '$ killall -9 httpd', result: '강제 종료' },
      { opt: '-u', ex: '$ killall -u user1', result: '특정 사용자의 모든 프로세스 종료' }
    ]},
    { cmd: 'nice', desc: '우선순위 지정하여 실행', options: [
      { opt: '-n', ex: '$ nice -n 10 command', result: '우선순위 10으로 실행 (낮은 우선순위)' },
      { opt: '-n 음수', ex: '$ nice -n -5 command', result: '높은 우선순위 (root만 가능)' }
    ]},
    { cmd: 'renice', desc: '실행 중 프로세스 우선순위 변경', options: [
      { opt: '-p', ex: '$ renice 10 -p 1234', result: 'PID 1234의 우선순위를 10으로 변경' },
      { opt: '-u', ex: '$ renice 5 -u user1', result: '사용자의 모든 프로세스 우선순위 변경' }
    ]},
    { cmd: 'nohup', desc: '로그아웃 후에도 실행 유지', options: [
      { opt: '(기본)', ex: '$ nohup command &', result: 'SIGHUP 무시, 백그라운드 실행' },
      { opt: '출력', ex: '$ nohup cmd > out.log 2>&1 &', result: '출력을 파일로 리다이렉트' }
    ]},
    { cmd: 'bg', desc: '중지된 작업을 백그라운드로', options: [
      { opt: '%n', ex: '$ bg %1', result: '작업 번호 1을 백그라운드로 재개' }
    ]},
    { cmd: 'fg', desc: '백그라운드 작업을 포그라운드로', options: [
      { opt: '%n', ex: '$ fg %1', result: '작업 번호 1을 포그라운드로 전환' }
    ]},
    { cmd: 'jobs', desc: '백그라운드 작업 목록', options: [
      { opt: '(기본)', ex: '$ jobs', result: '현재 셸의 백그라운드 작업 목록' },
      { opt: '-l', ex: '$ jobs -l', result: 'PID와 함께 표시' }
    ]}
  ];

  return (
    <>
      <SEOHead
        title="프로세스 관리 명령어 - Linux Study"
        description="ps, top, htop, kill, nice, renice, nohup, bg, fg, jobs 등 프로세스 관리 명령어를 정리합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">프로세스 관리</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            ps, top, htop, kill, nice, renice, nohup, bg, fg, jobs
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        <section className="lesson-section" data-aos="fade-up">
          <h2>프로세스 상태 코드</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr><th>코드</th><th>상태</th><th>설명</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>R</strong></td><td>Running</td><td>실행 중 또는 실행 대기 중</td></tr>
                <tr><td><strong>S</strong></td><td>Sleeping</td><td>인터럽트 가능한 대기 상태</td></tr>
                <tr><td><strong>D</strong></td><td>Disk Sleep</td><td>인터럽트 불가능한 대기 (I/O)</td></tr>
                <tr><td><strong>T</strong></td><td>Stopped</td><td>중지됨 (Ctrl+Z 또는 SIGSTOP)</td></tr>
                <tr><td><strong>Z</strong></td><td>Zombie</td><td>종료되었으나 부모가 처리하지 않은 상태</td></tr>
              </tbody>
            </table>
          </div>
        </section>

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
            <Link to="/commands/file" className="btn btn-secondary">&larr; 파일/디렉터리 관리</Link>
            <Link to="/commands/network" className="btn btn-primary">네트워크 명령어 &rarr;</Link>
            <Link to="/commands/admin" className="btn btn-secondary">시스템 관리</Link>
          </div>
        </section>
        <LessonComplete lessonId="cmd-process" />
      </div>
    </>
  );
};

export default CommandsProcess;
