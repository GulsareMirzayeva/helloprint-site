import IntroductionCopyPrint from '../copyPrint/Introduction';
import { useTranslation } from 'react-i18next';

export default function OfficeSupplies() {
  useTranslation();
  return (
    <div className="grid grid-cols-[1fr,minmax(0,1000px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-4">
        <IntroductionCopyPrint />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
