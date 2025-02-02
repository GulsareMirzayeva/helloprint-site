import PricingTable from '../../../elementTemplates/PricingTable';
import {
  splitPriceOptionsShort,
  splitPriceOptionsShortLow,
} from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { postersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';
import { Notification } from '../../../elementTemplates/Notification';

export default function PostersA3BudgetAndHqPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "posters" page that will be used
  const pricesA3Hq = [
    ...Object.values(prices.customPrint.posters.color.fullColorHq),
  ];

  const pricesA3Budget = [
    ...Object.values(prices.customPrint.posters.color.fullColorBudget),
  ];

  // Table headers
  const headerTitles: string[] = [
    t('commonWords.posters'),
    t('commonWords.perPiece'),
  ];

  const units: string[] = [t('commonWords.prints'), t('commonWords.price')];

  return (
    <section className="flex flex-col p-2 sm:p-8 w-full rounded-b-xl bg-gray-100">
      <TitleWithIntroduction
        props={{
          mainTitle: postersContentPaths.colorCapital,
          subTitle: postersContentPaths.typeA3Format,
          introduction: postersContentPaths.introductionA3Table,
        }}
      />
      <div className="flex flex-col md:flex-row gap-4 sm:gap-4">
        <div className="pt-8">
          {/* Title, subtitle and introduction text */}
          <div className="flex flex-col">
            <div className="flex">
              <TextBlock
                value={postersContentPaths.A3Hq}
                variant="sectionTitle"
              />
              &nbsp;
              <TextBlock
                value={postersContentPaths.fullColor}
                variant="sectionTitle"
              />
              <div className="text-[#FB0036] font-semibold">
                <span>*</span>
              </div>
            </div>
            <TextBlock
              value={postersContentPaths.type150grLong}
              variant="body"
            />
          </div>
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={splitPriceOptionsShortLow}
            prices={pricesA3Hq}
          />
        </div>
        <div className="pt-8">
          {/* Title, subtitle and introduction text */}
          <div className="flex flex-col">
            <div className="flex">
              <TextBlock
                value={postersContentPaths.A3Budget}
                variant="sectionTitle"
              />
              &nbsp;
              <TextBlock
                value={postersContentPaths.fullColor}
                variant="sectionTitle"
              />
              <div className="text-[#FB0036] font-semibold">
                <span>*</span>
              </div>
            </div>
            <TextBlock
              value={postersContentPaths.type80grLong}
              variant="body"
            />
          </div>
          <PricingTable
            headerTitles={headerTitles}
            units={units}
            options={splitPriceOptionsShort}
            prices={pricesA3Budget}
          />
        </div>
      </div>
      <div className="pt-8 z-0 p-4">
        <Notification>
          <div className="flex items-end">
            <div className="text-[#FB0036] font-semibold">
              <span>*&nbsp;</span>
            </div>
            <TextBlock
              value={postersContentPaths.notificationFirst}
              variant="bodySmall"
            />
          </div>
        </Notification>
      </div>
    </section>
  );
}
