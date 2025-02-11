import { t } from 'i18next';
import { prices } from '../../prices/prices';
import {
  paperSizes,
  splitPriceOptionsShort,
  splitPriceOptionsShortLow,
} from '../../../lib/priceOptions';
import { postersContentPaths } from '../../../lib/translationPaths';

// 80 gsm Color - Collect data for pricing table
export function getTable80gsmColor() {
  return {
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
}

// 80 gsm black and white - Collect data for pricing table
export function getTable80gsmBlackAndWhite() {
  return {
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
}

// 160 gsm matte - Collect data for pricing table
export function getTable160gsmMatte() {
  return {
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
}

// 160 gsm satin - Collect data for pricing table
export function getTable160gsmSatin() {
  return {
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
}

// 190 gsm gloss - Collect data for pricing table
export function getTable190gsmGloss() {
  return {
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
}

// 260 gsm satin - Collect data for pricing table
export function getTable260gsmSatin() {
  return {
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
}

// Polypropylene - Collect data for pricing table
export function getTablePolypropylene() {
  return {
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
}

// 260 gsm Handmade paper - Collect data for pricing table
export function getTable260gsmHandmade() {
  return {
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
}

// A3 Full Color Budget - Collect data for pricing table
export function getTableColorA3Budget() {
  return {
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
}

// A3 Full Color High Quality - Collect data for pricing table
export function getTableColorA3Hq() {
  return {
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
}
