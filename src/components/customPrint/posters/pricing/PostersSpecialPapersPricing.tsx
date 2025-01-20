import PricingTable from '../../../elementTemplates/PricingTable';
import { paperSizes } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function PostersSpecialPapersPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
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
    <section className="flex flex-col justify-center items-center w-full py-20 gap-4 bg-white">
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="commonWords.color" variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="commonWords.polypropylene" variant="subTitle" />
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
            <div className="flex items-baseline">
              <TextBlock value="commonWords.color" variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="paperTypes.260grHandMade" variant="subTitle" />
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
