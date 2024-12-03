import { TextileTypes, FlexAndDtgTypes } from '../../lib/priceCategories';
import IntroductionCustomClothing from '../customClothing/Introduction';
import PricingTable from '../elementTemplates/PricingTable';
import Footer from '../Footer';

export default function CustomClothing() {
  // The strings are paths to the requested text in the translation files (in 'i18next' folder at the root)
  const headerTitlesTextile: string[] = [
    'commonWords.prints',
    'commonWords.blackWhite',
    'commonWords.color',
  ];

  const headerTitlesFlex: string[] = [
    'customClothingPage.pricingFlexVinyl.tableHead',
    '',
  ];

  const headerTitlesDtg: string[] = [
    'customClothingPage.pricingDtg.tableHead',
    'customClothingPage.pricingDtg.tableHeadWhiteTextile',
    'customClothingPage.pricingDtg.tableHeadcolored',
  ];

  const unitsTextile: string[] = [
    'commonWords.clothingPiece',
    'commonWords.perPrint',
    'commonWords.perPrint',
  ];

  const unitsFlex: string[] = ['commonWords.prints', 'commonWords.perPrint'];

  const unitsDtg: string[] = [
    'commonWords.prints',
    'commonWords.perPrint',
    'commonWords.perPrint',
  ];

  const pricePathsTextile = {
    blackWhitePath: 'customClothing.textile.blackWhite',
    colorPath: 'customClothing.textile.color',
  };

  const pricePathsFlex = {
    path: 'customClothing.flex',
  };

  const pricePathsDtg = {
    blackWhitePath: 'customClothing.dtg.white',
    colorPath: 'customClothing.dtg.colored',
  };

  return (
    <section className="flex flex-col w-full justify-start items-center overflow-scroll">
      <IntroductionCustomClothing />
      <div className="flex flex-col justify-center gap-24 py-10 mt-10 w-full bg-gray-100 ">
        <PricingTable
          headerTitles={headerTitlesTextile}
          units={unitsTextile}
          ranges={TextileTypes}
          prices={pricePathsTextile}
        />
        <PricingTable
          headerTitles={headerTitlesFlex}
          units={unitsFlex}
          ranges={FlexAndDtgTypes}
          prices={pricePathsFlex}
        />
        <PricingTable
          headerTitles={headerTitlesDtg}
          units={unitsDtg}
          ranges={FlexAndDtgTypes}
          prices={pricePathsDtg}
        />
      </div>
      <Footer />
    </section>
  );
}
