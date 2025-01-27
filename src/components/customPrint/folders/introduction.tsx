import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { foldersContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionFlyers() {
  return (
    <section className="flex gap-12 pb-16">
      {/* Image next to the text content */}
      <div className="max-w-60">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div className="max-w-2xl">
        <div>
          <TextBlock value={foldersContentPaths.title} variant="pageTitle" />
          <TextBlock value={foldersContentPaths.introduction} variant="body" />
        </div>
      </div>
    </section>
  );
}
