import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useCodeCopy from '../hooks/useCodeCopy';
import useTableScroller from '../hooks/useTableScroller';

const Home = lazy(() => import('../pages/Home'));
const WhatIsLinux = lazy(() => import('../pages/WhatIsLinux'));
const LinuxHistory = lazy(() => import('../pages/LinuxHistory'));
const LinuxDistributions = lazy(() => import('../pages/LinuxDistributions'));
const Grade2Overview = lazy(() => import('../pages/Grade2Overview'));
const Grade2P1Ch1 = lazy(() => import('../pages/Grade2P1Ch1'));
const Grade2P1Ch2 = lazy(() => import('../pages/Grade2P1Ch2'));
const Grade2P1Ch3 = lazy(() => import('../pages/Grade2P1Ch3'));
const Grade2P2Ch1 = lazy(() => import('../pages/Grade2P2Ch1'));
const Grade2P2Ch2 = lazy(() => import('../pages/Grade2P2Ch2'));
const Grade2P2Ch3 = lazy(() => import('../pages/Grade2P2Ch3'));
const Grade1Overview = lazy(() => import('../pages/Grade1Overview'));
const Grade1P1Ch1 = lazy(() => import('../pages/Grade1P1Ch1'));
const Grade1P1Ch2 = lazy(() => import('../pages/Grade1P1Ch2'));
const Grade1P2Ch1 = lazy(() => import('../pages/Grade1P2Ch1'));
const Grade1P2Ch2 = lazy(() => import('../pages/Grade1P2Ch2'));
const Grade1P3Ch1 = lazy(() => import('../pages/Grade1P3Ch1'));
const Grade1P3Ch2 = lazy(() => import('../pages/Grade1P3Ch2'));
const CommandsBasic = lazy(() => import('../pages/CommandsBasic'));
const CommandsFile = lazy(() => import('../pages/CommandsFile'));
const CommandsProcess = lazy(() => import('../pages/CommandsProcess'));
const CommandsNetwork = lazy(() => import('../pages/CommandsNetwork'));
const CommandsAdmin = lazy(() => import('../pages/CommandsAdmin'));
const ExamGrade2R1 = lazy(() => import('../pages/ExamGrade2R1'));
const ExamGrade2R2 = lazy(() => import('../pages/ExamGrade2R2'));
const ExamGrade1R1 = lazy(() => import('../pages/ExamGrade1R1'));
const ExamGrade1R2 = lazy(() => import('../pages/ExamGrade1R2'));
const References = lazy(() => import('../pages/References'));
const Training = lazy(() => import('../pages/Training'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  useCodeCopy();
  useTableScroller();

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Linux Intro */}
            <Route path="/intro/what-is-linux" element={<WhatIsLinux />} />
            <Route path="/intro/history" element={<LinuxHistory />} />
            <Route path="/intro/distributions" element={<LinuxDistributions />} />

            {/* Grade 2 */}
            <Route path="/grade2" element={<Grade2Overview />} />
            <Route path="/grade2/overview" element={<Grade2Overview />} />
            <Route path="/grade2/part1-ch1" element={<Grade2P1Ch1 />} />
            <Route path="/grade2/part1-ch2" element={<Grade2P1Ch2 />} />
            <Route path="/grade2/part1-ch3" element={<Grade2P1Ch3 />} />
            <Route path="/grade2/part2-ch1" element={<Grade2P2Ch1 />} />
            <Route path="/grade2/part2-ch2" element={<Grade2P2Ch2 />} />
            <Route path="/grade2/part2-ch3" element={<Grade2P2Ch3 />} />

            {/* Grade 1 */}
            <Route path="/grade1" element={<Grade1Overview />} />
            <Route path="/grade1/overview" element={<Grade1Overview />} />
            <Route path="/grade1/part1-ch1" element={<Grade1P1Ch1 />} />
            <Route path="/grade1/part1-ch2" element={<Grade1P1Ch2 />} />
            <Route path="/grade1/part2-ch1" element={<Grade1P2Ch1 />} />
            <Route path="/grade1/part2-ch2" element={<Grade1P2Ch2 />} />
            <Route path="/grade1/part3-ch1" element={<Grade1P3Ch1 />} />
            <Route path="/grade1/part3-ch2" element={<Grade1P3Ch2 />} />

            {/* Commands */}
            <Route path="/commands" element={<CommandsBasic />} />
            <Route path="/commands/basic" element={<CommandsBasic />} />
            <Route path="/commands/file" element={<CommandsFile />} />
            <Route path="/commands/process" element={<CommandsProcess />} />
            <Route path="/commands/network" element={<CommandsNetwork />} />
            <Route path="/commands/admin" element={<CommandsAdmin />} />

            {/* Exam */}
            <Route path="/exam" element={<ExamGrade2R1 />} />
            <Route path="/exam/grade2-round1" element={<ExamGrade2R1 />} />
            <Route path="/exam/grade2-round2" element={<ExamGrade2R2 />} />
            <Route path="/exam/grade1-round1" element={<ExamGrade1R1 />} />
            <Route path="/exam/grade1-round2" element={<ExamGrade1R2 />} />

            {/* References & Training */}
            <Route path="/references" element={<References />} />
            <Route path="/training" element={<Training />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
