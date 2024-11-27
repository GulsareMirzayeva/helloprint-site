import {
  BasePriceRangeType,
  BulkPriceRangeType,
  ExtendedBulkPriceRangeType,
  LowPriceRangeType,
  LowSplitPriceRangeType,
  MediumSplitPriceRangeType,
  PaperSizesType,
  ShortBasePriceRangeType,
  ShortBulkPriceRangeType,
} from './basicRangeTypes';

type FoldersType = {
  print: {
    A4: {
      blackWhite: {
        '80gr': BasePriceRangeType;
      };
      color: {
        '150gr': LowPriceRangeType;
        '170gr': LowPriceRangeType;
        '250gr': LowPriceRangeType;
      };
    };
  };
  custom: {
    A4: {
      color: {
        halfFold: {
          '135gr': BulkPriceRangeType;
          '170gr': BulkPriceRangeType;
          '250gr': BulkPriceRangeType;
        };
        trifold: {
          '135gr': BulkPriceRangeType;
          '170gr': BulkPriceRangeType;
          '250gr': BulkPriceRangeType;
        };
      };
    };
    A3: {
      trifold: {
        '135gr': BulkPriceRangeType;
        '170gr': BulkPriceRangeType;
        '250gr': BulkPriceRangeType;
      };
    };
  };
};

type FlyersType = {
  print: {
    A5: {
      singleSided: {
        '90gr': BasePriceRangeType;
        '150gr': BasePriceRangeType;
        '250gr': BasePriceRangeType;
      };
      doubleSided: {
        '90gr': ShortBasePriceRangeType;
        '150gr': ShortBasePriceRangeType;
        '250gr': ShortBasePriceRangeType;
      };
    };
    A6: {
      singleSided: {
        '90gr': BasePriceRangeType;
        '150gr': BasePriceRangeType;
        '250gr': BasePriceRangeType;
      };
      doubleSided: {
        '90gr': BasePriceRangeType;
        '150gr': BasePriceRangeType;
        '250gr': BasePriceRangeType;
      };
    };
  };
  custom: {
    A5: {
      doubleSided: {
        '135gr': BulkPriceRangeType;
        '170gr': BulkPriceRangeType;
        '250gr': BulkPriceRangeType;
      };
    };
    A6: {
      doubleSided: {
        '135gr': ExtendedBulkPriceRangeType;
        '170gr': ExtendedBulkPriceRangeType;
        '250gr': ExtendedBulkPriceRangeType;
      };
    };
  };
};

type PosterSizesFormatType = {
  color: {
    '80gr': LowSplitPriceRangeType;
    '160grMat': LowSplitPriceRangeType;
    '160grSatin': LowSplitPriceRangeType;
    '190grGloss': LowSplitPriceRangeType;
    '260grSatin': LowSplitPriceRangeType;
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
    '80gr': PaperSizesType;
  };
  color: {
    A3: {
      budgetColor: MediumSplitPriceRangeType;
      hqColor: MediumSplitPriceRangeType;
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
      singleSide: ShortBasePriceRangeType;
      doubleSide: ShortBasePriceRangeType;
    };
    color: {
      singleSide: ShortBasePriceRangeType;
      doubleSide: ShortBasePriceRangeType;
    };
  };
  custom: {
    singleSide: ShortBulkPriceRangeType;
    doubleSide: ShortBulkPriceRangeType;
  };
};

export type { FoldersType, FlyersType, PostersType, StickersType, CardsType };
