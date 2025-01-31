import { useTranslation } from 'react-i18next';
import { shopInfoPaths } from '../../../../lib/translationPaths';

// Adres section on the Contact page
export default function AdressSection() {
  const { t } = useTranslation();

  const adressTitle = 'shopInfo.adress.title';

  return (
    <div className="flex flex-col justify-between p-2">
      <div className="flex flex-col">
        <p className="text-sm font-bold pb-2">{t(adressTitle)}</p>
        <p className="text-sm">{shopInfoPaths.name}</p>
        <p className="text-sm">{shopInfoPaths.adress}</p>
        <p className="text-sm">{shopInfoPaths.zipCode}</p>
        <p className="text-sm">{shopInfoPaths.town}</p>
      </div>
    </div>
  );
}
