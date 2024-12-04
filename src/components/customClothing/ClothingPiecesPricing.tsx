import PricingTable from '../elementTemplates/PricingTable';
import { textileCategories } from '../../lib/priceCategories';
import { useData } from '../../context/DataContext';
import { useTranslation } from 'react-i18next';

export default function ClothingPiecesPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  const pricePathsTextile = [...Object.values(prices.customClothing.textile)];

  const translateTextOptions = (options: string[]): string[] => {
    return options.map((option) => t(option));
  };

  const headerTitlesTextile: string[] = [
    t('commonWords.prints'),
    t('commonWords.blackWhite'),
    t('commonWords.color'),
  ];

  const unitsTextile: string[] = [
    t('commonWords.clothingPiece'),
    t('commonWords.perPrint'),
    t('commonWords.perPrint'),
  ];

  return (
    <div className="flex justify-center items-center w-full mt-14 py-12 gap-12 bg-gray-100">
      <div className="flex gap-24">
        <div>
          <PricingTable
            headerTitles={headerTitlesTextile}
            units={unitsTextile}
            options={translateTextOptions(textileCategories)}
            prices={pricePathsTextile}
          />
        </div>
        <div>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}
