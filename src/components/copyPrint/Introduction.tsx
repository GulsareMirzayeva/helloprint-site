import { copyPrintContent } from '../../lib/categoriesContent';
import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Content at the top of the 'Copy & print' page
    Values in the TextBlock components refer to translations that are declared in copyPrintContentPaths
*/

export default function IntroductionCopyPrint() {
  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-8 p-2 sm:p-4 mb-8">
      {/* Image next to the text content */}
      <div>
        <img
          src={copyPrintContent.image}
          alt="Category image"
          className="max-w-[300px] sm:max-w-[360px]"
        />
      </div>
      {/* Introduction content */}
      <div className="flex-1">
        <TextBlock value={copyPrintContent.title} variant="pageTitle" />
        <TextBlock value={copyPrintContent.introduction} variant="body" />
        <br />
        <TextBlock value={copyPrintContent.titleLaminate} variant="subTitle" />
        <TextBlock
          value={copyPrintContent.introductionBinding}
          variant="body"
        />
      </div>
    </section>
  );
}
