import { useTranslation } from 'react-i18next';

type TextBlockType = {
  children?: React.ReactNode;
  value: string;
  variant: 'title' | 'subTitle' | 'body';
};

export function TextBlock({ children, value, variant }: TextBlockType) {
  const { t } = useTranslation();

  const classNames = {
    title: 'text-2xl pb-6 font-bold',
    subTitle: 'text-lg py-4 font-semibold',
    body: 'text-base',
  };

  return (
    <div>
      <p className={classNames[variant]}>{value ? t(value) : children}</p>
    </div>
  );
}
