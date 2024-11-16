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
        <p className="text-sm font-bold pb-2">Adres</p>
        <p className="text-xs">Copy & Printshop</p>
        <p className="text-xs">Straatnaam 123</p>
        <p className="text-xs">1234 AB</p>
        <p className="text-xs">Groningen, {t('footer.adres.countryName')}</p>
        <a className="text-xs" href="">
          {t('footer.adres.visitGoogleMaps')}
        </a>
      </div>
      <div>
        <p className="text-sm font-bold pb-2">Contact</p>
        <p className="text-xs">Telefoon: 050-1234567</p>
        <p className="text-xs">Email: info@mail.nl</p>
        <p className="text-xs">Facebook</p>
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
