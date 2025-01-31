import PricingTable from '../../elementTemplates/PricingTable';
import { dtgCategories, flexCategories } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../utils/helperFunctions';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { customClotingContentPaths } from '../../../lib/translationPaths';
import { Notification } from '../../elementTemplates/Notification';

/*
    Custom clothing - Flex and DTG section

    Show information and pricing tables for Flex and DTG category
*/

export default function FlexAndDtgPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
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
    <section className="flex flex-col p-2 sm:p-8 w-full rounded-b-xl bg-gray-100">
      <div className="flex flex-col sm:flex-row gap-16">
        <div>
          {/* Display table name and the papertype */}
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
          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesFlex}
            units={unitsFlex}
            options={translateTextOptions(flexCategories)}
            prices={pricePathsFlex}
          />
        </div>
        <div>
          {/* Display table name and the papertype */}
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
          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesDtg}
            units={unitsDtg}
            options={translateTextOptions(dtgCategories)}
            prices={pricePathsDtg}
          />
        </div>
      </div>

      {/* Display notification message */}
      <div className="pt-8 z-0 p-4">
        <Notification>
          <TextBlock
            value={customClotingContentPaths.notificationFirst}
            variant="bodySmall"
          />
          <TextBlock
            value={customClotingContentPaths.notificationSecond}
            variant="bodySmall"
          />
        </Notification>
      </div>
    </section>
  );
}
