import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import GoogleMap from './GoogleMap';

export default function AdressWithMap() {
  const { t } = useTranslation();
  return (
    <section className="flex h-72 gap-16 my-14">
      <div className="flex flex-col self-start h-full">
        <TextBlock value="contactPage.adressTitle" variant="title" />
        <p className="text-md">Copy & Printshop</p>
        <p className="text-md">Straatnaam 123</p>
        <p className="text-md">1234 AB</p>
        <p className="text-md">Groningen, {t('shopInfo.adress.countryName')}</p>
      </div>
      <div className="flex flex-col justify-end items-end h-full">
        <p className="text-lg font-bold pb-2">
          {t('shopInfo.openingHours.title')}
        </p>
        <p className="text-sm font-semibold">
          {t('shopInfo.openingHours.midweeks')}
        </p>
        <p className="text-md">09:00 - 18:00</p>
        <p className="text-sm font-semibold">
          {t('shopInfo.openingHours.saturday')}
        </p>
        <p className="text-md">10:00 - 17:00</p>
        <p className="text-sm font-semibold">
          {t('shopInfo.openingHours.sunday')}
        </p>
        <p className="text-md">{t('shopInfo.openingHours.closed')}</p>
      </div>
      <div className="h-full">
        <GoogleMap />
      </div>
    </section>
  );
}
