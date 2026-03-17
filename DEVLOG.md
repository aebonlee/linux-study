# Linux Study 개발일지

## 2026-03-17 - 프로젝트 초기 구축

### 개요
리눅스 마스터 자격증(1급/2급) 취득을 위한 학습 웹사이트를 구축하였습니다.
DB Study 사이트의 디자인 템플릿을 기반으로 동일한 글래스모피즘 UI와 다크모드/테마 시스템을 적용하였습니다.

### 기술 스택
- **Frontend**: React 19.2.0 + Vite 7.3.1
- **Routing**: React Router 7.13.0
- **Backend**: Supabase (향후 연동 예정)
- **배포**: https://linux-study.dreamitbiz.com/

### 프로젝트 구조
```
linux-study/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # 글래스모피즘 네비게이션
│   │   │   └── Footer.jsx       # 다크 그라데이션 푸터
│   │   └── SEOHead.jsx          # SEO 메타 태그 관리
│   ├── config/
│   │   └── site.js              # 사이트 설정, 메뉴 구조
│   ├── contexts/
│   │   ├── ThemeContext.jsx      # 라이트/다크/자동 + 5가지 컬러테마
│   │   └── LanguageContext.jsx   # 한/영 다국어 지원
│   ├── hooks/
│   │   ├── useAOS.js            # 스크롤 애니메이션
│   │   ├── useCodeCopy.js       # 코드 복사 버튼
│   │   └── useTableScroller.js  # 테이블 가로 스크롤
│   ├── layouts/
│   │   └── PublicLayout.jsx     # 30개 페이지 라우팅
│   ├── pages/                   # 30개 콘텐츠 페이지
│   ├── styles/                  # 8개 CSS 파일
│   │   ├── base.css, navbar.css, hero.css, footer.css
│   │   ├── animations.css, site.css, dark-mode.css, responsive.css
│   └── utils/
│       └── translations.js      # 한/영 번역 데이터
├── .env                         # Supabase 환경변수
├── index.html
├── package.json
└── vite.config.js
```

### 콘텐츠 구성

#### 리눅스 개론 (3페이지)
- 리눅스란 무엇인가
- 리눅스의 역사
- 리눅스 배포판 비교

#### 2급 시험 (7페이지)
- 개요: 시험 안내, 과목 구성, 합격 기준
- 1차 시험 (객관식 80문항):
  - Ch1. 리눅스 일반 (운영체제, 커널, 부팅, X 윈도우)
  - Ch2. 리눅스 운영 (파일시스템, 셸, 프로세스, 패키지)
  - Ch3. 리눅스 기초 명령어 (파일/디렉토리, 사용자/권한, 네트워크)
- 2차 시험 (객관식 80문항):
  - Ch1. 리눅스 시스템 관리 (사용자/그룹, 파일시스템, 프로세스, 소프트웨어)
  - Ch2. 리눅스 네트워크 (네트워크 기초, 서비스 설정, 보안)
  - Ch3. 리눅스 보안 및 활용 (시스템 보안, 서버 보안, 로그/모니터링)

#### 1급 시험 (7페이지) - 고난도
- 개요: 시험 안내, 과목 구성, 합격 기준 (1차 객관식 + 2차 서술형/실기)
- 1차 시험:
  - Ch1. 리눅스 실무의 이해 (시스템 아키텍처, 커널, 부트로더)
  - Ch2. 리눅스 시스템 관리 (고급 파일시스템, ACL, 성능 모니터링)
- 2차 시험:
  - Ch1. 네트워크 및 서비스 관리 (고급 네트워크, 서버 구축)
  - Ch2. 보안 시스템 관리 (SELinux, 침입탐지, VPN)
- 실무 심화:
  - Ch1. 가상화 및 클라우드 (KVM, Docker, Kubernetes)
  - Ch2. 자동화 및 모니터링 (Ansible, Prometheus, CI/CD)

#### 명령어 사전 (5페이지)
- 기본 명령어, 파일 관리, 프로세스 관리, 네트워크, 시스템 관리

#### 모의고사 (4페이지)
- 2급 1회/2회, 1급 1회/2회
- 인터랙티브 문제 풀이 (문제 선택, 채점, 점수 표시)

#### 기타
- 참고자료: 공식 사이트, 서적, 학습 커뮤니티
- 교육신청: 교육 프로그램 안내

### 디자인 특징
- **글래스모피즘 UI**: backdrop-filter blur 효과
- **5가지 컬러 테마**: 블루, 레드, 그린, 퍼플, 오렌지
- **다크/라이트 모드**: 자동(시스템) 지원
- **한국어/영어**: 다국어 전환
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 대응
- **AOS 애니메이션**: 스크롤 시 요소 등장 애니메이션
- **코드 복사**: 코드 블록 원클릭 복사
- **테이블 스크롤**: 모바일에서 화살표 스크롤

