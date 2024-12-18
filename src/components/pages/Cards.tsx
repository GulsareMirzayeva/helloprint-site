import IntroductionCards from '../customPrint/cards/Introduction';
import CardsDigitalPrintPricing from '../customPrint/cards/pricing/CardsDigitalPrintPricing';
import CardsPressPricing from '../customPrint/cards/pricing/CardsPressPricing';
import Footer from '../Footer';

export default function Cards() {
  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCards />
      <CardsDigitalPrintPricing />
      <CardsPressPricing />
      <Footer />
    </section>
  );
}
