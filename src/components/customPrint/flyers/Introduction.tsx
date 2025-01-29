import image1 from '../../../assets/magnifying-glass-7747796_640.jpg';
import { flyersContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Content at the top of the 'Flyers' page
    Values in the TextBlock components refer to translations that are declared in flyersContentPaths
*/

export default function IntroductionFlyers() {
  return (
    <section className="flex pb-12 gap-12">
      {/* Image next to the text content */}
      <div className="flex-1 basis-1/3">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div className="flex-1 basis-2/3">
        <TextBlock value={flyersContentPaths.title} variant="pageTitle" />
        <TextBlock value={flyersContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
