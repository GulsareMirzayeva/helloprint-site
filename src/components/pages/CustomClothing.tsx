import IntroductionCustomClothing from '../customClothing/Introduction';
import Footer from '../Footer';
import FlexAndDtgPricing from '../customClothing/pricing/FlexAndDtgPricing';
import ClothingPiecesPricing from '../customClothing/pricing/ClothingPiecesPricing';
import { useTranslation } from 'react-i18next';

export default function CustomClothing() {
  useTranslation();

  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCustomClothing />
      <ClothingPiecesPricing />
      <FlexAndDtgPricing />
      <Footer />
    </div>
  );
}
