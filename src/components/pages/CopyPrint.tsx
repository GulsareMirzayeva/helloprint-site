import IntroductionCopyPrint from '../copyPrint/Introduction';
import CopyPrintPricing from '../copyPrint/pricing/CopyPrintPricing';
import { useTranslation } from 'react-i18next';

export default function CopyPrint() {
  useTranslation();
  return (
    <div className="grid grid-cols-[1fr,minmax(0,1000px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-4">
        <IntroductionCopyPrint />
        <CopyPrintPricing />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
