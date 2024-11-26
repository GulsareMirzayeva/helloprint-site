// lib/types.ts
type SplitPriceRange = {
  '1-100': number;
  '101-250': number;
  '251-500': number;
  '501-1000': number;
};

type MediumSplitPriceRange = {
  '1-100': number;
  '101-250': number;
  '251-500': number;
};

type LowSplitPriceRange = {
  '1-5': number;
  '6-10': number;
  '10Plus': number;
};

type LowPriceRange = {
  '50': number;
  '100': number;
  '250': number;
  '500': number;
};

type BasePriceRange = {
  '100': number;
  '250': number;
  '500': number;
  '1000': number;
};

type ShortBasePriceRange = {
  '100': number;
  '250': number;
  '500': number;
};

type BulkPriceRange = {
  '500': number;
  '1000': number;
  '2500': number;
  '5000': number;
  '10000': number;
};

type ShortBulkPriceRange = {
  '500': number;
  '1000': number;
  '2500': number;
  '5000': number;
};

type ExtendedBulkPriceRange = {
  '500': number;
  '1000': number;
  '2500': number;
  '5000': number;
  '10000': number;
  '20000': number;
};

type PaperSizes = {
  A2: number;
  B2: number;
  A1: number;
  B1: number;
  A0: number;
};

type TextileTypes = {
  tShirt: number;
  polo: number;
  sweaters: number;
  hoody: number;
};

type FlexAndDtgTypes = {
  frontChestLogo: number;
  frontOrBacklarge: number;
  frontSmallBackLarge: number;
};

type PosterSizesFormat = {
  color: {
    '80gr': LowSplitPriceRange;
    '160grMat': LowSplitPriceRange;
    '160grSatin': LowSplitPriceRange;
    '190grGloss': LowSplitPriceRange;
    '260grSatin': LowSplitPriceRange;
    polypropylene: {
      perPiece: number;
    };
    '260grHandMade': {
      perPiece: number;
    };
  };
};

type CopyPrintType = {
  A4: {
    budget: {
      blackWhite: SplitPriceRange;
      color: SplitPriceRange;
    };
    hq: {
      blackWhite: SplitPriceRange;
      color: SplitPriceRange;
    };
  };
};

type FoldersType = {
  print: {
    A4: {
      blackWhite: {
        '80gr': BasePriceRange;
      };
      color: {
        '150gr': LowPriceRange;
        '170gr': LowPriceRange;
        '250gr': LowPriceRange;
      };
    };
  };
  custom: {
    A4: {
      color: {
        halfFold: {
          '135gr': BulkPriceRange;
          '170gr': BulkPriceRange;
          '250gr': BulkPriceRange;
        };
        trifold: {
          '135gr': BulkPriceRange;
          '170gr': BulkPriceRange;
          '250gr': BulkPriceRange;
        };
      };
    };
    A3: {
      trifold: {
        '135gr': BulkPriceRange;
        '170gr': BulkPriceRange;
        '250gr': BulkPriceRange;
      };
    };
  };
};

type FlyersType = {
  print: {
    A5: {
      singleSided: {
        '90gr': BasePriceRange;
        '150gr': BasePriceRange;
        '250gr': BasePriceRange;
      };
      doubleSided: {
        '90gr': ShortBasePriceRange;
        '150gr': ShortBasePriceRange;
        '250gr': ShortBasePriceRange;
      };
    };
    A6: {
      singleSided: {
        '90gr': BasePriceRange;
        '150gr': BasePriceRange;
        '250gr': BasePriceRange;
      };
      doubleSided: {
        '90gr': BasePriceRange;
        '150gr': BasePriceRange;
        '250gr': BasePriceRange;
      };
    };
  };
  custom: {
    A5: {
      doubleSided: {
        '135gr': BulkPriceRange;
        '170gr': BulkPriceRange;
        '250gr': BulkPriceRange;
      };
    };
    A6: {
      doubleSided: {
        '135gr': ExtendedBulkPriceRange;
        '170gr': ExtendedBulkPriceRange;
        '250gr': ExtendedBulkPriceRange;
      };
    };
  };
};

type PostersType = {
  blackWhite: {
    '80gr': PaperSizes;
  };
  color: {
    A3: {
      budgetColor: MediumSplitPriceRange;
      hqColor: MediumSplitPriceRange;
    };
    A2: PosterSizesFormat;
    B2: PosterSizesFormat;
    A1: PosterSizesFormat;
    B1: PosterSizesFormat;
    A0: PosterSizesFormat;
  };
};

type StickersType = {
  perA4: number;
  perSquareMeter: number;
};

type CardsType = {
  print: {
    blackWhite: {
      singleSide: ShortBasePriceRange;
      doubleSide: ShortBasePriceRange;
    };
    color: {
      singleSide: ShortBasePriceRange;
      doubleSide: ShortBasePriceRange;
    };
  };
  custom: {
    singleSide: ShortBulkPriceRange;
    doubleSide: ShortBulkPriceRange;
  };
};

type CustomPrintType = {
  folders: FoldersType;
  flyers: FlyersType;
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
