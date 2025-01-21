import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';
import { contactInfoTextContent } from '../../lib/contactInfo';

export default function AdressSection() {
  const { shopInfo } = useData();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <p className="text-sm font-bold pb-2">{t('shopInfo.adress.title')}</p>
        <p className="text-xs">{shopInfo.name}</p>
        <p className="text-xs">{shopInfo.adress}</p>
        <p className="text-xs">{shopInfo.zipCode}</p>
        <p className="text-xs">
          {shopInfo.town},<br />
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
