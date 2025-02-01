import PricingTable from '../../../elementTemplates/PricingTable';
import { basePriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { flyersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

/*
    Flyers - Digital print A6 section

    Show information and pricing tables for Digital print A6 category
*/

export default function FlyersDigitalPrintA6Pricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesSingleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A6.singleSided),
  ];

  const pricesDoubleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A6.doubleSided),
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

  const digitalPrintTitle = t('customPrintPage.common.digitalPrint');

  return (
    <section className="flex flex-col p-2 sm:p-8 pb-2 w-full rounded-t-xl bg-gray-100">
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: digitalPrintTitle,
          subTitle: flyersContentPaths.A6AndA5Format,
          introduction: flyersContentPaths.introductionDigitalPrintTable,
          notification: flyersContentPaths.digitalPrintDeliveryTime,
        }}
      />
      <div className="flex flex-col md:flex-row gap-16 pt-8">
        <div>
          {/* Title, subtitle and introduction text */}
          <div className="flex flex-col">
            <TextBlock
              value={flyersContentPaths.formatA6}
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
              value={flyersContentPaths.formatA6}
              variant="sectionTitle"
            />
            <TextBlock value={flyersContentPaths.doubleSided} variant="body" />
          </div>

          {/* Display pricing table*/}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={basePriceOptions}
            prices={pricesDoubleSidedA5}
          />
        </div>
      </div>
    </section>
  );
}
