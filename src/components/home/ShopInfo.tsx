import { useTranslation } from 'react-i18next';

export default function ShopInfo() {
  const { t } = useTranslation();

  return (
    <section className="flex items-end w-full mt-8">
      <div className="flex flex-col justify-center items-end w-full h-96 pr-72 bg-[#FB0036]">
        <div className="flex flex-col items-center">
          <p className="text-white text-5xl mb-8">
            {t('shopInfo.openingHours.title')}
          </p>
          <p className="text-2xl font-semibold text-white">
            {t('shopInfo.openingHours.midweeks')}
          </p>
          <p className="text-xl text-white mb-4">09:00 - 18:00</p>
          <p className="text-2xl font-semibold text-white">
            {t('shopInfo.openingHours.saturday')}
          </p>
          <p className="text-xl text-white mb-4">10:00 - 17:00</p>
          <p className="text-2xl font-semibold text-white">
            {t('shopInfo.openingHours.sunday')}
          </p>
          <p className="text-xl text-white">
            {t('shopInfo.openingHours.closed')}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full h-96 pl-72 bg-[#f12b56]">
        <p className="text-white">contact info met maps</p>
      </div>
    </section>
  );
}
