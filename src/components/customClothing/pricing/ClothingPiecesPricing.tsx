import { useTranslation } from 'react-i18next';
import { useData } from '../../../context/DataContext';
import { useMemo } from 'react';
import { BeatLoader } from 'react-spinners';
import { ContentCardTitleAndIntroduction } from '../../elementTemplates/ContentCardTitleAndIntroduction';
import PricingTable from '../../elementTemplates/PricingTable';
import { textileCategories } from '../../../lib/priceCategories';
import image1 from '../../../assets/custom-clothing/clothing-images.png';
import { customClotingContentPaths } from '../../../lib/translationPaths';

/*
    Custom clothing - Clothing pieces section

    Show information and pricing tables for Clothing pieces category
*/

export default function ClothingPiecesPricing({
  bgColor,
}: {
  bgColor: string;
}) {
  const { prices, isLoading, error } = useData();
  const { t } = useTranslation();

  // Translated options are available as soon as the prices are loaded
  const translatedOptions = useMemo(() => {
    if (!prices) return [];
    return textileCategories.map((option) => t(option));
  }, [prices, t]);

  if (isLoading) {
    return <BeatLoader color="#FB0036" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!prices) {
    return (
      <div className="flex w-full justify-center py-8">
        <BeatLoader color="#FB0036" />
      </div>
    );
  }

  // Get the prices
  const pricePathsTextile = [...Object.values(prices.customClothing.textile)];

  // Header titles
  const headerTitlesTextile = [
    t('commonWords.textile'),
    t('commonWords.blackAndWhite'),
    t('commonWords.color'),
  ];

  // Units
  const unitsTextile = [
    t('commonWords.clothingPiece'),
    t('commonWords.pricePerPrint'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section
      className={`
        flex flex-col items-center gap-4 lg:items-start w-full p-2 sm:p-8 rounded-xl
        ${bgColor}
      `}
    >
      {/* Titel, subtitle and introduction */}
      <ContentCardTitleAndIntroduction
        props={{
          mainTitle: customClotingContentPaths.cardTextileGarments.header.title,
          subTitle:
            customClotingContentPaths.cardTextileGarments.header.subTitle,
          introduction:
            customClotingContentPaths.cardTextileGarments.header.introduction,
        }}
      />
      <div className="flex flex-col md:flex-row justify-between gap-20 pt-8">
        <div>
          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesTextile}
            units={unitsTextile}
            options={translatedOptions}
            prices={pricePathsTextile}
          />
        </div>
        <div>
          <img src={image1} alt="Category image" className="sm:min-w-[380px]" />
        </div>
      </div>
    </section>
  );
}
