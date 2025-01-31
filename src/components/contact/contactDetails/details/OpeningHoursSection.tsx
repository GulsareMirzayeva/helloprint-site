import { useTranslation } from 'react-i18next';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../../../lib/translationPaths';

// Openinghours section on the Contact page
export default function OpeningHoursSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col p-2">
      {/* Title */}
      <div>
        <p className="text-sm font-bold pb-2">
          {t(contactInfoTextContent.openingHoursTitle)}
        </p>
      </div>

      {/* Openinghours on working days */}
      <div className="text-sm flex gap-1">
        <p>{t(contactInfoTextContent.midweeksShort)}</p>
        <p>{t(shopInfoPaths.openingHoursMondayToFriday)}</p>
        <p>{t(shopInfoPaths.hour)}</p>
      </div>

      {/* Openinghours on saturday */}
      <div className="text-sm flex gap-1">
        <p>{t(contactInfoTextContent.saturday)}</p>
        <p>{t(shopInfoPaths.openingHoursSaturday)}</p>
        <p>{t(shopInfoPaths.hour)}</p>
      </div>

      {/* Openinghours on sunday */}
      <div className="text-sm flex">
        <div className="text-sm flex gap-1">
          <p>{t(contactInfoTextContent.sunday)}</p>
          <p>{t(shopInfoPaths.openingHoursSunday)}</p>
        </div>
      </div>
    </div>
  );
}
