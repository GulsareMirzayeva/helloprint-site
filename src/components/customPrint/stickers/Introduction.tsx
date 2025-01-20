import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionCustomPrint() {
  const { t } = useTranslation();
  return (
    <section className="flex py-20 gap-12">
      {/* Introduction content */}
      <div className="max-w-3xl">
        <div>
          <TextBlock value="customPrintPage.stickers.title" variant="title" />
          <TextBlock
            value="customPrintPage.stickers.introduction"
            variant="body"
          />
          <br />
          <TextBlock
            value="customPrintPage.stickers.materialTitle"
            variant="subTitle"
          />
          <TextBlock
            value="customPrintPage.stickers.materialContent"
            variant="body"
          />
          <ul className="list-disc pl-4 pt-4">
            <li>{t('customPrintPage.stickers.listItem1')}</li>
            <li>{t('customPrintPage.stickers.listItem2')}</li>
            <li>{t('customPrintPage.stickers.listItem3')}</li>
            <li>{t('customPrintPage.stickers.listItem4')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
