import WelcomeMessage from '../home/WelcomeMessage';
import ShopCategories from '../home/ShopCategories';
import Footer from '../Footer';
import ShopInfo from '../home/ShopInfo';
import { useTranslation } from 'react-i18next';
import MessageOptions from '../contact/SendMessage';
// import SkylineStrip from '../SkylineStrip';

export default function Home() {
  useTranslation();

  return (
    <div className="flex flex-col w-full justify-start items-center gap-4 overflow-scroll">
      <WelcomeMessage />
      <ShopCategories />
      <ShopInfo />
      <MessageOptions />

      {/* <SkylineStrip /> */}
      <Footer />
    </div>
  );
}
