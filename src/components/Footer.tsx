import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center w-full border-t-2 border-[#FB0036] py-2">
      <div className="flex justify-evenly w-full max-w-[1900px]">
        <div className="flex flex-col">
          <p className="text-sm font-bold pb-2">
            {t('shopInfo.agreements.title')}
          </p>
          <a className="text-xs" href="">
            {t('shopInfo.agreements.acknowledgment')}
          </a>
          <a className="text-xs" href="">
            {t('shopInfo.agreements.proposals')}
          </a>
          <a className="text-xs" href="">
            {t('shopInfo.agreements.orders')}
          </a>
          <a className="text-xs" href="">
            {t('shopInfo.agreements.payment')}
          </a>
          <a className="text-xs" href="">
            {t('shopInfo.agreements.prices')}
          </a>
          <a className="text-xs" href="">
            {t('shopInfo.agreements.deliveries')}
          </a>
          <a className="text-xs" href="">
            {t('shopInfo.agreements.complaints')}
          </a>
        </div>
        <div>
          <p className="text-sm font-bold pb-2">{t('shopInfo.adress.title')}</p>
          <p className="text-xs">Copy & Printshop</p>
          <p className="text-xs">Straatnaam 123</p>
          <p className="text-xs">1234 AB</p>
          <p className="text-xs">
            Groningen, {t('shopInfo.adress.countryName')}
          </p>
          <a className="text-xs" href="">
            {t('shopInfo.adress.visitGoogleMaps')}
          </a>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold pb-2">Contact</p>
          <p className="text-xs">
            <PhoneIcon className="mr-1" style={{ fontSize: '14px' }} />
            050-1234567
          </p>
          <a className="text-xs">
            <AlternateEmailIcon className="mr-1" style={{ fontSize: '14px' }} />
            info@mail.nl
          </a>
          <a className="text-xs cursor-pointer">
            <FacebookIcon
              className="mr-1 text-[#0165E1]"
              style={{ fontSize: '14px' }}
            />
            Facebook
          </a>
        </div>
        <div>
          <p className="text-sm font-bold pb-2">
            {t('shopInfo.openingHours.title')}
          </p>
          <p className="text-xs font-semibold">
            {t('shopInfo.openingHours.midweeks')}
          </p>
          <p className="text-xs">09:00 - 18:00</p>
          <p className="text-xs font-semibold">
            {t('shopInfo.openingHours.saturday')}
          </p>
          <p className="text-xs">10:00 - 17:00</p>
          <p className="text-xs font-semibold">
            {t('shopInfo.openingHours.sunday')}
          </p>
          <p className="text-xs">{t('shopInfo.openingHours.closed')}</p>
        </div>
      </div>
    </div>
  );
}
