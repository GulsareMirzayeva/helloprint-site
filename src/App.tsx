import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './utils/i18';
import Footer from './components/Footer';
import { ScrollToTop } from './utils/helperFunctions';
import { useData } from './context/DataContext';
import { FooterCopyright } from './components/elementTemplates/FooterCopyright ';

export default function App() {
  const { stylePreset } = useData();

  return (
    <div
      className={`
        flex flex-col relative min-h-screen font-sans
        ${stylePreset.overall.textColorPrimary}  
        ${stylePreset.overall.backgroundColor}  
      `}
    >
      <Header />
      <div className="flex flex-grow h-full overflow-hidden">
        {/* // Make sure the scroll postion is set to the top of the page when rendered */}
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
      <FooterCopyright />
    </div>
  );
}
