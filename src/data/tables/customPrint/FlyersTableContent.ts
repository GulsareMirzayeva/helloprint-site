import { t } from 'i18next';
import { prices } from '../../prices/prices';
import {
  basePriceOptions,
  shortBasePriceOptions,
  bulkPriceOptions,
  extendedBulkPriceOptions,
} from '../../../lib/priceOptions';
import { flyersContentPaths } from '../../../lib/translationPaths';

// Digital print A6 Single sided - Collect data for pricing table
export function getTableDigitalPrintA6SingleSided() {
  return {
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
}

// Digital print A6 Double sided - Collect data for pricing table
export function getTableDigitalPrintA6DoubleSided() {
  return {
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
}

// Digital print A5 Single sided - Collect data for pricing table
export function getTableDigitalPrintA5SingleSided() {
  return {
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
}

// Digital print A5 Double sided - Collect data for pricing table
export function getTableDigitalPrintA5DoubleSided() {
  return {
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
}

// Offset print A5 Double sided - Collect data for pricing table
export function getTableOffsetPrintA5DoubleSided() {
  return {
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
}

// Offset print A6 Double sided - Collect data for pricing table
export function getTableOffsetPrintA6DoubleSided() {
  return {
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
}
