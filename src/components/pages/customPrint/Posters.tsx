import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  postersContentPaths,
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
  paperSizes,
  splitPriceOptionsShort,
  splitPriceOptionsShortLow,
} from '../../../lib/priceCategories';
import ContentCard from '../../elementTemplates/ContentCard';

export default function Posters() {
  useTranslation();
  const { stylePreset, prices } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // 80 gsm Color - Collect data for pricing table
  const table80gsmColor = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorOrBlackAndWhite.tableColor.header.title,
    tableSubTitle:
      postersContentPaths.cardColorOrBlackAndWhite.tableColor.header.subTitle,
    data: {
      headerTitles: [
        t('customPrintPage.posters.common.headerOne'),
        t('customPrintPage.posters.common.headerTwo'),
        t('customPrintPage.posters.common.headerThree'),
        t('customPrintPage.posters.common.headerFour'),
      ],
      units: [
        t('commonWords.format'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
      ],
      options: paperSizes,
      prices: [...Object.values(prices.customPrint.posters.color['80gr'])],
    },
  };

  // 80 gsm black and white - Collect data for pricing table
  const table80gsmBlackAndWhite = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorOrBlackAndWhite.tableBlackAndWhite.header
        .title,
    tableSubTitle:
      postersContentPaths.cardColorOrBlackAndWhite.tableBlackAndWhite.header
        .subTitle,
    data: {
      headerTitles: [t('commonWords.posters'), t('commonWords.perPiece')],
      units: [t('commonWords.format'), t('commonWords.price')],
      options: paperSizes,
      prices: [...Object.values(prices.customPrint.posters.blackWhite)],
    },
  };

  // 160 gsm matte - Collect data for pricing table
  const table160gsmMatte = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorHeavyPaper.table160gsmMatte.header.title,
    tableSubTitle:
      postersContentPaths.cardColorHeavyPaper.table160gsmMatte.header.subTitle,
    data: {
      headerTitles: [
        t('customPrintPage.posters.common.headerOne'),
        t('customPrintPage.posters.common.headerTwo'),
        t('customPrintPage.posters.common.headerThree'),
        t('customPrintPage.posters.common.headerFour'),
      ],
      units: [
        t('commonWords.format'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
      ],
      options: paperSizes,
      prices: [...Object.values(prices.customPrint.posters.color['160grMat'])],
    },
  };

  // 160 gsm satin - Collect data for pricing table
  const table160gsmSatin = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorHeavyPaper.table160gsmSatin.header.title,
    tableSubTitle:
      postersContentPaths.cardColorHeavyPaper.table160gsmSatin.header.subTitle,
    data: {
      headerTitles: [
        t('customPrintPage.posters.common.headerOne'),
        t('customPrintPage.posters.common.headerTwo'),
        t('customPrintPage.posters.common.headerThree'),
        t('customPrintPage.posters.common.headerFour'),
      ],
      units: [
        t('commonWords.format'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
      ],
      options: paperSizes,
      prices: [
        ...Object.values(prices.customPrint.posters.color['160grSatin']),
      ],
    },
  };

  // 190 gsm gloss - Collect data for pricing table
  const table190gsmGloss = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorHeavyPaper.table190gsmGloss.header.title,
    tableSubTitle:
      postersContentPaths.cardColorHeavyPaper.table190gsmGloss.header.subTitle,
    data: {
      headerTitles: [
        t('customPrintPage.posters.common.headerOne'),
        t('customPrintPage.posters.common.headerTwo'),
        t('customPrintPage.posters.common.headerThree'),
        t('customPrintPage.posters.common.headerFour'),
      ],
      units: [
        t('commonWords.format'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
      ],
      options: paperSizes,
      prices: [
        ...Object.values(prices.customPrint.posters.color['190grGloss']),
      ],
    },
  };

  // 260 gsm satin - Collect data for pricing table
  const table260gsmSatin = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorHeavyPaper.table260gsmSatin.header.title,
    tableSubTitle:
      postersContentPaths.cardColorHeavyPaper.table260gsmSatin.header.subTitle,
    data: {
      headerTitles: [
        t('customPrintPage.posters.common.headerOne'),
        t('customPrintPage.posters.common.headerTwo'),
        t('customPrintPage.posters.common.headerThree'),
        t('customPrintPage.posters.common.headerFour'),
      ],
      units: [
        t('commonWords.format'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
      ],
      options: paperSizes,
      prices: [
        ...Object.values(prices.customPrint.posters.color['260grSatin']),
      ],
    },
  };

  // Polypropylene - Collect data for pricing table
  const tablePolypropylene = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorSpecialMaterials.tablePolypropylene.header
        .title,
    tableSubTitle:
      postersContentPaths.cardColorSpecialMaterials.tablePolypropylene.header
        .subTitle,
    data: {
      headerTitles: [t('commonWords.posters'), t('commonWords.perPiece')],
      units: [t('commonWords.format'), t('commonWords.price')],
      options: paperSizes,
      prices: [
        ...Object.values(prices.customPrint.posters.color.polypropylene),
      ],
    },
  };

  // 260 gsm Handmade paper - Collect data for pricing table
  const table260gsmHandmade = {
    hasAsterisk: false,
    tableTitle:
      postersContentPaths.cardColorSpecialMaterials.table260gsmHandmade.header
        .title,
    tableSubTitle:
      postersContentPaths.cardColorSpecialMaterials.table260gsmHandmade.header
        .subTitle,
    data: {
      headerTitles: [t('commonWords.posters'), t('commonWords.perPiece')],
      units: [t('commonWords.format'), t('commonWords.price')],
      options: paperSizes,
      prices: [
        ...Object.values(prices.customPrint.posters.color['260grHandMade']),
      ],
    },
  };

  // A3 Full Color Budget - Collect data for pricing table
  const tableColorA3Budget = {
    hasAsterisk: true,
    tableTitle: postersContentPaths.cardColorA3.table80gsm.header.title,
    tableSubTitle: postersContentPaths.cardColorA3.table80gsm.header.subTitle,
    data: {
      headerTitles: [t('commonWords.posters'), t('commonWords.perPiece')],
      units: [t('commonWords.prints'), t('commonWords.price')],
      options: splitPriceOptionsShort,
      prices: [
        ...Object.values(prices.customPrint.posters.color.fullColorBudget),
      ],
    },
  };

  // A3 Full Color High Quality - Collect data for pricing table
  const tableColorA3Hq = {
    hasAsterisk: false,
    tableTitle: postersContentPaths.cardColorA3.table150gsm.header.title,
    tableSubTitle: postersContentPaths.cardColorA3.table150gsm.header.subTitle,
    data: {
      headerTitles: [t('commonWords.posters'), t('commonWords.perPiece')],
      units: [t('commonWords.prints'), t('commonWords.price')],
      options: splitPriceOptionsShortLow,
      prices: [...Object.values(prices.customPrint.posters.color.fullColorHq)],
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
            image={postersContentPaths.data.image}
            title={postersContentPaths.pageHeader.title}
            introduction={postersContentPaths.pageHeader.introduction}
          />
        </div>
        {/* 80 gsm color and Black and White */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorLight}
          headerContent={{
            cardTitle:
              postersContentPaths.cardColorOrBlackAndWhite.header.title,
            cardSubTitle:
              postersContentPaths.cardColorOrBlackAndWhite.header.subTitle,
            cardIntroduction:
              postersContentPaths.cardColorOrBlackAndWhite.header.introduction,
            notification: undefined,
          }}
          tableContent={[table80gsmColor, table80gsmBlackAndWhite]}
        />

        {/* 160 gsm to 260 gsm paper */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorDark}
          headerContent={{
            cardTitle: postersContentPaths.cardColorHeavyPaper.header.title,
            cardSubTitle:
              postersContentPaths.cardColorHeavyPaper.header.subTitle,
            cardIntroduction:
              postersContentPaths.cardColorHeavyPaper.header.introduction,
            notification: undefined,
          }}
          tableContent={[
            table160gsmMatte,
            table160gsmSatin,
            table190gsmGloss,
            table260gsmSatin,
          ]}
        />

        {/* Special materials - 260 gsm Handmade paper and Polypropylene */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorLight}
          headerContent={{
            cardTitle:
              postersContentPaths.cardColorSpecialMaterials.header.title,
            cardSubTitle:
              postersContentPaths.cardColorSpecialMaterials.header.subTitle,
            cardIntroduction:
              postersContentPaths.cardColorSpecialMaterials.header.introduction,
            notification: undefined,
          }}
          tableContent={[tablePolypropylene, table260gsmHandmade]}
        />

        {/* A3 Full color - Budget and High Quality*/}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorDark}
          headerContent={{
            cardTitle: postersContentPaths.cardColorA3.header.title,
            cardSubTitle: postersContentPaths.cardColorA3.header.subTitle,
            cardIntroduction:
              postersContentPaths.cardColorA3.header.introduction,
            notification: undefined,
          }}
          tableContent={[tableColorA3Hq, tableColorA3Budget]}
        />

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
                value={customPrintingContentPaths.pricesBasedonSelfService}
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
