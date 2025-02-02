import { useTranslation } from 'react-i18next';
import IntroductionOfficeSupplies from '../officeSupplies/Introduction';
import OfficeSuppliesLogosCard from '../officeSupplies/OfficeSuppliesLogosCard';

export default function OfficeSupplies() {
  useTranslation();
  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-2">
        <IntroductionOfficeSupplies />
        <OfficeSuppliesLogosCard />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
