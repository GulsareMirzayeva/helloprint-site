import image1 from '../../../assets/magnifying-glass-7747796_640.jpg';
import { cardsContentPaths } from '../../../lib/translationPaths';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Content at the top of the 'Cards' page
    Values in the TextBlock components refer to translations that are declared in cardsContentPaths
*/

export default function IntroductionCards() {
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
      <div className="flex-1 basis-2/3">
        <TextBlock value={cardsContentPaths.title} variant="pageTitle" />
        <TextBlock value={cardsContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
