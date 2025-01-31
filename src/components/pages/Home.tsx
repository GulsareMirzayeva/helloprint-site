import WelcomeMessage from '../home/WelcomeMessage';
import ProductCategoryCards from '../home/ProductCategoryCards';
import ContactSection from '../home/ContactSection';
import { useTranslation } from 'react-i18next';
import SendMessage from '../contact/SendMessage';
import SkylineStrip from '../SkylineStrip';

export default function Home() {
  useTranslation();

  return (
    <div className="flex flex-col w-full gap-4">
      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr]">
        <div></div> {/* Left empty colomn */}
        <div>
          <WelcomeMessage />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>

      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr]">
        <div></div> {/* Left empty colomn */}
        <div>
          <ProductCategoryCards />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>

      {/* Contact section takes up the whole width of the screen so it must not be hindered by a grid */}
      <ContactSection />

      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr]">
        <div></div> {/* Left empty colomn */}
        <div className="px-2">
          <SendMessage />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>

      {/* Skyline illustration takes up the whole width of the screen so it must not be hindered by a grid */}
      <SkylineStrip />
    </div>
  );
}
