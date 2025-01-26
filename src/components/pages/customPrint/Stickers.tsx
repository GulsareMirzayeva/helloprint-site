import { useTranslation } from 'react-i18next';
import IntroductionCustomPrint from '../../customPrint/stickers/Introduction';
import StickersPricing from '../../customPrint/stickers/pricing/StickersPricing';

export default function customPrintStickers() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1000px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-4">
        <IntroductionCustomPrint />
        <StickersPricing />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
