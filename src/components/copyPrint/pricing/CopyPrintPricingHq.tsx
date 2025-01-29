import PricingTable from '../../elementTemplates/PricingTable';
import { splitPriceOptionsExtendedLow } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { copyPrintContentPaths } from '../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../elementTemplates/TitleWithIntroduction';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';

export default function CopyPrintPricingHq() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesHq = [...Object.values(prices.copyPrint.A4.hq)];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitlesHq: string[] = [
    t('commonWords.prints'),
    t(copyPrintContentPaths.blackWhite),
    t(copyPrintContentPaths.color),
  ];

  const unitsHq: string[] = [
    t('commonWords.amount'),
    t('commonWords.pricePerPrint'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section className="flex flex-col p-8 w-full rounded-xl">
      <TitleWithIntroduction
        props={{
          mainTitle: copyPrintContentPaths.highQuality,
          subTitle: copyPrintContentPaths.colorOrBlackWhiteStandard,
          introduction: copyPrintContentPaths.introductionCopyPrintTable,
        }}
      />
      <div className="flex gap-16 pt-8">
        <div>
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex flex-col">
            <TextBlock
              value={copyPrintContentPaths.colorOrBlackWhite}
              variant="sectionTitle"
            />
            <TextBlock value={copyPrintContentPaths.type90gr} variant="body" />
          </div>
          <PricingTable
            headerTitles={headerTitlesHq}
            units={unitsHq}
            options={splitPriceOptionsExtendedLow}
            prices={pricesHq}
          />
        </div>
      </div>
      <div className="pt-8">
        <Notification>
          <div className="flex items-end">
            <div className="text-[#FB0036] font-semibold">
              <span>*&nbsp;</span>
            </div>
            <TextBlock
              value={copyPrintContentPaths.notificationFirst}
              variant="bodySmall"
            />
          </div>
          <TextBlock
            value={copyPrintContentPaths.notificationSecond}
            variant="bodySmall"
          />
          <TextBlock
            value={copyPrintContentPaths.notificationThird}
            variant="bodySmall"
          />
        </Notification>
      </div>
      <div className="pt-12">
        <Divider flexItem variant="middle" />
      </div>
    </section>
  );
}
