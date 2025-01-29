import PricingTable from '../../elementTemplates/PricingTable';
import { textileCategories } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../utils/helperFunctions';
import clothing from '../../../assets/custom-clothing/clothing-images.png';
import { BeatLoader } from 'react-spinners';
import { TitleWithIntroduction } from '../../elementTemplates/TitleWithIntroduction';
import { customClotingContentPaths } from '../../../lib/translationPaths';

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
    <section className="flex flex-col p-8 pb-4 w-full rounded-t-xl bg-gray-100">
      <TitleWithIntroduction
        props={{
          mainTitle: customClotingContentPaths.tableTitle,
          subTitle: customClotingContentPaths.subTitle,
          introduction: customClotingContentPaths.tableIntroduction,
        }}
      />
      <div className="flex justify-between gap-20 pt-8">
        <div>
          {/* Display a pricing */}
          <PricingTable
            headerTitles={headerTitlesTextile}
            units={unitsTextile}
            options={translateTextOptions(textileCategories)}
            prices={pricePathsTextile}
          />
        </div>
        <div className="pr-10">
          <img src={clothing} alt="" />
        </div>
      </div>
    </section>
  );
}
