import ContactSection from './footer/ContactSection';
import OpeningHoursSection from './footer/OpeningHoursSection';
import TermsOfSaleSection from './footer/TermsOfSaleSection';
import AdressSection from './footer/AdressSection';

export default function Footer() {
  return (
    <footer className="flex justify-center w-full h-48 border-t-2 border-[#FB0036] py-4">
      <div className="flex justify-evenly w-full max-w-[1900px]">
        <TermsOfSaleSection />
        <AdressSection />
        <ContactSection />
        <OpeningHoursSection />
      </div>
    </footer>
  );
}
