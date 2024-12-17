import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function IntroductionCustomPrint() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center w-full mt-10 h-full gap-12">
      <div className=" w-[680px] pt-4 h-full">
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
          <br />
          <TextBlock
            value="customPrintPage.stickers.subtitleLargeFormat"
            variant="subTitle"
          />
          <TextBlock
            value="customPrintPage.stickers.largeFormatContent"
            variant="body"
          />
        </div>
      </div>
    </div>
  );
}
