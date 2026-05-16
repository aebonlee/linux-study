import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useCodeCopy from '../hooks/useCodeCopy';
import useTableScroller from '../hooks/useTableScroller';
import usePageTracker from '../hooks/usePageTracker';
const About = lazy(() => import('../pages/About'));

const PublicLayout = () => {
  useCodeCopy();
  useTableScroller();
  usePageTracker();

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
