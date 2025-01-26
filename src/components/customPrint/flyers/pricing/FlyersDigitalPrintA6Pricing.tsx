import PricingTable from '../../../elementTemplates/PricingTable';
import { basePriceOptions } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { flyersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

export default function FlyersDigitalPrintA6Pricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  const digitalPrintTitle = t('customPrintPage.common.digitalPrint');

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "copy & print" page that will be used
  const pricesSingleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A6.singleSided),
  ];

  const pricesDoubleSidedA5 = [
    ...Object.values(prices.customPrint.flyers.print.A6.doubleSided),
  ];

  // Table headers for the 'Flex' category. An empty cell is added because all the prices are the same
  const headerTitles: string[] = [
    t('commonWords.flyers'),
    t('paperTypes.90grShort'),
    t('paperTypes.150grShort'),
    t('paperTypes.250grShort'),
  ];

  const units: string[] = [
    t('commonWords.amount'),
    t('commonWords.price'),
    t('commonWords.price'),
    t('commonWords.price'),
  ];

  return (
    <section className="flex flex-col items-center w-full py-10 gap-4">
      <div className="flex flex-col items-start">
        <TitleWithIntroduction
          props={{
            mainTitle: digitalPrintTitle,
            subTitle: flyersContentPaths.A6AndA5Format,
            introduction: flyersContentPaths.introductionFlyersTable,
          }}
        />
        <div className="flex gap-20 pt-10">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <TextBlock
                value={flyersContentPaths.formatA6}
                variant="subTitle"
              />
              <TextBlock
                value={flyersContentPaths.singleSided}
                variant="body"
              />
            </div>

            {/* Render a table for the "Black & White" category */}
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={basePriceOptions}
              prices={pricesSingleSidedA5}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <TextBlock
                value={flyersContentPaths.formatA6}
                variant="subTitle"
              />
              <TextBlock
                value={flyersContentPaths.doubleSided}
                variant="body"
              />
            </div>

            {/* Render a table for the "Color" category */}
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={basePriceOptions}
              prices={pricesDoubleSidedA5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
