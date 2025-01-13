import IntroductionPosters from '../customPrint/posters/introduction';
import Posters80grPricing from '../customPrint/posters/pricing/Posters80grPricing';

export default function Posters() {
  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionPosters />
      <Posters80grPricing />
    </section>
  );
}
