import IntroductionCopyPrint from '../copyPrint/Introduction';
import CopyPrintPricing from '../copyPrint/pricing/CopyPrintPricing';
import { useTranslation } from 'react-i18next';

export default function CopyPrint() {
  useTranslation();
  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCopyPrint />
      <CopyPrintPricing />
    </div>
  );
}
