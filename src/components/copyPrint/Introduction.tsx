import image1 from '../../assets/paperStack.jpg';
import { copyPrintContentPaths } from '../../lib/translationPaths';
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
          src={image1}
          alt="Category image"
          className="max-w-[300px] sm:max-w-[360px]"
        />
      </div>
      {/* Introduction content */}
      <div className="flex-1">
        <TextBlock value={copyPrintContentPaths.title} variant="pageTitle" />
        <TextBlock value={copyPrintContentPaths.introduction} variant="body" />
        <br />
        <TextBlock
          value={copyPrintContentPaths.titleLaminate}
          variant="subTitle"
        />
        <TextBlock
          value={copyPrintContentPaths.introductionBinding}
          variant="body"
        />
      </div>
    </section>
  );
}
