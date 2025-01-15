import IntroductionCards from '../../customPrint/cards/Introduction';
import CardsDigitalPrintPricing from '../../customPrint/cards/pricing/CardsDigitalPrintPricing';
import CardsOffsetPrintPricing from '../../customPrint/cards/pricing/CardsOffsetPricing';
import Footer from '../../Footer';

export default function Cards() {
  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCards />
      <CardsDigitalPrintPricing />
      <CardsOffsetPrintPricing />
      <Footer />
    </section>
  );
}
