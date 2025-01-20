import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionFlyers() {
  return (
    <div className="flex py-20 gap-12">
      <div className="max-w-3xl">
        <div>
          {/* Introduction content */}
          <TextBlock value="customPrintPage.flyers.title" variant="title" />
          <TextBlock
            value="customPrintPage.flyers.introductionFlyers"
            variant="body"
          />
        </div>
      </div>
    </div>
  );
}
