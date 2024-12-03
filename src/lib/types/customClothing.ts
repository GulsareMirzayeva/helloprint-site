import { PricingRange } from './basicRangeTypes';

type TextileTypes = {
  tShirt: PricingRange;
  polo: PricingRange;
  sweaters: PricingRange;
  hoody: PricingRange;
};

type DtgTypes = {
  frontChestLogo: PricingRange;
  frontOrBacklarge: PricingRange;
  frontSmallBackLarge: PricingRange;
};

export type CustomClothingType = {
  textile: TextileTypes;
  flex: PricingRange;
  dtg: DtgTypes;
};
