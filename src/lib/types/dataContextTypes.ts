import { CopyPrintType } from './copyPrintType';
import { CustomClothingType } from './customClothing';
import { CustomPrintType } from './customPrintType';

export type Prices = {
  copyPrint: CopyPrintType;
  customPrint: CustomPrintType;
  customClothing: CustomClothingType;
};

type ShopInfo = {
  [key: string]: string;
};

export type DataContextType = {
  shopInfo: ShopInfo;
  prices: Prices | null;
  error: Error | null;
  isLoading: boolean;
  setPrices: React.Dispatch<React.SetStateAction<Prices | null>>;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
