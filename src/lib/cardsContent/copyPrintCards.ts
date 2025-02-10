import { t } from 'i18next';
import { prices } from '../../api/data/prices';
import {
  splitPriceOptionsExtendedHigh,
  splitPriceOptionsExtendedLow,
} from '../priceCategories';
import { copyPrintContentPaths } from '../translationPaths';

// Budget Color- Collect data for pricing table
export function getTableDataBudgetColor() {
  return {
    hasAsterisk: true,
    tableTitle: copyPrintContentPaths.cardBudget.tableColor.title,
    tableSubTitle: copyPrintContentPaths.cardBudget.tableColor.subTitle,
    data: {
      headerTitles: [t('commonWords.prints'), t('commonWords.color')],
      units: [t('commonWords.amount'), t('commonWords.pricePerPrint')],
      options: splitPriceOptionsExtendedHigh,
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
      options: splitPriceOptionsExtendedHigh,
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
        t('commonWords.color'),
        t('commonWords.blackAndWhite'),
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