### 빌드 결과
- 총 83개 모듈 변환
- 프로덕션 빌드 성공 (약 2초)
- CSS: 70.22 KB (gzip: 13.39 KB)
- JS 번들: 254.14 KB (gzip: 81.02 KB)
- 30개 페이지 코드 스플리팅 적용

### 향후 계획
- [x] ~~Supabase DB 연동 (학습 진도, 성적 관리)~~ → v1.1에서 완료
- [x] ~~사용자 인증 (회원가입/로그인)~~ → v1.1에서 완료
- [ ] 더 많은 모의고사 문제 추가
- [ ] 실기 시뮬레이터 구현
- [ ] PWA 지원

---

## 2026-03-17 - v1.1 사용자 인증 & 학습 진도 추적 시스템

### 개요
D:\coding (코딩 학습 사이트)에 구현된 고급 기능들을 linux-study에 이식하였습니다.
Supabase 인증, 학습 진도 추적, 프로필/학습현황 페이지, 뱃지/수료증 시스템을 추가하고,
메인 페이지의 누락된 CSS와 다국어 지원도 보완하였습니다.

### 추가된 기능

#### 1. Error Boundary & Lazy Load 에러 복구
- `src/main.jsx`: ErrorBoundary 클래스 컴포넌트 추가, Provider 계층 재구성
  - BrowserRouter > ThemeProvider > LanguageProvider > AuthProvider > ProgressProvider > App
- `src/App.jsx`: `lazyLoad()` 헬퍼 함수로 청크 로드 실패 시 자동 리로드
  - Outlet 기반 중첩 라우팅 패턴으로 전환
- `src/layouts/PublicLayout.jsx`: Routes 제거, Outlet 패턴으로 단순화

#### 2. Supabase 연동 & 사용자 인증
- `src/lib/supabase.js`: Supabase 클라이언트 설정 (PKCE 인증 플로우)
- `src/contexts/AuthContext.jsx`: 전체 인증 컨텍스트
  - Google OAuth, Kakao OAuth, 이메일/비밀번호 로그인
  - 세션 관리, 프로필 이름 수정
- `src/pages/Login.jsx`: 3단계 로그인 UI
  - Step 1: 로그인 방식 선택 (Google/Kakao/이메일)
  - Step 2: 이메일 로그인 폼
  - Step 3: 회원가입 폼
- `src/styles/auth.css`: 인증 페이지 스타일 (267줄)
- `src/components/layout/Navbar.jsx`: 프로필 아바타 / 로그인 버튼 추가

#### 3. 학습 진도 추적
- `src/config/studyItems.js`: 추적 가능한 학습 항목 정의
  - 22개 레슨 (intro 3, grade2 7, grade1 7, commands 5)
  - 4개 모의고사 (2급 1차/2차, 1급 1차/2차)
  - 카테고리별 분류 함수
- `src/contexts/ProgressContext.jsx`: 진도 추적 컨텍스트
  - localStorage 저장 (`linux-study-lessons`, `linux-study-exams`)
  - Supabase 클라우드 동기화 (로그인 시)
  - API: toggleLesson, isLessonCompleted, getCompletedCount, recordExamResult, getExamResult
- `src/components/LessonComplete.jsx`: "학습 완료" 토글 버튼
  - 22개 레슨 페이지 하단에 추가
- 4개 모의고사 페이지에 `recordExamResult` 호출 추가

#### 4. 프로필 & 학습현황 페이지
- `src/pages/Profile.jsx`: 사용자 프로필 페이지
  - 프로필 아바타, 이름 수정, 로그아웃
  - 완료 레슨/응시 시험 통계
  - 뱃지 그리드, 수료증 미리보기
- `src/pages/Progress.jsx`: 학습 현황 대시보드
  - 전체 통계 (완료/남은 학습, 진도율)
  - 카테고리별 진행률 바
  - 스탬프 그리드 (레슨별 완료 상태, 시험 점수)

#### 5. 뱃지 시스템
- `src/config/badges.js`: 리눅스 학습 뱃지 8종
  - 리눅스 입문 마스터, 2급/1급/명령어 마스터
  - 첫 걸음, 탐험가(10개), 도전자(15개), 그랜드 마스터
- `src/components/BadgeCard.jsx`: SVG 아이콘 뱃지 카드

#### 6. 수료증 발급
- `src/components/Certificate.jsx`: 수료증 생성기
  - 모의고사 60점 이상 달성 시 활성화
  - PDF 다운로드 (jsPDF), PNG 다운로드 (html2canvas)
  - 완료 레슨 수, 진도율, 최고 점수 표시

