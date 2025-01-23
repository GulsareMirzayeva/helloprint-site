import { useTranslation } from 'react-i18next';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../../../lib/translationPaths';

export default function OpeningHoursSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col max-w-[230px]">
      <div>
        <p className="text-sm font-bold pb-2">
          {t(contactInfoTextContent.openingHoursTitle)}
        </p>
      </div>

      <div className="text-sm flex gap-1">
        <p>{t(contactInfoTextContent.midweeksShort)}</p>
        <p>{t(shopInfoPaths.openingHoursMondayToFriday)}</p>
        <p>{t(shopInfoPaths.hour)}</p>
      </div>

      <div className="text-sm flex gap-1">
        <p>{t(contactInfoTextContent.saturday)}</p>
        <p>{t(shopInfoPaths.openingHoursSaturday)}</p>
        <p>{t(shopInfoPaths.hour)}</p>
      </div>
      <div className="text-sm flex">
        <p>
          {t(shopInfoPaths.telePhone)}&nbsp;
          {t(shopInfoPaths.openingHoursMondayToFriday)}&nbsp;
          {t(shopInfoPaths.hour)}
        </p>
      </div>
    </div>
  );
}
