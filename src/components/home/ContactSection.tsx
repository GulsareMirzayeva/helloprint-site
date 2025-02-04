import { useData } from '../../context/DataContext';
import ContactInfo from './contactSection/ContactInfo';
import OpeningHours from './contactSection/OpeningHours';

export default function ContactSection() {
  const { stylePreset } = useData();

  return (
    <section
      className={`
        flex w-full justify-evenly mb-10 py-16 bg-gradient-radial
        ${stylePreset.home.fromProperty}
        ${stylePreset.home.viaProperty}
        ${stylePreset.home.toProperty}
      `}
    >
      <div className="flex flex-col md:flex-row text-center gap-20 px-2">
        <OpeningHours />
        <ContactInfo />
      </div>
    </section>
  );
}
