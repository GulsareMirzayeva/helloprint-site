import { useTranslation } from 'react-i18next';
import IntroductionCustomPrint from '../../customPrint/stickers/Introduction';
import StickersPricing from '../../customPrint/stickers/pricing/StickersPricing';
import { Divider } from '@mui/material';
import { customPrintingContentPaths } from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function customPrintStickers() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full py-20">
        <IntroductionCustomPrint />
        <StickersPricing />
        <Divider flexItem variant="middle" />
        <div className="pt-8 pb-2">
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
