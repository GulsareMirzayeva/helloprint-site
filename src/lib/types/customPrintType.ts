import { PricingCategory, PricingOptions } from './basicOptionsTypes';

type CustomPrintPosters = {
  blackWhite: PricingCategory;
  color: PricingCategory;
};

type FlyersPrintSides = {
  singleSided: PricingOptions;
  doubleSided: PricingOptions;
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
  halfFold?: PricingOptions;
  triFold: PricingOptions;
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
  customPrint: PricingOptions;
};

export type CustomPrintType = {
  folders: CustomPrintFolders;
  flyers: CustomPrintFyers;
  posters: CustomPrintPosters;
  stickers: PricingOptions;
  cards: CustomPrintCards;
};
