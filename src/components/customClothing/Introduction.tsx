import { useTranslation } from 'react-i18next';
import image1 from '../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../elementTemplates/TextBlock';
import { customClotingContentPaths } from '../../lib/translationPaths';

export default function IntroductionCustomClothing() {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center w-full py-20 gap-12">
      <div className="flex-1"></div>
      <div className="w-60">
        <img src={image1} alt="" />
      </div>
      <div className="max-w-2xl">
        <div>
          <TextBlock value={customClotingContentPaths.title} variant="title" />
          <TextBlock value={customClotingContentPaths.text} variant="body" />
          <br />
          <TextBlock value={customClotingContentPaths.subText} variant="body" />

          <ul className="list-disc pl-3 pt-4">
            <li>{t(customClotingContentPaths.listItem1)}</li>
            <li>{t(customClotingContentPaths.listItem2)}</li>
          </ul>
        </div>
      </div>
      <div className="flex-1"></div>
    </section>
  );
}
