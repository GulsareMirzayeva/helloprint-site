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

export default function Posters160grPricing() {
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
    t('postersAmount.1-5'),
    t('postersAmount.6-10'),
    t('postersAmount.10Plus'),
  ];

  const units: string[] = [
    t('commonWords.format'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
  ];

  return (
    <section className="flex flex-col items-center w-full pt-10 bg-gray-100">
      <div className="flex flex-col items-start">
        <TitleWithIntroduction
          props={{
            mainTitle: postersContentPaths.color,
            subTitle: postersContentPaths.range160grTo260gr,
            introduction: postersContentPaths.introduction160To260GrTable,
          }}
        />
        <div className="flex gap-20 pt-10">
          <div>
            {/* Display a title and the papertype */}
            <div className="flex flex-col">
              <TextBlock value={postersContentPaths.color} variant="subTitle" />
              <TextBlock
                value={postersContentPaths.type160grMat}
                variant="body"
              />
            </div>
            {/* Display a pricing */}
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices160grMat}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <TextBlock value={postersContentPaths.color} variant="subTitle" />
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
      </div>
    </section>
  );
}
