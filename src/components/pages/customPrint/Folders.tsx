import { useTranslation } from 'react-i18next';
import IntroductionFlyers from '../../customPrint/folders/introduction';
import FoldersDigitalPrintPricing from '../../customPrint/folders/pricing/FoldersDigitalPrintPricing';
import FoldersOffsetPrintPricingA4 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA4';
import FoldersOffsetPrintPricingA3 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA3';
import { shopInfoPaths } from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { cardBgColors } from '../../../lib/stylePresets';

export default function Folders() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionFlyers />
        <FoldersDigitalPrintPricing bgColor={cardBgColors.secondary} />
        <FoldersOffsetPrintPricingA4 bgColor={cardBgColors.primary} />
        <FoldersOffsetPrintPricingA3 bgColor={cardBgColors.secondary} />
        <div className="pt-16 pb-2">
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
