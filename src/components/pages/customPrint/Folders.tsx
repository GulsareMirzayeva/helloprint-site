import { useTranslation } from 'react-i18next';
import Introduction from '../../customPrint/folders/introduction';
import FoldersDigitalPrintPricing from '../../customPrint/folders/pricing/FoldersDigitalPrintPricing';
import FoldersOffsetPrintPricingA4 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA4';
import FoldersOffsetPrintPricingA3 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA3';
import { customPrintingContentPaths } from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';

export default function Folders() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full pt-12">
        <Introduction />
        <FoldersDigitalPrintPricing />
        <FoldersOffsetPrintPricingA4 />
        <FoldersOffsetPrintPricingA3 />
        <div className="py-4 pb-2">
          <Divider flexItem variant="middle" />
          <div className="pt-16">
            <TextBlock
              value={customPrintingContentPaths.contactTitle}
              variant={'subTitle'}
            />
          </div>
          <div className="w-full">
            <SendMessage />
          </div>
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
