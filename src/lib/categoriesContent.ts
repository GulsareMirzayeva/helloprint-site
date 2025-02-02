import {
  stickersContentPaths,
  cardsContentPaths,
  flyersContentPaths,
  foldersContentPaths,
  postersContentPaths,
} from './translationPaths';

// Card background colors to choose from, displayed on the 'custom print'-overview page
const bgColors = ['bg-white', 'bg-gray-100'];

export const stickersContent = {
  titlePath: stickersContentPaths.title,
  textContentPath: stickersContentPaths.introduction,
  materialTitle: stickersContentPaths.materialTitle,
  materialContent: stickersContentPaths.materialContent,
  listItem1: 'customPrintPage.stickers.listItem1',
  listItem2: 'customPrintPage.stickers.listItem2',
  listItem3: 'customPrintPage.stickers.listItem3',
  listItem4: 'customPrintPage.stickers.listItem4',
  pageLink: '/custom-print/stickers',
  bgColor: bgColors[1],
  image: stickersContentPaths.image,
};

export const cardsContent = {
  titlePath: cardsContentPaths.title,
  textContentPath: cardsContentPaths.introduction,
  pageLink: '/custom-print/cards',
  bgColor: bgColors[0],
  image: cardsContentPaths.image,
};

export const flyersContent = {
  titlePath: flyersContentPaths.title,
  textContentPath: flyersContentPaths.introduction,
  pageLink: '/custom-print/flyers',
  bgColor: bgColors[1],
  image: flyersContentPaths.image,
};

export const foldersContent = {
  titlePath: foldersContentPaths.title,
  textContentPath: foldersContentPaths.introduction,
  pageLink: '/custom-print/folders',
  bgColor: bgColors[0],
  image: foldersContentPaths.image,
};

export const postersContent = {
  titlePath: postersContentPaths.title,
  textContentPath: postersContentPaths.introduction,
  pageLink: '/custom-print/posters',
  bgColor: bgColors[1],
  image: postersContentPaths.image,
};
