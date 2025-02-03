import { colorPresets } from '../../lib/stylePresets';
import ContactInfo from './contactSection/ContactInfo';
import OpeningHours from './contactSection/OpeningHours';

export default function ContactSection() {
  return (
    <section
      className={`
        flex w-full justify-evenly mb-10 py-16 bg-gradient-radial
        ${colorPresets.home.contactSection.fromProperty}
        ${colorPresets.home.contactSection.viaProperty}
        ${colorPresets.home.contactSection.toProperty}
      `}
    >
      <div className="flex flex-col md:flex-row text-center gap-20 px-2">
        <OpeningHours />
        <ContactInfo />
      </div>
    </section>
  );
}
