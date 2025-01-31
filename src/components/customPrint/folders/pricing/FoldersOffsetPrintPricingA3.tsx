import PricingTable from '../../../elementTemplates/PricingTable';
import { bulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { foldersContentPaths } from '../../../../lib/translationPaths';
import { Notification } from '../../../elementTemplates/Notification';

/*
    Folders - Offset print A3 section

    Show information and pricing tables for Offset print A3 category
*/

export default function FoldersOffsetPrintPricingA3() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesColorTrifoldA3 = [
    ...Object.values(prices.customPrint.folders.offsetPrint.A3.color.triFold),
  ];

  // Get the header titles
  const headerTitlesA4: string[] = [
    t('commonWords.folders'),
    t('PaperWeights.135grShort'),
    t('PaperWeights.170grShort'),
    t('PaperWeights.250grShort'),
  ];

  // Get the units
  const unitsFolders: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col p-2 sm:p-8 w-full rounded-b-xl">
      <div>
        {/* Display table name and the papertype */}
        <div className="flex flex-col">
          <TextBlock
            value={foldersContentPaths.A3Trifold}
            variant="sectionTitle"
          />
          <TextBlock value={foldersContentPaths.color} variant="body" />
        </div>
        {/* Display pricing table */}
        <PricingTable
          headerTitles={headerTitlesA4}
          units={unitsFolders}
          options={bulkPriceOptions}
          prices={pricesColorTrifoldA3}
        />
      </div>

      {/* Display notification message table */}
      <div className="pt-8 z-0 p-4">
        <Notification>
          <div className="flex items-end">
            <div className="text-[#FB0036] font-semibold">
              <span>*&nbsp;</span>
            </div>
            <TextBlock
              value={foldersContentPaths.deliveryDisclaimer}
              variant="bodySmall"
            />
          </div>
        </Notification>
      </div>
    </section>
  );
}
