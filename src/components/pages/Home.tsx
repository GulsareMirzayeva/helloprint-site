import WelcomeMessage from '../home/WelcomeMessage';
import ProductCategoryCards from '../home/ProductCategoryCards';
import ContactSection from '../home/ContactSection';
import { useTranslation } from 'react-i18next';
import SendMessage from '../contact/SendMessage';
import SkylineStrip from '../SkylineStrip';

export default function Home() {
  useTranslation();

  return (
    <div className="flex flex-col w-full justify-start items-center gap-4 overflow-scroll">
      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full py-2">
        <div></div> {/* Left empty colomn */}
        <div className="flex items-start justify-between w-full py-1">
          <WelcomeMessage />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>
      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full py-2">
        <div></div> {/* Left empty colomn */}
        <div className="flex items-start justify-between w-full py-1">
          <ProductCategoryCards />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>
      <ContactSection />
      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full pt-2">
        <div></div> {/* Left empty colomn */}
        <div className="flex items-start justify-between w-full pt-1">
          <SendMessage />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>
      <SkylineStrip />
    </div>
  );
}
