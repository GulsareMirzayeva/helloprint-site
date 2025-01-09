import PricingTable from '../../../elementTemplates/PricingTable';
import { shortBasePriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function CardsDigitalPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesBlackWhite = [
    ...Object.values(prices.customPrint.cards.print.blackWhite),
  ];

  const pricesColor = [...Object.values(prices.customPrint.cards.print.color)];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitles: string[] = [
    t('commonWords.cards'),
    t('commonWords.singleSided'),
    t('commonWords.doubleSided'),
  ];

  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 py-10 bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="flex flex-col ">
          <TextBlock
            value="customPrintPage.common.digitalPrint"
            variant="title"
          />
        </div>
        <div className="flex text-red-600">
          <TextBlock
            value="customPrintPage.common.digitalPrintDeliveryTime"
            variant="body"
          />
        </div>
      </div>
      <div className="flex justify-center w-full gap-20">
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex items-baseline">
            <TextBlock value="commonWords.blackWhite" variant="subTitle" />
            &nbsp; - &nbsp;
            <TextBlock value="paperTypes.350gr" variant="body" />
          </div>

          {/* Render a table for the "Black & White" category */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={shortBasePriceOptions}
            prices={pricesBlackWhite}
          />
        </div>
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex items-baseline">
            <TextBlock value="commonWords.color" variant="subTitle" />
            &nbsp; - &nbsp;
            <TextBlock value="paperTypes.350gr" variant="body" />
          </div>

          {/* Render a table for the "Color" category */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={shortBasePriceOptions}
            prices={pricesColor}
          />
        </div>
      </div>
    </div>
  );
}
