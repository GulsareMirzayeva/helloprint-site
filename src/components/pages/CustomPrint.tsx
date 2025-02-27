import OverviewCategoryCard from '../elementTemplates/contentHolders/CategoryOverviewCard';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';
import { useTranslation } from 'react-i18next';
import {
  customPrintOverviewContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import {
  cardsPageContent,
  flyersPageContent,
  foldersPageContent,
  postersPageContent,
  stickersPageContent,
} from '../../data/pages/pagesContent';
import { Divider } from '@mui/material';
import { useData } from '../../context/DataContext';
import PageTitleAndIntroduction from '../elementTemplates/PageTitleAndIntroduction';

export default function CustomPrint() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Collect the content of categories that will be displayed in a card on the overview page
  const cardItems = [
    stickersPageContent,
    cardsPageContent,
    flyersPageContent,
    foldersPageContent,
    postersPageContent,
  ];

  return (
    <div
      className={`
      ${stylePreset.overall.backgroundColor}
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
    `}
    >
      <div></div> {/* Left empty colomn */}
      {/* Title and introduction text at the top of the page */}
      <div className="flex flex-col items-start justify-start w-full px-2 py-12">
        <PageTitleAndIntroduction
          title={customPrintOverviewContentPaths.overviewTitle}
          introduction={customPrintOverviewContentPaths.overviewIntroduction}
        />

        {/* Create a overview card for each category */}
        <div className="flex flex-col gap-8 py-8">
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
            marginTop: '16px',
            marginBottom: '64px',
          }}
          flexItem
          variant="fullWidth"
        />
        {/* Display the contact section at the bottom of the page */}
        <div className="pb-8">
          <TextBlock
            value={shopInfoPaths.contactTitle}
            variant={'subTitleMedium'}
          />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
