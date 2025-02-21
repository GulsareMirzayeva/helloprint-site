const basePriceOptions: string[] = ['100', '250', '500', '1000'];
const bulkPriceOptions: string[] = ['500', '1000', '2500', '5000', '10000'];
const lowPriceOptions: string[] = ['50', '100', '250', '500'];
const paperSizes: string[] = ['A2', 'B2', 'A1', 'B1', 'A0'];
const shortBasePriceOptions: string[] = ['100', '250', '500'];
const shortBulkPriceOptions: string[] = ['500', '1000', '2500', '5000'];
const splitPriceOptions: string[] = ['1-100', '101-250', '251-500', '501-1000'];
const splitPriceOptionsShort: string[] = ['1-100', '101-250', '251-500'];
const splitPriceOptionsShortLow: string[] = ['1-10', '11-100', '101-250'];
const splitPriceOptionsExtendedLow: string[] = [
  '1-10',
  '11-100',
  '101-250',
  '251-500',
];
const splitPriceOptionsExtendedMedium: string[] = [
  '1-10',
  '11-100',
  '101-500',
  '501-1000',
];
const splitPriceOptionsExtendedHigh: string[] = [
  '1-10',
  '11-100',
  '101-1000',
  '1000+',
];
const extendedBulkPriceOptions: string[] = [
  '500',
  '1000',
  '2500',
  '5000',
  '10000',
  '20000',
];

export {
  splitPriceOptionsShort,
  splitPriceOptionsShortLow,
  splitPriceOptionsExtendedLow,
  splitPriceOptionsExtendedMedium,
  splitPriceOptionsExtendedHigh,
  splitPriceOptions,
  lowPriceOptions,
  basePriceOptions,
  shortBasePriceOptions,
  bulkPriceOptions,
  shortBulkPriceOptions,
  extendedBulkPriceOptions,
  paperSizes,
};
