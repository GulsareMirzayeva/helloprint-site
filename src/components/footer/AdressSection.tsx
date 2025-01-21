import { useTranslation } from 'react-i18next';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../lib/translationPaths';

export default function AdressSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <p className="text-sm font-bold pb-2">{t('shopInfo.adress.title')}</p>
        <p className="text-xs">{shopInfoPaths.name}</p>
        <p className="text-xs">{shopInfoPaths.adress}</p>
        <p className="text-xs">{shopInfoPaths.zipCode}</p>
        <p className="text-xs">
          {shopInfoPaths.town},<br />
          {t(contactInfoTextContent.countryName)}
        </p>
      </div>
      <div>
        <b>
          <a className="text-xs" href="">
            {t(contactInfoTextContent.visitGoogleMaps)}
          </a>
        </b>
      </div>
    </div>
  );
}
