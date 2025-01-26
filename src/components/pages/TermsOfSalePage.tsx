import { useTranslation } from 'react-i18next';
import TermsOfSaleContent from '../termsOfSale/TermsOfSaleContent';

export default function TermsOfSalePage() {
  useTranslation();

  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <TermsOfSaleContent />
    </div>
  );
}
