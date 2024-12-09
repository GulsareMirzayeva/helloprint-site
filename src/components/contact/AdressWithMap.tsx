import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import GoogleMap from './GoogleMap';

export default function AdressWithMap() {
  const { t } = useTranslation();
  return (
    <section className="flex h-80 gap-20 my-14">
      <div className="flex flex-col h-ful items-end">
        <TextBlock value="contactPage.adressTitle" variant="title" />
        <p className="text-md">Copy & Printshop</p>
        <p className="text-md">Straatnaam 123</p>
        <p className="text-md">1234 AB</p>
        <p className="text-md">Groningen,</p>
        <p className="text-md">{t('shopInfo.adress.countryName')}</p>
      </div>
      <div>
        <GoogleMap />
      </div>
      <div className="flex flex-col justify-start items-start h-full">
        <TextBlock value="shopInfo.openingHours.title" variant="title" />
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
    </section>
  );
}
