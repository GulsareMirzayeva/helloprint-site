import WelcomeMessage from '../home/WelcomeMessage';
import ShopCategories from '../home/ShopCategories';
import Footer from '../Footer';
import ShopInfo from '../home/ShopInfo';
// import SkylineStrip from '../SkylineStrip';

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <WelcomeMessage />
      <ShopCategories />
      <ShopInfo />
      {/* <SkylineStrip /> */}
      <Footer />
    </div>
  );
}
