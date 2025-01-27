import ContactSection from './footer/ContactSection';
import OpeningHoursSection from './footer/OpeningHoursSection';
import TermsOfSaleSection from './footer/TermsOfSaleSection';
import AdressSection from './footer/AdressSection';

export default function Footer() {
  return (
    <footer className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full border-t-2 border-[#FB0036] py-2">
      <div></div> {/* Left empty colomn */}
      <div className="flex items-start justify-between w-full py-1">
        <TermsOfSaleSection />
        <AdressSection />
        <ContactSection />
        <OpeningHoursSection />
      </div>
      <div></div> {/* Right empty colomn */}
    </footer>
  );
}
