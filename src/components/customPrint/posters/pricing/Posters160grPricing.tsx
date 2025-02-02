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

export default function Posters160grPricing({ bgColor }: { bgColor: string }) {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "posters" page that will be used
  const prices160grMat = [
    ...Object.values(prices.customPrint.posters.color['160grMat']),
  ];

  const prices160grSatin = [
    ...Object.values(prices.customPrint.posters.color['160grSatin']),
  ];

  // Table headers
  const headerTitles: string[] = [
    t('commonWords.posters'),
    t('customPrintPage.posters.postersAmount.1-5'),
    t('customPrintPage.posters.postersAmount.6-10'),
    t('customPrintPage.posters.postersAmount.10Plus'),
  ];

  const units: string[] = [
    t('commonWords.format'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
  ];

  return (
    <section
      className={`flex flex-col pt-12 pb-2 p-2 sm:p-8 w-full rounded-xl ${bgColor}`}
    >
      <TitleWithIntroduction
        props={{
          mainTitle: postersContentPaths.colorCapital,
          subTitle: postersContentPaths.range160grTo260gr,
          introduction: postersContentPaths.introduction160To260GrTable,
        }}
      />
      <div className="flex flex-col md:flex-row sm:gap-4 md:gap-16 lg:gap-16">
        <div className="pt-8">
          {/* Display a title and the papertype */}
          <div className="flex flex-col">
            <TextBlock
              value={postersContentPaths.color}
              variant="sectionTitle"
            />
            <TextBlock
              value={postersContentPaths.type160grMat}
              variant="body"
            />
          </div>
          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={paperSizes}
            prices={prices160grMat}
          />
        </div>
        <div className="pt-8">
          {/* Title, subtitle and introduction text */}
          <div className="flex flex-col">
            <TextBlock
              value={postersContentPaths.color}
              variant="sectionTitle"
            />
            <TextBlock
              value={postersContentPaths.type160grSatin}
              variant="body"
            />
          </div>
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={paperSizesExtended}
            prices={prices160grSatin}
          />
        </div>
      </div>
    </section>
  );
}
