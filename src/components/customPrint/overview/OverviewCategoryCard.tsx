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
    <section className={`${cardContent.bgColor} flex items-start p-8 w-full`}>
      {/* Place image left to the content */}
      {cardContent.placeImageLeft && (
        <div className="flex p-8 max-w-[40%]">
          <img src={cardContent.image} alt="" />
        </div>
      )}

      {/* Introduction cardContent */}
      <div className="max-w-[60%]">
        <div className="flex flex-col justify-start">
          <TextBlock value={cardContent.titlePath} variant="subTitle" />
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
        <div className="p-8 max-w-[45%]">
          <img src={cardContent.image} alt="" />
        </div>
      )}
    </section>
  );
}
