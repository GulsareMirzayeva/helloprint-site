import CopyPrintBlackWhite from '../copyPrint/pricing/blackWhite';
import CopyPrintColor from '../copyPrint/pricing/color';
import Footer from '../Footer';

export default function CopyPrint() {
  return (
    <section className="flex flex-col w-full justify-between items-center gap-10 pb-8 overflow-scroll">
      <div className="flex gap-10">
        <CopyPrintBlackWhite />
        <CopyPrintColor />
      </div>
      <Footer />
    </section>
  );
}
