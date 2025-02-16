import { t } from 'i18next';
import imageTextileGarments from '../../assets/custom-clothing/clothing-images.png';
import { customClotingContentPaths } from '../../lib/translationPaths';
import { prices } from '../prices/prices';

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
export function getTableTextileGarments() {
  return {
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
        t('commonWords.colored'),
      ],
      units: [
        t('commonWords.clothingGarment'),
        t('commonWords.pricePerPiece'),
        t('commonWords.pricePerPiece'),
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
}

// Flex material - Collect data for pricing table
export function getTableFlexMaterial() {
  return {
    hasAsterisk: false,
    tableTitle: customClotingContentPaths.cardFlexAndDtg.tableFlex.header.title,
    tableSubTitle:
      customClotingContentPaths.cardFlexAndDtg.tableFlex.header.subTitle,
    data: {
      headerTitles: [
        t('customClothingPage.cardFlexAndDtg.common.headerOne'),
        t(
          'customClothingPage.cardFlexAndDtg.tableFlex.columnHeaders.headSingleColored'
        ),
      ],
      units: [t('commonWords.prints'), t('commonWords.pricePerPrint')],
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
}

// DTG printing - Collect data for pricing table
export function getTableDtg() {
  return {
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
}
