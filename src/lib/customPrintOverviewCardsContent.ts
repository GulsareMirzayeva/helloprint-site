import image6 from '../assets/introduction-images/image6.jpg';
import image4 from '../assets/introduction-images/image4.jpg';
import image3 from '../assets/introduction-images/image3.jpg';
import image2 from '../assets/introduction-images/image2.jpg';
import image1 from '../assets/introduction-images/image1.jpg';

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
  image: image2,
};

export const cardsContent = {
  titlePath: cardsContentPaths.title,
  textContentPath: cardsContentPaths.introduction,
  pageLink: '/custom-print/cards',
  bgColor: 'bg-white',
  image: image1,
};

export const flyersContent = {
  titlePath: flyersContentPaths.title,
  textContentPath: flyersContentPaths.introduction,
  pageLink: '/custom-print/flyers',
  bgColor: 'bg-gray-100',
  image: image6,
};

export const foldersContent = {
  titlePath: foldersContentPaths.title,
  textContentPath: foldersContentPaths.introduction,
  pageLink: '/custom-print/folders',
  bgColor: 'bg-white',
  image: image3,
};

export const postersContent = {
  titlePath: postersContentPaths.title,
  textContentPath: postersContentPaths.introduction,
  pageLink: '/custom-print/posters',
  bgColor: 'bg-gray-100',
  image: image4,
};
