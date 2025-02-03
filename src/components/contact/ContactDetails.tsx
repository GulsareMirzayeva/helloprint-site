// import { useTranslation } from 'react-i18next';
import { cardBgColors } from '../../lib/stylePresets';
import GoogleMap from './contactDetails/GoogleMap';

import AdressSection from './contactDetails/details/AdressSection';
import ContactSection from './contactDetails/details/ContactSection';
import OpeningHoursSection from './contactDetails/details/OpeningHoursSection';

// Contact details on the Contact page
export default function ContactDetails() {
  return (
    <section className="flex flex-col w-full">
      <div
        className={`flex flex-col p-2 mb-10 sm:p-8 rounded-xl ${cardBgColors.secondary}`}
      >
        <div className="flex flex-wrap md:justify-evenly sm:justify-start">
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
        <div className="pt-8">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
