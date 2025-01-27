import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { stickersContentPaths } from '../../../lib/translationPaths';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionCustomPrint() {
  const { t } = useTranslation();

  // List of paths to translatable text content
  const listItemPaths = {
    listItem1: 'customPrintPage.stickers.listItem1',
    listItem2: 'customPrintPage.stickers.listItem2',
    listItem3: 'customPrintPage.stickers.listItem3',
    listItem4: 'customPrintPage.stickers.listItem4',
  };

  return (
    <section className="flex gap-12 pb-8">
      {/* Image next to the text content */}
      <div className="flex-1 basis-1/3">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <div className="pb-8">
          <TextBlock value={stickersContentPaths.title} variant="pageTitle" />
          <TextBlock value={stickersContentPaths.introduction} variant="body" />
        </div>
        <div>
          <TextBlock
            value={stickersContentPaths.materialTitle}
            variant="subTitle"
          />
          <TextBlock
            value={stickersContentPaths.materialContent}
            variant="body"
          />
        </div>
        <ul className="list-disc pl-4 pt-4">
          <li>{t(listItemPaths.listItem1)}</li>
          <li>{t(listItemPaths.listItem2)}</li>
          <li>{t(listItemPaths.listItem3)}</li>
          <li>{t(listItemPaths.listItem4)}</li>
        </ul>
      </div>
    </section>
  );
}
