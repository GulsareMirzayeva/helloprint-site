import PricingTable from '../../elementTemplates/PricingTable';
import {
  splitPriceOptions,
  splitPriceOptionsExtendedHigh,
} from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { copyPrintContentPaths } from '../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../elementTemplates/TitleWithIntroduction';

/*
    Copy & Print - Budget section

    Show information and pricing tables for Budget category
*/

export default function CopyPrintBudgetPricing({
  bgColor,
}: {
  bgColor: string;
}) {
  const { t } = useTranslation();
  const { prices } = useData();
  const { stylePreset } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesBudgetColor = [...Object.values(prices.copyPrint.A4.color)];
  const pricesBudgetBlackWhite = [
    ...Object.values(prices.copyPrint.A4.blackWhite),
  ];

  // Get the header titles
  const headerTitlesColor: string[] = [
    t('commonWords.prints'),
    t(copyPrintContentPaths.color),
  ];

  const headerTitlesBlackWhite: string[] = [
    t('commonWords.prints'),
    t(copyPrintContentPaths.blackWhite),
  ];

  // Get the units
  const unitsBudget: string[] = [
    t('commonWords.amount'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section
      className={`
        flex flex-col p-2 sm:p-8 w-full rounded-xl
        ${bgColor}
      `}
    >
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: copyPrintContentPaths.budget,
          subTitle: copyPrintContentPaths.colorOrBlackWhiteStandard,
          introduction: copyPrintContentPaths.introductionBudgetTable,
        }}
      />
      <div className="flex flex-col sm:flex-row gap-16 pt-8">
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <div className="flex">
              <TextBlock
                value={copyPrintContentPaths.A4Color}
                variant="sectionTitle"
              />
              &nbsp;
              <TextBlock
                value={copyPrintContentPaths.printerOneToThree}
                variant="sectionTitle"
              />
              <div
                className={`
                  ${stylePreset.notification.asteriskColor}
                  font-semibold
                  `}
              >
                <span>*</span>
              </div>
            </div>
            <TextBlock value={copyPrintContentPaths.type80gr} variant="body" />
          </div>

          {/* Display pricing table*/}
          <PricingTable
            headerTitles={headerTitlesColor}
            units={unitsBudget}
            options={splitPriceOptions}
            prices={pricesBudgetColor}
          />
        </div>
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <div className="flex">
              <TextBlock
                value={copyPrintContentPaths.A4blackWhite}
                variant="sectionTitle"
              />
              &nbsp;
              <TextBlock
                value={copyPrintContentPaths.printerOneToThree}
                variant="sectionTitle"
              />
              <div
                className={`
                  font-semibold
                  ${stylePreset.notification.asteriskColor}
                `}
              >
                <span>*</span>
              </div>
            </div>
            <TextBlock value={copyPrintContentPaths.type80gr} variant="body" />
          </div>

          {/* Display pricing table */}
          <PricingTable
            headerTitles={headerTitlesBlackWhite}
            units={unitsBudget}
            options={splitPriceOptionsExtendedHigh}
            prices={pricesBudgetBlackWhite}
          />
        </div>
      </div>
    </section>
  );
}
