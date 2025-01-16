import ContactSection from './footer/ContactSection';
import OpeningHoursSection from './footer/OpeningHoursSection';
import TermsOfSaleSection from './footer/TermsOfSaleSection';
import AdressSection from './footer/AdressSection';

export default function Footer() {
  return (
    <div className="flex justify-center w-full border-t-2 border-[#FB0036] py-4">
      <div className="flex justify-evenly w-full max-w-[1900px]">
        <TermsOfSaleSection />
        <AdressSection />
        <ContactSection />
        <OpeningHoursSection />
      </div>
    </div>
  );
}
