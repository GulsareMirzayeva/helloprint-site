// lib/types.ts
import {
  TextileTypes,
  FlexAndDtgTypes,
  SplitPriceRangeType,
} from './basicRangeTypes';

import {
  CardsType,
  FoldersType,
  PostersType,
  StickersType,
} from './customPrintTypes';

type CopyPrintType = {
  A4: {
    budget: {
      blackWhite: SplitPriceRangeType;
      color: SplitPriceRangeType;
    };
    hq: {
      blackWhite: SplitPriceRangeType;
      color: SplitPriceRangeType;
    };
  };
};

type CustomPrintType = {
  folders: FoldersType;
  flyers: FoldersType;
  posters: PostersType;
  stickers: StickersType;
  cards: CardsType;
};

type CustomClothingType = {
  textile: {
    blackWhite: TextileTypes;
    color: TextileTypes;
  };
  flex: FlexAndDtgTypes;
  dtg: {
    white: FlexAndDtgTypes;
    colored: FlexAndDtgTypes;
  };
};

export type Prices = {
  copyPrint: CopyPrintType;
  customPrint: CustomPrintType;
  customClothing: CustomClothingType;
};

export type DataContextType = {
  prices: Prices | null;
  error: Error | null;
  isLoading: boolean;
  setPrices: React.Dispatch<React.SetStateAction<Prices | null>>;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
