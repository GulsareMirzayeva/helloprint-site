import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Make sure the scroll postion is set to the top of the page when rendered
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Display the correct currency and quantity syntax, depending on the selected language option
export const QuantityDisplay: FC<{
  value: string | number;
  language: string;
  isCurrency?: boolean;
}> = ({ value, language, isCurrency = false }) => {
  const numericValue = Number(value);
  const isNumber = !isNaN(numericValue);

  const formattedValue = isNumber
    ? new Intl.NumberFormat(language, {
        style: isCurrency ? 'currency' : 'decimal',
        currency: 'EUR',
      }).format(numericValue)
    : value;

  return <span>{formattedValue}</span>;
};
