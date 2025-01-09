import PricingTable from '../../../elementTemplates/PricingTable';
import {
  basePriceOptions,
  lowPriceOptions,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function FoldersDigitalPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  const digitalPrintTitle = t('customPrintPage.common.digitalPrint');

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesBlackWhiteA4 = [
    ...Object.values(prices.customPrint.folders.print.A4.blackWhite),
  ];

  const pricesColorA4 = [
    ...Object.values(prices.customPrint.folders.print.A4.color),
  ];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitlesColor: string[] = [
    t('commonWords.folders'),
    t('paperTypes.150grShort'),
    t('paperTypes.170grShort'),
    t('paperTypes.250grShort'),
  ];

  const headerTitlesBlackWhite: string[] = [
    t('commonWords.folders'),
    t('paperTypes.80grWhiteOrColor'),
  ];

  const unitsColor: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  const unitsBlackWhite: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 bg-gray-100">
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
              <TextBlock value="paperFormats.A4" variant="largeTitle" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.blackWhite" variant="title" />
              &nbsp;
              <TextBlock
                value="customPrintPage.common.bifoldOrTrifold"
                variant="subTitle"
              />
            </div>

            {/* Render a table for the "Black & White" category */}
            <PricingTable
              headerTitles={headerTitlesBlackWhite}
              units={unitsBlackWhite}
              options={basePriceOptions}
              prices={pricesBlackWhiteA4}
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
                value="customPrintPage.common.bifoldOrTrifold"
                variant="subTitle"
              />
            </div>

            {/* Render a table for the "Color" category */}
            <PricingTable
              headerTitles={headerTitlesColor}
              units={unitsColor}
              options={lowPriceOptions}
              prices={pricesColorA4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
