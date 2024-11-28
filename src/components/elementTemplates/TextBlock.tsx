import { Trans, useTranslation } from 'react-i18next';

type TextBlockType = {
  children?: React.ReactNode;
  value: string;
  variant: 'largeTitle' | 'title' | 'subTitle' | 'body';
};

export function TextBlock({ children, value, variant }: TextBlockType) {
  const { t } = useTranslation();

  const classNames = {
    largeTitle: 'text-3xl pb-2 font-bold',
    title: 'text-2xl py-2 font-bold',
    subTitle: 'text-lg py-2 font-semibold',
    body: 'text-base',
  };

  return (
    <div>
      <p className={classNames[variant]}>
        {value ? <Trans>{t(value)}</Trans> : children}
      </p>
    </div>
  );
}
