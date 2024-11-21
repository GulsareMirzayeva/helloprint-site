import WelcomeMessage from '../home/WelcomeMessage';
import ShopCategories from '../home/ShopCategories';
import Footer from '../Footer';
import ShopInfo from '../home/ShopInfo';
// import SkylineStrip from '../SkylineStrip';

export default function Home() {
  return (
    <section className="flex flex-col w-full justify-between items-center pb-8 overflow-scroll">
      <WelcomeMessage />
      <ShopCategories />
      <ShopInfo />
      {/* <SkylineStrip /> */}
      <Footer />
    </section>
  );
}