#### 7. 스탬프 그리드
- `src/components/StampGrid.jsx`: 학습 완료 스탬프 표시
  - 레슨: 완료/미완료 체크 아이콘
  - 시험: 점수 표시, 페이지 링크 연결

### 메인 페이지 디자인 수정

#### CSS 누락 수정
- `src/styles/site.css`에 홈 전용 CSS 클래스 추가 (~130줄)
  - `.home-goals-grid`: 4열 그리드 (학습 목표 카드)
  - `.home-curriculum-grid` / `.home-curriculum-card`: 4열 커리큘럼 카드
  - `.home-commands-grid` / `.home-command-card`: 5열 명령어 카드
  - 다크모드 대응 규칙

#### 반응형 보강
- `src/styles/responsive.css`에 홈 그리드 3단계 반응형 추가
  - 1100px: 3열
  - 768px: 2열
  - 480px: 1열

#### 다국어 지원 보완
- `src/pages/Home.jsx`: 하드코딩된 한국어 텍스트 8곳을 `t()` 호출로 교체
- `src/utils/translations.js`: 홈 섹션 번역 키 10개 추가 (ko/en)
  - grade2Title, grade2Desc, grade1Title, grade1Desc
  - commandsTitle, commandsDesc, examCta, examCtaDesc

### 수정 파일 목록

#### 신규 파일 (15개)
| 파일 | 설명 |
|------|------|
| `src/lib/supabase.js` | Supabase 클라이언트 |
| `src/contexts/AuthContext.jsx` | 인증 컨텍스트 |
| `src/contexts/ProgressContext.jsx` | 진도 추적 컨텍스트 |
| `src/config/studyItems.js` | 학습 항목 정의 |
| `src/config/badges.js` | 뱃지 8종 정의 |
| `src/components/LessonComplete.jsx` | 학습 완료 버튼 |
| `src/components/BadgeCard.jsx` | 뱃지 카드 |
| `src/components/Certificate.jsx` | 수료증 생성 |
| `src/components/StampGrid.jsx` | 스탬프 그리드 |
| `src/pages/Login.jsx` | 로그인 페이지 |
| `src/pages/Profile.jsx` | 프로필 페이지 |
| `src/pages/Progress.jsx` | 학습현황 페이지 |
| `src/styles/auth.css` | 인증 스타일 |
| `src/styles/profile.css` | 프로필 스타일 |
| `src/styles/progress.css` | 학습현황 스타일 |

#### 수정 파일 (25개)
| 파일 | 변경 내용 |
|------|----------|
| `package.json` | @supabase/supabase-js, jspdf, html2canvas 추가 |
| `src/main.jsx` | ErrorBoundary + Provider 재구성 |
| `src/App.jsx` | lazyLoad + Outlet 라우팅 + 신규 라우트 |
| `src/layouts/PublicLayout.jsx` | Outlet 패턴 전환 |
| `src/components/layout/Navbar.jsx` | 인증 UI 추가 |
| `src/config/site.js` | 학습현황 메뉴 추가 |
| `src/index.css` | auth/profile/progress CSS import 추가 |
| `src/styles/base.css` | --font-mono, --success, --danger 변수 추가 |
| `src/styles/site.css` | 홈 그리드 CSS + 다크모드 추가 |
| `src/styles/dark-mode.css` | 인증/프로필/진도 다크모드 규칙 추가 |
| `src/styles/responsive.css` | 홈/인증/프로필/진도 반응형 규칙 추가 |
| `src/utils/translations.js` | 인증/프로필/진도/뱃지/수료증/홈 번역 키 추가 |
| `src/pages/Home.jsx` | 하드코딩 텍스트 → 번역 키 |
| 22개 레슨 페이지 | LessonComplete 버튼 추가 |
| 4개 모의고사 페이지 | recordExamResult 호출 추가 |

### 빌드 결과
- 총 380개 모듈 변환 (v1.0 대비 +297)
- CSS: 88.52 KB (gzip: 16.12 KB)
- 메인 JS 번들: 441.56 KB (gzip: 132.07 KB)
- 빌드 시간: ~4.5초
- 에러: 0

### 향후 계획
- [ ] 더 많은 모의고사 문제 추가
- [ ] 실기 시뮬레이터 구현
- [ ] PWA 지원
- [ ] 학습 알림 기능
- [ ] 커뮤니티 게시판 기능 확장

---

## 2026-03-17 - v1.2 UI/UX 개선 & 방문자 통계 & 배포 수정

