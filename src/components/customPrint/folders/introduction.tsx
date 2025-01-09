import image1 from '../../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function IntroductionFlyers() {
  return (
    <div className="flex justify-center items-center w-full my-14 gap-12">
      <div className="w-60">
        <img src={image1} alt="" />
      </div>
      <div className="w-[680px]">
        <div>
          <TextBlock value="customPrintPage.folders.title" variant="title" />
          <TextBlock
            value="customPrintPage.folders.introductionFolders"
            variant="body"
          />
        </div>
      </div>
    </div>
  );
}
