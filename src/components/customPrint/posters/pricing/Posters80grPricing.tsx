import PricingTable from '../../../elementTemplates/PricingTable';
import {
  paperSizes,
  paperSizesExtended,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { postersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

export default function Posters80grPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "posters" page that will be used
  const prices80grColor = [
    ...Object.values(prices.customPrint.posters.color['80gr']),
  ];

  const prices80grBlackWhite = [
    ...Object.values(prices.customPrint.posters.blackWhite),
  ];
  // Table headers
  const headerTitlesColor: string[] = [
    t('commonWords.posters'),
    t('customPrintPage.posters.postersAmount.1-5'),
    t('customPrintPage.posters.postersAmount.6-10'),
    t('customPrintPage.posters.postersAmount.10Plus'),
  ];

  const headerTitlesBlackWhite: string[] = [
    t('commonWords.posters'),
    t('commonWords.perPiece'),
  ];

  const unitsColor: string[] = [
    t('commonWords.format'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
  ];

  const unitsBlackWhite: string[] = [
    t('commonWords.format'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col p-8 w-full rounded-xl bg-gray-100">
      <TitleWithIntroduction
        props={{
          mainTitle: postersContentPaths.colorOrBlackWhite,
          subTitle: postersContentPaths.type80gr,
          introduction: postersContentPaths.introduction80GrTable,
        }}
      />
      <div className="flex gap-16">
        <div className="pt-8">
          {/* Display a title and the papertype */}
          <div className="flex flex-col items-baseline">
            <TextBlock
              value={postersContentPaths.color}
              variant="sectionTitle"
            />
            <TextBlock value={postersContentPaths.type80gr} variant="body" />
          </div>
          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesColor}
            units={unitsColor}
            options={paperSizes}
            prices={prices80grColor}
          />
        </div>
        <div className="pt-8">
          {/* Title, subtitle and introduction text */}
          <div className="flex flex-col">
            <TextBlock
              value={postersContentPaths.blackWhite}
              variant="sectionTitle"
            />
            <TextBlock value={postersContentPaths.type80gr} variant="body" />
          </div>
          <PricingTable
            headerTitles={headerTitlesBlackWhite}
            units={unitsBlackWhite}
            options={paperSizesExtended}
            prices={prices80grBlackWhite}
          />
        </div>
      </div>
    </section>
  );
}
