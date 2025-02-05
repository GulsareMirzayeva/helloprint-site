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
import { Divider } from '@mui/material';
import { useData } from '../../context/DataContext';

export default function CustomPrint() {
  useTranslation(); // Make the content directly translatable
  const { stylePreset } = useData();

  // Collect the content of categories that will be displayed in a card on the overview page
  const cardItems = [
    stickersContent,
    cardsContent,
    flyersContent,
    foldersContent,
    postersContent,
  ];

  return (
    <div
      className={`
      ${stylePreset.overall.backgroundColor}
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
    `}
    >
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full pt-12">
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
        <div className="flex flex-col gap-8 pb-8">
          {cardItems.map((item, index) => (
            <OverviewCategoryCard
              key={index}
              cardContent={item}
              bgColor={
                index % 2 === 0
                  ? stylePreset.categoryCard.backgroundColorLight
                  : stylePreset.categoryCard.backgroundColorDark
              }
            />
          ))}
        </div>

        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '64px',
            marginBottom: '16px',
          }}
          flexItem
          variant="fullWidth"
        />
        {/* Display the contact section at the bottom of the page */}
        <div className="pb-2">
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
