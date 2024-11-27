import { Trans, useTranslation } from 'react-i18next';

type TextBlockType = {
  children?: React.ReactNode;
  value: string;
  variant: 'title' | 'subTitle' | 'body';
};

export function TextBlock({ children, value, variant }: TextBlockType) {
  const { t } = useTranslation();

  const classNames = {
    title: 'text-2xl pb-2 font-bold',
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
