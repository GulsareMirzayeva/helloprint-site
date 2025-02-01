import { useTranslation } from 'react-i18next';
import OverviewCategoryCard from '../customPrint/overview/OverviewCategoryCard';
import {
  cardsContent,
  flyersContent,
  foldersContent,
  postersContent,
  stickersContent,
} from '../../lib/categoriesContent';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';
import {
  customPrintingContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';

export default function CustomPrint() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full pt-12">
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
        <div className="flex flex-col gap-4">
          <OverviewCategoryCard cardContent={stickersContent} />
          <OverviewCategoryCard cardContent={cardsContent} />
          <OverviewCategoryCard cardContent={flyersContent} />
          <OverviewCategoryCard cardContent={foldersContent} />
          <OverviewCategoryCard cardContent={postersContent} />
        </div>
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
