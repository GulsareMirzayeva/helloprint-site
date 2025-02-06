import { useData } from '../../context/DataContext';
import ContactInfo from './contactSection/ContactInfo';
import OpeningHours from './contactSection/OpeningHours';

export default function ContactSection() {
  const { stylePreset } = useData();

  return (
    <section
      className={`
        flex w-auto mx-4 rounded-xl justify-evenly py-16
        ${stylePreset.shopInfoCard.backgroundColor}
        ${stylePreset.shopInfoCard.from}
        ${stylePreset.shopInfoCard.via}
        ${stylePreset.shopInfoCard.to}
      `}
    >
      <div className="flex flex-col md:flex-row text-center gap-20 px-2">
        <OpeningHours />
        <ContactInfo />
      </div>
    </section>
  );
}