### 개요
모의고사 레이아웃 개선, 방문자 통계 시스템 추가, 커스텀 도메인 배포 수정,
각종 CSS 간격/색상 이슈를 해결하고 README.md를 작성하였습니다.

### 변경 사항

#### 1. 이모지 폰트 & 페이지 간격 개선
- `index.html`: Google Noto Color Emoji 웹폰트 추가
- `src/styles/site.css`:
  - `.home-curriculum-icon`, `.home-command-icon`에 Noto Color Emoji 폰트 적용
  - `.lesson-body`에 `padding-top: 3rem`, `padding-bottom: 3rem` 추가 (페이지 헤더↔본문 간격)
  - `.lesson-section`에 `margin-bottom: 2rem` 추가 (모의고사 문항 간 간격)

#### 2. 버튼 색상 CSS 우선순위 수정
- `.lesson-body a` 스타일이 버튼 색상을 덮어쓰는 문제 해결:
  - `.lesson-body a.btn`: `color: inherit; text-decoration: none`
  - `.lesson-body a.btn-primary`: `color: var(--text-white)` (파란 버튼 흰색 글자)
  - `.lesson-body a.btn-secondary`: `color: var(--primary-blue)` (흰 버튼 파란 글자)
  - `.lesson-body a.btn-secondary:hover`: `color: var(--text-white)` (호버 시 흰색 글자)

#### 3. 교육신청 연락처 업데이트
- `src/pages/Training.jsx`:
  - 문의처 → 연락처
  - 이메일: aebon@dreamitbiz.com
  - 전화: 010-3700-0629
  - 운영시간: 평일 09:00 ~ 18:00 (점심시간 제거)

#### 4. 방문자 통계 시스템
- `src/hooks/usePageTracker.js` (신규):
  - Supabase `page_views` 테이블에 페이지 방문 기록
  - localStorage UUID로 방문자 식별
  - `fetchSiteStats()`: 오늘 방문자, 총 방문자, 총 페이지뷰, 인기 페이지 Top 5, 최근 7일 일별 통계
- `src/layouts/PublicLayout.jsx`: `usePageTracker` 훅 연동
- `src/pages/Progress.jsx` 전면 재작성:
  - 상단: 사이트 방문 통계 (3개 카드 + 7일 막대 차트 + 인기 페이지 랭킹)
  - 하단: 나의 학습 진도 (통계 카드, 진도 바, 카테고리별 진행률, 스탬프 그리드)
  - 경로 → 한글 페이지명 변환 (PAGE_LABELS 매핑)
- `src/styles/progress.css`: 방문자 통계 CSS 추가 (~200줄)
  - `.visitor-section`, `.visitor-stats-grid`, `.visitor-stat-card`
  - `.visitor-chart`, `.visitor-chart-bar`, `.visitor-chart-bar-wrapper`
  - `.visitor-popular-list`, `.visitor-popular-item`, `.visitor-popular-rank`
  - 다크모드 및 반응형 규칙
- `supabase-setup.sql` (신규): `page_views` 테이블 생성 SQL + RLS 정책

#### 5. 푸터 간격 수정
- `src/styles/footer.css`: `.footer` margin-top을 0에서 80px로 변경 (콘텐츠↔푸터 간격)

#### 6. 모의고사 객관식 그리드 레이아웃
- `src/styles/site.css`에 exam MCQ 전용 CSS 추가:
  - `.exam-mcq-options`: 기본 1열 그리드
  - `.exam-mcq-options.cols-2`: 2열 (선택지 20자 이하)
  - `.exam-mcq-options.cols-4`: 4열 (선택지 10자 이하)
  - `.exam-mcq-btn`: 선택/정답/오답/제출 상태별 스타일
  - 480px 이하에서 4열→2열 폴백
- 4개 모의고사 파일 업데이트:
  - `ExamGrade2R1.jsx`, `ExamGrade2R2.jsx`, `ExamGrade1R1.jsx`, `ExamGrade1R2.jsx`
  - 인라인 스타일 → CSS 클래스 기반 그리드로 전환
  - 선택지 길이 자동 감지하여 열 수 결정

#### 7. 커스텀 도메인 배포 수정
- `public/CNAME` 파일 추가 (`linux-study.dreamitbiz.com`)
- Vite 빌드 시 `dist/CNAME`에 자동 포함되도록 수정
- 이전에는 루트의 CNAME만 있어 gh-pages 배포 시 커스텀 도메인이 해제되는 문제 해결

#### 8. README.md 작성
- 프로젝트 소개, 주요 기능, 기술 스택, 디렉토리 구조
- 로컬 개발 가이드, 환경 변수, 배포 방법

