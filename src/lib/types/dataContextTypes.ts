import { CopyPrintType } from './copyPrintType';
import { CustomClothingType } from './customClothing';
import { CustomPrintType } from './customPrintType';
import { FooterTermsOfSaleLinks } from './footerTermsofSaleLinkTypes';

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
  activeTerm: FooterTermsOfSaleLinks;
  setPrices: React.Dispatch<React.SetStateAction<Prices | null>>;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveTerm: React.Dispatch<React.SetStateAction<FooterTermsOfSaleLinks>>;
};
