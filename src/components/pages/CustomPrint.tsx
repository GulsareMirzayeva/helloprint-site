import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import OverviewCategoryCard from '../customPrint/overview/OverviewCategoryCard';
import {
  cardsContent,
  flyersContent,
  foldersContent,
  postersContent,
  stickersContent,
} from '../../lib/customPrintOverviewCardsContent';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';
import { customPrintingContentPaths } from '../../lib/translationPaths';

export default function CustomClothing() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1000px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-4">
        <div className="flex flex-col items-center w-full overflow-scroll">
          <div className="flex flex-col gap-4 py-10 max-w-[1000px]">
            <TextBlock
              value={customPrintingContentPaths.title}
              variant={'largeTitle'}
            />
            <TextBlock
              value={customPrintingContentPaths.introduction}
              variant={'xlTitleRegular'}
            />
          </div>
          <OverviewCategoryCard cardContent={stickersContent} />
          <OverviewCategoryCard cardContent={cardsContent} />
          <OverviewCategoryCard cardContent={flyersContent} />
          <OverviewCategoryCard cardContent={foldersContent} />
          <OverviewCategoryCard cardContent={postersContent} />
          <Divider flexItem variant="middle" />
          <div className="pt-10 pb-2 max-w-[1000px]">
            <TextBlock
              value={customPrintingContentPaths.contactTitle}
              variant={'xlTitleRegular'}
            />
          </div>
          <div className="max-w-[1000px]">
            <SendMessage />
          </div>
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
