import WelcomeMessage from '../home/WelcomeMessage';
import ShopCategories from '../home/ShopCategories';
import Footer from '../Footer';
import ShopInfo from '../home/ShopInfo';

export default function Home() {
  return (
    <section className="flex flex-col w-full items-center overflow-scroll">
      <WelcomeMessage />
      <ShopCategories />
      <ShopInfo />
      <Footer />
    </section>
  );
}
