import image1 from '../../../assets/magnifying-glass-7747796_640.jpg';
import { postersContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionPosters() {
  return (
    <section className="flex pb-8 gap-12">
      {/* Image next to the text content */}
      <div className="flex-1 basis-1/3">
        <img src={image1} alt="" className="w-full h-auto" />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock value={postersContentPaths.title} variant="pageTitle" />
        <TextBlock value={postersContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
