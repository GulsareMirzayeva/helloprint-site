import ContactInfo from './contactSection/ContactInfo';
import OpeningHours from './contactSection/OpeningHours';

export default function ContactSection() {
  return (
    <section className="flex w-full justify-evenly mb-10 py-16 bg-gradient-radial from-[#fd3964] via-[#FA2150] to-[#FB0036]">
      <div className="flex gap-40 max-w-[1200px]">
        <OpeningHours />
        <ContactInfo />
      </div>
    </section>
  );
}
