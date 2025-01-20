// import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function IntroductionPosters() {
  return (
    <section className="flex py-20 gap-12">
      {/* Introduction content */}
      <div className="max-w-3xl">
        <TextBlock value="customPrintPage.posters.title" variant="title" />
        <TextBlock
          value="customPrintPage.posters.introductionPosters"
          variant="body"
        />
      </div>
    </section>
  );
}
