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

export default function CopyPrintPricingBudget() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesBudgetColor = [...Object.values(prices.copyPrint.A4.color)];
  const pricesBudgetBlackWhite = [
    ...Object.values(prices.copyPrint.A4.blackWhite),
  ];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same

  const headerTitlesColor: string[] = [
    t('commonWords.prints'),
    t(copyPrintContentPaths.color),
  ];

  const headerTitlesBlackWhite: string[] = [
    t('commonWords.prints'),
    t(copyPrintContentPaths.blackWhite),
  ];

  const unitsBudget: string[] = [
    t('commonWords.amount'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section className="flex flex-col p-8 w-full bg-gray-100">
      <TitleWithIntroduction
        props={{
          mainTitle: copyPrintContentPaths.budget,
          subTitle: copyPrintContentPaths.colorOrBlackWhiteStandard,
          introduction: copyPrintContentPaths.introductionCopyPrintTable,
        }}
      />
      <div className="flex gap-16 pt-8">
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col">
            <div className="flex">
              <TextBlock
                value={copyPrintContentPaths.colorWithAsterisk}
                variant="sectionTitle"
              />
              <div className="text-[#FB0036] font-semibold">
                <span>*</span>
              </div>
              &nbsp;
              <TextBlock
                value={copyPrintContentPaths.printerOneToThree}
                variant="sectionTitle"
              />
            </div>
            <TextBlock value={copyPrintContentPaths.type80gr} variant="body" />
          </div>
          {/* Display a pricing */}
          <PricingTable
            headerTitles={headerTitlesColor}
            units={unitsBudget}
            options={splitPriceOptions}
            prices={pricesBudgetColor}
          />
        </div>
        <div>
          {/* Display a title and the papertype */}
          <div className="flex flex-col">
            <div className="flex">
              <TextBlock
                value={copyPrintContentPaths.blackWhiteWithAsterisk}
                variant="sectionTitle"
              />
              <div className="text-[#FB0036] font-semibold">
                <span>*</span>
              </div>
              &nbsp;
              <TextBlock
                value={copyPrintContentPaths.printerOneToThree}
                variant="sectionTitle"
              />
            </div>
            <TextBlock value={copyPrintContentPaths.type80gr} variant="body" />
          </div>
          {/* Display a pricing */}
          <PricingTable
            headerTitles={headerTitlesBlackWhite}
            units={unitsBudget}
            options={splitPriceOptionsExtendedHigh}
            prices={pricesBudgetBlackWhite}
          />
        </div>
      </div>
      <div className="pt-8"></div>
    </section>
  );
}
