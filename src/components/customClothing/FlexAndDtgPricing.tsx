import PricingTable from '../elementTemplates/PricingTable';
import { dtgCategories, flexCategories } from '../../lib/priceCategories';
import { useData } from '../../context/DataContext';
import { useTranslation } from 'react-i18next';

export default function FlexAndDtgPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  const pricePathsFlex = [...Object.values(prices.customClothing.flex)];
  const pricePathsDtg = [...Object.values(prices.customClothing.dtg)];

  const translateTextOptions = (options: string[]): string[] => {
    return options.map((option) => t(option));
  };

  const headerTitlesFlex: string[] = [
    t('customClothingPage.pricingFlexVinyl.tableHead'),
    '',
  ];

  const headerTitlesDtg: string[] = [
    t('customClothingPage.pricingDtg.tableHead'),
    t('customClothingPage.pricingDtg.tableHeadWhiteTextile'),
    t('customClothingPage.pricingDtg.tableHeadcolored'),
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

  return (
    <div className="flex justify-center items-center w-full py-12 gap-24 bg-white">
      <PricingTable
        headerTitles={headerTitlesFlex}
        units={unitsFlex}
        options={translateTextOptions(flexCategories)}
        prices={pricePathsFlex}
      />
      <PricingTable
        headerTitles={headerTitlesDtg}
        units={unitsDtg}
        options={translateTextOptions(dtgCategories)}
        prices={pricePathsDtg}
      />
    </div>
  );
}
