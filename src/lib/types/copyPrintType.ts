import { PricingCategory } from './basicRangeTypes';

type CopyPrintColorMode = {
  blackWhite: PricingCategory;
  color: PricingCategory;
};

export type CopyPrintType = {
  A4: CopyPrintColorMode;
};
