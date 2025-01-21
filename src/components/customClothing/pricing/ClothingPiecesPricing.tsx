import PricingTable from '../../elementTemplates/PricingTable';
import { textileCategories } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../utils/helperFunctions';
import clothing from '../../../assets/custom-clothing/clothing-images.png';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';

export default function ClothingPiecesPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
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
    t('commonWords.pricePerPrint'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section className="flex justify-center w-full py-20 bg-gray-100">
      <div className="flex">
        <div>
          <div className="pb-4 pr-10">
            <TextBlock
              value="customClothingPage.pricingTextile.tableTitle"
              variant="subTitle"
            />
            <TextBlock
              value="customClothingPage.pricingTextile.tableIntroduction"
              variant="body"
            />
          </div>
          {/* Table to display "Textile" prices */}
          <PricingTable
            headerTitles={headerTitlesTextile}
            units={unitsTextile}
            options={translateTextOptions(textileCategories)}
            prices={pricePathsTextile}
          />
        </div>
        <div className="flex self-end">
          {/* Display images of clothing pieces, next to the pricing table of the "Textile" category */}
          <img src={clothing} alt="" />
        </div>
      </div>
    </section>
  );
}
