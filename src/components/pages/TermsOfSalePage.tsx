import { useTranslation } from 'react-i18next';
import TermsOfSaleContent from '../termsOfSale/TermsOfSaleContent';
import { useData } from '../../context/DataContext';

export default function TermsOfSalePage() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  return (
    <div
      className={`
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
      ${stylePreset.overall.backgroundColor}
    `}
    >
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full">
        <TermsOfSaleContent />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
