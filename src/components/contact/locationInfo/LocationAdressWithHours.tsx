import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import GoogleMap from './GoogleMap';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../../lib/translationPaths';

export default function LocationAdressWithHours() {
  const { t } = useTranslation();

  return (
    <section className="flex w-full gap-20 py-14 bg-gray-100">
      <div className="flex flex-col w-full h-ful items-end">
        <TextBlock
          value={contactInfoTextContent.contactPageTitle}
          variant="title"
        />
        <p className="text-md pt-2">{shopInfoPaths.name}</p>
        <p className="text-md">{shopInfoPaths.adress}</p>
        <p className="text-md">{shopInfoPaths.zipCode}</p>
        <p className="text-md">{shopInfoPaths.town},</p>
        <p className="text-md">{t(contactInfoTextContent.countryName)}</p>
      </div>
      <div>
        <GoogleMap />
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full">
        <TextBlock
          value={contactInfoTextContent.openingHoursTitle}
          variant="title"
        />
        <p className="text-md font-semibold pt-2">
          {t(contactInfoTextContent.midweeks)}
        </p>
        <p className="text-md pb-2">
          {shopInfoPaths.openingHoursMondayToFriday}
        </p>
        <p className="text-md font-semibold">
          {t(contactInfoTextContent.saturday)}
        </p>
        <p className="text-md pb-2">{shopInfoPaths.openingHoursSaturday}</p>
        <p className="text-md font-semibold">
          {t(contactInfoTextContent.sunday)}
        </p>
        <p className="text-md">{t(contactInfoTextContent.closed)}</p>
      </div>
    </section>
  );
}
