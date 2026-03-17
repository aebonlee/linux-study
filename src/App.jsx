import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';

function lazyLoad(importFn) {
  return lazy(() =>
    importFn().catch(() => {
      window.location.reload();
      return new Promise(() => {});
    })
  );
}

const Home = lazyLoad(() => import('./pages/Home'));
const WhatIsLinux = lazyLoad(() => import('./pages/WhatIsLinux'));
const LinuxHistory = lazyLoad(() => import('./pages/LinuxHistory'));
const LinuxDistributions = lazyLoad(() => import('./pages/LinuxDistributions'));
const Grade2Overview = lazyLoad(() => import('./pages/Grade2Overview'));
const Grade2P1Ch1 = lazyLoad(() => import('./pages/Grade2P1Ch1'));
const Grade2P1Ch2 = lazyLoad(() => import('./pages/Grade2P1Ch2'));
const Grade2P1Ch3 = lazyLoad(() => import('./pages/Grade2P1Ch3'));
const Grade2P2Ch1 = lazyLoad(() => import('./pages/Grade2P2Ch1'));
const Grade2P2Ch2 = lazyLoad(() => import('./pages/Grade2P2Ch2'));
const Grade2P2Ch3 = lazyLoad(() => import('./pages/Grade2P2Ch3'));
const Grade1Overview = lazyLoad(() => import('./pages/Grade1Overview'));
const Grade1P1Ch1 = lazyLoad(() => import('./pages/Grade1P1Ch1'));
const Grade1P1Ch2 = lazyLoad(() => import('./pages/Grade1P1Ch2'));
const Grade1P2Ch1 = lazyLoad(() => import('./pages/Grade1P2Ch1'));
const Grade1P2Ch2 = lazyLoad(() => import('./pages/Grade1P2Ch2'));
const Grade1P3Ch1 = lazyLoad(() => import('./pages/Grade1P3Ch1'));
const Grade1P3Ch2 = lazyLoad(() => import('./pages/Grade1P3Ch2'));
const CommandsBasic = lazyLoad(() => import('./pages/CommandsBasic'));
const CommandsFile = lazyLoad(() => import('./pages/CommandsFile'));
const CommandsProcess = lazyLoad(() => import('./pages/CommandsProcess'));
const CommandsNetwork = lazyLoad(() => import('./pages/CommandsNetwork'));
const CommandsAdmin = lazyLoad(() => import('./pages/CommandsAdmin'));
const ExamGrade2R1 = lazyLoad(() => import('./pages/ExamGrade2R1'));
const ExamGrade2R2 = lazyLoad(() => import('./pages/ExamGrade2R2'));
const ExamGrade1R1 = lazyLoad(() => import('./pages/ExamGrade1R1'));
const ExamGrade1R2 = lazyLoad(() => import('./pages/ExamGrade1R2'));
const References = lazyLoad(() => import('./pages/References'));
const Training = lazyLoad(() => import('./pages/Training'));
const Login = lazyLoad(() => import('./pages/Login'));
const Profile = lazyLoad(() => import('./pages/Profile'));
const CommCertIntro = lazyLoad(() => import('./pages/CommCertIntro'));
const CommStats = lazyLoad(() => import('./pages/CommStats'));
const CommAnnouncements = lazyLoad(() => import('./pages/CommAnnouncements'));
const CommStampRally = lazyLoad(() => import('./pages/CommStampRally'));
const CommBoard = lazyLoad(() => import('./pages/CommBoard'));
const CommGallery = lazyLoad(() => import('./pages/CommGallery'));
const NotFound = lazyLoad(() => import('./pages/NotFound'));

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: 'var(--text-secondary)'
    }}>
      <div className="loading-spinner"></div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />

          {/* Linux Intro */}
          <Route path="intro/what-is-linux" element={<WhatIsLinux />} />
          <Route path="intro/history" element={<LinuxHistory />} />
          <Route path="intro/distributions" element={<LinuxDistributions />} />

          {/* Grade 2 */}
          <Route path="grade2" element={<Grade2Overview />} />
          <Route path="grade2/overview" element={<Grade2Overview />} />
          <Route path="grade2/part1-ch1" element={<Grade2P1Ch1 />} />
          <Route path="grade2/part1-ch2" element={<Grade2P1Ch2 />} />
          <Route path="grade2/part1-ch3" element={<Grade2P1Ch3 />} />
          <Route path="grade2/part2-ch1" element={<Grade2P2Ch1 />} />
          <Route path="grade2/part2-ch2" element={<Grade2P2Ch2 />} />
          <Route path="grade2/part2-ch3" element={<Grade2P2Ch3 />} />

          {/* Grade 1 */}
          <Route path="grade1" element={<Grade1Overview />} />
          <Route path="grade1/overview" element={<Grade1Overview />} />
          <Route path="grade1/part1-ch1" element={<Grade1P1Ch1 />} />
          <Route path="grade1/part1-ch2" element={<Grade1P1Ch2 />} />
          <Route path="grade1/part2-ch1" element={<Grade1P2Ch1 />} />
          <Route path="grade1/part2-ch2" element={<Grade1P2Ch2 />} />
          <Route path="grade1/part3-ch1" element={<Grade1P3Ch1 />} />
          <Route path="grade1/part3-ch2" element={<Grade1P3Ch2 />} />

          {/* Commands */}
          <Route path="commands" element={<CommandsBasic />} />
          <Route path="commands/basic" element={<CommandsBasic />} />
          <Route path="commands/file" element={<CommandsFile />} />
          <Route path="commands/process" element={<CommandsProcess />} />
          <Route path="commands/network" element={<CommandsNetwork />} />
          <Route path="commands/admin" element={<CommandsAdmin />} />

          {/* Exam */}
          <Route path="exam" element={<ExamGrade2R1 />} />
          <Route path="exam/grade2-round1" element={<ExamGrade2R1 />} />
          <Route path="exam/grade2-round2" element={<ExamGrade2R2 />} />
          <Route path="exam/grade1-round1" element={<ExamGrade1R1 />} />
          <Route path="exam/grade1-round2" element={<ExamGrade1R2 />} />

          {/* References & Training */}
          <Route path="references" element={<References />} />
          <Route path="training" element={<Training />} />

          {/* Auth & Profile */}
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />

          {/* Community */}
          <Route path="community" element={<CommCertIntro />} />
          <Route path="community/cert-intro" element={<CommCertIntro />} />
          <Route path="community/stats" element={<CommStats />} />
          <Route path="community/announcements" element={<CommAnnouncements />} />
          <Route path="community/stamps" element={<CommStampRally />} />
          <Route path="community/board" element={<CommBoard />} />
          <Route path="community/gallery" element={<CommGallery />} />
          <Route path="progress" element={<CommStats />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
