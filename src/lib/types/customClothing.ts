import { PricingOptions } from './basicOptionsTypes';

type TextileTypes = {
  tShirt: PricingOptions;
  polo: PricingOptions;
  sweaters: PricingOptions;
  hoody: PricingOptions;
};

type FlexTypes = {
  allColors: PricingOptions;
};

type DtgTypes = {
  frontChestLogo: PricingOptions;
  frontOrBacklarge: PricingOptions;
  frontSmallBackLarge: PricingOptions;
};

export type CustomClothingType = {
  textile: TextileTypes;
  flex: FlexTypes;
  dtg: DtgTypes;
};
