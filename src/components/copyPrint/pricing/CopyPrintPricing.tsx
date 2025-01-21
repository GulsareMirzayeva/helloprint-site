import PricingTable from '../../elementTemplates/PricingTable';
import { splitPriceOptions } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { copyPrintContentPaths } from '../../../lib/translationPaths';

export default function CopyPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesBlackWhite = [...Object.values(prices.copyPrint.A4.blackWhite)];
  const pricesColor = [...Object.values(prices.copyPrint.A4.color)];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitles: string[] = [
    t('commonWords.prints'),
    t('commonWords.budget'),
    t('commonWords.highQuality'),
  ];
  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.pricePerPrint'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section className="flex justify-center gap-24 py-20 w-full bg-gray-100 ">
      <div>
        {/* Display a title and the papertype at the top of the table */}
        <div className="flex items-baseline">
          <TextBlock value={copyPrintContentPaths.blackWhite} variant="title" />
          &nbsp; <span className="text-2xl">-</span> &nbsp;
          <TextBlock
            value={copyPrintContentPaths.type80gr}
            variant="subTitle"
          />
        </div>

        {/* Render a table for the "Black & White" category */}
        <PricingTable
          headerTitles={headerTitles}
          units={units}
          options={splitPriceOptions}
          prices={pricesBlackWhite}
        />
      </div>
      <div>
        {/* Display a title and the papertype at the top of the table */}
        <div className="flex items-baseline">
          <TextBlock value={copyPrintContentPaths.color} variant="title" />
          &nbsp; <span className="text-2xl">-</span> &nbsp;
          <TextBlock
            value={copyPrintContentPaths.type90gr}
            variant="subTitle"
          />
        </div>

        {/* Render a table for the "Color" category */}
        <PricingTable
          headerTitles={headerTitles}
          units={units}
          options={splitPriceOptions}
          prices={pricesColor}
        />
      </div>
    </section>
  );
}
