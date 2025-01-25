import IntroductionCopyPrint from '../copyPrint/Introduction';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next';

export default function OfficeSupplies() {
  useTranslation();
  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCopyPrint />
      <Footer />
    </div>
  );
}
