import { Trans, useTranslation } from 'react-i18next';
import image1 from '../../assets/custom-clothing/custom-clothing-img1.jpg';

export default function IntroductionCustomClothing() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center w-full mt-14 h-64 gap-12">
      <div className="w-60">
        <img src={image1} alt="" />
      </div>
      <div className=" w-[680px] pt-4">
        <div>
          <p className="text-2xl pb-4">
            <b>{t('customClothingPage.introduction.title')}</b>
          </p>
          <p className="pb-4">
            <Trans>{t('customClothingPage.introduction.text')}</Trans>
          </p>
          <p>{t('customClothingPage.introduction.subText')}</p>
          <ul className="list-disc pl-3 pt-4">
            <li>{t('customClothingPage.introduction.listItem1')}</li>
            <li>{t('customClothingPage.introduction.listItem2')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
