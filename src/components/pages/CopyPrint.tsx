import { SplitPriceRanges } from '../../utils/priceCategories';
import IntroductionCopyPrint from '../copyPrint/Introduction';
import PricingTable from '../elementTemplates/PricingTable';
import Footer from '../Footer';

export default function CopyPrint() {
  // The strings are paths to the requested text in the translation files (in 'i18next' folder at the root)
  const headerTitles: string[] = [
    'commonWords.prints',
    'commonWords.budget',
    'commonWords.highQuality',
  ];
  const units: string[] = [
    'commonWords.amount',
    'commonWords.perPrint',
    'commonWords.perPrint',
  ];

  const pricePathsBlackWhite = {
    budgetPath: 'copyPrint.A4.budget',
    hqPath: 'copyPrint.A4.hq',
  };

  const pricePathsColor = {
    budgetPath: 'copyPrint.A4.budget',
    hqPath: 'copyPrint.A4.hq',
  };

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCopyPrint />
      <div className="flex justify-center gap-24 py-10 mt-10 w-full bg-gray-100 ">
        <PricingTable
          headerTitles={headerTitles}
          units={units}
          ranges={SplitPriceRanges}
          variant="blackWhite"
          pricePaths={pricePathsBlackWhite}
        />
        <PricingTable
          headerTitles={headerTitles}
          units={units}
          ranges={SplitPriceRanges}
          variant="color"
          pricePaths={pricePathsColor}
        />
      </div>
      <Footer />
    </section>
  );
}
