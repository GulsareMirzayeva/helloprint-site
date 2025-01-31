import { useTranslation } from 'react-i18next';
import { shopInfoPaths } from '../../lib/translationPaths';

export default function AdressSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between min-w-[140px]">
      <div className="flex flex-col">
        <p className="text-sm font-bold pb-2">{t('shopInfo.adress.title')}</p>
        <p className="text-xs">{shopInfoPaths.name}</p>
        <p className="text-xs">{shopInfoPaths.adress}</p>
        <p className="text-xs">{shopInfoPaths.zipCode}</p>
        <p className="text-xs">{shopInfoPaths.town}</p>
      </div>
    </div>
  );
}
