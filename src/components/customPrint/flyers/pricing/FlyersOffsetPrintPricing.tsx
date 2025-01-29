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
import { Notification } from '../../../elementTemplates/Notification';

export default function FlyersOffsetPrintPricing() {
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

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitles: string[] = [
    t('commonWords.flyers'),
    t('PaperWeights.135grShort'),
    t('PaperWeights.170grShort'),
    t('PaperWeights.250grShort'),
  ];

  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col pt-12 p-8 w-full rounded-xl">
      <TitleWithIntroduction
        props={{
          mainTitle: offsetPrintTitle,
          subTitle: flyersContentPaths.formatA5Complete,
          introduction: flyersContentPaths.introductionFlyersTable,
          notification: flyersContentPaths.offsetPrintDeliveryTime,
        }}
      />
      <div className="flex gap-16 pt-8">
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex flex-col">
            <TextBlock
              value={flyersContentPaths.formatA5}
              variant="sectionTitle"
            />
            <TextBlock value={flyersContentPaths.singleSided} variant="body" />
          </div>

          {/* Render a table for the "Black & White" category */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={basePriceOptions}
            prices={pricesDoubleSidedA6}
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

          {/* Render a table for the "Color" category */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={bulkPriceOptions}
            prices={pricesDoubleSidedA5}
          />
        </div>
      </div>
      <div className="pt-8">
        <Notification>
          <div className="flex items-end">
            <div className="text-[#FB0036] font-semibold">
              <span>*&nbsp;</span>
            </div>
            <TextBlock
              value={flyersContentPaths.deliveryDisclaimer}
              variant="bodySmall"
            />
          </div>
        </Notification>
      </div>
    </section>
  );
}
