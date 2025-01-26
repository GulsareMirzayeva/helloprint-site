import { useTranslation } from 'react-i18next';
import IntroductionCards from '../../customPrint/cards/Introduction';
import CardsDigitalPrintPricing from '../../customPrint/cards/pricing/CardsDigitalPrintPricing';
import CardsOffsetPrintPricing from '../../customPrint/cards/pricing/CardsOffsetPricing';

export default function Cards() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1000px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-center justify-start w-full px-4">
        <IntroductionCards />
        <CardsDigitalPrintPricing />
        <CardsOffsetPrintPricing />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
