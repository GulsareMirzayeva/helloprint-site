import { useTranslation } from 'react-i18next';
import {
  cardsContentPaths,
  customPrintingContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../../elementTemplates/Notification';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/cards/ContentCard';
import { BeatLoader } from 'react-spinners';
import {
  shortBasePriceOptions,
  shortBulkPriceOptions,
} from '../../../lib/priceCategories';
import { t } from 'i18next';

export default function Cards() {
  useTranslation();
  const { stylePreset, prices } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Digital print Black and White - Collect data for pricing table
  const tableDigitalPrintBlackAndWhite = {
    hasAsterisk: false,
    tableTitle:
      cardsContentPaths.cardDigitalPrint.tableBlackAndWhite.header.title,
    tableSubTitle:
      cardsContentPaths.cardDigitalPrint.tableBlackAndWhite.header.subTitle,
    data: {
      headerTitles: [
        t('commonWords.cards'),
        t('commonWords.singleSided'),
        t('commonWords.doubleSided'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: shortBasePriceOptions,
      prices: [...Object.values(prices.customPrint.cards.print.blackWhite)],
    },
  };

  // Digital print Color - Collect data for pricing table
  const tableDigitalPrintColor = {
    hasAsterisk: false,
    tableTitle: cardsContentPaths.cardDigitalPrint.tableColor.header.title,
    tableSubTitle:
      cardsContentPaths.cardDigitalPrint.tableColor.header.subTitle,
    data: {
      headerTitles: [
        t('commonWords.cards'),
        t('commonWords.singleSided'),
        t('commonWords.doubleSided'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: shortBasePriceOptions,
      prices: [...Object.values(prices.customPrint.cards.print.color)],
    },
  };

  // Offset print Color - Collect data for pricing table
  const tableOffsetPrintColor = {
    hasAsterisk: false,
    tableTitle: cardsContentPaths.cardOffsetPrint.tableOffsetPrint.header.title,
    tableSubTitle:
      cardsContentPaths.cardOffsetPrint.tableOffsetPrint.header.subTitle,
    data: {
      headerTitles: [
        t(
          'customPrintPage.cards.cardOffsetPrint.tableOffsetPrint.columnHeaders.headerOne'
        ),
        t(
          'customPrintPage.cards.cardOffsetPrint.tableOffsetPrint.columnHeaders.headerTwo'
        ),
        t(
          'customPrintPage.cards.cardOffsetPrint.tableOffsetPrint.columnHeaders.headerThree'
        ),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: shortBulkPriceOptions,
      prices: [...Object.values(prices.customPrint.cards.offsetPrint.color)],
    },
  };

  return (
    <div
      className={`
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
      ${stylePreset.overall.backgroundColor}
    `}
    >
      {/* Left empty colomn */}
      <div></div>
      {/* Page introduction - Introduction text with or without an image */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <div className="mb-16">
          <PageTitleAndIntroduction
            image={cardsContentPaths.data.image}
            title={cardsContentPaths.pageHeader.title}
            introduction={cardsContentPaths.pageHeader.introduction}
          />
        </div>
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorLight}
          headerContent={{
            cardTitle: cardsContentPaths.cardDigitalPrint.header.title,
            cardSubTitle: cardsContentPaths.cardDigitalPrint.header.subTitle,
            cardIntroduction:
              cardsContentPaths.cardDigitalPrint.header.introduction,
            notification: customPrintingContentPaths.digitalPrintDeliveryTime,
          }}
          tableContent={[
            tableDigitalPrintBlackAndWhite,
            tableDigitalPrintColor,
          ]}
        />

        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorDark}
          headerContent={{
            cardTitle: cardsContentPaths.cardOffsetPrint.header.title,
            cardSubTitle: cardsContentPaths.cardOffsetPrint.header.subTitle,
            cardIntroduction:
              cardsContentPaths.cardOffsetPrint.header.introduction,
            notification: customPrintingContentPaths.offsetPrintDeliveryTime,
          }}
          tableContent={[tableOffsetPrintColor]}
        />

        <div className="z-0 w-full">
          {/* Display notification message */}
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
                value={customPrintingContentPaths.deliveryDisclaimer}
                variant="bodySmall"
              />
            </div>
          </Notification>
        </div>
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '16px',
            marginBottom: '16px',
          }}
          flexItem
          variant="fullWidth"
        />
        <div className="pb-2">
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
