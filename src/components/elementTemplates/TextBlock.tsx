import { Trans } from 'react-i18next';

type TextBlockType = {
  value: string;
  variant:
    | 'pageTitle'
    | 'subTitle'
    | 'subTitleMedium'
    | 'tableSubTitle'
    | 'sectionTitle'
    | 'sectionIntroduction'
    | 'xl5Title'
    | 'xl4Title'
    | 'xl2Title'
    | 'xlTitleRegular'
    | 'xlTitle'
    | 'largeTitle'
    | 'title'
    | 'body'
    | 'bodySmall'
    | 'bold';
};

export function TextBlock({ value, variant }: TextBlockType) {
  const classNames = {
    pageTitle: 'text-4xl pb-4 font-medium',
    subTitle: 'text-3xl pb-2 font-normal',
    subTitleMedium: 'text-3xl pb-3 font-bold',
    tableSubTitle: 'text-3xl pb-1 font-normal',
    sectionTitle: 'text-large font-bold',
    sectionIntroduction: 'text-xl',
    xl5Title: 'text-5xl font-bold',
    xl4Title: 'text-4xl font-bold',
    xl2Title: 'text-2xl font-bold',
    xlTitleRegular: 'text-xl',
    xlTitle: 'text-xl font-bold',
    largeTitle: 'text-3xl font-medium',
    title: 'text-2xl font-bold',
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
