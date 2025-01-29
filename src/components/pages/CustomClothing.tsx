import IntroductionCustomClothing from '../customClothing/Introduction';
import FlexAndDtgPricing from '../customClothing/pricing/FlexAndDtgPricing';
import ClothingPiecesPricing from '../customClothing/pricing/ClothingPiecesPricing';
import { useTranslation } from 'react-i18next';
import { customPrintingContentPaths } from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';

export default function CustomClothing() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full pt-12">
        <IntroductionCustomClothing />
        <ClothingPiecesPricing />
        <FlexAndDtgPricing />
        <div className="pt-16 pb-2">
          <TextBlock
            value={customPrintingContentPaths.contactTitle}
            variant={'subTitle'}
          />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
