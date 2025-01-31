import PricingTable from '../../../elementTemplates/PricingTable';
import { bulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { foldersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

/*
    Folders - Offset print A4 section

    Show information and pricing tables for Offset print A4 category
*/

export default function FoldersOffsetPrintPricingA4() {
  const { prices } = useData();
  const { t } = useTranslation();

  const offsetPrintTitle = t('customPrintPage.common.offsetPrint');

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesColorHalfFoldA4 = [
    ...Object.values(prices.customPrint.folders.offsetPrint.A4.color.halfFold),
  ];

  const pricesColorTrifoldA4 = [
    ...Object.values(prices.customPrint.folders.offsetPrint.A4.color.triFold),
  ];

  // Get the header titles
  const headerTitlesA4: string[] = [
    t('commonWords.folders'),
    t('PaperWeights.135grShort'),
    t('PaperWeights.170grShort'),
    t('PaperWeights.250grShort'),
  ];

  // Get the units
  const unitsFolders: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col pt-12 p-2 sm:p-8 pb-2 w-full rounded-t-xl">
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: offsetPrintTitle,
          subTitle: foldersContentPaths.A4AndA3Format,
          introduction: foldersContentPaths.introductionFoldersTable,
          notification: foldersContentPaths.offsetPrintDeliveryTime,
        }}
      />
      <div className="flex flex-col md:flex-row gap-16 pt-8">
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col items-baseline">
            <TextBlock
              value={foldersContentPaths.A4Trifold}
              variant="sectionTitle"
            />
            <TextBlock value={foldersContentPaths.color} variant="body" />
          </div>
          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesA4}
            units={unitsFolders}
            options={bulkPriceOptions}
            prices={pricesColorTrifoldA4}
          />
        </div>
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col">
            <TextBlock
              value={foldersContentPaths.A4Bifold}
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
