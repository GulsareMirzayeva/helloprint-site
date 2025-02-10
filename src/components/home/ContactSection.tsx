import { useData } from '../../context/DataContext';
import ContactInfo from './contactSection/ContactInfo';
import OpeningHours from './contactSection/OpeningHours';

export default function ContactSection() {
  // Get acces to styling preset colors
  const { stylePreset } = useData();

  return (
    <section
      className={`
        flex w-full justify-evenly py-16
        ${stylePreset.shopInfoCard.backgroundColor}
        ${stylePreset.shopInfoCard.from}
        ${stylePreset.shopInfoCard.via}
        ${stylePreset.shopInfoCard.to}
      `}
    >
      <div className="flex flex-col md:flex-row text-center gap-32 px-2">
        <OpeningHours />
        <ContactInfo />
      </div>
    </section>
  );
}
