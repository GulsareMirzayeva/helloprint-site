import { useTranslation } from 'react-i18next';
import IntroductionPosters from '../../customPrint/posters/introduction';
import Posters160grPricing from '../../customPrint/posters/pricing/Posters160grPricing';
import Posters190grAnd260grPricing from '../../customPrint/posters/pricing/Posters190grAnd260grPricing';
import Posters80grPricing from '../../customPrint/posters/pricing/Posters80grPricing';
import PostersA3BudgetAndHqPricing from '../../customPrint/posters/pricing/PostersA3BudgetAndHqPricing';
import PostersSpecialPapersPricing from '../../customPrint/posters/pricing/PostersSpecialPapersPricing';
import { customPrintingContentPaths } from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function Posters() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-2 pt-12">
        <IntroductionPosters />
        <Posters80grPricing />
        <Posters160grPricing />
        <Posters190grAnd260grPricing />
        <PostersSpecialPapersPricing />
        <PostersA3BudgetAndHqPricing />
        <div className="pt-16 pb-2">
          <TextBlock
            value={customPrintingContentPaths.contactTitle}
            variant={'subTitle'}
          />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
