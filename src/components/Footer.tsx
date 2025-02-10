import ContactSection from './footer/ContactSection';
import OpeningHoursSection from './footer/OpeningHoursSection';
import TermsOfSaleSection from './footer/TermsOfSaleSection';
import AdressSection from './footer/AdressSection';
import { useTranslation } from 'react-i18next';
import { useData } from '../context/DataContext';

export default function Footer() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  return (
    <footer
      className={`
        border-t grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full px-4 py-2
        ${stylePreset.footer.borderTopColor}
        ${stylePreset.footer.backgroundColor}
      `}
    >
      <div></div> {/* Left empty column */}
      <div className="flex flex-wrap sm:flex-nowrap w-full px-4 gap-4 sm:gap-6 md:gap-20 lg:gap-52">
        <div className="flex flex-1 justify-between w-full">
          <TermsOfSaleSection />
          <AdressSection />
        </div>
        <div className="flex flex-1 justify-between w-full pt-4 sm:pt-0">
          <ContactSection />
          <OpeningHoursSection />
        </div>
      </div>
      <div></div> {/* Right empty column */}
    </footer>
  );
}
