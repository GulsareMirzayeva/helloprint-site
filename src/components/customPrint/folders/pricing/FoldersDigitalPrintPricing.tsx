import PricingTable from '../../../elementTemplates/PricingTable';
import {
  basePriceOptions,
  lowPriceOptions,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { foldersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

export default function FoldersDigitalPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  const digitalPrintTitle = t('customPrintPage.common.digitalPrint');

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
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
    t('paperTypes.80grShort'),
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
    <section className="flex flex-col p-8 w-full rounded-xl bg-gray-100">
      <TitleWithIntroduction
        props={{
          mainTitle: digitalPrintTitle,
          subTitle: foldersContentPaths.A4FormatComplete,
          introduction: foldersContentPaths.introductionFoldersTable,
          notification: foldersContentPaths.digitalPrintDeliveryTime,
        }}
      />
      <div className="flex gap-16 pt-8">
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex flex-col">
            <TextBlock
              value={foldersContentPaths.bifoldOrTrifoldA4}
              variant="sectionTitle"
            />
            <TextBlock value={foldersContentPaths.color} variant="body" />
          </div>
          <PricingTable
            headerTitles={headerTitlesColor}
            units={unitsColor}
            options={lowPriceOptions}
            prices={pricesColorA4}
          />
        </div>
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col items-baseline">
            <TextBlock
              value={foldersContentPaths.bifoldOrTrifoldA4}
              variant="sectionTitle"
            />
            <div className="flex">
              <TextBlock value={foldersContentPaths.color} variant="body" />
              &nbsp;
              <TextBlock
                value={foldersContentPaths.whiteOrColoredPaperA4}
                variant="body"
              />
            </div>
          </div>
          {/* Display a pricing */}
          <PricingTable
            headerTitles={headerTitlesBlackWhite}
            units={unitsBlackWhite}
            options={basePriceOptions}
            prices={pricesBlackWhiteA4}
          />
        </div>
      </div>
    </section>
  );
}
