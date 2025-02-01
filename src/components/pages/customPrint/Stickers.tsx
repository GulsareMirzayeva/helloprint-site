import { useTranslation } from 'react-i18next';
import IntroductionStickers from '../../customPrint/stickers/Introduction';
import StickersPricing from '../../customPrint/stickers/pricing/StickersPricing';
import { shopInfoPaths } from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function Stickers() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-2 pt-12">
        <IntroductionStickers />
        <StickersPricing />
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
