import PricingTable from '../../../elementTemplates/PricingTable';
import { shortBulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { cardsContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

/*
    Cards - Offset print section

    Show information and pricing tables for Offset print category
*/

export default function CardsOffsetPricing({ bgColor }: { bgColor: string }) {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesPressPrint = [
    ...Object.values(prices.customPrint.cards.offsetPrint.color),
  ];

  // Get the header titles
  const headerTitles: string[] = [
    t('commonWords.cards'),
    t('customPrintPage.cards.offsetPrintSingleSided'),
    t('customPrintPage.cards.offsetPrintDoubleSided'),
  ];

  // Get the units
  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
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
          mainTitle: cardsContentPaths.offsetPrint,
          subTitle: cardsContentPaths.type400gr,
          introduction: cardsContentPaths.introductionOffsetTable,
          notification: cardsContentPaths.offsetPrintDeliveryTime,
        }}
      />
      <div className="flex flex-col md:flex-row gap-16 pt-8">
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <TextBlock value={cardsContentPaths.color} variant="sectionTitle" />
            <TextBlock value={cardsContentPaths.type400grMc} variant="body" />
          </div>

          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={shortBulkPriceOptions}
            prices={pricesPressPrint}
          />
        </div>
      </div>
    </section>
  );
}