### 커밋 이력
| 커밋 | 내용 |
|------|------|
| `81bffd8` | 이모지 Noto Color Emoji + 레슨 페이지 간격/버튼 색상 |
| `5bcc0d4` | 교육신청 연락처 업데이트 |
| `c75b9d5` | btn-secondary 호버 글자색 수정 |
| `6524f41` | 방문자 통계 + 푸터 간격 |
| `d60cebe` | 모의고사 객관식 2열/4열 배치 + README.md |
| `905049c` | CNAME을 public/에 추가 (커스텀 도메인 수정) |
| `96e7d69` | 모의고사 문항/섹션 간 줄간격 추가 |

### 빌드 결과
- 총 381개 모듈 변환
- CSS: 93.17 KB (gzip: 16.80 KB)
- 메인 JS 번들: 443.17 KB (gzip: 132.60 KB)
- 빌드 시간: ~5초
- 에러: 0

### 향후 계획
- [ ] 더 많은 모의고사 문제 추가
- [ ] 실기 시뮬레이터 구현
- [ ] PWA 지원
- [ ] 학습 알림 기능
- [ ] 커뮤니티 게시판 기능 확장

---

## 2026-03-17 - v1.3 학습현황/프로필 페이지 역할 분리

### 개요
학습현황 페이지와 프로필 페이지의 역할을 명확히 분리하였습니다.
- **학습현황 (`/progress`)**: 사이트 누적 통계 (방문자 통계 + 커리큘럼 현황)
- **프로필 (`/profile`)**: 개인 학습 진도 (진도율, 스탬프, 카테고리별 진행률)

### 변경 사항

#### 1. 학습현황 페이지 재구성 (`/progress`)
- 개인 학습 진도 섹션 제거 (프로필로 이동)
- 학습 콘텐츠 현황 섹션 신규 추가:
  - 전체 통계 카드 4종 (총 콘텐츠 26개 / 레슨 22개 / 모의고사 4개 / 카테고리 5개)
  - 카테고리별 레슨 목록 (리눅스 입문, 2급, 1급, 명령어) — 클릭 시 해당 페이지 이동
  - 모의고사 목록 — 문항 수 표시, 클릭 시 시험 페이지 이동

#### 2. 프로필 페이지 강화 (`/profile`)
- 기존: 프로필 정보 + 뱃지 + 수료증
- 추가: 나의 학습 진도 섹션
  - 4개 통계 카드 (완료/남은 학습, 진도율, 응시 시험)
  - 전체 진도 프로그레스 바
  - 카테고리별 진행률 바 (입문/2급/1급/명령어)
  - 카테고리별 레슨 스탬프 그리드
  - 모의고사 스탬프 그리드

#### 3. 모의고사 문항 간 줄간격 추가
- `.lesson-section`에 `margin-bottom: 2rem` 적용
- 제출하기 버튼과 "다른 모의고사" 링크 간격 개선

#### 4. 커리큘럼 목록 CSS 추가
- `src/styles/progress.css`에 커리큘럼 목록 전용 스타일 추가:
  - `.curriculum-category-section`: 카테고리 구분 영역
  - `.curriculum-category-header`: 카테고리명 + 레슨 수 배지
  - `.curriculum-lesson-item`: 레슨 링크 (호버 시 슬라이드 효과)
  - `.curriculum-lesson-meta`: 모의고사 문항 수 배지
  - 다크모드 대응 규칙

### 수정 파일
| 파일 | 변경 내용 |
|------|----------|
| `src/pages/Progress.jsx` | 개인 진도 제거, 누적 커리큘럼 현황 추가 |
| `src/pages/Profile.jsx` | StampGrid/카테고리 진행률/통계 카드 추가 |
| `src/styles/progress.css` | 커리큘럼 목록 CSS + 다크모드 추가 |
| `src/styles/site.css` | `.lesson-section` margin-bottom 추가 |
| `src/utils/translations.js` | `myProgress` 번역 키 추가 |

### 커밋 이력
| 커밋 | 내용 |
|------|------|
| `96e7d69` | 모의고사 문항/섹션 간 줄간격 추가 |
| `e406adf` | 학습현황 누적 통계만, 개인 진도 프로필로 이동 |
| `d72d8c9` | 학습현황에 누적 커리큘럼 현황 추가 |

### 빌드 결과
- 총 381개 모듈 변환
- CSS: 94.66 KB (gzip: 16.98 KB)
- 메인 JS 번들: 443.24 KB (gzip: 132.62 KB)
- 빌드 시간: ~5초
- 에러: 0

### 향후 계획
- [x] ~~커뮤니티 게시판 기능 확장~~ → v1.4에서 Coming Soon 배너 추가
- [ ] 더 많은 모의고사 문제 추가
- [ ] 실기 시뮬레이터 구현
- [ ] PWA 지원
- [ ] 학습 알림 기능

