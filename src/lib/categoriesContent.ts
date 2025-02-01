import image7 from '../assets/introduction-images/image7.jpg';
import image6 from '../assets/introduction-images/image6.jpg';
import image5 from '../assets/introduction-images/image5.jpg';
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
  copyPrintContentPaths,
  customClotingContentPaths,
} from './translationPaths';

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
  bgColor: 'bg-gray-100',
  image: image2,
};

export const cardsContent = {
  titlePath: cardsContentPaths.title,
  textContentPath: cardsContentPaths.introduction,
  pageLink: '/custom-print/cards',
  bgColor: 'bg-white',
  image: image6,
};

export const flyersContent = {
  titlePath: flyersContentPaths.title,
  textContentPath: flyersContentPaths.introduction,
  pageLink: '/custom-print/flyers',
  bgColor: 'bg-gray-100',
  image: image1,
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

export const copyPrintContent = {
  title: copyPrintContentPaths.title,
  introduction: copyPrintContentPaths.introduction,
  titleLaminate: copyPrintContentPaths.titleLaminate,
  introductionBinding: copyPrintContentPaths.introductionBinding,
  image: image5,
};

export const customClothingContent = {
  title: customClotingContentPaths.title,
  introduction: customClotingContentPaths.introduction,
  subText: customClotingContentPaths.subText,
  listItem1: customClotingContentPaths.listItem1,
  listItem2: customClotingContentPaths.listItem2,
  image: image7,
};
