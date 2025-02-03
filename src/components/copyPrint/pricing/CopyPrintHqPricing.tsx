import PricingTable from '../../elementTemplates/PricingTable';
import { splitPriceOptionsExtendedLow } from '../../../lib/priceCategories';
import { useData } from '../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { copyPrintContentPaths } from '../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../elementTemplates/TitleWithIntroduction';

/*
    Copy & Print - High Quality section

    Show information and pricing tables for High Quality category
*/

export default function CopyPrintHqPricing({ bgColor }: { bgColor: string }) {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices
  const pricesHq = [...Object.values(prices.copyPrint.A4.hq)];

  // Get the header titles
  const headerTitlesHq: string[] = [
    t('commonWords.prints'),
    t(copyPrintContentPaths.blackWhite),
    t(copyPrintContentPaths.color),
  ];

  // Get the units
  const unitsHq: string[] = [
    t('commonWords.amount'),
    t('commonWords.pricePerPrint'),
    t('commonWords.pricePerPrint'),
  ];

  return (
    <section
      style={{
        backgroundColor: bgColor,
      }}
      className="flex flex-col p-2 sm:p-8 w-full rounded-xl"
    >
      {/* Title, subtitle and introduction text */}
      <TitleWithIntroduction
        props={{
          mainTitle: copyPrintContentPaths.highQuality,
          subTitle: copyPrintContentPaths.colorOrBlackWhiteStandard,
          introduction: copyPrintContentPaths.introductionHqTable,
        }}
      />
      <div className="flex flex-col sm:flex-row gap-16 pt-8">
        <div>
          {/* Display table name and the papertype */}
          <div className="flex flex-col">
            <div className="flex justify-start ">
              <TextBlock
                value={copyPrintContentPaths.colorOrBlackWhite}
                variant="sectionTitle"
              />
              &nbsp;
              <TextBlock
                value={copyPrintContentPaths.printerFour}
                variant="sectionTitle"
              />
            </div>
            <TextBlock value={copyPrintContentPaths.type90gr} variant="body" />
          </div>

          {/* Display pricing table*/}
          <PricingTable
            headerTitles={headerTitlesHq}
            units={unitsHq}
            options={splitPriceOptionsExtendedLow}
            prices={pricesHq}
          />
        </div>
      </div>
    </section>
  );
}
