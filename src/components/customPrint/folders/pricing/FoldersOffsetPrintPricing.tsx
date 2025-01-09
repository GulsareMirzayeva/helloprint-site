import PricingTable from '../../../elementTemplates/PricingTable';
import { bulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function FoldersOffsetPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  const digitalPrintTitle = t('customPrintPage.common.offsetPrint');

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesColorHalfFoldA4 = [
    ...Object.values(prices.customPrint.folders.customPrint.A4.color.halfFold),
  ];

  const pricesColorTrifoldA4 = [
    ...Object.values(prices.customPrint.folders.customPrint.A4.color.triFold),
  ];

  const pricesColorTrifoldA3 = [
    ...Object.values(prices.customPrint.folders.customPrint.A3.color.triFold),
  ];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitlesA4: string[] = [
    t('commonWords.folders'),
    t('paperTypes.135grShort'),
    t('paperTypes.170grShort'),
    t('paperTypes.250grShort'),
  ];

  const unitsFolders: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 bg-white">
      <div className="flex flex-col items-center">
        <div className="flex">
          <TextBlock value={digitalPrintTitle} variant="title" />
        </div>
        <div className="flex text-[#FB0036]">
          <TextBlock
            value="customPrintPage.common.offsetPrintDeliveryTime"
            variant="body"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="paperFormats.A4" variant="largeTitle" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.color" variant="title" />
              &nbsp;
              <TextBlock
                value="customPrintPage.common.trifold"
                variant="subTitle"
              />
            </div>

            {/* Render a table for the "Black & White" category */}
            <PricingTable
              headerTitles={headerTitlesA4}
              units={unitsFolders}
              options={bulkPriceOptions}
              prices={pricesColorHalfFoldA4}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="paperFormats.A4" variant="largeTitle" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.color" variant="title" />
              &nbsp;
              <TextBlock
                value="customPrintPage.common.bifold"
                variant="subTitle"
              />
            </div>

            {/* Render a table for the "Color" category */}
            <PricingTable
              headerTitles={headerTitlesA4}
              units={unitsFolders}
              options={bulkPriceOptions}
              prices={pricesColorTrifoldA4}
            />
          </div>
        </div>
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex items-baseline">
            <TextBlock value="paperFormats.A3" variant="largeTitle" />
            &nbsp; <span className="text-2xl">-</span> &nbsp;
            <TextBlock value="commonWords.color" variant="title" />
            &nbsp;
            <TextBlock
              value="customPrintPage.common.trifold"
              variant="subTitle"
            />
          </div>

          {/* Render a table for the "Color" category */}
          <PricingTable
            headerTitles={headerTitlesA4}
            units={unitsFolders}
            options={bulkPriceOptions}
            prices={pricesColorTrifoldA3}
          />
        </div>
      </div>
    </div>
  );
}
