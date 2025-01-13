import PricingTable from '../../../elementTemplates/PricingTable';
import { basePriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function FlyersDigitalPrintA6Pricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  const digitalPrintTitle = t('customPrintPage.common.digitalPrint');

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesSingleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A6.singleSided),
  ];

  const pricesDoubleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A6.doubleSided),
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
    <div className="flex flex-col justify-center items-center w-full py-20 gap-4 bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="flex">
          <TextBlock value={digitalPrintTitle} variant="title" />
        </div>
        <div className="flex text-[#FB0036]">
          <TextBlock
            value="customPrintPage.common.digitalPrintDeliveryTime"
            variant="body"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="paperFormats.A6" variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.singleSided" variant="subTitle" />
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
              <TextBlock value="paperFormats.A6" variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.doubleSided" variant="subTitle" />
            </div>

            {/* Render a table for the "Color" category */}
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={basePriceOptions}
              prices={pricesDoubleSidedA5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
