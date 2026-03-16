import { useState } from 'react';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const Training = () => {
  useAOS();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const courses = [
    { value: 'grade2-basic', label: '리눅스 마스터 2급 기초반 (온라인)' },
    { value: 'grade2-intensive', label: '리눅스 마스터 2급 집중반 (오프라인)' },
    { value: 'grade1-basic', label: '리눅스 마스터 1급 기초반 (온라인)' },
    { value: 'grade1-intensive', label: '리눅스 마스터 1급 집중반 (오프라인)' },
    { value: 'linux-admin', label: '리눅스 서버 관리 실무 (오프라인)' },
    { value: 'linux-security', label: '리눅스 보안 실무 (오프라인)' }
  ];

  return (
    <>
      <SEOHead
        title="교육신청 - Linux Study"
        description="리눅스 마스터 자격증 교육 과정 안내 및 신청"
      />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">교육신청</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            리눅스 마스터 자격증 취득을 위한 교육 과정에 신청하세요.
          </p>
        </div>
      </section>

      <div className="lesson-body container">

        <section className="lesson-section" data-aos="fade-up">
          <h2>교육 과정 안내</h2>
          <div className="lesson-table-wrapper">
            <table className="lesson-table">
              <thead>
                <tr>
                  <th>과정명</th>
                  <th>형태</th>
                  <th>기간</th>
                  <th>대상</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>2급 기초반</strong></td>
                  <td>온라인</td>
                  <td>4주 (주 2회)</td>
                  <td>리눅스 입문자</td>
                </tr>
                <tr>
                  <td><strong>2급 집중반</strong></td>
                  <td>오프라인</td>
                  <td>2주 (주 5일)</td>
                  <td>단기 합격 목표</td>
                </tr>
                <tr>
                  <td><strong>1급 기초반</strong></td>
                  <td>온라인</td>
                  <td>8주 (주 2회)</td>
                  <td>2급 합격자</td>
                </tr>
                <tr>
                  <td><strong>1급 집중반</strong></td>
                  <td>오프라인</td>
                  <td>4주 (주 5일)</td>
                  <td>단기 합격 목표</td>
                </tr>
                <tr>
                  <td><strong>서버 관리 실무</strong></td>
                  <td>오프라인</td>
                  <td>3주 (주 3일)</td>
                  <td>실무 능력 향상</td>
                </tr>
                <tr>
                  <td><strong>보안 실무</strong></td>
                  <td>오프라인</td>
                  <td>3주 (주 3일)</td>
                  <td>보안 관련 업무자</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>교육 특징</h2>
          <ul>
            <li><strong>실습 중심:</strong> 이론과 실습을 7:3 비율로 구성하여 실전 능력을 키웁니다.</li>
            <li><strong>소규모 반 운영:</strong> 반당 최대 15명으로 밀착 지도합니다.</li>
            <li><strong>현직 전문가 강의:</strong> 리눅스 서버 운영 경력 10년 이상의 전문 강사진입니다.</li>
            <li><strong>모의고사 제공:</strong> 실전 유형의 모의고사로 시험 대비를 합니다.</li>
            <li><strong>수료 후 지원:</strong> 수료 후 3개월간 질의응답 지원을 제공합니다.</li>
          </ul>
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>교육 신청</h2>

          {submitted ? (
            <div className="callout-box info">
              <h3>신청이 완료되었습니다!</h3>
              <p>
                담당자가 확인 후 입력하신 연락처로 상세 안내를 드리겠습니다.
                보통 1~2 영업일 이내에 연락드립니다.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', course: '', message: '' }); }}
                className="btn btn-primary"
                style={{ marginTop: '12px' }}
              >
                새로운 신청
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  이름 <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                  style={{
                    width: '100%', padding: '12px 16px', border: '2px solid var(--border-light)',
                    borderRadius: '8px', fontSize: '15px', color: 'var(--text-primary)',
                    background: 'var(--bg-white)', transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  이메일 <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  style={{
                    width: '100%', padding: '12px 16px', border: '2px solid var(--border-light)',
                    borderRadius: '8px', fontSize: '15px', color: 'var(--text-primary)',
                    background: 'var(--bg-white)', transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  연락처 <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-1234-5678"
                  style={{
                    width: '100%', padding: '12px 16px', border: '2px solid var(--border-light)',
                    borderRadius: '8px', fontSize: '15px', color: 'var(--text-primary)',
                    background: 'var(--bg-white)', transition: 'border-color 0.2s'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  교육 과정 <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%', padding: '12px 16px', border: '2px solid var(--border-light)',
                    borderRadius: '8px', fontSize: '15px', color: 'var(--text-primary)',
                    background: 'var(--bg-white)', transition: 'border-color 0.2s'
                  }}
                >
                  <option value="">과정을 선택하세요</option>
                  {courses.map((c, i) => (
                    <option key={i} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  기타 문의사항
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="궁금한 점이 있으면 작성해주세요."
                  rows={4}
                  style={{
                    width: '100%', padding: '12px 16px', border: '2px solid var(--border-light)',
                    borderRadius: '8px', fontSize: '15px', color: 'var(--text-primary)',
                    background: 'var(--bg-white)', transition: 'border-color 0.2s',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                교육 신청하기
              </button>
            </form>
          )}
        </section>

        <section className="lesson-section" data-aos="fade-up">
          <h2>연락처</h2>
          <div className="callout-box info">
            <p><strong>이메일:</strong> aebon@dreamitbiz.com</p>
            <p><strong>전화:</strong> 010-3700-0629</p>
            <p><strong>운영시간:</strong> 평일 09:00 ~ 18:00</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;
