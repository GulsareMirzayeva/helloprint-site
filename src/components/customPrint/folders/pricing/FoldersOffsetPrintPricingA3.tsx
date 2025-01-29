import PricingTable from '../../../elementTemplates/PricingTable';
import { bulkPriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { foldersContentPaths } from '../../../../lib/translationPaths';
import { Notification } from '../../../elementTemplates/Notification';

export default function FoldersOffsetPrintPricingA3() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesColorTrifoldA3 = [
    ...Object.values(prices.customPrint.folders.offsetPrint.A3.color.triFold),
  ];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitlesA4: string[] = [
    t('commonWords.folders'),
    t('paperTypes.135grShort'),
    t('paperTypes.170grShort'),
    t('paperTypes.250grShort'),
  ];

  const unitsFolders: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col p-8 w-full">
      <div>
        {/* Display a title and the papertype at the top of the table */}
        <div className="flex flex-col">
          <TextBlock
            value={foldersContentPaths.trifoldA3}
            variant="sectionTitle"
          />
          <TextBlock value={foldersContentPaths.color} variant="body" />
        </div>
        <PricingTable
          headerTitles={headerTitlesA4}
          units={unitsFolders}
          options={bulkPriceOptions}
          prices={pricesColorTrifoldA3}
        />
      </div>
      <div className="pt-8">
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
