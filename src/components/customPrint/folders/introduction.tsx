import image1 from '../../../assets/magnifying-glass-7747796_640.jpg';
import { foldersContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Content at the top of the 'Folders' page
    Values in the TextBlock components refer to translations that are declared in foldersContentPaths
*/

export default function IntroductionFlyers() {
  return (
    <section className="flex gap-12 pb-8">
      {/* Image next to the text content */}
      <div className="flex-1 basis-1/3">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock value={foldersContentPaths.title} variant="pageTitle" />
        <TextBlock value={foldersContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
