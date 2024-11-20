import IntroductionCustomClothing from '../customClothing/Introduction';
import DtgPricing from '../customClothing/pricing/DtgPricing';
import FlexVinylPricing from '../customClothing/pricing/FlexVinylPricing';
import TextilePricing from '../customClothing/pricing/TextilePricing';
import Footer from '../Footer';

export default function CustomClothing() {
  return (
    <section className="flex flex-col w-full items-center gap-10 pb-8 overflow-scroll">
      <IntroductionCustomClothing />
      <TextilePricing />
      <FlexVinylPricing />
      <DtgPricing />
      <Footer />
    </section>
  );
}
