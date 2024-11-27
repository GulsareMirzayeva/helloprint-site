import IntroductionCopyPrint from '../copyPrint/Introduction';
import PricingTable from '../copyPrint/PricingTable';
import Footer from '../Footer';

export default function CopyPrint() {
  return (
    <section className="flex flex-col w-full justify-between items-center gap-10 pb-8 overflow-scroll">
      <IntroductionCopyPrint />
      <div className="flex justify-center gap-10 py-8 w-full bg-gray-100 ">
        <PricingTable variant="blackWhite" />
        <PricingTable variant="color" />
      </div>
      <Footer />
    </section>
  );
}
