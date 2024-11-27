import IntroductionCopyPrint from '../copyPrint/Introduction';
import PricingTable from '../copyPrint/PricingTable';
import Footer from '../Footer';

export default function CopyPrint() {
  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCopyPrint />
      <div className="flex justify-center gap-24 py-10 mt-10 w-full bg-gray-100 ">
        <PricingTable variant="blackWhite" />
        <PricingTable variant="color" />
      </div>
      <Footer />
    </section>
  );
}
