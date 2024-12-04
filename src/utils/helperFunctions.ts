import { useTranslation } from 'react-i18next';

// Get translation by using the given paths in the translation files
export const translateTextOptions = (options: string[]): string[] => {
  const { t } = useTranslation();
  return options.map((option) => t(option));
};
