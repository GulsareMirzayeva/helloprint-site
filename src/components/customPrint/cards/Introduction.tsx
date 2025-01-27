import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { cardsContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionCards() {
  return (
    <section className="flex gap-12 pb-16">
      {/* Image next to the text content */}
      <div className="flex-1 basis-1/3">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock value={cardsContentPaths.title} variant="pageTitle" />
        <TextBlock value={cardsContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
