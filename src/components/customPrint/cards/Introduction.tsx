import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionCards() {
  return (
    <section className="flex py-20 gap-12">
      {/* Image next to the text content */}
      <div className="max-w-60">
        <img src={image1} alt="" />
      </div>

      {/* Introduction content */}
      <div className="max-w-2xl">
        <div>
          <TextBlock value="customPrintPage.cards.title" variant="largeTitle" />
          <TextBlock
            value="customPrintPage.cards.introduction"
            variant="body"
          />
        </div>
      </div>
    </section>
  );
}
