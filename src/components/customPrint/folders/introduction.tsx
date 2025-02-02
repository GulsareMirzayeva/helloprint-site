import { foldersContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Content at the top of the 'Folders' page
    Values in the TextBlock components refer to translations that are declared in foldersContentPaths
*/

export default function IntroductionFolders() {
  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-8 mb-16">
      {/* Image next to the text content */}
      <div>
        <img
          src={foldersContentPaths.image}
          alt="Category image"
          className="max-w-[300px] sm:max-w-[360px]"
        />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock value={foldersContentPaths.title} variant="pageTitle" />
        <TextBlock value={foldersContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
