import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './utils/i18';
import Footer from './components/Footer';
import { ScrollToTop } from './utils/helperFunctions';
import { useData } from './context/DataContext';

export default function App() {
  const { stylePreset } = useData();

  return (
    <div
      className={`
        flex flex-col relative min-h-screen font-sans
        ${stylePreset.overall.textColorPrimary}  
      `}
    >
      <Header />
      <div className="flex flex-grow h-full overflow-hidden">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
