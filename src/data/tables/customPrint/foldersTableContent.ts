import { t } from 'i18next';
import { prices } from '../../prices/prices';
import {
  lowPriceOptions,
  bulkPriceOptions,
  basePriceOptions,
} from '../../../lib/priceOptions';
import { foldersContentPaths } from '../../../lib/translationPaths';

// Digital print Color or Black and White - Collect data for pricing table
export function getTableDigitalPrintColor() {
  return {
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
        t('commonWords.price'),
      ],
      options: lowPriceOptions,
      prices: [...Object.values(prices.customPrint.folders.print.A4.color)],
    },
  };
}

// Digital print Black and White - Collect data for pricing table
export function getTableDigitalPrintBlackAndWhite() {
  return {
    hasAsterisk: false,
    tableTitle:
      foldersContentPaths.cardDigitalPrint.tableBlackAndWhite.header.title,
    tableSubTitle:
      foldersContentPaths.cardDigitalPrint.tableBlackAndWhite.header.subTitle,
    data: {
      headerTitles: [t('commonWords.folders'), t('PaperWeights.80grShort')],
      units: [t('commonWords.amount'), t('commonWords.price')],
      options: basePriceOptions,
      prices: [
        ...Object.values(prices.customPrint.folders.print.A4.blackWhite),
      ],
    },
  };
}

// Offset print A4 Trifold - Collect data for pricing table
export function getTableOffsetPrintA4Trifold() {
  return {
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
}

// Offset print A4 Trifold - Collect data for pricing table
export function getTableOffsetPrintA4Bifold() {
  return {
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
}

// Offset print A4 Trifold - Collect data for pricing table
export function getTableOffsetPrintA3Trifold() {
  return {
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
}
