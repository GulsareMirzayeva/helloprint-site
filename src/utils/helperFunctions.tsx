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

// With the help of ChatGTP all quantities are converted, even when there are not numbers present.
// '100-1000' becomes '100-1.000' (Nl) or '100-1,000' (En)

export const QuantityDisplay: FC<{
  value: string | number;
  language: string;
  isCurrency?: boolean;
}> = ({ value, language, isCurrency = false }) => {
  // 1. Controleer of de waarde een bereik is, bv. '101-1000'
  if (typeof value === 'string' && value.includes('-')) {
    const rangeParts = value.split('-');

    // Check of beide delen echte getallen zijn
    if (!isNaN(Number(rangeParts[0])) && !isNaN(Number(rangeParts[1]))) {
      const formattedRange = rangeParts
        .map((num) =>
          new Intl.NumberFormat(language, {
            style: 'decimal',
          }).format(Number(num))
        )
        .join('–'); // Gebruik en-dash (–) voor mooiere weergave

      return <span>{formattedRange}</span>;
    }
  }

  // 2. Controleer of de waarde eindigt op een '+', bv. '1000+'
  if (typeof value === 'string' && value.endsWith('+')) {
    const numericPart = value.slice(0, -1); // Haal de '+' weg

    if (!isNaN(Number(numericPart))) {
      const formattedValue = new Intl.NumberFormat(language, {
        style: 'decimal',
      }).format(Number(numericPart));

      return <span>{formattedValue}+</span>; // '+' weer toevoegen
    }
  }

  // 3. Als het een los getal is, formatteer het correct
  const numericValue = Number(value);
  const isNumber = !isNaN(numericValue);

  const formattedValue = isNumber
    ? new Intl.NumberFormat(language, {
        style: isCurrency ? 'currency' : 'decimal',
        currency: 'EUR',
      }).format(numericValue)
    : value; // Geen nummer? Toon de originele waarde

  return <span>{formattedValue}</span>;
};
