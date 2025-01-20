import { Trans } from 'react-i18next';

type TextBlockType = {
  value: string;
  variant:
    | 'xl2Title'
    | 'xl5Title'
    | 'xlTitle'
    | 'largeTitle'
    | 'title'
    | 'subTitle'
    | 'body'
    | 'bold';
};

export function TextBlock({ value, variant }: TextBlockType) {
  const classNames = {
    xl2Title: 'text-2xl pb-4 font-bold',
    xl5Title: 'text-5xl pb-4 font-bold',
    xlTitle: 'text-8xl pb-2 font-bold',
    largeTitle: 'text-3xl pb-2 font-bold',
    title: 'text-2xl py-2 font-bold',
    subTitle: 'text-lg py-2 font-semibold',
    body: 'text-base',
    bold: 'font-bold',
  };

  return (
    <div className={classNames[variant]}>
      {<Trans i18nKey={value} components={{ br: <br />, b: <b /> }}></Trans>}
    </div>
  );
}
