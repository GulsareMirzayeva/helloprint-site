import PricingTable from '../../../elementTemplates/PricingTable';
import { paperSizes } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function Posters190grAnd260grPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all prices for the "posters" page that will be used
  const prices190grGloss = [
    ...Object.values(prices.customPrint.posters.color['190grGloss']),
  ];

  const prices260grSatin = [
    ...Object.values(prices.customPrint.posters.color['260grSatin']),
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
    <div className="flex flex-col justify-center items-center w-full py-20 gap-4 bg-gray-100">
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="commonWords.color" variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="paperTypes.190grGloss" variant="subTitle" />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices190grGloss}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="commonWords.color" variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="paperTypes.260grSatin" variant="subTitle" />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices260grSatin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
