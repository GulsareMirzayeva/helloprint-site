import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { stickersContent } from '../../../lib/categoriesContent';

/*
    Content at the top of the 'Stickers' page
    Values in the TextBlock components refer to translations that are declared in stickersContentPaths
*/

export default function IntroductionStickers() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-8 p-2 sm:p-4 mb-8">
      {/* Image next to the text content */}
      <div>
        <img
          src={stickersContent.image}
          alt="Category image"
          className="max-w-[300px] sm:max-w-[360px]"
        />
      </div>

      {/* Introduction content */}
      <div className="flex-1">
        <div className="pb-6">
          <TextBlock value={stickersContent.titlePath} variant="pageTitle" />
          <TextBlock value={stickersContent.textContentPath} variant="body" />
        </div>
        <div>
          <TextBlock value={stickersContent.materialTitle} variant="subTitle" />
          <TextBlock value={stickersContent.materialContent} variant="body" />
        </div>
        <ul className="list-disc pl-4 pt-4">
          <li>{t(stickersContent.listItem1)}</li>
          <li>{t(stickersContent.listItem2)}</li>
          <li>{t(stickersContent.listItem3)}</li>
          <li>{t(stickersContent.listItem4)}</li>
        </ul>
      </div>
    </section>
  );
}
