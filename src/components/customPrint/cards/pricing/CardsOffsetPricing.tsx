import PricingTable from '../../../elementTemplates/PricingTable';
import { shortBulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function CardsOffsetPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesPressPrint = [
    ...Object.values(prices.customPrint.cards.customPrint.color),
  ];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitles: string[] = [
    t('commonWords.cards'),
    t('customPrintPage.cards.offsetPrintSingleSided'),
    t('customPrintPage.cards.offsetPrintDoubleSided'),
  ];

  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-10 pb-10 w-full bg-white">
      <div className="flex items-baseline">
        <div className="flex text-red-600">
          <TextBlock
            value="customPrintPage.common.offsetPrint"
            variant="title"
          />
        </div>
        <div className="flex">
          &nbsp; - &nbsp;
          <TextBlock
            value="customPrintPage.common.offsetPrintDeliveryTime"
            variant="body"
          />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex items-baseline">
            <TextBlock value="commonWords.color" variant="subTitle" />
            &nbsp; - &nbsp;
            <TextBlock value="paperTypes.400gr" variant="body" />
          </div>

          {/* Render a table for the "Black & White" category */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={shortBulkPriceOptions}
            prices={pricesPressPrint}
          />
        </div>
      </div>
    </div>
  );
}
