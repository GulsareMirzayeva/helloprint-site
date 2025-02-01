import { foldersContent } from '../../../lib/categoriesContent';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Content at the top of the 'Folders' page
    Values in the TextBlock components refer to translations that are declared in foldersContentPaths
*/

export default function IntroductionFlyers() {
  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-8 p-2 sm:p-4 mb-8">
      {/* Image next to the text content */}
      <div>
        <img
          src={foldersContent.image}
          alt="Category image"
          className="max-w-[300px] sm:max-w-[360px]"
        />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock value={foldersContent.titlePath} variant="pageTitle" />
        <TextBlock value={foldersContent.textContentPath} variant="body" />
      </div>
    </section>
  );
}
