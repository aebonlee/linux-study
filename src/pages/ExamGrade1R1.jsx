import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';

const questions = [
  { q: '리눅스 커널 모듈을 의존성까지 고려하여 로드하는 명령어는?', o: ['insmod', 'modprobe', 'lsmod', 'rmmod'], a: 1, e: 'modprobe는 의존성을 자동으로 해결하여 커널 모듈을 로드합니다. insmod는 의존성을 처리하지 않습니다.' },
  { q: 'LVM에서 물리 볼륨(PV)을 생성하는 명령어는?', o: ['lvcreate', 'vgcreate', 'pvcreate', 'pvdisplay'], a: 2, e: 'pvcreate는 물리 디스크/파티션을 LVM 물리 볼륨으로 초기화합니다.' },
  { q: 'RAID 5의 최소 필요 디스크 수는?', o: ['2개', '3개', '4개', '5개'], a: 1, e: 'RAID 5는 분산 패리티를 사용하며 최소 3개의 디스크가 필요합니다.' },
  { q: 'PAM 설정에서 "sufficient" 제어 플래그의 의미는?', o: ['반드시 성공해야 함', '성공하면 바로 인증 허용', '실패 시 즉시 거부', '선택적 검사'], a: 1, e: 'sufficient는 해당 모듈이 성공하면 이전 required 모듈이 모두 성공했을 경우 즉시 인증을 허용합니다.' },
  { q: 'sysctl 명령으로 IP 포워딩을 영구적으로 활성화하는 방법은?', o: ['sysctl -w net.ipv4.ip_forward=1', '/etc/sysctl.conf에 net.ipv4.ip_forward=1 추가', 'echo 1 > /proc/sys/net/ipv4/ip_forward', 'iptables -A FORWARD -j ACCEPT'], a: 1, e: '/etc/sysctl.conf에 설정하면 재부팅 후에도 유지됩니다. sysctl -w는 임시 설정입니다.' },
  { q: '다음 중 커널 컴파일 시 설정을 위한 TUI 도구는?', o: ['make config', 'make menuconfig', 'make xconfig', 'make defconfig'], a: 1, e: 'make menuconfig는 ncurses 기반 TUI 환경에서 커널 설정을 할 수 있습니다.' },
  { q: 'systemd에서 서비스 유닛 파일의 확장자는?', o: ['.unit', '.service', '.target', '.daemon'], a: 1, e: 'systemd 서비스 유닛 파일은 .service 확장자를 사용합니다.' },
  { q: 'inode에 저장되지 않는 정보는?', o: ['파일 크기', '소유자 정보', '파일 이름', '퍼미션'], a: 2, e: '파일 이름은 디렉터리 엔트리에 저장되며, inode에는 저장되지 않습니다.' },
  { q: 'KVM은 어떤 유형의 가상화인가?', o: ['반가상화', '전가상화', 'OS 수준 가상화', '애플리케이션 가상화'], a: 1, e: 'KVM(Kernel-based Virtual Machine)은 하드웨어 지원 전가상화를 제공합니다.' },
  { q: 'Docker 컨테이너와 VM의 가장 큰 차이점은?', o: ['Docker는 Windows만 지원', 'Docker는 호스트 커널을 공유', 'VM이 더 가벼움', 'Docker는 네트워크 지원 안 됨'], a: 1, e: 'Docker 컨테이너는 호스트 OS의 커널을 공유하여 VM보다 가볍고 빠릅니다.' },
  { q: 'Load Average가 4.0이면 CPU 코어가 최소 몇 개여야 과부하가 아닌가?', o: ['1개', '2개', '4개', '8개'], a: 2, e: 'Load Average는 실행 대기 중인 프로세스 수이며, CPU 코어 수 이하가 정상입니다.' },
  { q: 'vmstat 명령의 si, so 열이 나타내는 것은?', o: ['시스템 인터럽트', '스왑 인/아웃', '소켓 입출력', '시리얼 I/O'], a: 1, e: 'si(swap in)는 스왑 영역에서 메모리로 읽어온 양, so(swap out)는 메모리에서 스왑으로 보낸 양입니다.' },
  { q: '디스크 쿼터에서 soft limit를 초과하면 어떻게 되는가?', o: ['즉시 쓰기 차단', '유예 기간(grace period) 동안 허용', '시스템 경고만 표시', '사용자 계정 잠금'], a: 1, e: 'soft limit 초과 시 유예 기간 동안은 사용 가능하지만, 유예 기간 만료 후에는 차단됩니다.' },
  { q: 'LVM에서 논리 볼륨을 온라인으로 확장하는 명령은?', o: ['lvcreate', 'lvextend', 'lvresize', 'vgextend'], a: 1, e: 'lvextend는 논리 볼륨의 크기를 온라인 상태에서 확장할 수 있습니다.' },
  { q: 'modinfo 명령의 용도는?', o: ['모듈 로드', '모듈 언로드', '모듈 상세 정보 확인', '모듈 의존성 해결'], a: 2, e: 'modinfo는 커널 모듈의 라이선스, 의존성, 설명 등 상세 정보를 표시합니다.' },
  { q: 'RAID 1의 특징은?', o: ['스트라이핑', '미러링', '분산 패리티', '이중 패리티'], a: 1, e: 'RAID 1은 미러링(Mirroring)으로 동일 데이터를 두 디스크에 복제합니다.' },
  { q: '커널 파라미터 vm.swappiness의 값이 0에 가까우면?', o: ['스왑을 적극적으로 사용', 'RAM을 최대한 사용하고 스왑 최소화', '스왑을 비활성화', '자동으로 최적화'], a: 1, e: 'swappiness가 0에 가까우면 가능한 RAM을 사용하고 스왑 사용을 최소화합니다.' },
  { q: 'virsh list --all 명령의 용도는?', o: ['물리 서버 목록', '네트워크 인터페이스 목록', '모든 가상 머신 목록', '디스크 파티션 목록'], a: 2, e: 'virsh list --all은 실행 중인 것과 중지된 것을 포함한 모든 KVM 가상 머신을 표시합니다.' },
  { q: 'sar 명령은 어떤 패키지에 포함되어 있는가?', o: ['procps', 'sysstat', 'coreutils', 'net-tools'], a: 1, e: 'sar(System Activity Reporter)는 sysstat 패키지에 포함되어 있습니다.' },
  { q: 'LDAP의 기본 포트 번호는?', o: ['389', '443', '636', '3389'], a: 0, e: 'LDAP는 389번 포트를 사용하며, LDAPS(SSL)는 636번 포트를 사용합니다.' }
];

