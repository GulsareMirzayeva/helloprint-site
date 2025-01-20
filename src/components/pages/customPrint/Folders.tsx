import Introduction from '../../customPrint/folders/introduction';
import FoldersDigitalPrintPricing from '../../customPrint/folders/pricing/FoldersDigitalPrintPricing';
import FoldersOffsetPrintPricing from '../../customPrint/folders/pricing/FoldersOffsetPrintPricing';
import Footer from '../../Footer';

export default function Folders() {
  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <Introduction />
      <FoldersDigitalPrintPricing />
      <FoldersOffsetPrintPricing />
      <Footer />
    </div>
  );
}
