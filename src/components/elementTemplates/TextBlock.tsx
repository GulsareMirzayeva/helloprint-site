import { Trans } from 'react-i18next';

type TextBlockType = {
  value: string;
  variant:
    | 'xl5Title'
    | 'xl2Title'
    | 'xl2TitleRegular'
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
    xl2Title: 'text-2xl font-bold',
    xl2TitleRegular: 'text-2xl',
    xlTitle: 'text-xl font-bold',
    largeTitle: 'text-3xl font-bold',
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
