import IntroductionCards from '../customPrint/cards/Introduction';
import CardsPricing from '../customPrint/cards/pricing/CardsPricing';
import Footer from '../Footer';

export default function Cards() {
  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCards />
      <CardsPricing />
      <Footer />
    </section>
  );
}
