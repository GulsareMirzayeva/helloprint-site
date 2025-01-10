import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import { Trans, useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';

export default function ShopInfo() {
  const { t } = useTranslation();
  const { shopInfo } = useData();

  return (
    <section className="flex justify-center w-full py-20 bg-gradient-radial from-[#fd3964] via-[#FA2150] to-[#FB0036]">
      <div className="flex flex-col justify-start items-center min-w-[600px] h-80">
        <div className="flex flex-col items-center text-white">
          <p className="text-5xl mb-8">{t('shopInfo.openingHours.title')}</p>
          <p className="text-2xl font-semibold">
            {t('shopInfo.openingHours.midweeks')}
          </p>
          <p className="text-xl mb-4">{shopInfo.openingHoursMondayToFriday}</p>
          <p className="text-2xl font-semibold">
            {t('shopInfo.openingHours.saturday')}
          </p>
          <p className="text-xl mb-4">{shopInfo.openingHoursSaturday}</p>
          <p className="text-2xl font-semibold">
            {t('shopInfo.openingHours.sunday')}
          </p>
          <p className="text-xl">{t('shopInfo.openingHours.closed')}</p>
        </div>
      </div>
      <div className="flex flex-col justify-start min-w-[600px] h-80">
        <div className="flex flex-col items-center text-white ">
          <p className="text-5xl mb-8">{t('shopInfo.contact.title')}</p>
          <p className="font-semibold text-center">
            <Trans
              i18nKey="shopInfo.contact.subtitle"
              components={{ br: <br /> }}
            />
          </p>
          <div className="flex pt-8">
            <p className="text-2xl font-semibold">
              <EmailIcon className="mr-2" />
              {t('shopInfo.contact.contactForm')}
            </p>
          </div>
          <div className="flex pt-4">
            <AlternateEmailIcon className="mt-1 mr-2" />
            <p className="text-2xl font-semibold">{shopInfo.email}</p>
          </div>
          <div className="flex pt-4 ">
            <PhoneIcon className="mt-1 mr-2" />
            <p className="text-2xl font-semibold">{shopInfo.telNo}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