---

## 2026-03-17 - v1.4 학습현황 페이지 대폭 확장

### 개요
`/progress` 학습현황 페이지가 방문자 통계 + 커리큘럼 목록만 있어 내용이 부족했습니다.
리눅스 마스터 자격증 소개, 공지사항, 게시판, 갤러리, 모의고사 도장깨기 등 풍부한 콘텐츠를 추가하여
7개 섹션으로 대폭 확장하였습니다.

### 변경 사항

#### 1. 리눅스 마스터 자격증 소개 섹션 (신규)
- 2급/1급 카드를 나란히 배치
- 각 카드에 자격 유형(국가공인), 주관기관(KAIT), 차수별 시험 형식 및 합격 기준 상세 표시
- 그라데이션 헤더 + 정보 테이블 구성

#### 2. 공지사항 섹션 (신규)
- 3건의 공지사항 (시험일정, 콘텐츠 업데이트, 기능 추가)
- 클릭 시 확장/접기 (아코디언) 동작
- 태그별 색상 구분 (시험일정: 빨강, 콘텐츠: 파랑, 기능: 초록)

#### 3. 모의고사 도장깨기 섹션 (신규)
- 완료/남은 시험 카운터 표시
- `StampGrid` 컴포넌트 재사용 (모의고사 4종)
- `useProgress` 컨텍스트에서 시험 완료 상태 조회

#### 4. 게시판 섹션 (신규)
- "Coming Soon" 배너 + 샘플 게시글 3건
- 카테고리 배지, 작성자, 날짜, 댓글 수 표시

#### 5. 갤러리 섹션 (신규)
- "Coming Soon" 배너 + 인포그래픽 카드 4장
- 리눅스 파일시스템 구조, 권한 체계, 프로세스 생명주기, OSI 7계층
- 각 카드에 SVG 아이콘 + 색상 구분

### 페이지 섹션 구성 (7개, 순서)
1. 리눅스 마스터 자격증 소개
2. 사이트 방문 통계 (기존 유지)
3. 공지사항
4. 학습 콘텐츠 현황 (기존 유지)
5. 모의고사 도장깨기
6. 게시판
7. 갤러리

### 파일 변경

#### 신규 파일 (1개)
| 파일 | 설명 |
|------|------|
| `src/config/progressData.js` | 자격증 소개, 공지사항 3건, 게시글 3건, 갤러리 4건 데이터 |

#### 수정 파일 (3개)
| 파일 | 변경 내용 |
|------|----------|
| `src/pages/Progress.jsx` | 5개 신규 섹션 추가 (자격증 소개, 공지사항, 도장깨기, 게시판, 갤러리) |
| `src/styles/progress.css` | cert-intro, announce, exam-stamp, community, gallery-prog CSS + 다크모드 + 반응형 (~500줄 추가) |
| `src/utils/translations.js` | ko/en 각 20개씩 총 ~40개 번역 키 추가 |

### CSS 주요 추가
- `.cert-intro-section`, `.cert-cards`, `.cert-card`, `.cert-card-header`, `.cert-round-block`
- `.announce-section`, `.announce-list`, `.announce-item`, `.announce-chevron` (아코디언)
- `.exam-stamp-section`, `.exam-stamp-counters`, `.exam-stamp-counter`
- `.community-section`, `.coming-soon-banner`, `.coming-soon-badge`, `.board-list`, `.board-item`
- `.gallery-prog-section`, `.gallery-prog-grid`, `.gallery-prog-card`, `.gallery-prog-icon`
- 다크모드: 모든 신규 섹션에 `[data-theme="dark"]` 규칙 적용
- 반응형(768px): 카드 그리드 1~2열 전환, 게시판 세로 배치, 스탬프 2열 전환

### 빌드 결과
- 총 382개 모듈 변환
- CSS: 101.67 KB (gzip: 17.94 KB)
- Progress 번들: 21.44 KB (gzip: 5.63 KB)
- 빌드 시간: ~7.5초
- 에러: 0

### 향후 계획
- [ ] 게시판 실제 기능 구현 (Supabase 연동)
- [ ] 갤러리 인포그래픽 이미지 제작
- [ ] 더 많은 모의고사 문제 추가
- [ ] 실기 시뮬레이터 구현
- [ ] PWA 지원

---

## 2026-03-18 - v1.4.1 학습현황 페이지 빈 화면 수정

### 개요
v1.4에서 학습현황 페이지 확장 후 타이틀만 보이고 나머지 콘텐츠가 빈 화면으로 표시되는 문제를 수정하였습니다.

