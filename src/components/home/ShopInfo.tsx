import ContactInfo from './shopInformation/ContactInfo';
import OpeningHours from './shopInformation/OpeningHours';

export default function ShopInfo() {
  return (
    <section className="flex justify-center w-full py-20 bg-gradient-radial from-[#fd3964] via-[#FA2150] to-[#FB0036]">
      <div className="flex flex-col justify-start items-center min-w-[600px] h-80">
        <OpeningHours />
      </div>
      <div className="flex flex-col justify-start min-w-[600px] h-80">
        <ContactInfo />
      </div>
    </section>
  );
}
