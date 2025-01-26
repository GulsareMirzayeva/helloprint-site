import { Trans } from 'react-i18next';

type TextBlockType = {
  value: string;
  variant:
    | 'xl5Title'
    | 'xl4Title'
    | 'xl2Title'
    | 'xlTitleRegular'
    | 'xlTitle'
    | 'largeTitle'
    | 'title'
    | 'subTitle'
    | 'body'
    | 'bodySmall'
    | 'bold';
};

export function TextBlock({ value, variant }: TextBlockType) {
  const classNames = {
    xl5Title: 'text-5xl font-bold',
    xl4Title: 'text-4xl font-bold',
    xl2Title: 'text-2xl font-bold',
    xlTitleRegular: 'text-xl',
    xlTitle: 'text-xl font-bold',
    largeTitle: 'text-3xl font-medium',
    title: 'text-2xl font-bold',
    subTitle: 'text-lg font-semibold',
    body: 'text-base',
    bodySmall: 'text-md',
    bold: 'font-bold',
  };

  return (
    <div className={classNames[variant]}>
      {<Trans i18nKey={value} components={{ br: <br />, b: <b /> }}></Trans>}
    </div>
  );
}
