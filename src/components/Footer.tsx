import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-around h-56 border-t-2 border-[#FB0036] pt-2">
      <div className="flex flex-col">
        <p className="text-sm font-bold pb-2">{t('footer.agreements.title')}</p>
        <a className="text-xs" href="">
          {t('footer.agreements.acknowledgment')}
        </a>
        <a className="text-xs" href="">
          {t('footer.agreements.proposals')}
        </a>
        <a className="text-xs" href="">
          {t('footer.agreements.orders')}
        </a>
        <a className="text-xs" href="">
          {t('footer.agreements.payment')}
        </a>
        <a className="text-xs" href="">
          {t('footer.agreements.prices')}
        </a>
        <a className="text-xs" href="">
          {t('footer.agreements.deliveries')}
        </a>
        <a className="text-xs" href="">
          {t('footer.agreements.complaints')}
        </a>
      </div>
      <div>
        <p className="text-sm font-bold pb-2">{t('footer.adress.title')}</p>
        <p className="text-xs">Copy & Printshop</p>
        <p className="text-xs">Straatnaam 123</p>
        <p className="text-xs">1234 AB</p>
        <p className="text-xs">Groningen, {t('footer.adress.countryName')}</p>
        <a className="text-xs" href="">
          {t('footer.adress.visitGoogleMaps')}
        </a>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-bold pb-2">Contact</p>
        <p className="text-xs">
          <PhoneIcon className="mr-2" style={{ fontSize: '14px' }} />
          050-1234567
        </p>
        <a className="text-xs">
          <AlternateEmailIcon className="mr-2" style={{ fontSize: '14px' }} />
          info@mail.nl
        </a>
        <a className="text-xs cursor-pointer">
          <FacebookIcon className="mr-2" style={{ fontSize: '14px' }} />
          Facebook
        </a>
      </div>
      <div>
        <p className="text-sm font-bold pb-2">
          {t('footer.openingHours.title')}
        </p>
        <p className="text-xs font-semibold">
          {t('footer.openingHours.midweeks')}
        </p>
        <p className="text-xs">09:00 - 18:00</p>
        <p className="text-xs font-semibold">
          {t('footer.openingHours.saturday')}
        </p>
        <p className="text-xs">10:00 - 17:00</p>
        <p className="text-xs font-semibold">
          {t('footer.openingHours.sunday')}
        </p>
        <p className="text-xs">{t('footer.openingHours.closed')}</p>
      </div>
    </div>
  );
}
