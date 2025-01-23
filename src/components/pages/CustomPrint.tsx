import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import Footer from '../Footer';
import OverviewCategoryCard from '../customPrint/overview/OverviewCategoryCard';
import {
  cardsContent,
  flyersContent,
  foldersContent,
  postersContent,
  stickersContent,
} from '../../lib/customPrintOverviewCardsContent';
import MessageOptions from '../contact/MessageOptions';
import { TextBlock } from '../elementTemplates/TextBlock';
import { customPrintingContentPaths } from '../../lib/translationPaths';

export default function CustomClothing() {
  useTranslation();

  return (
    <div className="flex flex-col items-center w-full overflow-scroll">
      <div className="py-10 max-w-[1000px]">
        <TextBlock
          value={customPrintingContentPaths.title}
          variant={'largeTitle'}
        />
        <br />
        <TextBlock
          value={customPrintingContentPaths.introduction}
          variant={'xl2TitleRegular'}
        />
      </div>
      <OverviewCategoryCard cardContent={stickersContent} />
      <OverviewCategoryCard cardContent={cardsContent} />
      <OverviewCategoryCard cardContent={flyersContent} />
      <OverviewCategoryCard cardContent={foldersContent} />
      <OverviewCategoryCard cardContent={postersContent} />
      <Divider flexItem variant="middle" />
      <div className="pt-10 max-w-[1020px]">
        <TextBlock
          value={customPrintingContentPaths.contactTitle}
          variant={'xl2TitleRegular'}
        />
      </div>
      <MessageOptions />
      <Footer />
    </div>
  );
}
