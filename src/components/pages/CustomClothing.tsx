import IntroductionCustomClothing from '../customClothing/Introduction';
import FlexAndDtgPricing from '../customClothing/pricing/FlexAndDtgPricing';
import ClothingPiecesPricing from '../customClothing/pricing/ClothingPiecesPricing';
import { useTranslation } from 'react-i18next';

export default function CustomClothing() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1000px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-4">
        <IntroductionCustomClothing />
        <ClothingPiecesPricing />
        <FlexAndDtgPricing />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
