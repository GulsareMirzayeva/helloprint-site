import { useTranslation } from 'react-i18next';
import TermsOfSaleContent from '../termsOfSale/TermsOfSaleContent';

export default function TermsOfSalePage() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full">
        <TermsOfSaleContent />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
