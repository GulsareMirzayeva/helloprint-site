import { useTranslation } from 'react-i18next';
import IntroductionCustomPrint from '../../customPrint/stickers/Introduction';
import StickersPricing from '../../customPrint/stickers/pricing/StickersPricing';
import Footer from '../../Footer';

export default function customPrintStickers() {
  useTranslation();

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <IntroductionCustomPrint />
      <StickersPricing />
      <Footer />
    </div>
  );
}
