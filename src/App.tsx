import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './utils/i18';
import Footer from './components/Footer';
import { ScrollToTop } from './utils/helperFunctions';

export default function App() {
  return (
    <div className="flex flex-col relative min-h-screen font-sans text-[#202020]">
      <Header />
      <div className="flex flex-grow h-full overflow-scroll">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
