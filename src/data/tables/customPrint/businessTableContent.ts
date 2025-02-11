import { t } from 'i18next';
import { prices } from '../../prices/prices';
import {
  shortBasePriceOptions,
  shortBulkPriceOptions,
} from '../../../lib/priceOptions';
import { cardsContentPaths } from '../../../lib/translationPaths';

// Digital print Black and White - Collect data for pricing table
export function getTableDigitalPrintBlackAndWhite() {
  return {
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
}

// Digital print Color - Collect data for pricing table
export function getTableDigitalPrintColor() {
  return {
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
}

// Offset print Color - Collect data for pricing table
export function getTableOffsetPrintColor() {
  return {
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
}
