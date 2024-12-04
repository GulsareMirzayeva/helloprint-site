import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';
import {
  textileCategories,
  flexCategories,
  dtgCategories,
} from '../../lib/priceCategories';
import IntroductionCustomClothing from '../customClothing/Introduction';
import PricingTable from '../elementTemplates/PricingTable';
import Footer from '../Footer';

export default function CustomClothing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  const translateRanges = (ranges: string[]): string[] => {
    return ranges.map((range) => t(range));
  };

  // The strings are paths to the requested text in the translation files (in 'i18next' folder at the root)
  const headerTitlesTextile: string[] = [
    t('commonWords.prints'),
    t('commonWords.blackWhite'),
    t('commonWords.color'),
  ];

  const headerTitlesFlex: string[] = [
    t('customClothingPage.pricingFlexVinyl.tableHead'),
    '',
  ];

  const headerTitlesDtg: string[] = [
    t('customClothingPage.pricingDtg.tableHead'),
    t('customClothingPage.pricingDtg.tableHeadWhiteTextile'),
    t('customClothingPage.pricingDtg.tableHeadcolored'),
  ];

  const unitsTextile: string[] = [
    t('commonWords.clothingPiece'),
    t('commonWords.perPrint'),
    t('commonWords.perPrint'),
  ];

  const unitsFlex: string[] = [
    t('commonWords.prints'),
    t('commonWords.perPrint'),
  ];

  const unitsDtg: string[] = [
    t('commonWords.prints'),
    t('commonWords.perPrint'),
    t('commonWords.perPrint'),
  ];

  // Get all prices for the "custom clothing" page that will be used
  const pricePathsTextile = [...Object.values(prices.customClothing.textile)];
  const pricePathsFlex = [...Object.values(prices.customClothing.flex)];
  const pricePathsDtg = [...Object.values(prices.customClothing.dtg)];

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCustomClothing />
      <div className="flex justify-center gap-24 py-10 mt-10 w-full bg-gray-100">
        <PricingTable
          headerTitles={headerTitlesTextile}
          units={unitsTextile}
          ranges={translateRanges(textileCategories)}
          prices={pricePathsTextile}
        />
        <PricingTable
          headerTitles={headerTitlesFlex}
          units={unitsFlex}
          ranges={translateRanges(flexCategories)}
          prices={pricePathsFlex}
        />
        <PricingTable
          headerTitles={headerTitlesDtg}
          units={unitsDtg}
          ranges={translateRanges(dtgCategories)}
          prices={pricePathsDtg}
        />
      </div>
      <Footer />
    </section>
  );
}
