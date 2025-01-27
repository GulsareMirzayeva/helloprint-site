import { useTranslation } from 'react-i18next';
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
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full pt-20">
        <div className="flex flex-col pb-16">
          <TextBlock
            value={customPrintingContentPaths.title}
            variant={'pageTitle'}
          />
          <TextBlock
            value={customPrintingContentPaths.introduction}
            variant={'body'}
          />
        </div>
        <OverviewCategoryCard cardContent={stickersContent} />
        <OverviewCategoryCard cardContent={cardsContent} />
        <OverviewCategoryCard cardContent={flyersContent} />
        <OverviewCategoryCard cardContent={foldersContent} />
        <OverviewCategoryCard cardContent={postersContent} />
        <div className="pt-8 pb-2">
          <TextBlock
            value={customPrintingContentPaths.contactTitle}
            variant={'subTitle'}
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