### 원인
`Progress.jsx`에 `useAOS()` 훅 호출이 누락되어 있었습니다.
모든 섹션에 `data-aos="fade-up"` 속성이 적용되어 있으나, AOS 초기화가 되지 않아
CSS 규칙 `[data-aos] { opacity: 0; }` 에 의해 모든 콘텐츠가 투명한 채로 남아있었습니다.

### 수정 내용
| 파일 | 변경 |
|------|------|
| `src/pages/Progress.jsx` | `import useAOS` 추가, 컴포넌트 내부에 `useAOS()` 호출 추가 |

### 빌드 결과
- 빌드 시간: ~5.4초
- 에러: 0

---

## 2026-03-18 - v1.5 커뮤니티 메뉴 구조 전환 (학습현황 → 커뮤니티)

### 개요
기존 `/progress` 단일 페이지에 몰려있던 7개 섹션을 개별 페이지로 분리하고,
네비게이션 메뉴를 "학습현황" → "커뮤니티" 드롭다운으로 재구성하였습니다.

### 변경 사항

#### 1. 메뉴 구조 변경
- "학습현황" 단일 링크 → "커뮤니티" 드롭다운 메뉴로 전환
- 6개 하위 메뉴: 자격증 소개, 학습 현황, 공지사항, 모의고사 도장깨기, 게시판, 갤러리

#### 2. 6개 커뮤니티 하위 페이지 생성
| 파일 | 경로 | 내용 |
|------|------|------|
| `CommCertIntro.jsx` | `/community/cert-intro` | 2급/1급 자격증 소개 카드 |
| `CommStats.jsx` | `/community/stats` | 방문자 통계 + 커리큘럼 현황 |
| `CommAnnouncements.jsx` | `/community/announcements` | 공지사항 아코디언 |
| `CommStampRally.jsx` | `/community/stamps` | 모의고사 도장깨기 + StampGrid |
| `CommBoard.jsx` | `/community/board` | 게시판 (Coming Soon) |
| `CommGallery.jsx` | `/community/gallery` | 인포그래픽 갤러리 (Coming Soon) |

#### 3. 라우팅 변경
- `/community` → `CommCertIntro` (기본)
- `/progress` → `CommStats`로 리다이렉트 (하위 호환)
- 6개 `/community/*` 라우트 추가

#### 4. 기타 수정
- `site.js`: 커뮤니티 드롭다운 메뉴 구성
- `translations.js`: ko/en 커뮤니티 하위 메뉴 번역 키 12개 추가
- `progress.css`: 컨테이너 상단 간격(padding-top: 48px) 추가

### 파일 변경

#### 신규 파일 (6개)
| 파일 | 설명 |
|------|------|
| `src/pages/CommCertIntro.jsx` | 자격증 소개 페이지 |
| `src/pages/CommStats.jsx` | 방문자 통계 + 커리큘럼 현황 |
| `src/pages/CommAnnouncements.jsx` | 공지사항 페이지 |
| `src/pages/CommStampRally.jsx` | 모의고사 도장깨기 |
| `src/pages/CommBoard.jsx` | 게시판 페이지 |
| `src/pages/CommGallery.jsx` | 갤러리 페이지 |

#### 수정 파일 (4개)
| 파일 | 변경 |
|------|------|
| `src/config/site.js` | 학습현황 → 커뮤니티 드롭다운 메뉴 (6개 하위) |
| `src/App.jsx` | 6개 커뮤니티 라우트 추가, /progress 호환 유지 |
| `src/utils/translations.js` | community 하위 메뉴 번역 키 추가 |
| `src/styles/progress.css` | 컨테이너 상단 간격 추가 |

### 빌드 결과
- 총 387개 모듈 변환
- CSS: 101.71 KB (gzip: 17.94 KB)
- 빌드 시간: ~8.4초
- 에러: 0

### 향후 계획
- [ ] 게시판 실제 기능 구현 (Supabase 연동)
- [ ] 갤러리 인포그래픽 이미지 제작
- [ ] 더 많은 모의고사 문제 추가
- [ ] 실기 시뮬레이터 구현

---

## 2026-03-18 - v1.6 메인페이지 아이콘 Font Awesome 전환

### 개요
메인 홈 페이지의 이모지(emoji) 아이콘을 Font Awesome 6.5.1 아이콘으로 전면 교체하였습니다.

### 변경 사항

#### 1. Font Awesome CDN 추가 (`index.html`)
- Font Awesome 6.5.1 CDN 링크 추가
- Noto Color Emoji 폰트 참조 제거

