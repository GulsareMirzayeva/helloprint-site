import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Trans, useTranslation } from 'react-i18next';

export default function ShopInfo() {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center w-full mt-8 bg-[#FB0036]">
      <div className="flex flex-col justify-center items-start w-full max-w-[600px] h-96">
        <div className="flex flex-col items-center text-white ">
          <p className="text-5xl mb-8">{t('shopInfo.openingHours.title')}</p>
          <p className="text-2xl font-semibold">
            {t('shopInfo.openingHours.midweeks')}
          </p>
          <p className="text-xl mb-4">09:00 - 18:00</p>
          <p className="text-2xl font-semibold">
            {t('shopInfo.openingHours.saturday')}
          </p>
          <p className="text-xl mb-4">10:00 - 17:00</p>
          <p className="text-2xl font-semibold">
            {t('shopInfo.openingHours.sunday')}
          </p>
          <p className="text-xl">{t('shopInfo.openingHours.closed')}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-[600px] h-96 bg-[#FB0036]">
        <div className="flex flex-col items-center text-white ">
          <p className="text-5xl mb-8">{t('shopInfo.contact.title')}</p>
          <p className="font-semibold text-center">
            <Trans
              i18nKey="shopInfo.contact.subtitle"
              components={{ br: <br /> }}
            />
          </p>
          <div className="flex pt-8">
            <AlternateEmailIcon className="mt-1 mr-2" />
            <p className="text-2xl font-semibold">
              {t('shopInfo.contact.email')}
            </p>
          </div>
          <div className="flex pt-4 ">
            <PhoneIcon className="mt-1 mr-2" />
            <p className="text-2xl font-semibold">
              {t('shopInfo.contact.telNr')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
