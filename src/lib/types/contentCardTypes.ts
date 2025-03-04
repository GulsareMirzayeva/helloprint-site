import { PricingOptions } from './basicOptionsTypes';

export type HeaderType = {
  cardTitle?: string;
  cardSubTitle?: string;
  cardIntroduction: string;
  notification?: string;
};

export type PricingTableTypes = {
  headerTitles: string[];
  image?: string;
  units: string[];
  options: string[];
  prices: PricingOptions[] | number[];
};

export type TableContentType = {
  hasAsterisk?: boolean;
  tableTitle?: string;
  tableSubTitle?: string;
  data: PricingTableTypes;
};
