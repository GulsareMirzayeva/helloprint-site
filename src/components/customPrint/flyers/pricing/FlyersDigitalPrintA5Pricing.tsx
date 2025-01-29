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

/*
    Flyers - Digital print A5 section

    Show information and pricing tables for Digital print A5 category
*/

export default function FlyersDigitalPrintA5Pricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesSingleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A5.singleSided),
  ];

  const pricesDoubleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A5.doubleSided),
  ];

  // Get the header titles
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
          {/* Title, subtitle and introduction text */}
          <div>
            <TextBlock
              value={flyersContentPaths.formatA5}
              variant="sectionTitle"
            />
            <TextBlock value={flyersContentPaths.singleSided} variant="body" />
          </div>

          {/* Display pricing table*/}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={basePriceOptions}
            prices={pricesSingleSidedA5}
          />
        </div>
        <div>
          {/* Title, subtitle and introduction text */}
          <div className="flex flex-col">
            <TextBlock
              value={flyersContentPaths.formatA5}
              variant="sectionTitle"
            />
            <TextBlock value={flyersContentPaths.doubleSided} variant="body" />
          </div>

          {/* Display pricing table*/}
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
