import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';
import { splitPriceRanges } from '../../lib/priceCategories';
import { TextBlock } from '../elementTemplates/TextBlock';
import IntroductionCopyPrint from '../copyPrint/Introduction';
import PricingTable from '../elementTemplates/PricingTable';
import Footer from '../Footer';

export default function CopyPrint() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // The strings are paths to the requested text in the translation files (in 'i18next' folder at the root)
  const headerTitles: string[] = [
    t('commonWords.prints'),
    t('commonWords.budget'),
    t('commonWords.highQuality'),
  ];
  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.perPrint'),
    t('commonWords.perPrint'),
  ];

  // Get all prices for the "copy & print" page that will be used
  const pricesBlackWhite = [
    ...Object.values(prices.copyPrint.A4.blackWhite),
    ...Object.values(prices.copyPrint.A4.blackWhite),
  ];

  const pricesColor = [
    ...Object.values(prices.copyPrint.A4.color),
    ...Object.values(prices.copyPrint.A4.color),
  ];

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCopyPrint />
      <div className="flex justify-center gap-24 py-10 mt-10 w-full bg-gray-100 ">
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex items-baseline">
            <TextBlock value="commonWords.blackWhite" variant="title" />
            &nbsp;
            <TextBlock value="paperTypes.80gr" variant="body" />
          </div>

          {/* Render a table for the "Black & White" category */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            ranges={splitPriceRanges}
            prices={pricesBlackWhite}
          />
        </div>
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex items-baseline">
            <TextBlock value="commonWords.color" variant="title" />
            &nbsp;
            <TextBlock value="paperTypes.90gr" variant="body" />
          </div>

          {/* Render a table for the "Color" category */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            ranges={splitPriceRanges}
            prices={pricesColor}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}
