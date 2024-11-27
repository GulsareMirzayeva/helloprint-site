const SplitPriceRange = ['1-100', '101-250', '251-500', '501-1000'] as const;
const MediumSplitPriceRange = ['1-100', '101-250', '251-500'];
const LowSplitPriceRange = ['1-5', '6-10', '10Plus'];
const LowPriceRange = ['50', '100', '250', '500'];
const BasePriceRange = ['100', '250', '500', '1000'];
const ShortBasePriceRange = ['100', '250', '500'];
const BulkPriceRange = ['500', '1000', '2500', '5000', '10000'];
const ShortBulkPriceRange = ['500', '1000', '2500', '5000'];
const ExtendedBulkPriceRange = [
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
  SplitPriceRange,
  MediumSplitPriceRange,
  LowSplitPriceRange,
  LowPriceRange,
  BasePriceRange,
  ShortBasePriceRange,
  BulkPriceRange,
  ShortBulkPriceRange,
  ExtendedBulkPriceRange,
  PaperSizes,
  TextileTypes,
  FlexAndDtgTypes,
};
