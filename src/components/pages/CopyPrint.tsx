import {
  copyPrintContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../elementTemplates/Notification';
import { useData } from '../../context/DataContext';
import PageTitleAndIntroduction from '../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../elementTemplates/ContentCard';
import { t } from 'i18next';
import {
  splitPriceOptionsExtendedHigh,
  splitPriceOptionsExtendedLow,
} from '../../lib/priceCategories';
import { BeatLoader } from 'react-spinners';

export default function CopyPrint() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { prices, stylePreset } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Budget Color- Collect data for pricing table
  const tableDataBudgetColor = {
    hasAsterisk: true,
    tableTitle: copyPrintContentPaths.cardBudget.tableColor.title,
    tableSubTitle: copyPrintContentPaths.cardBudget.tableColor.subTitle,
    data: {
      headerTitles: [t('commonWords.prints'), t('commonWords.color')],
      units: [t('commonWords.amount'), t('commonWords.pricePerPrint')],
      options: splitPriceOptionsExtendedHigh,
      prices: [...Object.values(prices.copyPrint.A4.color)],
    },
  };

  // Budget Black and White - Collect data for pricing table
  const tableDataBudgetBlackAndWhite = {
    hasAsterisk: true,
    tableTitle: copyPrintContentPaths.cardBudget.tableBlackAndWhite.title,
    tableSubTitle: copyPrintContentPaths.cardBudget.tableBlackAndWhite.subTitle,
    data: {
      headerTitles: [t('commonWords.prints'), t('commonWords.blackAndWhite')],
      units: [t('commonWords.amount'), t('commonWords.pricePerPrint')],
      options: splitPriceOptionsExtendedHigh,
      prices: [...Object.values(prices.copyPrint.A4.blackWhite)],
    },
  };

  // High Quality - Color or Black and White - Collect data for pricing table
  const tableDataHq = {
    hasAsterisk: false,
    tableTitle: copyPrintContentPaths.cardHq.tableHq.title,
    tableSubTitle: copyPrintContentPaths.cardHq.tableHq.subTitle,
    data: {
      headerTitles: [
        t('commonWords.prints'),
        t('commonWords.color'),
        t('commonWords.blackAndWhite'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.pricePerPrint'),
        t('commonWords.pricePerPrint'),
      ],
      options: splitPriceOptionsExtendedLow,
      prices: [...Object.values(prices.copyPrint.A4.hq)],
    },
  };

  return (
    <div
      className={`
      ${stylePreset.overall.backgroundColor}
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
    `}
    >
      {/* Left empty colomn */}
      <div></div>
      {/* Page introduction - Introduction text with or without an image */}
      <div className="flex flex-col px-2 pt-12">
        <div className="mb-16">
          <PageTitleAndIntroduction
            image={copyPrintContentPaths.data.image}
            title={copyPrintContentPaths.pageHeaderContent.title}
            introduction={copyPrintContentPaths.pageHeaderContent.introduction}
          />
        </div>

        {/* Budget pricing tables */}
        <div className="flex flex-col gap-8">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: copyPrintContentPaths.cardBudget.header.title,
              cardSubTitle: copyPrintContentPaths.cardBudget.header.subTitle,
              cardIntroduction:
                copyPrintContentPaths.cardBudget.header.introduction,
            }}
            tableContent={[tableDataBudgetColor, tableDataBudgetBlackAndWhite]}
          />

          {/* High quality pricing table */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: copyPrintContentPaths.cardHq.header.title,
              cardSubTitle: copyPrintContentPaths.cardHq.header.subTitle,
              cardIntroduction:
                copyPrintContentPaths.cardHq.header.introduction,
            }}
            tableContent={[tableDataHq]}
          />
        </div>

        {/* Notification - If needed, place a notification message at the bottom of the page */}
        <div className="z-0 w-full">
          <Notification>
            <div className="flex items-start">
              <div
                className={`
                font-semibold
                ${stylePreset.notification.asteriskColor}
              `}
              >
                <span>*&nbsp;</span>
              </div>
              <TextBlock
                value={copyPrintContentPaths.notifications.first}
                variant="bodySmall"
              />
            </div>
            <TextBlock
              value={copyPrintContentPaths.notifications.second}
              variant="bodySmall"
            />
            <TextBlock
              value={copyPrintContentPaths.notifications.third}
              variant="bodySmall"
            />
          </Notification>
        </div>

        {/* Divider - Visually create the end of the pricing content  */}
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '16px',
            marginBottom: '16px',
          }}
          flexItem
          variant="fullWidth"
        />

        {/* Message section at the bottom, introduced by an introduction text */}
        <div
          className={`
          pb-2
          ${stylePreset.overall.textColorPrimary}
          `}
        >
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full m-">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
