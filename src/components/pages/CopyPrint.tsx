import IntroductionCopyPrint from '../copyPrint/Introduction';
import Footer from '../Footer';
import CopyPrintPricing from '../copyPrint/pricing/CopyPrintPricing';

export default function CopyPrint() {
  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCopyPrint />
      <CopyPrintPricing />
      <Footer />
    </div>
  );
}
