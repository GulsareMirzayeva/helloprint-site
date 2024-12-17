import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './utils/i18';

export default function App() {
  return (
    <div className="flex flex-col relative h-screen font-sans text-[#202020]">
      <Header />
      <div className="flex flex-grow h-full overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}
