import ContactSection from './footer/ContactSection';
import OpeningHoursSection from './footer/OpeningHoursSection';
import TermsOfSaleSection from './footer/TermsOfSaleSection';
import AdressSection from './footer/AdressSection';

export default function Footer() {
  return (
    <footer className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full px-4 border-t-2 border-[#FB0036] py-2">
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
