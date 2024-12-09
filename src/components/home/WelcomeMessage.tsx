import { Trans, useTranslation } from 'react-i18next';
import logo from '../../assets/logo-2020.png';

export default function WelcomeMessage() {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center w-full mt-20">
      <div className="flex justify-center">
        <div className="flex">
          <img
            className="h-[200px] w-[280px]"
            src={logo}
            alt="Logo Copy& Printshop 't Hartje"
          />
        </div>
        <div className="flex flex-col items-start pl-24">
          <p className="text-5xl font-bold">
            <Trans>{t('home.title')}</Trans>
          </p>
          <p className="pt-4 text-2xl font-bold">
            <Trans>{t('home.subtitle')}</Trans>
          </p>
          <p className="pt-4">
            <Trans
              i18nKey="home.introduction"
              components={{ br: <br />, b: <b /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
