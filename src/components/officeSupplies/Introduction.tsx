import { officeSuppliesPaths } from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Content at the top of the 'Office supplies' page
    Values in the TextBlock components refer to translations that are declared in copyPrintContentPaths
*/

export default function IntroductionOfficeSupplies() {
  return (
    <section className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col justify-start items-start w-full pt-8">
        <div className="flex flex-col pb-8">
          <TextBlock value={officeSuppliesPaths.title} variant={'pageTitle'} />
          <TextBlock
            value={officeSuppliesPaths.introduction}
            variant={'body'}
          />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </section>
  );
}
