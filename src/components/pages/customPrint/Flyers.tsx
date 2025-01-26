import { useTranslation } from 'react-i18next';
import FlyersDigitalPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA5Pricing';
import FlyersDigitalPrintA6Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA6Pricing';
import IntroductionFlyers from '../../customPrint/flyers/Introduction';
import FlyersOffsetPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersOffsetPrintPricing';

export default function Flyers() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1000px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-4">
        <IntroductionFlyers />
        <FlyersDigitalPrintA6Pricing />
        <FlyersDigitalPrintA5Pricing />
        <FlyersOffsetPrintA5Pricing />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
