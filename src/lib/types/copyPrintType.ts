import { PricingCategory } from './basicOptionsTypes';

type CopyPrintColorMode = {
  blackWhite: PricingCategory;
  color: PricingCategory;
};

export type CopyPrintType = {
  A4: CopyPrintColorMode;
};

export type CardContentType = {
  titlePath: string;
  textContentPath: string;
  pageLink: string;
  bgColor: string;
  placeImageLeft: boolean;
};
