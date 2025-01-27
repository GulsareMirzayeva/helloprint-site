import ContactInfo from './shopInformation/ContactInfo';
import OpeningHours from './shopInformation/OpeningHours';

export default function ShopInfo() {
  return (
    <section className="flex w-full justify-evenly py-16 bg-gradient-radial from-[#fd3964] via-[#FA2150] to-[#FB0036]">
      <div className="flex gap-40 max-w-[1200px]">
        <OpeningHours />
        <ContactInfo />
      </div>
    </section>
  );
}
