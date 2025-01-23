import { useTranslation } from 'react-i18next';
import Footer from '../Footer';
import OverviewCategoryCard from '../customPrint/overview/OverviewCategoryCard';
import {
  cardsContent,
  flyersContent,
  foldersContent,
  postersContent,
  stickersContent,
} from '../../lib/customPrintOverviewCardsContent';

export default function CustomClothing() {
  useTranslation();

  return (
    <div className="flex flex-col items-center w-full overflow-scroll">
      <OverviewCategoryCard cardContent={stickersContent} />
      <OverviewCategoryCard cardContent={cardsContent} />
      <OverviewCategoryCard cardContent={flyersContent} />
      <OverviewCategoryCard cardContent={foldersContent} />
      <OverviewCategoryCard cardContent={postersContent} />
      <Footer />
    </div>
  );
}
