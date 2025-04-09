import { Trans } from 'react-i18next';

type TextBlockType = {
  value?: string;
  variant:
    | 'pageTitle'
    | 'subTitle'
    | 'subTitleMedium'
    | 'tableSubTitle'
    | 'sectionTitle'
    | 'tableTitle'
    | 'cardTitle'
    | 'xl5Title'
    | 'xl4Title'
    | 'xl2Title'
    | 'xl3Title'
    | 'xlTitle'
    | 'xlTitleRegular'
    | 'body'
    | 'bodySmall'
    | 'bold';
};

export function TextBlock({ value, variant }: TextBlockType) {
  const classNames = {
    pageTitle: 'text-4xl pb-4 font-medium',
    subTitle: 'text-3xl pb-2 font-normal',
    subTitleMedium: 'text-2xl font-normal',
    tableSubTitle: 'text-large',
    sectionTitle: 'text-large font-bold',
    tableTitle: 'text-large font-bold',
    cardTitle: 'text-2xl font-bold',
    xl5Title: 'text-5xl font-bold',
    xl4Title: 'text-4xl font-bold',
    xl3Title: 'text-3xl font-bold',
    xl2Title: 'text-2xl font-bold',
    xlTitle: 'text-xl font-bold',
    xlTitleRegular: 'text-xl',
    body: 'text-base',
    bodySmall: 'text-sm font-medium',
    bold: 'font-bold',
  };

  return (
    <div className={classNames[variant]}>
      {<Trans i18nKey={value} components={{ br: <br />, b: <b /> }}></Trans>}
    </div>
  );
}
