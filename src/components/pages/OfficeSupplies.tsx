import { useTranslation } from 'react-i18next';
import OfficeSuppliesLogosCard from '../elementTemplates/officeSupplies/OfficeSuppliesLogosCard';
import { useData } from '../../context/DataContext';
import PageTitleAndIntroduction from '../elementTemplates/PageTitleAndIntroduction';
import { officeSuppliesPaths } from '../../lib/translationPaths';

export default function OfficeSupplies() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
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
        <PageTitleAndIntroduction
          title={officeSuppliesPaths.title}
          introduction={officeSuppliesPaths.introduction}
        />
        <OfficeSuppliesLogosCard />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
