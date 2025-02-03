import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './utils/i18';
import Footer from './components/Footer';
import { ScrollToTop } from './utils/helperFunctions';
import { colorPresets } from './lib/stylePresets';

export default function App() {
  return (
    <div
      style={{ color: colorPresets.overall.textColorDark }}
      className="flex flex-col relative min-h-screen font-sans"
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
