import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const CommandsAdmin = () => {
  useAOS();
  const { t } = useLanguage();

  const commands = [
    { cmd: 'systemctl', desc: 'systemd 서비스 관리', options: [
      { opt: 'start', ex: '$ systemctl start httpd', result: '서비스 시작' },
      { opt: 'stop', ex: '$ systemctl stop httpd', result: '서비스 중지' },
      { opt: 'restart', ex: '$ systemctl restart httpd', result: '서비스 재시작' },
      { opt: 'reload', ex: '$ systemctl reload httpd', result: '설정 리로드 (재시작 없이)' },
      { opt: 'status', ex: '$ systemctl status httpd', result: '서비스 상태 확인' },
      { opt: 'enable', ex: '$ systemctl enable httpd', result: '부팅 시 자동 시작' },
      { opt: 'disable', ex: '$ systemctl disable httpd', result: '부팅 시 자동 시작 해제' },
      { opt: 'is-active', ex: '$ systemctl is-active httpd', result: '실행 여부 확인' },
      { opt: 'is-enabled', ex: '$ systemctl is-enabled httpd', result: '자동 시작 여부 확인' },
      { opt: 'list-units', ex: '$ systemctl list-units --type=service', result: '서비스 목록' },
      { opt: 'daemon-reload', ex: '$ systemctl daemon-reload', result: '유닛 파일 변경 후 리로드' }
    ]},
    { cmd: 'journalctl', desc: 'systemd 저널 로그 조회', options: [
      { opt: '(기본)', ex: '$ journalctl', result: '전체 로그 조회' },
      { opt: '-u', ex: '$ journalctl -u httpd', result: '특정 서비스 로그' },
      { opt: '-f', ex: '$ journalctl -f', result: '실시간 로그 모니터링' },
      { opt: '-n', ex: '$ journalctl -n 50', result: '최근 50줄' },
      { opt: '-p', ex: '$ journalctl -p err', result: '특정 우선순위 이상' },
      { opt: '--since', ex: '$ journalctl --since "1 hour ago"', result: '시간 필터' },
      { opt: '-b', ex: '$ journalctl -b', result: '현재 부팅 로그만' },
      { opt: '-k', ex: '$ journalctl -k', result: '커널 메시지만' }
    ]},
    { cmd: 'useradd', desc: '사용자 추가', options: [
      { opt: '(기본)', ex: '$ useradd user1', result: '사용자 생성' },
      { opt: '-m', ex: '$ useradd -m user1', result: '홈 디렉터리 자동 생성' },
      { opt: '-s', ex: '$ useradd -s /bin/bash user1', result: '기본 셸 지정' },
      { opt: '-G', ex: '$ useradd -G wheel user1', result: '보조 그룹 지정' },
      { opt: '-d', ex: '$ useradd -d /home/custom user1', result: '홈 디렉터리 경로 지정' },
      { opt: '-u', ex: '$ useradd -u 1500 user1', result: 'UID 지정' },
      { opt: '-c', ex: '$ useradd -c "User One" user1', result: '설명(GECOS) 지정' }
    ]},
    { cmd: 'chmod', desc: '파일 권한 변경', options: [
      { opt: '숫자', ex: '$ chmod 755 file', result: 'rwxr-xr-x (소유자rwx, 그룹rx, 기타rx)' },
      { opt: 'u+x', ex: '$ chmod u+x script.sh', result: '소유자에 실행 권한 추가' },
      { opt: 'g-w', ex: '$ chmod g-w file', result: '그룹에서 쓰기 권한 제거' },
      { opt: 'o=r', ex: '$ chmod o=r file', result: '기타 사용자에 읽기만 설정' },
      { opt: 'a+r', ex: '$ chmod a+r file', result: '모든 사용자에 읽기 추가' },
      { opt: '-R', ex: '$ chmod -R 755 dir/', result: '디렉터리 재귀 적용' },
      { opt: '4755', ex: '$ chmod 4755 program', result: 'SetUID 설정' },
      { opt: '1777', ex: '$ chmod 1777 /tmp', result: 'Sticky Bit 설정' }
    ]},
    { cmd: 'chown', desc: '소유자/그룹 변경', options: [
      { opt: '소유자', ex: '$ chown user1 file', result: '소유자 변경' },
      { opt: '소유자:그룹', ex: '$ chown user1:group1 file', result: '소유자와 그룹 동시 변경' },
      { opt: ':그룹', ex: '$ chown :group1 file', result: '그룹만 변경' },
      { opt: '-R', ex: '$ chown -R user1:group1 dir/', result: '재귀 적용' }
    ]},
    { cmd: 'mount', desc: '파일 시스템 마운트', options: [
      { opt: '(기본)', ex: '$ mount /dev/sdb1 /mnt', result: '파일 시스템 마운트' },
      { opt: '-t', ex: '$ mount -t ext4 /dev/sdb1 /mnt', result: '파일 시스템 타입 지정' },
      { opt: '-o', ex: '$ mount -o ro /dev/cdrom /mnt', result: '읽기 전용 마운트' },
      { opt: '-a', ex: '$ mount -a', result: '/etc/fstab의 모든 항목 마운트' },
      { opt: '(확인)', ex: '$ mount | grep sdb', result: '마운트 상태 확인' }
    ]},
    { cmd: 'umount', desc: '파일 시스템 마운트 해제', options: [
      { opt: '(기본)', ex: '$ umount /mnt', result: '마운트 포인트로 해제' },
      { opt: '장치', ex: '$ umount /dev/sdb1', result: '장치명으로 해제' },
      { opt: '-l', ex: '$ umount -l /mnt', result: '지연 해제 (lazy)' }
    ]},
    { cmd: 'fdisk', desc: '디스크 파티션 관리', options: [
      { opt: '-l', ex: '$ fdisk -l', result: '모든 디스크 파티션 목록' },
      { opt: '(편집)', ex: '$ fdisk /dev/sdb', result: '대화형 파티션 편집' },
      { opt: 'n (내부)', ex: 'n', result: '새 파티션 생성' },
      { opt: 'd (내부)', ex: 'd', result: '파티션 삭제' },
      { opt: 'p (내부)', ex: 'p', result: '파티션 테이블 출력' },
      { opt: 'w (내부)', ex: 'w', result: '변경 사항 저장' }
    ]},
    { cmd: 'df', desc: '디스크 사용량 확인', options: [
      { opt: '-h', ex: '$ df -h', result: '읽기 쉬운 형태로 출력' },
      { opt: '-T', ex: '$ df -T', result: '파일 시스템 타입 포함' },
      { opt: '-i', ex: '$ df -i', result: 'inode 사용량 확인' }
    ]},
    { cmd: 'du', desc: '디렉터리 사용량 확인', options: [
      { opt: '-sh', ex: '$ du -sh /home', result: '합계 크기만 표시' },
      { opt: '-h', ex: '$ du -h /var/', result: '하위 디렉터리별 크기' },
      { opt: '--max-depth', ex: '$ du -h --max-depth=1 /', result: '깊이 1단계까지만' }
    ]}
  ];

  return (
    <>
      <SEOHead
        title="시스템 관리 명령어 - Linux Study"
        description="systemctl, journalctl, useradd, chmod, chown, mount, fdisk, df, du 등 시스템 관리 명령어를 정리합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">시스템 관리</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            systemctl, journalctl, useradd, chmod, chown, mount, fdisk, df, du
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
            <Link to="/commands/network" className="btn btn-secondary">&larr; 네트워크 명령어</Link>
            <Link to="/commands/basic" className="btn btn-primary">기본 명령어</Link>
            <Link to="/commands/file" className="btn btn-secondary">파일/디렉터리 관리</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommandsAdmin;
