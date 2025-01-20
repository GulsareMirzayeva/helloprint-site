import Footer from '../Footer';
import TermsOfSaleContent from '../termsOfSale/TermsOfSaleContent';

export default function TermsOfSalePage() {
  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <TermsOfSaleContent />
      <Footer />
    </div>
  );
}
