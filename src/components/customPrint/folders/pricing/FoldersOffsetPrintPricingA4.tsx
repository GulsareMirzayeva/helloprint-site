import PricingTable from '../../../elementTemplates/PricingTable';
import { bulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { foldersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

export default function FoldersOffsetPrintPricingA4() {
  const { prices } = useData();
  const { t } = useTranslation();

  const offsetPrintTitle = t('customPrintPage.common.offsetPrint');

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesColorHalfFoldA4 = [
    ...Object.values(prices.customPrint.folders.offsetPrint.A4.color.halfFold),
  ];

  const pricesColorTrifoldA4 = [
    ...Object.values(prices.customPrint.folders.offsetPrint.A4.color.triFold),
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
    <section className="flex flex-col pt-12 p-8 pb-2 w-full">
      <TitleWithIntroduction
        props={{
          mainTitle: offsetPrintTitle,
          subTitle: foldersContentPaths.A4AndA3Format,
          introduction: foldersContentPaths.introductionFoldersTable,
          notification: foldersContentPaths.offsetPrintDeliveryTime,
        }}
      />
      <div className="flex gap-16 pt-8">
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col items-baseline">
            <TextBlock
              value={foldersContentPaths.trifoldA4}
              variant="sectionTitle"
            />
            <TextBlock value={foldersContentPaths.color} variant="body" />
          </div>
          {/* Display a pricing */}
          <PricingTable
            headerTitles={headerTitlesA4}
            units={unitsFolders}
            options={bulkPriceOptions}
            prices={pricesColorTrifoldA4}
          />
        </div>
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex flex-col">
            <TextBlock
              value={foldersContentPaths.bifoldA4}
              variant="sectionTitle"
            />
            <TextBlock value={foldersContentPaths.color} variant="body" />
          </div>
          <PricingTable
            headerTitles={headerTitlesA4}
            units={unitsFolders}
            options={bulkPriceOptions}
            prices={pricesColorHalfFoldA4}
          />
        </div>
      </div>
    </section>
  );
}
