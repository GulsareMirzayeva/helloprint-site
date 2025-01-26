import PricingTable from '../../../elementTemplates/PricingTable';
import { shortBulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { cardsContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

export default function CardsOffsetPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesPressPrint = [
    ...Object.values(prices.customPrint.cards.offsetPrint.color),
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
    <section className="flex flex-col items-start w-full gap-4 bg-gray-100">
      <div className="flex flex-col items-start">
        <TitleWithIntroduction
          props={{
            mainTitle: cardsContentPaths.offsetPrint,
            subTitle: cardsContentPaths.type400gr,
            introduction: cardsContentPaths.introductionCardsTable,
          }}
        />
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <TextBlock value={cardsContentPaths.color} variant="subTitle" />
              <TextBlock value={cardsContentPaths.type400grMc} variant="body" />
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
    </section>
  );
}
