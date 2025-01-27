import PricingTable from '../../elementTemplates/PricingTable';
import { dtgCategories, flexCategories } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../utils/helperFunctions';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { customClotingContentPaths } from '../../../lib/translationPaths';

export default function FlexAndDtgPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
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
    t('commonWords.pricePerPrint'),
  ];

  // Units used in the table for "DTG" category
  const unitsDtg: string[] = [
    t('commonWords.prints'),
    t('commonWords.pricePerPrint'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section className="flex flex-col p-8 w-full bg-gray-100">
      <div className="flex gap-16">
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col">
            <TextBlock
              value={customClotingContentPaths.FlexVinylTableTitle}
              variant="sectionTitle"
            />
            <TextBlock
              value={customClotingContentPaths.FlexVinylTableIntroduction}
              variant="body"
            />
          </div>
          {/* Display a pricing */}
          <PricingTable
            headerTitles={headerTitlesFlex}
            units={unitsFlex}
            options={translateTextOptions(flexCategories)}
            prices={pricePathsFlex}
          />
        </div>
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex flex-col">
            <TextBlock
              value={customClotingContentPaths.DtgTableTitle}
              variant="sectionTitle"
            />
            <TextBlock
              value={customClotingContentPaths.DtgTableIntroduction}
              variant="body"
            />
          </div>
          <PricingTable
            headerTitles={headerTitlesDtg}
            units={unitsDtg}
            options={translateTextOptions(dtgCategories)}
            prices={pricePathsDtg}
          />
        </div>
      </div>
      <div className="flex flex-col items-start"></div>
    </section>
  );
}
