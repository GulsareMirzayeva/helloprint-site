import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './utils/i18';
import Footer from './components/Footer';
import { ScrollToTop } from './utils/helperFunctions';
import { useData } from './context/DataContext';
import { FooterCopyright } from './components/elementTemplates/FooterCopyright ';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { ShowVacationToast } from './ShowVacationToast';

export default function App() {
  const { stylePreset } = useData();

  useEffect(() => {
    const timer = setTimeout(() => {
      ShowVacationToast(); // Add subtile delay to draw the attention more effectivly
    }, 1000); // Delay

    return () => clearTimeout(timer); // cleanup at unmount
  }, []);

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
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}
