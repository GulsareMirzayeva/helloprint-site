import PricingTable from '../../../elementTemplates/PricingTable';
import { shortBasePriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { cardsContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

export default function CardsDigitalPrintPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
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
    <section className="flex flex-col items-center w-full py-12 gap-4">
      <div className="flex flex-col items-start">
        <TitleWithIntroduction
          props={{
            mainTitle: cardsContentPaths.digitalPrint,
            subTitle: cardsContentPaths.type350gr,
            introduction: cardsContentPaths.introductionCardsTable,
          }}
        />
        <div className="flex gap-20 pt-10">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <TextBlock
                value={cardsContentPaths.blackWhite}
                variant="subTitle"
              />
              <TextBlock value={cardsContentPaths.type350gr} variant="body" />
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
            <div className="flex flex-col">
              <TextBlock value={cardsContentPaths.color} variant="subTitle" />
              <TextBlock value={cardsContentPaths.type350gr} variant="body" />
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
    </section>
  );
}
