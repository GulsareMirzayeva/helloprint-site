import {
  stickersContentPaths,
  cardsContentPaths,
  flyersContentPaths,
  foldersContentPaths,
  postersContentPaths,
} from './translationPaths';

// Card background colors to choose from, displayed on the 'custom print'-overview page

export const stickersContent = {
  titlePath: stickersContentPaths.pageHeader.title,
  textContentPath: stickersContentPaths.pageHeader.introduction,
  pageLink: '/custom-print/stickers',
  image: stickersContentPaths.data.image,
};

export const cardsContent = {
  titlePath: cardsContentPaths.pageHeader.title,
  textContentPath: cardsContentPaths.pageHeader.introduction,
  pageLink: '/custom-print/cards',
  image: cardsContentPaths.data.image,
};

export const flyersContent = {
  titlePath: flyersContentPaths.pageHeader.title,
  textContentPath: flyersContentPaths.pageHeader.introduction,
  pageLink: '/custom-print/flyers',
  image: flyersContentPaths.data.image,
};

export const foldersContent = {
  titlePath: foldersContentPaths.pageHeader.title,
  textContentPath: foldersContentPaths.pageHeader.introduction,
  pageLink: '/custom-print/folders',
  image: foldersContentPaths.data.image,
};

export const postersContent = {
  titlePath: postersContentPaths.pageHeader.title,
  textContentPath: postersContentPaths.pageHeader.introduction,
  pageLink: '/custom-print/posters',
  image: postersContentPaths.data.image,
};
