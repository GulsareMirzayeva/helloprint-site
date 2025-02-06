import PricingTable from '../../../elementTemplates/PricingTable';
import {
  basePriceOptions,
  bulkPriceOptions,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { flyersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

/*
    Flyers - Offset print section section

    Show information and pricing tables for Offset print category
*/

export default function FlyersOffsetPrintPricing({
  bgColor,
}: {
  bgColor: string;
}) {
  const { prices } = useData();
  const { t } = useTranslation();

  const offsetPrintTitle = t('customPrintPage.common.offsetPrint');

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  const pricesDoubleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.offsetPrint.A5.doubleSided),
  ];

  const pricesDoubleSidedA6 = [
    ...Object.values(prices.customPrint.flyers.offsetPrint.A6.doubleSided),
  ];

  // Get the header titles
  const headerTitles: string[] = [
    t('commonWords.flyers'),
    t('PaperWeights.135grShort'),
    t('PaperWeights.170grShort'),
    t('PaperWeights.250grShort'),
  ];

  // Get the units
  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section
      className={`
        flex flex-col p-2 sm:p-8 w-full rounded-xl
        ${bgColor}
        `}
    >
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: offsetPrintTitle,
          subTitle: flyersContentPaths.formatA5Complete,
          introduction: flyersContentPaths.introductionOffsetTable,
          notification: flyersContentPaths.offsetPrintDeliveryTime,
        }}
      />
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8">
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col">
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
            prices={pricesDoubleSidedA6}
          />
        </div>
        <div>
          {/* Display a title and the papertype */}
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
            options={bulkPriceOptions}
            prices={pricesDoubleSidedA5}
          />
        </div>
      </div>
    </section>
  );
}
