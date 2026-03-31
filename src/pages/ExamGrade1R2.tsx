import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';

const questions = [
  { q: 'SELinux에서 현재 모드를 일시적으로 Permissive로 변경하는 명령은?', o: ['setenforce 0', 'setenforce 1', 'getenforce permissive', 'sestatus -p'], a: 0, e: 'setenforce 0은 SELinux를 Permissive 모드로 변경합니다. setenforce 1은 Enforcing입니다.' },
  { q: 'iptables에서 NAT 테이블의 POSTROUTING 체인에서 IP 마스커레이드를 설정하는 명령은?', o: ['iptables -A INPUT -j MASQUERADE', 'iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE', 'iptables -t nat -A PREROUTING -j MASQUERADE', 'iptables -A FORWARD -j MASQUERADE'], a: 1, e: 'IP 마스커레이드는 nat 테이블의 POSTROUTING 체인에 설정하며, 외부 인터페이스(-o)를 지정합니다.' },
  { q: 'SSH에서 키 기반 인증만 허용하려면 sshd_config에 설정해야 하는 항목은?', o: ['PermitRootLogin no', 'PasswordAuthentication no', 'PubkeyAuthentication no', 'ChallengeResponseAuthentication yes'], a: 1, e: 'PasswordAuthentication no로 비밀번호 인증을 비활성화하고, PubkeyAuthentication yes(기본값)를 유지합니다.' },
  { q: 'Apache 가상 호스트에서 ServerName 지시어의 역할은?', o: ['서버 IP 설정', '요청을 처리할 도메인 이름 지정', '서버 포트 설정', 'SSL 인증서 경로'], a: 1, e: 'ServerName은 해당 가상 호스트가 처리할 도메인 이름을 지정합니다.' },
  { q: 'BIND DNS에서 존 파일의 SOA 레코드에 포함되지 않는 항목은?', o: ['Serial', 'Refresh', 'TTL', 'IP Address'], a: 3, e: 'SOA 레코드에는 Serial, Refresh, Retry, Expire, Minimum TTL이 포함됩니다. IP Address는 A 레코드입니다.' },
  { q: 'Postfix의 주 설정 파일은?', o: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/sendmail.cf', '/etc/postfix/postfix.conf'], a: 1, e: 'Postfix의 주 설정 파일은 /etc/postfix/main.cf입니다. master.cf는 서비스 정의 파일입니다.' },
  { q: 'NFS에서 root_squash의 의미는?', o: ['클라이언트 root를 서버 root로 매핑', '클라이언트 root를 nobody로 매핑', 'NFS 서비스 root 사용자로 실행', '루트 파일 시스템 공유'], a: 1, e: 'root_squash(기본값)는 클라이언트의 root 사용자를 서버에서 nobody(nfsnobody)로 매핑합니다.' },
  { q: 'Samba에서 SMB/CIFS의 기본 포트는?', o: ['139', '445', '21', '3128'], a: 1, e: 'SMB(Server Message Block)/CIFS는 445번 포트를 사용합니다. 139는 NetBIOS over TCP입니다.' },
  { q: 'audit 시스템에서 /etc/passwd 파일의 쓰기와 속성 변경을 감시하는 규칙은?', o: ['auditctl -w /etc/passwd -p rw', 'auditctl -w /etc/passwd -p wa', 'auditctl -a /etc/passwd -p wa', 'audit -w /etc/passwd'], a: 1, e: '-w는 감시 파일, -p wa는 쓰기(w)와 속성변경(a) 퍼미션을 감시합니다.' },
  { q: 'nftables에서 테이블을 생성하는 명령은?', o: ['nft create table inet my_table', 'nft add table inet my_table', 'nft new table inet my_table', 'nft table add inet my_table'], a: 1, e: 'nft add table inet my_table은 inet 패밀리의 my_table 테이블을 생성합니다.' },
  { q: 'Let\'s Encrypt 인증서를 발급받는 도구는?', o: ['openssl', 'certbot', 'keytool', 'ssh-keygen'], a: 1, e: 'certbot은 Let\'s Encrypt에서 무료 SSL/TLS 인증서를 자동으로 발급받는 공식 클라이언트입니다.' },
  { q: 'OpenVPN의 기본 포트와 프로토콜은?', o: ['443/TCP', '1194/UDP', '22/TCP', '8080/TCP'], a: 1, e: 'OpenVPN은 기본적으로 UDP 1194 포트를 사용합니다.' },
  { q: 'fail2ban에서 maxretry=3, findtime=600, bantime=3600의 의미는?', o: ['3번 실패 시 10분간 차단', '600초 내 3번 실패 시 3600초(1시간) 차단', '3시간 동안 600번 실패 시 차단', '3번 실패 시 영구 차단'], a: 1, e: 'findtime(600초=10분) 내에 maxretry(3번) 실패하면 bantime(3600초=1시간) 동안 차단합니다.' },
  { q: 'rsync에서 --link-dest 옵션의 용도는?', o: ['심볼릭 링크 생성', '하드 링크를 이용한 증분 백업', '대상 디렉터리 링크', '원격 링크 유지'], a: 1, e: '--link-dest는 변경되지 않은 파일을 하드 링크로 참조하여 공간 효율적인 증분 백업을 구현합니다.' },
  { q: 'GRUB에서 root 비밀번호를 재설정하기 위해 커널 라인에 추가하는 옵션은?', o: ['single', 'rd.break', 'init=/sbin/login', 'rescue'], a: 1, e: 'rd.break는 initramfs에서 실제 루트 파일 시스템으로 전환하기 전에 중단합니다.' },
  { q: 'Nginx에서 리버스 프록시 설정 시 백엔드 서버의 실제 클라이언트 IP를 전달하는 헤더는?', o: ['X-Real-IP', 'X-Client-IP', 'Remote-Addr', 'Client-IP'], a: 0, e: 'proxy_set_header X-Real-IP $remote_addr 설정으로 클라이언트의 실제 IP를 백엔드에 전달합니다.' },
  { q: 'SELinux에서 httpd 프로세스가 네트워크에 연결할 수 있도록 하는 Boolean 설정은?', o: ['httpd_enable_cgi', 'httpd_can_network_connect', 'httpd_use_nfs', 'httpd_sys_content_t'], a: 1, e: 'setsebool -P httpd_can_network_connect on으로 httpd의 네트워크 연결을 허용합니다.' },
  { q: 'DHCP 서버에서 클라이언트에 할당하는 IP 범위를 지정하는 키워드는?', o: ['subnet', 'range', 'fixed-address', 'option routers'], a: 1, e: 'range 키워드로 DHCP 클라이언트에 할당할 IP 주소 범위를 지정합니다.' },
  { q: 'SSL/TLS 인증서에서 개인 키(Private Key)의 권장 퍼미션은?', o: ['644', '755', '600', '777'], a: 2, e: '개인 키는 소유자만 읽을 수 있도록 600(rw------) 퍼미션을 설정해야 합니다.' },
  { q: '증분 백업(Incremental Backup)의 특징은?', o: ['매번 전체 데이터 백업', '마지막 전체 백업 이후 변경분 백업', '마지막 백업 이후 변경분만 백업', '변경된 파일의 이전 버전 보관'], a: 2, e: '증분 백업은 마지막 백업(전체든 증분이든) 이후 변경된 데이터만 백업합니다. 차등 백업은 마지막 전체 백업 이후 변경분입니다.' }
];

const ExamGrade1R2 = () => {
  useAOS();
  const { t } = useLanguage();
  const { recordExamResult } = useProgress();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, oIdx: number) => { if (!submitted) setAnswers(prev => ({ ...prev, [qIdx]: oIdx })); };
  const handleSubmit = () => { if (Object.keys(answers).length < questions.length) { alert('모든 문제에 답을 선택해주세요.'); return; } setSubmitted(true); const correctCount = Object.keys(answers).reduce((acc, idx) => acc + (answers[Number(idx)] === questions[Number(idx)].a ? 1 : 0), 0); recordExamResult('exam-grade1-r2', correctCount, questions.length); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleReset = () => { setAnswers({}); setSubmitted(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const score = submitted ? questions.reduce((acc, q, i) => acc + (answers[i] === q.a ? 1 : 0), 0) : 0;

  return (
    <>
      <SEOHead title="1급 2차 모의고사 - Linux Study" description="리눅스 마스터 1급 2차 모의고사 20문항 (최고난도)" />
      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">1급 2차 모의고사</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">리눅스 마스터 1급 2차 범위 모의고사 (20문항, 최고난도)</p>
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
            <div className={`exam-mcq-options${q.o.every(o => o.length <= 10) ? ' cols-4' : q.o.every(o => o.length <= 20) ? ' cols-2' : ''}`}>
              {q.o.map((option, oIdx) => {
                let cls = 'exam-mcq-btn';
                if (submitted) {
                  cls += ' submitted';
                  if (oIdx === q.a) cls += ' correct';
                  else if (answers[qIdx] === oIdx) cls += ' wrong';
                } else if (answers[qIdx] === oIdx) {
                  cls += ' selected';
                }
                return (
                  <button key={oIdx} className={cls} onClick={() => handleSelect(qIdx, oIdx)}>
                    ({oIdx + 1}) {option}
                  </button>
                );
              })}
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
            <Link to="/exam/grade1-round1" className="btn btn-secondary">&larr; 1급 1차 모의고사</Link>
            <Link to="/exam/grade2-round1" className="btn btn-primary">2급 1차 모의고사</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExamGrade1R2;
