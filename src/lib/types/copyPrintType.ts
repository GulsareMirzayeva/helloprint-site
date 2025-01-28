import { PricingCategory } from './basicOptionsTypes';

type CopyPrintColorMode = {
  budget: PricingCategory;
  hq: PricingCategory;
};

export type CopyPrintType = {
  A4: CopyPrintColorMode;
};

export type CategoryCardType = {
  titlePath: string;
  textContentPath: string;
  pageLink: string;
  bgColor: string;
  placeImageLeft: boolean;
};
