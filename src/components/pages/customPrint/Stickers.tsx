import IntroductionCustomPrint from '../../customPrint/stickers/Introduction';
import Footer from '../../Footer';

export default function customPrintStickers() {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <IntroductionCustomPrint />
      <Footer />
    </div>
  );
}
