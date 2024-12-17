import IntroductionCustomPrint from '../../customPrint/stickers/Introduction';
import StickersPricing from '../../customPrint/stickers/pricing/StickersPricing';
import Footer from '../../Footer';

export default function customPrintStickers() {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <IntroductionCustomPrint />
      <StickersPricing />
      <Footer />
    </div>
  );
}
