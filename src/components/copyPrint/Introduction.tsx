import { Trans, useTranslation } from 'react-i18next';
import image1 from '../../assets/custom-clothing/custom-clothing-img1.jpg';

export default function IntroductionCopyPrint() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center w-full mt-14 h-64 gap-12">
      <div className="w-60">
        <img src={image1} alt="" />
      </div>
      <div className=" w-[680px] pt-4">
        <div>
          <p className="text-2xl pb-4">
            <b>
              <Trans>{t('copyPrintPage.title')}</Trans>
            </b>
          </p>
          <p className="pb-4">
            <Trans>{t('copyPrintPage.introduction')}</Trans>
          </p>
          <p className="text-lg pb-2">
            <b>
              <Trans>{t('copyPrintPage.titleLaminate')}</Trans>
            </b>
          </p>
          <p className="pb-4">
            <Trans>{t('copyPrintPage.introductionBinding')}</Trans>
          </p>
        </div>
      </div>
    </div>
  );
}
