import { useTranslation } from 'react-i18next';
import {
  customClotingContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../elementTemplates/Notification';
import { useData } from '../../context/DataContext';
import PageTitleAndIntroduction from '../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../elementTemplates/ContentCard';
import { t } from 'i18next';
import imageTextileGarments from '../../assets/custom-clothing/clothing-images.png';

export default function CustomClothing() {
  useTranslation();
  const { stylePreset, prices } = useData();

  const pricePathTextile = prices
    ? [...Object.values(prices.customClothing.textile)]
    : [];

  const pricePathFlex = prices
    ? [...Object.values(prices.customClothing.flex)]
    : [];

  const pricePathDtg = prices
    ? [...Object.values(prices.customClothing.dtg)]
    : [];

  // Textile garments - Collect data for pricing table
  const tableTextileGarments = {
    hasAsterisk: false,
    tableTitle:
      customClotingContentPaths.cardTextileGarments.tableTextileGarments.header
        .title,
    tableSubTitle:
      customClotingContentPaths.cardTextileGarments.tableTextileGarments.header
        .subTitle,
    data: {
      image: imageTextileGarments,
      headerTitles: [
        t('commonWords.textile'),
        t('commonWords.blackAndWhite'),
        t('commonWords.color'),
      ],
      units: [
        t('commonWords.clothingPiece'),
        t('commonWords.pricePerPrint'),
        t('commonWords.pricePerPrint'),
      ],
      options: [
        t(
          'customClothingPage.cardTextileGarments.tableTextileGarments.variants.shirt'
        ),
        t(
          'customClothingPage.cardTextileGarments.tableTextileGarments.variants.polo'
        ),
        t(
          'customClothingPage.cardTextileGarments.tableTextileGarments.variants.sweater'
        ),
        t(
          'customClothingPage.cardTextileGarments.tableTextileGarments.variants.hoody'
        ),
      ],
      prices: pricePathTextile,
    },
  };

  // Flex material - Collect data for pricing table
  const tableFlexMaterial = {
    hasAsterisk: false,
    tableTitle: customClotingContentPaths.cardFlexAndDtg.tableFlex.header.title,
    tableSubTitle:
      customClotingContentPaths.cardFlexAndDtg.tableFlex.header.subTitle,
    data: {
      headerTitles: [
        t('customClothingPage.cardFlexAndDtg.common.headerOne'),
        t('commonWords.pricePerPrint'),
      ],
      units: [],
      options: [
        t(
          'customClothingPage.cardFlexAndDtg.tableFlex.variants.frontChestLogo'
        ),
        t(
          'customClothingPage.cardFlexAndDtg.tableFlex.variants.frontBackLarge'
        ),
        t(
          'customClothingPage.cardFlexAndDtg.tableFlex.variants.frontSmallBackLarge'
        ),
      ],
      prices: pricePathFlex,
    },
  };

  // DTG printing - Collect data for pricing table
  const tableDtg = {
    hasAsterisk: false,
    tableTitle: customClotingContentPaths.cardFlexAndDtg.tableDtg.header.title,
    tableSubTitle:
      customClotingContentPaths.cardFlexAndDtg.tableDtg.header.subTitle,
    data: {
      headerTitles: [
        t('customClothingPage.cardFlexAndDtg.common.headerTwo'),
        t(
          'customClothingPage.cardFlexAndDtg.tableDtg.columnHeaders.headTextileWhite'
        ),
        t(
          'customClothingPage.cardFlexAndDtg.tableDtg.columnHeaders.headTextileColor'
        ),
      ],
      units: [
        t('commonWords.prints'),
        t('commonWords.pricePerPrint'),
        t('commonWords.pricePerPrint'),
      ],
      options: [
        t('customClothingPage.cardFlexAndDtg.tableDtg.variants.frontChestLogo'),
        t('customClothingPage.cardFlexAndDtg.tableDtg.variants.frontBackLarge'),
        t(
          'customClothingPage.cardFlexAndDtg.tableDtg.variants.frontSmallBackLarge'
        ),
      ],
      prices: pricePathDtg,
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
            image={customClotingContentPaths.data.image}
            title={customClotingContentPaths.pageHeaderContent.title}
            introduction={
              customClotingContentPaths.pageHeaderContent.introduction
            }
          />
        </div>

        {/* Custom clothing  - Textile garments content card */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorLight}
          headerContent={{
            cardTitle:
              customClotingContentPaths.cardTextileGarments.header.title,
            cardSubTitle:
              customClotingContentPaths.cardTextileGarments.header.subTitle,
            cardIntroduction:
              customClotingContentPaths.cardTextileGarments.header.introduction,
            notification: undefined,
          }}
          tableContent={[tableTextileGarments]}
        />

        {/* Custom clothing  - Flex/Vinyl and DTG printing content card */}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorDark}
          headerContent={{
            cardTitle: customClotingContentPaths.cardFlexAndDtg.header.title,
            cardSubTitle:
              customClotingContentPaths.cardFlexAndDtg.header.subTitle,
            cardIntroduction:
              customClotingContentPaths.cardFlexAndDtg.header.introduction,
            notification: undefined,
          }}
          tableContent={[tableFlexMaterial, tableDtg]}
        />

        {/* Display notification message */}
        <div className="z-0 w-full">
          <Notification>
            <TextBlock
              value={customClotingContentPaths.notifications.first}
              variant="bodySmall"
            />
            <TextBlock
              value={customClotingContentPaths.notifications.second}
              variant="bodySmall"
            />
            <TextBlock
              value={customClotingContentPaths.notifications.third}
              variant="bodySmall"
            />
            <TextBlock
              value={customClotingContentPaths.notifications.fourth}
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
        <div className="pb-2">
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>

      {/* Right empty colomn */}
      <div></div>
    </div>
  );
}
