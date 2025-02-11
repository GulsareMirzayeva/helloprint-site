import { t } from 'i18next';
import { prices } from '../../prices/prices';

export function getTableLargeFormat() {
  return {
    hasAsterisk: false,
    tableTitle: t(
      'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.header.title'
    ),
    tableSubTitle: t(
      'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.header.subTitle'
    ),
    data: {
      headerTitles: [t('commonWords.format'), t('commonWords.pricePerPrint')],
      units: [],
      options: [
        t(
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.rowHeaders.headerOne'
        ),
        t(
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.rowHeaders.headerTwo'
        ),
      ],
      prices: prices ? [...Object.values(prices.customPrint.stickers)] : [],
    },
  };
}
