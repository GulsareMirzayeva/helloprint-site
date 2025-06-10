import WelcomeMessage from '../home/WelcomeMessage';
import ProductCards from '../home/ProductCards';
import ContactSection from '../home/ContactSection';
import { useTranslation } from 'react-i18next';
import SendMessage from '../contact/SendMessage';
import SkylineStrip from '../SkylineStrip';
import { useData } from '../../context/DataContext';
// import AdjustedHoursSection from '../home/AdjustedHours';

export default function Home() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  return (
    <div
      className={`flex flex-col w-full gap-4 ${stylePreset.overall.backgroundColor}`}
    >
      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr]">
        <div></div> {/* Left empty colomn */}
        <div className="pb-8 md:pb-12 pt-8 md:pt-20">
          <WelcomeMessage />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>

      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr]">
        <div></div> {/* Left empty colomn */}
        <div className="pt-0 md:pt-16 pb-16">
          <ProductCards />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>
      {/* 
      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr]">
        <div></div> 
        <div className="pt-0 md:pt-6 pb-4">
          <AdjustedHoursSection />
        </div>
        <div></div> 
      </section>
        */}

      {/* Contact section takes up the whole width of the screen so it must not be hindered by a grid */}
      <div className="mb-10 mt-16">
        <ContactSection />
      </div>

      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr]">
        <div></div> {/* Left empty colomn */}
        <div className="px-2">
          <SendMessage />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>

      {/* Skyline illustration takes up the whole width of the screen so it must not be hindered by a grid */}
      <SkylineStrip />
    </div>
  );
}
