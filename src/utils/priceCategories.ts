const SplitPriceRanges = ['1-100', '101-250', '251-500', '501-1000'] as const;
const MediumSplitPriceRanges = ['1-100', '101-250', '251-500'];
const LowSplitPriceRanges = ['1-5', '6-10', '10Plus'];
const LowPriceRanges = ['50', '100', '250', '500'];
const BasePriceRanges = ['100', '250', '500', '1000'];
const ShortBasePriceRanges = ['100', '250', '500'];
const BulkPriceRanges = ['500', '1000', '2500', '5000', '10000'];
const ShortBulkPriceRanges = ['500', '1000', '2500', '5000'];
const ExtendedBulkPriceRanges = [
  '500',
  '1000',
  '2500',
  '5000',
  '10000',
  '20000',
];
const PaperSizes = ['A2', 'B2', 'A1', 'B1', 'A0'];
const TextileTypes = ['tShirt', 'Polo', 'sweaters', 'hoody'];
const FlexAndDtgTypes = [
  'frontChestLogo',
  'frontOrBacklarge',
  'frontSmallBackLarge',
];

export {
  SplitPriceRanges,
  MediumSplitPriceRanges,
  LowSplitPriceRanges,
  LowPriceRanges,
  BasePriceRanges,
  ShortBasePriceRanges,
  BulkPriceRanges,
  ShortBulkPriceRanges,
  ExtendedBulkPriceRanges,
  PaperSizes,
  TextileTypes,
  FlexAndDtgTypes,
};
