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
    <section className="flex flex-col pt-12 p-8 w-full">
      <div className="flex flex-col items-start">
        <TitleWithIntroduction
          props={{
            mainTitle: postersContentPaths.color,
            subTitle: postersContentPaths.typeA3Format,
            introduction: postersContentPaths.introductionA3Table,
          }}
        />
        <div className="flex gap-16 pt-8">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <div className="flex">
                <TextBlock
                  value={postersContentPaths.hqFullColor}
                  variant="sectionTitle"
                />
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
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <div className="flex">
                <TextBlock
                  value={postersContentPaths.budgetColor}
                  variant="sectionTitle"
                />
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
      </div>
      <div className="pt-8">
        <Notification>
          <TextBlock
            value={postersContentPaths.notificationFirst}
            variant="bodySmall"
          />
        </Notification>
      </div>
    </section>
  );
}
