// import { useTranslation } from 'react-i18next';
import GoogleMap from './GoogleMap';

import AdressSection from './details/AdressSection';
import ContactSection from './details/ContactSection';
import OpeningHoursSection from './details/OpeningHoursSection';

export default function ContactDetails() {
  // const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center py-14 w-full bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="flex gap-52">
          <div className="flex">
            <AdressSection />
          </div>
          <div className="flex">
            <ContactSection />
          </div>
          <div className="flex">
            <OpeningHoursSection />
          </div>
        </div>
        <div className="flex-1 flex mt-10">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
