// Definities van de individuele types voor de ranges
type SplitPriceRangesType = '1-100' | '101-250' | '251-500' | '501-1000';
type MediumSplitPriceRangesType = '1-100' | '101-250' | '251-500';
type LowSplitPriceRangesType = '1-5' | '6-10' | '10Plus';
type LowPriceRangesType = '50' | '100' | '250' | '500';
type BasePriceRangesType = '100' | '250' | '500' | '1000';
type ShortBasePriceRangesType = '100' | '250' | '500';
type BulkPriceRangesType = '500' | '1000' | '2500' | '5000' | '10000';
type ShortBulkPriceRangesType = '500' | '1000' | '2500' | '5000';
type ExtendedBulkPriceRangesType =
  | '500'
  | '1000'
  | '2500'
  | '5000'
  | '10000'
  | '20000';
type PaperSizesType = 'A2' | 'B2' | 'A1' | 'B1' | 'A0';
type TextileTypes = 'tShirt' | 'polo' | 'sweaters' | 'hoody';
type FlexAndDtgTypes =
  | 'frontChestLogo'
  | 'frontOrBacklarge'
  | 'frontSmallBackLarge';

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
