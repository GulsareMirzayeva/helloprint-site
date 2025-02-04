import { useTranslation } from 'react-i18next';
import IntroductionOfficeSupplies from '../officeSupplies/Introduction';
import OfficeSuppliesLogosCard from '../officeSupplies/OfficeSuppliesLogosCard';
import { useData } from '../../context/DataContext';

export default function OfficeSupplies() {
  useTranslation();

  const { stylePreset } = useData();

  return (
    <div
      className={`
      ${stylePreset.overall.backgroundColor}      
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
    `}
    >
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-2 pt-12">
        <IntroductionOfficeSupplies />
        <OfficeSuppliesLogosCard />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
