import { Trans } from 'react-i18next';

type TextBlockType = {
  value: string;
  variant: 'largeTitle' | 'title' | 'subTitle' | 'body';
};

export function TextBlock({ value, variant }: TextBlockType) {
  const classNames = {
    largeTitle: 'text-3xl pb-2 font-bold',
    title: 'text-2xl py-2 font-bold',
    subTitle: 'text-lg py-2 font-semibold',
    body: 'text-base',
  };

  return (
    <div className={classNames[variant]}>{<Trans i18nKey={value}></Trans>}</div>
  );
}
