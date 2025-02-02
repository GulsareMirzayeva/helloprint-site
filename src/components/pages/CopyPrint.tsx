import { shopInfoPaths } from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import IntroductionCopyPrint from '../copyPrint/Introduction';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import CopyPrintBudgetPricing from '../copyPrint/pricing/CopyPrintBudgetPricing';
import CopyPrintHqPricing from '../copyPrint/pricing/CopyPrintHqPricing';
import { cardBgColors } from '../../lib/stylePresets';
import { Divider } from '@mui/material';

export default function CopyPrint() {
  useTranslation();
  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionCopyPrint />
        <CopyPrintBudgetPricing bgColor={cardBgColors.secondary} />
        <CopyPrintHqPricing bgColor={cardBgColors.primary} />
        <Divider flexItem variant="fullWidth" />
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
