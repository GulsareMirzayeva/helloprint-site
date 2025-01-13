import PricingTable from '../../../elementTemplates/PricingTable';
import {
  paperSizes,
  paperSizesExtended,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function Posters80grPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
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
    t('postersAmount.1-5'),
    t('postersAmount.6-10'),
    t('postersAmount.10Plus'),
  ];

  const headerTitlesBlackWhite: string[] = [
    t('commonWords.format'),
    t('commonWords.perPiece'),
  ];

  const unitsColor: string[] = [
    t('commonWords.format'),
    t('commonWords.perPiece'),
    t('commonWords.perPiece'),
    t('commonWords.perPiece'),
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
              <TextBlock value="paperTypes.80gr" variant="subTitle" />
            </div>
            <PricingTable
              headerTitles={headerTitlesColor}
              units={unitsColor}
              options={paperSizes}
              prices={prices80grColor}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value="commonWords.blackWhite" variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock value="paperTypes.80gr" variant="subTitle" />
            </div>
            <PricingTable
              headerTitles={headerTitlesBlackWhite}
              units={[]}
              options={paperSizesExtended}
              prices={prices80grBlackWhite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
