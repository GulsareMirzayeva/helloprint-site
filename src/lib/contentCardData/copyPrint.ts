import { copyPrintContentPaths } from '../translationPaths';
import { t } from 'i18next';
import {
  splitPriceOptionsExtendedHigh,
  splitPriceOptionsExtendedLow,
} from '../priceCategories';

// Budget Color- Collect data for pricing table
const tableDataBudgetColor = {
  hasAsterisk: true,
  title: copyPrintContentPaths.cardBudget.tableColor.title,
  subTitle: copyPrintContentPaths.cardBudget.tableColor.subTitle,
  data: {
    headerTitles: [t('commonWords.prints'), t('commonWords.color')],
    units: [t('commonWords.amount'), t('commonWords.pricePerPrint')],
    options: splitPriceOptionsExtendedHigh,
    prices: [...Object.values(prices.copyPrint.A4.color)],
  },
};

// Budget Black and White - Collect data for pricing table
const tableDataBudgetBlackAndWhite = {
  hasAsterisk: true,
  title: copyPrintContentPaths.cardBudget.tableBlackAndWhite.title,
  subTitle: copyPrintContentPaths.cardBudget.tableBlackAndWhite.subTitle,
  data: {
    headerTitles: [t('commonWords.prints'), t('commonWords.blackAndWhite')],
    units: [t('commonWords.amount'), t('commonWords.pricePerPrint')],
    options: splitPriceOptionsExtendedHigh,
    prices: [...Object.values(prices.copyPrint.A4.blackWhite)],
  },
};

// High Quality - Color or Black and White - Collect data for pricing table
const tableDataHq = {
  hasAsterisk: false,
  title: copyPrintContentPaths.cardHq.tableHq.title,
  subTitle: copyPrintContentPaths.cardHq.tableHq.subTitle,
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

// Export a list with all table data
export const tableDataList = [
  tableDataBudgetColor,
  tableDataBudgetBlackAndWhite,
  tableDataHq,
];
