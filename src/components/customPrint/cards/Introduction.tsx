import { useTranslation } from 'react-i18next';
import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function IntroductionCards() {
  useTranslation();
  return (
    <div className="flex justify-center items-center w-full my-10 h-64 gap-12">
      {/* Image on top-left-side of the page */}
      <div className="w-60">
        <img src={image1} alt="" />
      </div>

      {/*
        Text content on top of the page, the value in the TextBlock components refer to the contents location
        in the translation files (in the i18next folder at the root).
      */}
      <div className=" w-[680px] pt-4">
        <div>
          <TextBlock value="customPrintPage.cards.title" variant="largeTitle" />
          <TextBlock
            value="customPrintPage.cards.introduction"
            variant="body"
          />
        </div>
      </div>
    </div>
  );
}
