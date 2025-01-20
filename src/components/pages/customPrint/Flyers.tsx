import { useTranslation } from 'react-i18next';
import FlyersDigitalPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA5Pricing';
import FlyersDigitalPrintA6Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA6Pricing';
import Footer from '../../Footer';
import IntroductionFlyers from '../../customPrint/flyers/Introduction';
import FlyersOffsetPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersOffsetPrintPricing';

export default function Flyers() {
  useTranslation();

  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionFlyers />
      <FlyersDigitalPrintA6Pricing />
      <FlyersDigitalPrintA5Pricing />
      <FlyersOffsetPrintA5Pricing />
      <Footer />
    </div>
  );
}
