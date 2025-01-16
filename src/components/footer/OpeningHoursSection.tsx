import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';

export default function OpeningHoursSection() {
  const { t } = useTranslation();
  const { shopInfo } = useData();

  return (
    <div>
      <p className="text-sm font-bold pb-2">
        {t('shopInfo.openingHours.title')}
      </p>
      <p className="text-xs font-semibold">
        {t('shopInfo.openingHours.midweeks')}
      </p>
      <p className="text-xs">{shopInfo.openingHoursMondayToFriday}</p>
      <p className="text-xs font-semibold">
        {t('shopInfo.openingHours.saturday')}
      </p>
      <p className="text-xs">{shopInfo.openingHoursSaturday}</p>
      <p className="text-xs font-semibold">
        {t('shopInfo.openingHours.sunday')}
      </p>
      <p className="text-xs">{t('shopInfo.openingHours.closed')}</p>
    </div>
  );
}
