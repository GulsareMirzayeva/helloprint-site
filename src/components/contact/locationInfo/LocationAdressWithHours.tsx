import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import GoogleMap from './GoogleMap';
import { useData } from '../../../context/DataContext';

export default function LocationAdressWithHours() {
  const { t } = useTranslation();
  const { shopInfo } = useData();
  return (
    <section className="flex w-full gap-20 py-14 bg-gray-100">
      <div className="flex flex-col w-full h-ful items-end">
        <TextBlock value="contactPage.adressTitle" variant="title" />
        <p className="text-md pt-2">{shopInfo.name}</p>
        <p className="text-md">{shopInfo.adress}</p>
        <p className="text-md">{shopInfo.zipCode}</p>
        <p className="text-md">{shopInfo.town},</p>
        <p className="text-md">{t('shopInfo.adress.countryName')}</p>
      </div>
      <div>
        <GoogleMap />
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full">
        <TextBlock value="shopInfo.openingHours.title" variant="title" />
        <p className="text-sm font-semibold pt-2">
          {t('shopInfo.openingHours.midweeks')}
        </p>
        <p className="text-md pb-2">{shopInfo.openingHoursMondayToFriday}</p>
        <p className="text-sm font-semibold">
          {t('shopInfo.openingHours.saturday')}
        </p>
        <p className="text-md pb-2">{shopInfo.openingHoursSaturday}</p>
        <p className="text-sm font-semibold">
          {t('shopInfo.openingHours.sunday')}
        </p>
        <p className="text-md">{t('shopInfo.openingHours.closed')}</p>
      </div>
    </section>
  );
}
