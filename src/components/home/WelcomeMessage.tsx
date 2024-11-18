import { Trans, useTranslation } from 'react-i18next';
import logo from '../../assets/logo-2020.png';

export default function WelcomeMessage() {
  const { t } = useTranslation();

  return (
    <section className="flex w-full">
      <div className="flex justify-center pt-16 pl-32 w-2/6">
        <img
          className="h-[200px] w-[280px]"
          src={logo}
          alt="Logo Copy& Printshop 't Hartje"
        />
      </div>
      <div className="w-4/6 pt-16 pr-32">
        <p className="text-5xl font-bold">
          <Trans>{t('home.title')}</Trans>
        </p>
        <p className="pt-4 text-lg font-bold">
          <Trans>{t('home.subtitle')}</Trans>
        </p>
        <p className="pt-4">
          <Trans
            i18nKey="home.introduction"
            components={{ br: <br />, b: <b /> }}
          />
        </p>
      </div>
    </section>
  );
}
