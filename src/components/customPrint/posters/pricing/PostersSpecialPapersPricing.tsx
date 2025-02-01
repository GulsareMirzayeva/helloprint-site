import PricingTable from '../../../elementTemplates/PricingTable';
import { paperSizes } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { postersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

export default function PostersSpecialPapersPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "posters" page that will be used
  const pricesPolypropylene = [
    ...Object.values(prices.customPrint.posters.color.polypropylene),
  ];

  const prices260grHandMade = [
    ...Object.values(prices.customPrint.posters.color['260grHandMade']),
  ];

  // Table headers
  const headerTitles: string[] = [
    t('commonWords.posters'),
    t('commonWords.perPiece'),
  ];

  const units: string[] = [t('commonWords.format'), t('commonWords.price')];

  return (
    <section className="flex flex-col p-2 sm:p-8 w-full rounded-t-xl bg-gray-100">
      <div className="flex flex-col">
        <TitleWithIntroduction
          props={{
            mainTitle: postersContentPaths.color,
            subTitle: postersContentPaths.SpecialMaterials,
            introduction: postersContentPaths.introductionPolyAndHandMadeTable,
          }}
        />
        <div className="flex flex-col md:flex-row gap-16 pt-8">
          <div>
            {/* Title, subtitle and introduction text */}
            <div className="flex flex-col">
              <TextBlock
                value={postersContentPaths.color}
                variant="sectionTitle"
              />
              <TextBlock
                value={postersContentPaths.polypropylene}
                variant="body"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={pricesPolypropylene}
            />
          </div>
          <div>
            {/* Title, subtitle and introduction text */}
            <div className="flex flex-col">
              <TextBlock
                value={postersContentPaths.color}
                variant="sectionTitle"
              />
              <TextBlock
                value={postersContentPaths.type260grHandMade}
                variant="body"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices260grHandMade}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
