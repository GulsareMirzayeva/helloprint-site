import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Get translation by using the given paths in the translation files
// export const translateTextOptions = (options: string[]): string[] => {
//   const { t } = useTranslation();
//   return options.map((option) => t(option));
// };

// Make sure the scroll postion is set to the top of the page when rendered
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
