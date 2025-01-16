import Footer from '../Footer';
import TermsOfSaleContent from '../termsOfSale/TermsOfSaleContent';

export default function TermsOfSalePage() {
  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <TermsOfSaleContent />
      <Footer />
    </section>
  );
}
