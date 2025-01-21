import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';
import { contactInfoTextContent } from '../../lib/contactInfo';

export default function OpeningHoursSection() {
  const { t } = useTranslation();
  const { shopInfo } = useData();

  return (
    <div>
      <p className="text-sm font-bold pb-2">
        {t(contactInfoTextContent.openingHoursTitle)}
      </p>
      <p className="text-xs font-semibold">
        {t(contactInfoTextContent.midweeks)}
      </p>
      <p className="text-xs">{shopInfo.openingHoursMondayToFriday}</p>
      <p className="text-xs font-semibold">
        {t(contactInfoTextContent.saturday)}
      </p>
      <p className="text-xs">{shopInfo.openingHoursSaturday}</p>
      <p className="text-xs font-semibold">
        {t(contactInfoTextContent.sunday)}
      </p>
      <p className="text-xs">{t(contactInfoTextContent.closed)}</p>
    </div>
  );
}
