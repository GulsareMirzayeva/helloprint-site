import { PricingCategory, PricingRange } from './basicRangeTypes';

type CustomPrintPosters = {
  blackWhite: PricingCategory;
  color: PricingCategory;
};

type FlyersPrintSides = {
  singleSided: PricingRange;
  doubleSided: PricingRange;
};

type FlyersMaterial = {
  A5: FlyersPrintSides;
  A6: FlyersPrintSides;
};

type CustomPrintFyers = {
  print: FlyersMaterial;
  customPrint: FlyersMaterial;
};

type FolderFoldings = {
  halfFold?: PricingRange;
  triFold: PricingRange;
};

type FolderColors = {
  color: FolderFoldings;
};

type FolderPaperSizes = {
  A4: FolderColors;
  A3: FolderColors;
};

type Material = {
  [key: string]: PricingCategory;
};

type CustomPrintFolders = {
  print: Material;
  customPrint: FolderPaperSizes;
};

type CardCategories = {
  blackWhite: PricingCategory;
  color: PricingCategory;
};

type CustomPrintCards = {
  print: CardCategories;
  customPrint: PricingRange;
};

export type CustomPrintType = {
  folders: CustomPrintFolders;
  flyers: CustomPrintFyers;
  posters: CustomPrintPosters;
  stickers: PricingRange;
  cards: CustomPrintCards;
};
