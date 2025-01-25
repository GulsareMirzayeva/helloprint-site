import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { homeContentPaths } from '../../../lib/translationPaths';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { CategoryCardType } from '../../../lib/types/copyPrintType';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function OverviewCategoryCard({
  cardContent,
}: {
  cardContent: CategoryCardType;
}) {
  return (
    <section
      className={`${cardContent.bgColor} flex items-start my-8 max-w-[1000px]`}
    >
      {/* Place image left to the content */}
      {cardContent.placeImageLeft && (
        <div className="p-8 max-w-[50%]">
          <img src={image1} alt="" />
        </div>
      )}

      {/* Introduction cardContent */}
      <div className="px-4 py-8 max-w-[50%]">
        <div className="flex flex-col justify-start gap-4">
          <TextBlock value={cardContent.titlePath} variant="title" />
          <TextBlock value={cardContent.textContentPath} variant="body" />
        </div>
        <div className="flex justify-start pt-4">
          <Link
            to={cardContent.pageLink}
            className="relative w-32 pt-2 h-10 text-center rounded-sm bg-[#FB0036] text-white transition-bg duration-100 ease-in hover:bg-[#FF3366]"
            style={{
              backfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
          >
            {t(homeContentPaths.readMore)}
          </Link>
        </div>
      </div>

      {/* Place image right to the content */}
      {!cardContent.placeImageLeft && (
        <div className="p-8 max-w-[50%]">
          <img src={image1} alt="" />
        </div>
      )}
    </section>
  );
}
