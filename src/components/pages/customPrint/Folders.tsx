import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  foldersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import { BeatLoader } from 'react-spinners';
import { t } from 'i18next';
import {
  bulkPriceOptions,
  lowPriceOptions,
} from '../../../lib/priceCategories';
import ContentCard from '../../elementTemplates/cards/ContentCard';

export default function Folders() {
  useTranslation();
  const { stylePreset, prices } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Digital print Color or Black and White - Collect data for pricing table
  const tableDigitalPrintColor = {
    hasAsterisk: false,
    tableTitle: foldersContentPaths.cardDigitalPrint.tableColor.header.title,
    tableSubTitle:
      foldersContentPaths.cardDigitalPrint.tableColor.header.subTitle,
    data: {
      headerTitles: [
        t('commonWords.folders'),
        t('PaperWeights.150grShort'),
        t('PaperWeights.170grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: lowPriceOptions,
      prices: [...Object.values(prices.customPrint.folders.print.A4.color)],
    },
  };

  // Digital print Black and White - Collect data for pricing table
  const tableDigitalPrintBlackAndWhite = {
    hasAsterisk: false,
    tableTitle:
      foldersContentPaths.cardDigitalPrint.tableBlackAndWhite.header.title,
    tableSubTitle:
      foldersContentPaths.cardDigitalPrint.tableBlackAndWhite.header.subTitle,
    data: {
      headerTitles: [t('commonWords.folders'), t('PaperWeights.80grShort')],
      units: [t('commonWords.amount'), t('commonWords.price')],
      options: lowPriceOptions,
      prices: [
        ...Object.values(prices.customPrint.folders.print.A4.blackWhite),
      ],
    },
  };

  // Offset print A4 Trifold - Collect data for pricing table
  const tableOffsetPrintA4Trifold = {
    hasAsterisk: false,
    tableTitle: foldersContentPaths.cardOffsetPrint.tableA4Trifold.header.title,
    tableSubTitle:
      foldersContentPaths.cardOffsetPrint.tableA4Trifold.header.subTitle,
    data: {
      headerTitles: [
        t('commonWords.folders'),
        t('PaperWeights.135grShort'),
        t('PaperWeights.170grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: bulkPriceOptions,
      prices: [
        ...Object.values(
          prices.customPrint.folders.offsetPrint.A4.color.triFold
        ),
      ],
    },
  };

  // Offset print A4 Trifold - Collect data for pricing table
  const tableOffsetPrintA4Bifold = {
    hasAsterisk: false,
    tableTitle: foldersContentPaths.cardOffsetPrint.tableA4Bifold.header.title,
    tableSubTitle:
      foldersContentPaths.cardOffsetPrint.tableA4Bifold.header.subTitle,
    data: {
      headerTitles: [
        t('commonWords.folders'),
        t('PaperWeights.135grShort'),
        t('PaperWeights.170grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: bulkPriceOptions,
      prices: [
        ...Object.values(
          prices.customPrint.folders.offsetPrint.A4.color.halfFold
        ),
      ],
    },
  };

  // Offset print A4 Trifold - Collect data for pricing table
  const tableOffsetPrintA3Trifold = {
    hasAsterisk: false,
    tableTitle: foldersContentPaths.cardOffsetPrint.tableA3.header.title,
    tableSubTitle: foldersContentPaths.cardOffsetPrint.tableA3.header.subTitle,
    data: {
      headerTitles: [
        t('commonWords.folders'),
        t('PaperWeights.135grShort'),
        t('PaperWeights.170grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: bulkPriceOptions,
      prices: [
        ...Object.values(
          prices.customPrint.folders.offsetPrint.A3.color.triFold
        ),
      ],
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
            image={foldersContentPaths.data.image}
            title={foldersContentPaths.pageHeader.title}
            introduction={foldersContentPaths.pageHeader.introduction}
          />
        </div>
        {/* Digital print card */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorLight}
          headerContent={{
            cardTitle: foldersContentPaths.cardDigitalPrint.header.title,
            cardSubTitle: foldersContentPaths.cardDigitalPrint.header.subTitle,
            cardIntroduction:
              foldersContentPaths.cardDigitalPrint.header.introduction,
            notification: customPrintingContentPaths.digitalPrintDeliveryTime,
          }}
          tableContent={[
            tableDigitalPrintColor,
            tableDigitalPrintBlackAndWhite,
          ]}
        />

        {/* Offset print card */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorDark}
          headerContent={{
            cardTitle: foldersContentPaths.cardOffsetPrint.header.title,
            cardSubTitle: foldersContentPaths.cardOffsetPrint.header.subTitle,
            cardIntroduction:
              foldersContentPaths.cardOffsetPrint.header.introduction,
            notification: customPrintingContentPaths.offsetPrintDeliveryTime,
          }}
          tableContent={[
            tableOffsetPrintA4Trifold,
            tableOffsetPrintA4Bifold,
            tableOffsetPrintA3Trifold,
          ]}
        />

        {/* Display notification message table */}
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
