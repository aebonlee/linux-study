// All trackable study items in the linux-study site
// Lessons: completion via "학습 완료" button
// Exams: score recording on submit

export const lessons = [
  // Linux Intro
  { id: 'intro-what-is-linux', title: '리눅스란?', titleEn: 'What is Linux?', path: '/intro/what-is-linux', category: 'intro' },
  { id: 'intro-history', title: '리눅스의 역사', titleEn: 'History of Linux', path: '/intro/history', category: 'intro' },
  { id: 'intro-distributions', title: '리눅스 배포판', titleEn: 'Linux Distributions', path: '/intro/distributions', category: 'intro' },

  // Grade 2
  { id: 'grade2-overview', title: '2급 시험 개요', titleEn: 'Grade 2 Overview', path: '/grade2/overview', category: 'grade2' },
  { id: 'grade2-p1ch1', title: '2급 1차 - 운영 및 관리', titleEn: 'Grade 2 R1 - Admin', path: '/grade2/part1-ch1', category: 'grade2' },
  { id: 'grade2-p1ch2', title: '2급 1차 - 리눅스 활용', titleEn: 'Grade 2 R1 - Usage', path: '/grade2/part1-ch2', category: 'grade2' },
  { id: 'grade2-p1ch3', title: '2급 1차 - 기초 명령어', titleEn: 'Grade 2 R1 - Commands', path: '/grade2/part1-ch3', category: 'grade2' },
  { id: 'grade2-p2ch1', title: '2급 2차 - 운영 및 관리', titleEn: 'Grade 2 R2 - Admin', path: '/grade2/part2-ch1', category: 'grade2' },
  { id: 'grade2-p2ch2', title: '2급 2차 - 리눅스 활용', titleEn: 'Grade 2 R2 - Usage', path: '/grade2/part2-ch2', category: 'grade2' },
  { id: 'grade2-p2ch3', title: '2급 2차 - 기초 명령어', titleEn: 'Grade 2 R2 - Commands', path: '/grade2/part2-ch3', category: 'grade2' },

  // Grade 1
  { id: 'grade1-overview', title: '1급 시험 개요', titleEn: 'Grade 1 Overview', path: '/grade1/overview', category: 'grade1' },
  { id: 'grade1-p1ch1', title: '1급 1차 - 리눅스 실무', titleEn: 'Grade 1 R1 - Concepts', path: '/grade1/part1-ch1', category: 'grade1' },
  { id: 'grade1-p1ch2', title: '1급 1차 - 시스템 관리', titleEn: 'Grade 1 R1 - System', path: '/grade1/part1-ch2', category: 'grade1' },
  { id: 'grade1-p2ch1', title: '1급 2차 - 네트워크 관리', titleEn: 'Grade 1 R2 - Network', path: '/grade1/part2-ch1', category: 'grade1' },
  { id: 'grade1-p2ch2', title: '1급 2차 - 보안 최적화', titleEn: 'Grade 1 R2 - Security', path: '/grade1/part2-ch2', category: 'grade1' },
  { id: 'grade1-p3ch1', title: '1급 실기 - 서버 구축', titleEn: 'Grade 1 Practical - Server', path: '/grade1/part3-ch1', category: 'grade1' },
  { id: 'grade1-p3ch2', title: '1급 실기 - 네트워크 보안', titleEn: 'Grade 1 Practical - NetSec', path: '/grade1/part3-ch2', category: 'grade1' },

  // Commands
  { id: 'cmd-basic', title: '기본 명령어', titleEn: 'Basic Commands', path: '/commands/basic', category: 'commands' },
  { id: 'cmd-file', title: '파일/디렉터리 관리', titleEn: 'File Management', path: '/commands/file', category: 'commands' },
  { id: 'cmd-process', title: '프로세스 관리', titleEn: 'Process Management', path: '/commands/process', category: 'commands' },
  { id: 'cmd-network', title: '네트워크 명령어', titleEn: 'Network Commands', path: '/commands/network', category: 'commands' },
  { id: 'cmd-admin', title: '시스템 관리', titleEn: 'System Admin', path: '/commands/admin', category: 'commands' },
];

export const exams = [
  { id: 'exam-grade2-r1', title: '2급 1차 모의고사', titleEn: 'Grade 2 Round 1', path: '/exam/grade2-round1', category: 'exam', totalQuestions: 20 },
  { id: 'exam-grade2-r2', title: '2급 2차 모의고사', titleEn: 'Grade 2 Round 2', path: '/exam/grade2-round2', category: 'exam', totalQuestions: 20 },
  { id: 'exam-grade1-r1', title: '1급 1차 모의고사', titleEn: 'Grade 1 Round 1', path: '/exam/grade1-round1', category: 'exam', totalQuestions: 20 },
  { id: 'exam-grade1-r2', title: '1급 2차 모의고사', titleEn: 'Grade 1 Round 2', path: '/exam/grade1-round2', category: 'exam', totalQuestions: 20 },
];

export const allItems = [...lessons, ...exams];

export const categories = [
  { id: 'intro', labelKey: 'site.nav.intro', labelKeyEn: 'Linux Intro' },
  { id: 'grade2', labelKey: 'site.nav.grade2', labelKeyEn: 'Grade 2 Exam' },
  { id: 'grade1', labelKey: 'site.nav.grade1', labelKeyEn: 'Grade 1 Exam' },
  { id: 'commands', labelKey: 'site.nav.commands', labelKeyEn: 'Command Reference' },
  { id: 'exam', labelKey: 'site.nav.exam', labelKeyEn: 'Mock Exam' },
];

export function getLessonsByCategory(categoryId) {
  return lessons.filter(l => l.category === categoryId);
}

export function getExamsByCategory() {
  return exams;
}
