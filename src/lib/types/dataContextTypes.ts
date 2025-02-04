import { CopyPrintType } from './copyPrintType';
import { CustomClothingType } from './customClothing';
import { CustomPrintType } from './customPrintType';
import { FooterTermsOfSaleLinks } from './footerTermsofSaleLinkTypes';
import { stylePresetType } from './stylePresetType';

export type Prices = {
  copyPrint: CopyPrintType;
  customPrint: CustomPrintType;
  customClothing: CustomClothingType;
};

export type DataContextType = {
  stylePreset: stylePresetType;
  prices: Prices | null;
  error: Error | null;
  isLoading: boolean;
  activeTerm: FooterTermsOfSaleLinks;
  setStylePreset: React.Dispatch<React.SetStateAction<stylePresetType>>;
  setPrices: React.Dispatch<React.SetStateAction<Prices | null>>;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveTerm: React.Dispatch<React.SetStateAction<FooterTermsOfSaleLinks>>;
};
