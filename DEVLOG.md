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
