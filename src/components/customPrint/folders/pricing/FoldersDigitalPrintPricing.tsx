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

/*
    Folders - Digital print section

    Show information and pricing tables for Digital print category
*/

export default function FoldersDigitalPrintPricing({
  bgColor,
}: {
  bgColor: string;
}) {
  const { prices } = useData();
  const { t } = useTranslation();

  const digitalPrintTitle = t('customPrintPage.common.digitalPrint');

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesBlackWhiteA4 = [
    ...Object.values(prices.customPrint.folders.print.A4.blackWhite),
  ];

  const pricesColorA4 = [
    ...Object.values(prices.customPrint.folders.print.A4.color),
  ];

  // Get the header titles
  const headerTitlesColor: string[] = [
    t('commonWords.folders'),
    t('PaperWeights.150grShort'),
    t('PaperWeights.170grShort'),
    t('PaperWeights.250grShort'),
  ];

  const headerTitlesBlackWhite: string[] = [
    t('commonWords.folders'),
    t('PaperWeights.80grShort'),
  ];

  // Get the units
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
    <section
      className={`
        flex flex-col p-2 sm:p-8 w-full rounded-xl
        ${bgColor}  
      `}
    >
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: digitalPrintTitle,
          subTitle: foldersContentPaths.A4FormatComplete,
          introduction: foldersContentPaths.introductionDigitalPrintTable,
          notification: foldersContentPaths.digitalPrintDeliveryTime,
        }}
      />
      <div className="flex flex-col md:flex-row gap-16 pt-8">
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <TextBlock
              value={foldersContentPaths.A4BifoldOrTrifold}
              variant="sectionTitle"
            />
            <TextBlock value={foldersContentPaths.color} variant="body" />
          </div>
          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesColor}
            units={unitsColor}
            options={lowPriceOptions}
            prices={pricesColorA4}
          />
        </div>
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col items-baseline">
            <TextBlock
              value={foldersContentPaths.A4BifoldOrTrifold}
              variant="sectionTitle"
            />
            <div className="flex">
              <TextBlock
                value={foldersContentPaths.blackWhite}
                variant="body"
              />
              &nbsp;
              <TextBlock
                value={foldersContentPaths.A4WhiteOrColoredPaper}
                variant="body"
              />
            </div>
          </div>
          {/* Display pricing table */}
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
