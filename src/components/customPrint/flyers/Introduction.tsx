import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { flyersContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionFlyers() {
  return (
    <section className="flex pb-16 gap-12">
      {/* Image next to the text content */}
      <div className="max-w-60">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div>
        <TextBlock value={flyersContentPaths.title} variant="pageTitle" />
        <TextBlock value={flyersContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