const ExamGrade1R1 = () => {
  useAOS();
  const { t } = useLanguage();
  const { recordExamResult } = useProgress();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx, oIdx) => { if (!submitted) setAnswers(prev => ({ ...prev, [qIdx]: oIdx })); };
  const handleSubmit = () => { if (Object.keys(answers).length < questions.length) { alert('모든 문제에 답을 선택해주세요.'); return; } setSubmitted(true); const correctCount = Object.keys(answers).reduce((acc, idx) => acc + (answers[idx] === questions[idx].a ? 1 : 0), 0); recordExamResult('exam-grade1-r1', correctCount, questions.length); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleReset = () => { setAnswers({}); setSubmitted(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const score = submitted ? questions.reduce((acc, q, i) => acc + (answers[i] === q.a ? 1 : 0), 0) : 0;

  return (
    <>
      <SEOHead title="1급 1차 모의고사 - Linux Study" description="리눅스 마스터 1급 1차 모의고사 20문항 (고난도)" />
      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">1급 1차 모의고사</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">리눅스 마스터 1급 1차 범위 모의고사 (20문항, 고난도)</p>
        </div>
      </section>

      <div className="lesson-body container">
        {submitted && (
          <section className="lesson-section" data-aos="fade-up">
            <div className="callout-box info">
              <h2 style={{ marginBottom: '8px' }}>시험 결과</h2>
              <p style={{ fontSize: '24px', fontWeight: '700' }}>{score} / {questions.length} ({Math.round(score / questions.length * 100)}점)</p>
              <p>{score >= 12 ? '합격 (60점 이상)' : '불합격 (60점 미만)'}</p>
              <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: '12px' }}>다시 풀기</button>
            </div>
          </section>
        )}

        {questions.map((q, qIdx) => (
          <section className="lesson-section" data-aos="fade-up" key={qIdx}>
            <h3>문제 {qIdx + 1}. {q.q}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              {q.o.map((option, oIdx) => (
                <button key={oIdx} onClick={() => handleSelect(qIdx, oIdx)} style={{
                  padding: '12px 16px', border: '2px solid var(--border-light)', borderRadius: '8px',
                  background: submitted && oIdx === q.a ? 'rgba(34,197,94,0.1)' : submitted && answers[qIdx] === oIdx && oIdx !== q.a ? 'rgba(239,68,68,0.1)' : answers[qIdx] === oIdx ? 'var(--primary-blue-bg)' : 'var(--bg-white)',
                  borderColor: submitted && oIdx === q.a ? '#22c55e' : submitted && answers[qIdx] === oIdx && oIdx !== q.a ? '#ef4444' : answers[qIdx] === oIdx ? 'var(--primary-blue)' : 'var(--border-light)',
                  cursor: submitted ? 'default' : 'pointer', textAlign: 'left', fontSize: '15px', color: 'var(--text-primary)', transition: 'all 0.2s'
                }}>({oIdx + 1}) {option}</button>
              ))}
            </div>
            {submitted && <div className="callout-box tip" style={{ marginTop: '12px' }}><strong>해설:</strong> {q.e}</div>}
          </section>
        ))}

        {!submitted && (
          <section className="lesson-section" data-aos="fade-up">
            <button onClick={handleSubmit} className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>제출하기 ({Object.keys(answers).length}/{questions.length} 답변 완료)</button>
          </section>
        )}

        <section className="lesson-section" data-aos="fade-up">
          <h2>다른 모의고사</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/exam/grade2-round2" className="btn btn-secondary">&larr; 2급 2차 모의고사</Link>
            <Link to="/exam/grade1-round2" className="btn btn-primary">1급 2차 모의고사 &rarr;</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExamGrade1R1;
