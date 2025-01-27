import { useTranslation } from 'react-i18next';
import image1 from '../../assets/custom-clothing/custom-clothing-img1.jpg';
import { TextBlock } from '../elementTemplates/TextBlock';
import { customClotingContentPaths } from '../../lib/translationPaths';

export default function IntroductionCustomClothing() {
  const { t } = useTranslation();

  return (
    <section className="flex gap-12 pb-16">
      <div className="w-60">
        <img src={image1} alt="" />
      </div>
      <div>
        <div>
          <TextBlock
            value={customClotingContentPaths.title}
            variant="pageTitle"
          />
          <TextBlock value={customClotingContentPaths.text} variant="body" />
          <br />
          <TextBlock value={customClotingContentPaths.subText} variant="body" />

          <ul className="list-disc pl-3 pt-1">
            <li>{t(customClotingContentPaths.listItem1)}</li>
            <li>{t(customClotingContentPaths.listItem2)}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
