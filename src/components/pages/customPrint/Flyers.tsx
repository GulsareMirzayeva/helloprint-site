import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  flyersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../../elementTemplates/Notification';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import { t } from 'i18next';
import {
  basePriceOptions,
  bulkPriceOptions,
  extendedBulkPriceOptions,
  shortBasePriceOptions,
} from '../../../lib/priceCategories';
import { BeatLoader } from 'react-spinners';
import ContentCard from '../../elementTemplates/cards/ContentCard';

export default function Flyers() {
  useTranslation();
  const { stylePreset, prices } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Digital print A6 Single sided - Collect data for pricing table
  const tableDigitalPrintA6SingleSided = {
    hasAsterisk: false,
    tableTitle: flyersContentPaths.cardDigitalPrint.tableA6.header.title,
    tableSubTitle: flyersContentPaths.cardDigitalPrint.common.subTitleOne,
    data: {
      headerTitles: [
        t('commonWords.flyers'),
        t('PaperWeights.90grShort'),
        t('PaperWeights.150grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: basePriceOptions,
      prices: [
        ...Object.values(prices.customPrint.flyers.print.A6.singleSided),
      ],
    },
  };

  // Digital print A6 Double sided - Collect data for pricing table
  const tableDigitalPrintA6DoubleSided = {
    hasAsterisk: false,
    tableTitle: flyersContentPaths.cardDigitalPrint.tableA6.header.title,
    tableSubTitle: flyersContentPaths.cardDigitalPrint.common.subTitleTwo,
    data: {
      headerTitles: [
        t('commonWords.flyers'),
        t('PaperWeights.90grShort'),
        t('PaperWeights.150grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: basePriceOptions,
      prices: [
        ...Object.values(prices.customPrint.flyers.print.A6.doubleSided),
      ],
    },
  };

  // Digital print A5 Single sided - Collect data for pricing table
  const tableDigitalPrintA5SingleSided = {
    hasAsterisk: false,
    tableTitle: flyersContentPaths.cardDigitalPrint.tableA5.header.title,
    tableSubTitle: flyersContentPaths.cardDigitalPrint.common.subTitleOne,
    data: {
      headerTitles: [
        t('commonWords.flyers'),
        t('PaperWeights.90grShort'),
        t('PaperWeights.150grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: basePriceOptions,
      prices: [
        ...Object.values(prices.customPrint.flyers.print.A5.singleSided),
      ],
    },
  };

  // Digital print A5 Double sided - Collect data for pricing table
  const tableDigitalPrintA5DoubleSided = {
    hasAsterisk: false,
    tableTitle: flyersContentPaths.cardDigitalPrint.tableA5.header.title,
    tableSubTitle: flyersContentPaths.cardDigitalPrint.common.subTitleTwo,
    data: {
      headerTitles: [
        t('commonWords.flyers'),
        t('PaperWeights.90grShort'),
        t('PaperWeights.150grShort'),
        t('PaperWeights.250grShort'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: shortBasePriceOptions,
      prices: [
        ...Object.values(prices.customPrint.flyers.print.A5.doubleSided),
      ],
    },
  };

  // Offset print A5 Double sided - Collect data for pricing table
  const tableOffsetPrintA5DoubleSided = {
    hasAsterisk: false,
    tableTitle: flyersContentPaths.cardOffsetPrint.tableA5.header.title,
    tableSubTitle: flyersContentPaths.cardOffsetPrint.common.subTitleTwo,
    data: {
      headerTitles: [
        t('commonWords.flyers'),
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
        ...Object.values(prices.customPrint.flyers.offsetPrint.A5.doubleSided),
      ],
    },
  };

  // Offset print A6 Double sided - Collect data for pricing table
  const tableOffsetPrintA6DoubleSided = {
    hasAsterisk: false,
    tableTitle: flyersContentPaths.cardOffsetPrint.tableA6.header.title,
    tableSubTitle: flyersContentPaths.cardOffsetPrint.common.subTitleTwo,
    data: {
      headerTitles: [
        t('commonWords.flyers'),
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
      options: extendedBulkPriceOptions,
      prices: [
        ...Object.values(prices.customPrint.flyers.offsetPrint.A6.doubleSided),
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
            image={flyersContentPaths.data.image}
            title={flyersContentPaths.pageHeader.title}
            introduction={flyersContentPaths.pageHeader.introduction}
          />
        </div>
        {/* Digital print card */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorLight}
          headerContent={{
            cardTitle: flyersContentPaths.cardDigitalPrint.header.title,
            cardSubTitle: flyersContentPaths.cardDigitalPrint.header.subTitle,
            cardIntroduction:
              flyersContentPaths.cardDigitalPrint.header.introduction,
            notification: customPrintingContentPaths.digitalPrintDeliveryTime,
          }}
          tableContent={[
            tableDigitalPrintA6SingleSided,
            tableDigitalPrintA6DoubleSided,
            tableDigitalPrintA5SingleSided,
            tableDigitalPrintA5DoubleSided,
          ]}
        />

        {/* Offset print card */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorDark}
          headerContent={{
            cardTitle: flyersContentPaths.cardOffsetPrint.header.title,
            cardSubTitle: flyersContentPaths.cardOffsetPrint.header.subTitle,
            cardIntroduction:
              flyersContentPaths.cardOffsetPrint.header.introduction,
            notification: customPrintingContentPaths.offsetPrintDeliveryTime,
          }}
          tableContent={[
            tableOffsetPrintA6DoubleSided,
            tableOffsetPrintA5DoubleSided,
          ]}
        />

        {/* Display notification message */}
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
