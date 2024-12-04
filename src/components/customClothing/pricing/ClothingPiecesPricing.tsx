import PricingTable from '../../elementTemplates/PricingTable';
import { textileCategories } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../utils/helperFunctions';
import { ImageSlider } from '../ImageSlider';

export default function ClothingPiecesPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get the paths that point to the correct prices in the prices data file
  const pricePathsTextile = [...Object.values(prices.customClothing.textile)];

  // Table headers for the 'Textile' category
  const headerTitlesTextile: string[] = [
    t('commonWords.textile'),
    t('commonWords.blackWhite'),
    t('commonWords.color'),
  ];

  // Units used in the pricing table for "Textile" category
  const unitsTextile: string[] = [
    t('commonWords.clothingPiece'),
    t('commonWords.perPrint'),
    t('commonWords.perPrint'),
  ];

  return (
    <div className="flex justify-center items-center w-full mt-14 py-12 gap-12 bg-gray-100">
      <div className="flex gap-24">
        <div>
          {/* Table to display "Textile" prices */}
          <PricingTable
            headerTitles={headerTitlesTextile}
            units={unitsTextile}
            options={translateTextOptions(textileCategories)}
            prices={pricePathsTextile}
          />
        </div>
        <div>
          {/* Display images in a slider, next to the pricing table of the "Textile" category */}
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
