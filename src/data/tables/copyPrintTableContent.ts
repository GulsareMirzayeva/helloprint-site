import { t } from 'i18next';
import { prices } from '../prices/prices';
import {
  splitPriceOptions,
  splitPriceOptionsExtendedLow,
  splitPriceOptionsExtendedMedium,
} from '../../lib/priceOptions';
import { copyPrintContentPaths } from '../../lib/translationPaths';

// Budget Color- Collect data for pricing table
export function getTableDataBudgetColor() {
  return {
    hasAsterisk: true,
    tableTitle: copyPrintContentPaths.cardBudget.tableColor.title,
    tableSubTitle: copyPrintContentPaths.cardBudget.tableColor.subTitle,
    data: {
      headerTitles: [t('commonWords.prints'), t('commonWords.color')],
      units: [t('commonWords.amount'), t('commonWords.pricePerPrint')],
      options: splitPriceOptions,
      prices: [...Object.values(prices.copyPrint.A4.color)],
    },
  };
}

// Budget Black and White - Collect data for pricing table
export function getTableDataBudgetBlackAndWhite() {
  return {
    hasAsterisk: true,
    tableTitle: copyPrintContentPaths.cardBudget.tableBlackAndWhite.title,
    tableSubTitle: copyPrintContentPaths.cardBudget.tableBlackAndWhite.subTitle,
    data: {
      headerTitles: [t('commonWords.prints'), t('commonWords.blackAndWhite')],
      units: [t('commonWords.amount'), t('commonWords.pricePerPrint')],
      options: splitPriceOptionsExtendedMedium,
      prices: [...Object.values(prices.copyPrint.A4.blackWhite)],
    },
  };
}

// High Quality - Color or Black and White - Collect data for pricing table
export function getTableDataHq() {
  return {
    hasAsterisk: false,
    tableTitle: copyPrintContentPaths.cardHq.tableHq.title,
    tableSubTitle: copyPrintContentPaths.cardHq.tableHq.subTitle,
    data: {
      headerTitles: [
        t('commonWords.prints'),
        t('commonWords.blackAndWhite'),
        t('commonWords.color'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.pricePerPrint'),
        t('commonWords.pricePerPrint'),
      ],
      options: splitPriceOptionsExtendedLow,
      prices: [...Object.values(prices.copyPrint.A4.hq)],
    },
  };
}
