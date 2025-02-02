import PricingTable from '../../../elementTemplates/PricingTable';
import { shortBasePriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { cardsContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

/*
    Cards - Digital print section

    Show information and pricing tables for Digital print category
*/

export default function CardsDigitalPrintPricing({
  bgColor,
}: {
  bgColor: string;
}) {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesColor = [...Object.values(prices.customPrint.cards.print.color)];
  const pricesBlackWhite = [
    ...Object.values(prices.customPrint.cards.print.blackWhite),
  ];

  // Get the header titles
  const headerTitles: string[] = [
    t('commonWords.cards'),
    t('commonWords.singleSided'),
    t('commonWords.doubleSided'),
  ];

  // Get the units
  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section
      className={`flex flex-col p-2 sm:p-8 w-full rounded-xl ${bgColor}`}
    >
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: cardsContentPaths.digitalPrint,
          subTitle: cardsContentPaths.type350gr,
          introduction: cardsContentPaths.introductionDigitalPrintTable,
        }}
      />
      <div className="flex flex-col md:flex-row gap-16 pt-8">
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <TextBlock
              value={cardsContentPaths.blackWhite}
              variant="sectionTitle"
            />
            <TextBlock value={cardsContentPaths.type350gr} variant="body" />
          </div>

          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={shortBasePriceOptions}
            prices={pricesBlackWhite}
          />
        </div>
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <TextBlock value={cardsContentPaths.color} variant="sectionTitle" />
            <TextBlock value={cardsContentPaths.type350gr} variant="body" />
          </div>

          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={shortBasePriceOptions}
            prices={pricesColor}
          />
        </div>
      </div>
    </section>
  );
}
