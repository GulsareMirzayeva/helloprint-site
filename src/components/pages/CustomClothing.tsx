import { useData } from '../../context/DataContext';
import IntroductionCustomClothing from '../customClothing/Introduction';
import Footer from '../Footer';
import FlexAndDtgPricing from '../customClothing/FlexAndDtgPricing';
import ClothingPiecesPricing from '../customClothing/ClothingPiecesPricing';

export default function CustomClothing() {
  const { prices } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCustomClothing />
      <ClothingPiecesPricing />
      <FlexAndDtgPricing />
      <Footer />
    </section>
  );
}
