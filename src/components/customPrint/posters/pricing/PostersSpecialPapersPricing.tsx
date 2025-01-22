import PricingTable from '../../../elementTemplates/PricingTable';
import { paperSizes } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { postersContentPaths } from '../../../../lib/translationPaths';

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
    <section className="flex flex-col justify-center items-center w-full py-10 gap-4 bg-white">
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col pb-4 items-baseline">
              <TextBlock value={postersContentPaths.color} variant="title" />
              <TextBlock
                value={postersContentPaths.polypropylene}
                variant="subTitle"
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
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col pb-4 items-baseline">
              <TextBlock value={postersContentPaths.color} variant="title" />
              <TextBlock
                value={postersContentPaths.type260grHandMade}
                variant="subTitle"
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
