import PricingTable from '../../../elementTemplates/PricingTable';
import {
  splitPriceOptionsShort,
  splitPriceOptionsShortLow,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { postersContentPaths } from '../../../../lib/translationPaths';

export default function PostersA3BudgetAndHqPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "posters" page that will be used
  const pricesA3Hq = [
    ...Object.values(prices.customPrint.posters.color.fullColorHq),
  ];

  const pricesA3Budget = [
    ...Object.values(prices.customPrint.posters.color.fullColorBudget),
  ];

  // Table headers
  const headerTitles: string[] = [
    t('commonWords.posters'),
    t('commonWords.perPiece'),
  ];

  const units: string[] = [t('commonWords.format'), t('commonWords.price')];

  return (
    <section className="flex flex-col justify-center items-center w-full py-10 gap-4 bg-gray-100">
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col pb-4 items-baseline">
              <TextBlock
                value={postersContentPaths.typeA3}
                variant="largeTitle"
              />
              <TextBlock
                value={postersContentPaths.hqFullColor}
                variant="subTitle"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={splitPriceOptionsShortLow}
              prices={pricesA3Hq}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col pb-4 items-baseline">
              <TextBlock
                value={postersContentPaths.typeA3}
                variant="largeTitle"
              />
              <TextBlock
                value={postersContentPaths.budgetColor}
                variant="subTitle"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={splitPriceOptionsShort}
              prices={pricesA3Budget}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
