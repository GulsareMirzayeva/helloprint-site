import {
  BasePriceRanges,
  BulkPriceRanges,
  ExtendedBulkPriceRanges,
  LowPriceRanges,
  LowSplitPriceRanges,
  MediumSplitPriceRanges,
  PaperSizes,
  ShortBasePriceRanges,
  ShortBulkPriceRanges,
} from './basicRangeTypes';

type FoldersType = {
  print: {
    A4: {
      blackWhite: {
        '80gr': BasePriceRanges;
      };
      color: {
        '150gr': LowPriceRanges;
        '170gr': LowPriceRanges;
        '250gr': LowPriceRanges;
      };
    };
  };
  custom: {
    A4: {
      color: {
        halfFold: {
          '135gr': BulkPriceRanges;
          '170gr': BulkPriceRanges;
          '250gr': BulkPriceRanges;
        };
        trifold: {
          '135gr': BulkPriceRanges;
          '170gr': BulkPriceRanges;
          '250gr': BulkPriceRanges;
        };
      };
    };
    A3: {
      trifold: {
        '135gr': BulkPriceRanges;
        '170gr': BulkPriceRanges;
        '250gr': BulkPriceRanges;
      };
    };
  };
};

type FlyersType = {
  print: {
    A5: {
      singleSided: {
        '90gr': BasePriceRanges;
        '150gr': BasePriceRanges;
        '250gr': BasePriceRanges;
      };
      doubleSided: {
        '90gr': ShortBasePriceRanges;
        '150gr': ShortBasePriceRanges;
        '250gr': ShortBasePriceRanges;
      };
    };
    A6: {
      singleSided: {
        '90gr': BasePriceRanges;
        '150gr': BasePriceRanges;
        '250gr': BasePriceRanges;
      };
      doubleSided: {
        '90gr': BasePriceRanges;
        '150gr': BasePriceRanges;
        '250gr': BasePriceRanges;
      };
    };
  };
  custom: {
    A5: {
      doubleSided: {
        '135gr': BulkPriceRanges;
        '170gr': BulkPriceRanges;
        '250gr': BulkPriceRanges;
      };
    };
    A6: {
      doubleSided: {
        '135gr': ExtendedBulkPriceRanges;
        '170gr': ExtendedBulkPriceRanges;
        '250gr': ExtendedBulkPriceRanges;
      };
    };
  };
};

type PosterSizesFormatType = {
  color: {
    '80gr': LowSplitPriceRanges;
    '160grMat': LowSplitPriceRanges;
    '160grSatin': LowSplitPriceRanges;
    '190grGloss': LowSplitPriceRanges;
    '260grSatin': LowSplitPriceRanges;
    polypropylene: {
      perPiece: number;
    };
    '260grHandMade': {
      perPiece: number;
    };
  };
};

type PostersType = {
  blackWhite: {
    '80gr': PaperSizes;
  };
  color: {
    A3: {
      budgetColor: MediumSplitPriceRanges;
      hqColor: MediumSplitPriceRanges;
    };
    A2: PosterSizesFormatType;
    B2: PosterSizesFormatType;
    A1: PosterSizesFormatType;
    B1: PosterSizesFormatType;
    A0: PosterSizesFormatType;
  };
};

type StickersType = {
  perA4: number;
  perSquareMeter: number;
};

type CardsType = {
  print: {
    blackWhite: {
      singleSide: ShortBasePriceRanges;
      doubleSide: ShortBasePriceRanges;
    };
    color: {
      singleSide: ShortBasePriceRanges;
      doubleSide: ShortBasePriceRanges;
    };
  };
  custom: {
    singleSide: ShortBulkPriceRanges;
    doubleSide: ShortBulkPriceRanges;
  };
};

export type { FoldersType, FlyersType, PostersType, StickersType, CardsType };
