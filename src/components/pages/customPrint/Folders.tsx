import { useTranslation } from 'react-i18next';
import Introduction from '../../customPrint/folders/introduction';
import FoldersDigitalPrintPricing from '../../customPrint/folders/pricing/FoldersDigitalPrintPricing';
import FoldersOffsetPrintPricingA4 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA4';
import FoldersOffsetPrintPricingA3 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA3';
import Footer from '../../Footer';

export default function Folders() {
  useTranslation();

  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <Introduction />
      <FoldersDigitalPrintPricing />
      <FoldersOffsetPrintPricingA4 />
      <FoldersOffsetPrintPricingA3 />
      <Footer />
    </div>
  );
}
