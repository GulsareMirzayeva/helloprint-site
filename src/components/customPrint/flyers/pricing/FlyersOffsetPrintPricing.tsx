import PricingTable from '../../../elementTemplates/PricingTable';
import {
  bulkPriceOptions,
  extendedBulkPriceOptions,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { flyersContentPaths } from '../../../../lib/translationPaths';

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
    t('paperTypes.135grShort'),
    t('paperTypes.170grShort'),
    t('paperTypes.250grShort'),
  ];

  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full py-20 gap-4 bg-white">
      <div className="flex flex-col items-center">
        <div className="flex">
          <TextBlock value={offsetPrintTitle} variant="title" />
        </div>
        <div className="flex text-[#FB0036]">
          <TextBlock
            value={flyersContentPaths.offsetPrintDeliveryTime}
            variant="body"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value={flyersContentPaths.formatA5} variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock
                value={flyersContentPaths.doubleSided}
                variant="subTitle"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={extendedBulkPriceOptions}
              prices={pricesDoubleSidedA6}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value={flyersContentPaths.formatA5} variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock
                value={flyersContentPaths.doubleSided}
                variant="subTitle"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={bulkPriceOptions}
              prices={pricesDoubleSidedA5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
