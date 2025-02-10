import { CopyPrintType } from './copyPrintType';
import { CustomClothingType } from './customClothing';
import { CustomPrintType } from './customPrintType';
import { FooterTermsOfSaleLinks } from './footerTermsofSaleLinkTypes';
import { StylePresetType } from './stylePresetType';

export type Prices = {
  copyPrint: CopyPrintType;
  customPrint: CustomPrintType;
  customClothing: CustomClothingType;
};

export type DataContextType = {
  darkMode: boolean;
  stylePreset: StylePresetType;
  prices: Prices | null;
  error: Error | null;
  isLoading: boolean;
  activeTerm: FooterTermsOfSaleLinks;
  setStylePreset: React.Dispatch<React.SetStateAction<StylePresetType>>;
  // setPrices: React.Dispatch<React.SetStateAction<Prices | null>>;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveTerm: React.Dispatch<React.SetStateAction<FooterTermsOfSaleLinks>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
