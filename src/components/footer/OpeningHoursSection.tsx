import { useTranslation } from 'react-i18next';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../lib/translationPaths';

export default function OpeningHoursSection() {
  const { t } = useTranslation();

  return (
    <div className="min-w-[140px]">
      <p className="text-sm font-bold pb-2">
        {t(contactInfoTextContent.openingHoursTitle)}
      </p>
      <p className="text-xs font-semibold">
        {t(contactInfoTextContent.midweeks)}
      </p>
      <p className="text-xs">{shopInfoPaths.openingHoursMondayToFriday}</p>
      <p className="text-xs font-semibold">
        {t(contactInfoTextContent.saturday)}
      </p>
      <p className="text-xs">{shopInfoPaths.openingHoursSaturday}</p>
      <p className="text-xs font-semibold">
        {t(contactInfoTextContent.sunday)}
      </p>
      <p className="text-xs">{t(contactInfoTextContent.closed)}</p>
    </div>
  );
}