#### 2. 아이콘 데이터 전환 (`src/pages/Home.jsx`)
- **2급 커리큘럼** (7개): 이모지 → FA 아이콘 클래스
  - `📋` → `fa-solid fa-clipboard-list`, `🖥️` → `fa-solid fa-desktop` 등
- **1급 커리큘럼** (7개): 이모지 → FA 아이콘 클래스
  - `📋` → `fa-solid fa-clipboard-list`, `🏗️` → `fa-solid fa-microchip` 등
- **명령어 카드** (5개): 이모지 → FA 아이콘 클래스
  - `📝` → `fa-solid fa-pen-to-square`, `📁` → `fa-solid fa-folder-open` 등
- JSX 렌더링: `{item.icon}` (텍스트) → `<i className={item.icon} />` (FA 요소)

#### 3. CSS 업데이트 (`src/styles/site.css`)
- `.home-curriculum-icon`: `font-family: 'Noto Color Emoji'` 제거, `color: var(--primary-blue)` 적용
- `.home-command-icon`: 동일 변경

### 빌드 결과
- 빌드: 성공 (6.27s)
- 에러: 0

---

## 2026-03-18 - v1.6.1 사이트 통계 로딩 무한 스피너 수정

### 문제
`/community/stats` 페이지에서 "통계 불러오는 중..." 스피너가 무한 회전하며 통계 데이터가 표시되지 않는 문제 발생.

### 원인 분석
1. `fetchSiteStats()`의 Promise에 `.catch()` 핸들러 없음 → 네트워크 오류/타임아웃 시 `statsLoading`이 영원히 `true`
2. `totalRes` 쿼리가 `page_views` 테이블 전체 row를 fetch → 데이터 증가 시 응답 지연/타임아웃 가능성

### 수정 사항

#### `src/pages/CommStats.jsx`
- 8초 타임아웃 추가: 응답이 없으면 자동으로 로딩 상태 해제
- `.catch()` 핸들러 추가: Promise rejection 시에도 안전하게 처리
- `useEffect` cleanup에서 타임아웃 정리

#### `src/hooks/usePageTracker.js`
- 전체 row fetch (`select('visitor_id')`) → `select('*', { count: 'exact', head: true })` 변경
  - row 데이터 없이 count만 조회하여 성능 대폭 개선
- 총 방문자 수를 최근 7일 데이터에서 추정하도록 변경
- `catch` 블록에 `console.error` 추가로 디버깅 용이

### 빌드 결과
- 빌드: 성공 (8.89s)
- 에러: 0

---

## 2026-03-18 - v1.7 Supabase 스키마 정합성 점검 및 마이그레이션

### 개요
코드에서 사용하는 컬럼명과 실제 Supabase DB 스키마가 불일치하는 문제를 발견·수정.
누락 테이블 2개(`announcements`, `board_replies`)를 Management API로 생성.

### 발견된 불일치 및 수정

| 파일 | 코드 (Before) | 실제 DB | 수정 |
|------|--------------|---------|------|
| `usePageTracker.js` | `page_path` | `path` | `path`로 변경 |
| `AuthContext.jsx` | `profiles` 테이블 | `user_profiles` 테이블 | `user_profiles`로 변경 |
| `Navbar.jsx`, `Profile.jsx` | `profile?.display_name` | `user_profiles.display_name` | 유지 (정확했음) |

### 테이블 마이그레이션 결과

| 테이블 | 상태 |
|--------|------|
| `user_profiles` (공용) | 기존 존재, 트리거 연동 확인 |
| `user_progress` | 기존 존재 |
| `exam_results` | 기존 존재 |
| `page_views` | 기존 존재, 컬럼명 `path` 확인 |
| `announcements` | **신규 생성** (공지사항) |
| `board_posts` | 기존 존재 |
| `board_replies` | **신규 생성** (댓글) |
| `gallery_items` | 기존 존재 |

### 변경 파일
- `src/hooks/usePageTracker.js` — `page_path` → `path` (insert + select 모두)
- `src/contexts/AuthContext.jsx` — `profiles` → `user_profiles` 테이블
- `src/components/layout/Navbar.jsx` — `display_name` 확인 (변경 없음)
- `src/pages/Profile.jsx` — `display_name` 확인 (변경 없음)
- `supabase-setup.sql` — 실제 DB 스키마 기준 전면 재작성 (7개 테이블)

### 빌드 결과
- 빌드: 성공 (5.67s)
- 에러: 0

### 향후 계획
- [ ] 게시판 Supabase 연동 (board_posts + board_replies)
- [ ] 갤러리 Supabase 연동 (gallery_items)
- [ ] 공지사항 Supabase 연동 (announcements)
- [ ] 더 많은 모의고사 문제 추가
- [ ] 실기 시뮬레이터 구현
