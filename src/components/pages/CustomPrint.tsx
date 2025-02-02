import OverviewCategoryCard from '../customPrint/overview/OverviewCategoryCard';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';
import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import {
  cardsContent,
  flyersContent,
  foldersContent,
  postersContent,
  stickersContent,
} from '../../lib/categoriesContent';
import { cardBgColors } from '../../lib/stylePresets';
import { Divider } from '@mui/material';

export default function CustomPrint() {
  useTranslation(); // Make the content directly translatable

  // Collect the content of categories that will be displayed in a card on the overview page
  const cardItems = [
    stickersContent,
    cardsContent,
    flyersContent,
    foldersContent,
    postersContent,
  ];

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full pt-8">
        {/* Title and introduction text at the top of the page */}
        <div className="flex flex-col pb-16 px-2">
          <TextBlock
            value={customPrintingContentPaths.title}
            variant={'pageTitle'}
          />
          <TextBlock
            value={customPrintingContentPaths.introduction}
            variant={'body'}
          />
        </div>

        {/* Create a overview card for each category */}
        <div className="flex flex-col gap-4 pb-8">
          {cardItems.map((item, index) => (
            <OverviewCategoryCard
              key={index}
              cardContent={item}
              bgColor={
                index % 2 === 0 ? cardBgColors.primary : cardBgColors.secondary
              }
            />
          ))}
        </div>

        <Divider flexItem variant="fullWidth" />
        {/* Display the contact section at the bottom of the page */}
        <div className="pt-16 px-2">
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full px-2">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
