import { TextBlock } from '../../elementTemplates/TextBlock';
import { homeContentPaths } from '../../../lib/translationPaths';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { CategoryCardType } from '../../../lib/types/customPrintType';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function OverviewCategoryCard({
  cardContent,
  bgColor,
}: {
  cardContent: CategoryCardType;
  bgColor: string;
}) {
  return (
    <section
      className={`${bgColor} flex flex-col items-start md:flex-row p-4  w-full rounded-xl`}
    >
      {/* Place image left to the content */}
      <div>
        <img
          src={cardContent.image}
          alt="Category image"
          className="mr-8 mb-2 md:mb-0 max-w-[300px] md:max-w-[360px] rounded-md"
        />
      </div>

      {/* Introduction cardContent */}
      <div className="flex flex-col">
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
    </section>
  );
}
