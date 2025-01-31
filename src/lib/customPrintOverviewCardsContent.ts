import imageStickers from '../assets/magnifying-glass-7747796_640.jpg';
import imageCards from '../assets/magnifying-glass-7747796_640.jpg';
import imageFlyers from '../assets/magnifying-glass-7747796_640.jpg';
import imageFolders from '../assets/magnifying-glass-7747796_640.jpg';
import imagePosters from '../assets/magnifying-glass-7747796_640.jpg';

import {
  stickersContentPaths,
  cardsContentPaths,
  flyersContentPaths,
  foldersContentPaths,
  postersContentPaths,
} from './translationPaths';

export const stickersContent = {
  titlePath: stickersContentPaths.title,
  textContentPath: stickersContentPaths.introduction,
  pageLink: '/custom-print/stickers',
  bgColor: 'bg-gray-100',
  image: imageStickers,
};

export const cardsContent = {
  titlePath: cardsContentPaths.title,
  textContentPath: cardsContentPaths.introduction,
  pageLink: '/custom-print/cards',
  bgColor: 'bg-white',
  image: imageCards,
};

export const flyersContent = {
  titlePath: flyersContentPaths.title,
  textContentPath: flyersContentPaths.introduction,
  pageLink: '/custom-print/flyers',
  bgColor: 'bg-gray-100',
  image: imageFlyers,
};

export const foldersContent = {
  titlePath: foldersContentPaths.title,
  textContentPath: foldersContentPaths.introduction,
  pageLink: '/custom-print/folders',
  bgColor: 'bg-white',
  image: imageFolders,
};

export const postersContent = {
  titlePath: postersContentPaths.title,
  textContentPath: postersContentPaths.introduction,
  pageLink: '/custom-print/posters',
  bgColor: 'bg-gray-100',
  image: imagePosters,
};
