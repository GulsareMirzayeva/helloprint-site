type SplitPriceRangesType = {
  '1-100': number;
  '101-250': number;
  '251-500': number;
  '501-1000': number;
};

type MediumSplitPriceRangesType = {
  '1-100': number;
  '101-250': number;
  '251-500': number;
};

type LowSplitPriceRangesType = {
  '1-5': number;
  '6-10': number;
  '10Plus': number;
};

type LowPriceRangesType = {
  '50': number;
  '100': number;
  '250': number;
  '500': number;
};

type BasePriceRangesType = {
  '100': number;
  '250': number;
  '500': number;
  '1000': number;
};

type ShortBasePriceRangesType = {
  '100': number;
  '250': number;
  '500': number;
};

type BulkPriceRangesType = {
  '500': number;
  '1000': number;
  '2500': number;
  '5000': number;
  '10000': number;
};

type ShortBulkPriceRangesType = {
  '500': number;
  '1000': number;
  '2500': number;
  '5000': number;
};

type ExtendedBulkPriceRangesType = {
  '500': number;
  '1000': number;
  '2500': number;
  '5000': number;
  '10000': number;
  '20000': number;
};

type PaperSizesType = {
  A2: number;
  B2: number;
  A1: number;
  B1: number;
  A0: number;
};

type TextileTypes = {
  tShirt: number;
  polo: number;
  sweaters: number;
  hoody: number;
};

type FlexAndDtgTypes = {
  frontChestLogo: number;
  frontOrBacklarge: number;
  frontSmallBackLarge: number;
};

export type {
  SplitPriceRangesType,
  MediumSplitPriceRangesType,
  LowSplitPriceRangesType,
  LowPriceRangesType,
  BasePriceRangesType,
  ShortBasePriceRangesType,
  BulkPriceRangesType,
  ShortBulkPriceRangesType,
  ExtendedBulkPriceRangesType,
  PaperSizesType,
  TextileTypes,
  FlexAndDtgTypes,
};
