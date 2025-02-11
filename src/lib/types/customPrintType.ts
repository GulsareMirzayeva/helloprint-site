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
  offsetPrint: FlyersMaterial;
};

type FolderFoldings = {
  halfFold?: PricingOptions; // Optional
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
  offsetPrint: FolderPaperSizes;
};

type CardCategories = {
  blackWhite: PricingCategory;
  color: PricingCategory;
};

type CustomPrintCards = {
  print: CardCategories;
  offsetPrint: PricingOptions;
};

export type CustomPrintType = {
  folders: CustomPrintFolders;
  flyers: CustomPrintFyers;
  posters: CustomPrintPosters;
  stickers: PricingOptions;
  cards: CustomPrintCards;
};

export type PageTitleType = {
  mainTitle: string;
  subTitle?: string;
  introduction: string;
  notification?: string;
};

export type CategoryCardType = {
  pageTitle: string;
  pageIntroduction: string;
  pageLink: string;
  image: string;
};
