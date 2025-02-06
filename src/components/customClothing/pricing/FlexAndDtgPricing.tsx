import PricingTable from '../../elementTemplates/PricingTable';
import { dtgCategories, flexCategories } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { customClotingContentPaths } from '../../../lib/translationPaths';
import { useMemo } from 'react';
import { TitleWithIntroduction } from '../../elementTemplates/TitleWithIntroduction';

/*
    Custom clothing - Flex and DTG section

    Show information and pricing tables for Flex and DTG category
*/

export default function FlexAndDtgPricing({ bgColor }: { bgColor: string }) {
  const { prices, isLoading, error } = useData();
  const { t } = useTranslation();

  // Translated options are available as soon as the prices are loaded
  const translatedOptionsFlex = useMemo(() => {
    if (!prices) return [];
    return flexCategories.map((option) => t(option));
  }, [prices, t]);

  const translatedOptionsDtg = useMemo(() => {
    if (!prices) return [];
    return dtgCategories.map((option) => t(option));
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

  // Get all prices
  const pricePathsFlex = [...Object.values(prices.customClothing.flex)];
  const pricePathsDtg = [...Object.values(prices.customClothing.dtg)];

  // Get the header titles
  const headerTitlesFlex: string[] = [
    t('customClothingPage.pricingFlexVinyl.tableHead'),
    t('commonWords.pricePerPrint'),
  ];

  const headerTitlesDtg: string[] = [
    t('customClothingPage.pricingDtg.tableHead'),
    t('customClothingPage.pricingDtg.tableHeadWhiteTextile'),
    t('customClothingPage.pricingDtg.tableHeadcolored'),
  ];

  // Get the units
  const unitsFlex: string[] = [];

  const unitsDtg: string[] = [
    t('commonWords.prints'),
    t('commonWords.pricePerPrint'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section
      className={`
        flex flex-col p-2 sm:p-8 w-full rounded-xl
        ${bgColor}
      `}
    >
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: customClotingContentPaths.FlexAndDtgTableTitle,
          subTitle: customClotingContentPaths.FlexAndDtgTableSubTitle,
          introduction: customClotingContentPaths.FlexAndDtgTableIntroduction,
        }}
      />
      <div className="flex flex-col sm:flex-row gap-8 md:gap-16 pt-8">
        <div>
          {/* Display table name and the papertype */}
          <div className="flex">
            <TextBlock
              value={customClotingContentPaths.FlexVinylTableTitle}
              variant="sectionTitle"
            />
          </div>

          {/* Display pricing table*/}
          <PricingTable
            headerTitles={headerTitlesFlex}
            units={unitsFlex}
            options={translatedOptionsFlex}
            prices={pricePathsFlex}
          />
        </div>
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <div className="flex">
              <TextBlock
                value={customClotingContentPaths.DtgTableTitle}
                variant="sectionTitle"
              />
            </div>
          </div>

          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesDtg}
            units={unitsDtg}
            options={translatedOptionsDtg}
            prices={pricePathsDtg}
          />
        </div>
      </div>
    </section>
  );
}
