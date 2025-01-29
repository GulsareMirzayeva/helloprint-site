import PricingTable from '../../../elementTemplates/PricingTable';
import {
  basePriceOptions,
  shortBasePriceOptions,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { flyersContentPaths } from '../../../../lib/translationPaths';

export default function FlyersDigitalPrintA5Pricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
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
    t('PaperWeights.90grShort'),
    t('PaperWeights.150grShort'),
    t('PaperWeights.250grShort'),
  ];

  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col p-8 w-full rounded-b-xl bg-gray-100">
      <div className="flex gap-16">
        <div className="flex flex-col">
          {/* Display a title and the papertype at the top of the table */}
          <div>
            <TextBlock
              value={flyersContentPaths.formatA5}
              variant="sectionTitle"
            />
            <TextBlock value={flyersContentPaths.singleSided} variant="body" />
          </div>
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={basePriceOptions}
            prices={pricesSingleSidedA5}
          />
        </div>
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex flex-col">
            <TextBlock
              value={flyersContentPaths.formatA5}
              variant="sectionTitle"
            />
            <TextBlock value={flyersContentPaths.doubleSided} variant="body" />
          </div>
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={shortBasePriceOptions}
            prices={pricesDoubleSidedA5}
          />
        </div>
      </div>
    </section>
  );
}
