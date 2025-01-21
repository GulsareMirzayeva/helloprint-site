import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionCustomPrint() {
  const { t } = useTranslation();

  // List of paths to translatable text content
  const listItems = {
    listItem1: 'customPrintPage.stickers.listItem1',
    listItem2: 'customPrintPage.stickers.listItem2',
    listItem3: 'customPrintPage.stickers.listItem3',
    listItem4: 'customPrintPage.stickers.listItem4',
  };

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
            <li>{t(listItems.listItem1)}</li>
            <li>{t(listItems.listItem2)}</li>
            <li>{t(listItems.listItem3)}</li>
            <li>{t(listItems.listItem4)}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
