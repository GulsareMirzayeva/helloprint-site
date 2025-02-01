import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import { customClothingContent } from '../../lib/categoriesContent';

/*
    Content at the top of the 'Custom clothing' page
    Values in the TextBlock components refer to translations that are declared in customClotingContentPaths
*/

export default function IntroductionCustomClothing() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-8 p-2 sm:p-4 mb-8">
      {/* Image next to the text content */}
      <div>
        <img
          src={customClothingContent.image}
          alt="Category image"
          className="max-w-[300px] sm:max-w-[360px]"
        />
      </div>

      {/* Introduction content */}
      <div className="flex-1">
        <TextBlock value={customClothingContent.title} variant="pageTitle" />
        <TextBlock value={customClothingContent.introduction} variant="body" />
        <br />
        <TextBlock value={customClothingContent.subText} variant="body" />
        <ul className="list-disc pl-3 pt-1">
          <li>{t(customClothingContent.listItem1)}</li>
          <li>{t(customClothingContent.listItem2)}</li>
        </ul>
      </div>
    </section>
  );
}
