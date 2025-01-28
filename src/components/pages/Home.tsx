import WelcomeMessage from '../home/WelcomeMessage';
import ShopCategories from '../home/ShopCategories';
import ShopInfo from '../home/ShopInfo';
import { useTranslation } from 'react-i18next';
import MessageOptions from '../contact/SendMessage';
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
          <ShopCategories />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>
      <ShopInfo />
      <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full pt-2">
        <div></div> {/* Left empty colomn */}
        <div className="flex items-start justify-between w-full pt-1">
          <MessageOptions />
        </div>
        <div></div> {/* Right empty colomn */}
      </section>
      <SkylineStrip />
    </div>
  );
}
