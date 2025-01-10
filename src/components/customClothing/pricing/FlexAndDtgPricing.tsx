import PricingTable from '../../elementTemplates/PricingTable';
import { dtgCategories, flexCategories } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../utils/helperFunctions';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function FlexAndDtgPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Get all the paths that point to the correct content in the translation files
  const pricePathsFlex = [...Object.values(prices.customClothing.flex)];
  const pricePathsDtg = [...Object.values(prices.customClothing.dtg)];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitlesFlex: string[] = [
    t('customClothingPage.pricingFlexVinyl.tableHead'),
    '',
  ];

  // Table headers for the 'DTG' category
  const headerTitlesDtg: string[] = [
    t('customClothingPage.pricingDtg.tableHead'),
    t('customClothingPage.pricingDtg.tableHeadWhiteTextile'),
    t('customClothingPage.pricingDtg.tableHeadcolored'),
  ];

  // Units used in the table for "Flex / Vinyl" category
  const unitsFlex: string[] = [
    t('commonWords.prints'),
    t('commonWords.perPrint'),
  ];

  // Units used in the table for "DTG" category
  const unitsDtg: string[] = [
    t('commonWords.prints'),
    t('commonWords.perPrint'),
    t('commonWords.perPrint'),
  ];

  return (
    <div className="flex justify-center items-center max-w-screen-xl py-20 gap-24 bg-white">
      <div>
        <div className="pb-4">
          <TextBlock
            value="customClothingPage.pricingFlexVinyl.tableTitle"
            variant="subTitle"
          />
          <TextBlock value="placeHolderText" variant="body" />
        </div>
        <div>
          {/* Table to display "Flex / Vinyl" prices */}
          <PricingTable
            headerTitles={headerTitlesFlex}
            units={unitsFlex}
            options={translateTextOptions(flexCategories)}
            prices={pricePathsFlex}
          />
        </div>
      </div>
      <div>
        <div className="pb-4">
          <TextBlock
            value="customClothingPage.pricingDtg.tableTitle"
            variant="subTitle"
          />
          <TextBlock value="placeHolderText" variant="body" />
        </div>
        <div>
          {/* Table to display "DTG" prices */}
          <PricingTable
            headerTitles={headerTitlesDtg}
            units={unitsDtg}
            options={translateTextOptions(dtgCategories)}
            prices={pricePathsDtg}
          />
        </div>
      </div>
    </div>
  );
}
