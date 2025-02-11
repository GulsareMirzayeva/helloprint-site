// import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';
import GoogleMap from './contactDetails/GoogleMap';
import AdressSection from './contactDetails/details/AdressSection';
import ContactSection from './contactDetails/details/ContactSection';
import OpeningHoursSection from './contactDetails/details/OpeningHoursSection';

// Contact details on the Contact page
export default function ContactDetails() {
  const { stylePreset } = useData();

  return (
    <section className="flex flex-col w-full">
      <div
        className={`
          ${stylePreset.categoryCard.borderColor}
          ${stylePreset.categoryCard.backgroundColorLight}
          flex flex-col p-2 mb-8 sm:p-4 rounded-xl
          `}
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
        <div className="py-4">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}
