import PricingTable from '../../../elementTemplates/PricingTable';
import {
  basePriceOptions,
  shortBasePriceOptions,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function FlyersDigitalPrintA5Pricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesSingleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A5.singleSided),
  ];

  const pricesDoubleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A5.doubleSided),
  ];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitles: string[] = [
    t('commonWords.flyers'),
    t('paperTypes.90grShort'),
    t('paperTypes.150grShort'),
    t('paperTypes.250grShort'),
  ];

  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full pt-6 bg-white">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="paperFormats.A5" variant="largeTitle" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.singleSided" variant="title" />
            </div>

            {/* Render a table for the "Black & White" category */}
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={basePriceOptions}
              prices={pricesSingleSidedA5}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="paperFormats.A5" variant="largeTitle" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.doubleSided" variant="title" />
            </div>

            {/* Render a table for the "Color" category */}
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={shortBasePriceOptions}
              prices={pricesDoubleSidedA5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
