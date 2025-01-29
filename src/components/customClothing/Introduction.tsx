import { useTranslation } from 'react-i18next';
import image1 from '../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../elementTemplates/TextBlock';
import { customClotingContentPaths } from '../../lib/translationPaths';

/*
    Content at the top of the 'Custom clothing' page
    Values in the TextBlock components refer to translations that are declared in customClotingContentPaths
*/

export default function IntroductionCustomClothing() {
  const { t } = useTranslation();

  return (
    <section className="flex gap-12 pb-16">
      {/* Image next to the text content */}
      <div className="flex-1 basis-1/3">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock
          value={customClotingContentPaths.title}
          variant="pageTitle"
        />
        <TextBlock value={customClotingContentPaths.text} variant="body" />
        <br />
        <TextBlock value={customClotingContentPaths.subText} variant="body" />
        <ul className="list-disc pl-3 pt-1">
          <li>{t(customClotingContentPaths.listItem1)}</li>
          <li>{t(customClotingContentPaths.listItem2)}</li>
        </ul>
      </div>
    </section>
  );
}
