import { t } from 'i18next';
import { prices } from '../../prices/prices';

export function getTableLargeFormat() {
  return {
    hasAsterisk: false,
    tableTitle: '',
    tableSubTitle: '',
    data: {
      headerTitles: [
        t(
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.columnHeaders.headerOne'
        ),
        t(
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.columnHeaders.headerTwo'
        ),
      ],
      units: [],
      options: [
        t(
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.rowHeaders.headerOne'
        ),
      ],
      prices: prices ? [...Object.values(prices.customPrint.stickers)] : [],
    },
  };
}
