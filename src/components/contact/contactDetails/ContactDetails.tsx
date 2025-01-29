// import { useTranslation } from 'react-i18next';
import GoogleMap from './GoogleMap';

import AdressSection from './details/AdressSection';
import ContactSection from './details/ContactSection';
import OpeningHoursSection from './details/OpeningHoursSection';

export default function ContactDetails() {
  // const { t } = useTranslation();

  return (
    <section className="flex flex-col items-start w-full">
      <div className="flex flex-col p-8 rounded-xl bg-gray-100">
        <div className="flex justify-evenly ">
          <div>
            <AdressSection />
          </div>
          <div>
            <ContactSection />
          </div>
          <div>
            <OpeningHoursSection />
          </div>
        </div>
        <div className="mt-10">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
