// This type contains all the prices in a single category like:
// "1-00":
//   "budget": x.xx,
//   "hq": x.xx
// }
export type PricingOptions = {
  [key: string]: number;
};

// This are the categories which contain all the categories like:
// "blackWhite": {
//   "1-00": {...}
// }
export type PricingCategory = {
  [key: string]: PricingOptions;
};
