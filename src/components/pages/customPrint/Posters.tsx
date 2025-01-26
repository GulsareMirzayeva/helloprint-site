import { useTranslation } from 'react-i18next';
import IntroductionPosters from '../../customPrint/posters/introduction';
import Posters160grPricing from '../../customPrint/posters/pricing/Posters160grPricing';
import Posters190grAnd260grPricing from '../../customPrint/posters/pricing/Posters190grAnd260grPricing';
import Posters80grPricing from '../../customPrint/posters/pricing/Posters80grPricing';
import PostersA3BudgetAndHqPricing from '../../customPrint/posters/pricing/PostersA3BudgetAndHqPricing';
import PostersSpecialPapersPricing from '../../customPrint/posters/pricing/PostersSpecialPapersPricing';

export default function Posters() {
  useTranslation();

  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionPosters />
      <Posters80grPricing />
      <Posters160grPricing />
      <Posters190grAnd260grPricing />
      <PostersSpecialPapersPricing />
      <PostersA3BudgetAndHqPricing />
    </div>
  );
}
