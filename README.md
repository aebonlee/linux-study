# 🐧 리눅스마스터 학습 사이트

리눅스마스터 1급/2급 자격증 취득을 위한 종합 학습 플랫폼입니다.

🔗 **Live Site**: [https://dreamitbiz.github.io/linux-study](https://dreamitbiz.github.io/linux-study)

## 주요 기능

### 📚 학습 콘텐츠
- **리눅스 입문** — 리눅스란?, 역사, 배포판 소개
- **2급 시험 대비** — 1차/2차 과목별 핵심 정리 (7개 챕터)
- **1급 시험 대비** — 1차/2차/실기 과목별 핵심 정리 (6개 챕터)
- **명령어 사전** — 기본, 파일, 프로세스, 네트워크, 시스템 관리 명령어

### 📝 모의고사
- 2급 1차/2차, 1급 1차/2차 모의고사 (총 4종)
- 객관식 문항 자동 채점 및 해설
- 짧은 선택지는 2열/4열 자동 배치
- 시험 결과 자동 저장 및 이력 관리

### 👤 사용자 인증
- Google / Kakao OAuth 소셜 로그인
- 이메일 + 비밀번호 로그인
- Supabase 기반 사용자 관리

### 📊 학습 진도 추적
- 레슨별 "학습 완료" 마킹
- 카테고리별 진도율 시각화
- 스탬프 그리드 수집
- localStorage + Supabase 클라우드 동기화

### 🏆 프로필 & 성취
- 학습 뱃지 8종 (레슨 완료, 시험 합격 기반)
- 모의고사 합격 시 수료증 발급 (PDF/PNG 다운로드)
- 전체 학습 통계 대시보드

### 📈 사이트 통계
- 방문자 수 집계 (오늘/총)
- 최근 7일 방문 추이 차트
- 인기 페이지 랭킹

### 🌙 다크모드 & 반응형
- 시스템 설정 연동 다크모드
- 모바일/태블릿/데스크톱 반응형 레이아웃

### 🌐 다국어
- 한국어 / English 전환 지원

## 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | React 19, Vite 7, React Router 7 |
| 스타일링 | Vanilla CSS (CSS Variables, Grid, Flexbox) |
| 인증/DB | Supabase (Auth, PostgreSQL) |
| 배포 | GitHub Pages (gh-pages) |
| 폰트 | Noto Sans KR, Noto Color Emoji (Google Fonts) |
| 기타 | jsPDF, html2canvas, AOS |

## 프로젝트 구조

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── BadgeCard.jsx    # 뱃지 카드
│   ├── Certificate.jsx  # 수료증
│   ├── LessonComplete.jsx # 학습 완료 버튼
│   └── StampGrid.jsx   # 스탬프 그리드
├── config/
│   ├── badges.js        # 뱃지 정의
│   ├── site.js          # 사이트 설정, 메뉴
│   └── studyItems.js    # 학습 항목 정의
├── contexts/
│   ├── AuthContext.jsx   # 인증 상태
│   ├── LanguageContext.jsx # 다국어
│   ├── ProgressContext.jsx # 학습 진도
│   └── ThemeContext.jsx  # 다크모드
├── hooks/
│   ├── useCodeCopy.js   # 코드 복사
│   ├── usePageTracker.js # 방문자 추적
│   └── useTableScroller.js # 테이블 스크롤
├── layouts/
│   └── PublicLayout.jsx # 공통 레이아웃
├── lib/
│   └── supabase.js      # Supabase 클라이언트
├── pages/               # 30+ 페이지 컴포넌트
├── styles/              # CSS 모듈 (10+ 파일)
└── utils/
    └── translations.js  # 번역 데이터
```

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 환경 변수

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 배포

```bash
# 빌드 후 gh-pages 브랜치에 배포
npm run build
npx gh-pages -d dist
```

## 라이선스

MIT License

---

**드림잇비즈** | aebon@dreamitbiz.com


## License / 라이선스

**저작권 (c) 2025-2026 드림아이티비즈(DreamIT Biz). 모든 권리 보유.**

본 소프트웨어는 저작권법 및 지적재산권법에 의해 보호되는 독점 소프트웨어입니다. 본 프로젝트는 소프트웨어 저작권 등록이 완료되어 법적 보호를 받습니다.

- 본 소프트웨어의 무단 복제, 수정, 배포 또는 사용은 엄격히 금지됩니다.
- 저작권자의 사전 서면 허가 없이 본 소프트웨어의 어떠한 부분도 복제하거나 전송할 수 없습니다.
- 본 소프트웨어는 DreamIT Biz(https://www.dreamitbiz.com) 교육 플랫폼의 일부로 제공됩니다.

라이선스 문의: aebon@dreamitbiz.com

---

**Copyright (c) 2025-2026 DreamIT Biz (Ph.D Aebon Lee). All Rights Reserved.**

This software is proprietary and protected under applicable copyright and intellectual property laws. This project has been registered for software copyright protection.

- Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
- No part of this software may be reproduced or transmitted in any form without prior written permission from the copyright holder.
- This software is provided as part of the DreamIT Biz (https://www.dreamitbiz.com) educational platform.

For licensing inquiries, contact: aebon@dreamitbiz.com

---

**Designed & Developed by Ph.D Aebon Lee**

DreamIT Biz | https://www.dreamitbiz.com

