import image1 from '../../assets/paperStack.jpg';
import { copyPrintContentPaths } from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Content at the top of the 'Copy & print' page
    Values in the TextBlock components refer to translations that are declared in copyPrintContentPaths
*/

export default function IntroductionCopyPrint() {
  return (
    <section className="flex gap-12 pb-16">
      {/* Image next to the text content */}
      <div className="flex-1 basis-1/3">
        <img src={image1} alt="" />
      </div>
      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock value={copyPrintContentPaths.title} variant="pageTitle" />
        <TextBlock value={copyPrintContentPaths.introduction} variant="body" />
        <br />
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
