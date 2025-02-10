import { useTranslation } from 'react-i18next';
import { PricingOptions } from '../../lib/types/basicOptionsTypes';
import { FC } from 'react';
import i18n from '../../utils/i18';
import { useData } from '../../context/DataContext';

type PricingTableTypes = {
  headerTitles: string[];
  units: string[];
  options: string[];
  prices: PricingOptions[] | number[] | null;
};

// Function that displays prices with a dot or comma as decimal, depending on the selected language
const PriceDisplay: FC<{
  value: string | number;
  language: string;
  isCurrency?: boolean;
}> = ({ value, language, isCurrency = false }) => {
  // Controleren of de waarde een geldig nummer is
  const numericValue = Number(value);
  const isNumber = !isNaN(numericValue);

  // Formatteren als valuta of als duizendtal
  const formattedValue = isNumber
    ? new Intl.NumberFormat(language, {
        style: isCurrency ? 'currency' : 'decimal',
        currency: 'EUR',
      }).format(numericValue)
    : value; // Geen nummer? Toon de originele waarde

  return <span>{formattedValue}</span>;
};

// Dynamicly render a pricing table
export default function PricingTable({
  headerTitles,
  units,
  options,
  prices,
}: PricingTableTypes) {
  const { t } = useTranslation();
  const { stylePreset } = useData();

  if (!prices) return <div>Loading...</div>;

  // Prepare data for easy access in the table
  const tableData = options.map((option, index) => ({
    option,
    prices: prices[index] || [],
  }));

  return (
    <table className="table-auto" role="table">
      <caption className="sr-only">{t('commonSentences.tableCaption')}</caption>
      <thead>
        <tr>
          {/* Create a header cell for each given header title */}
          {headerTitles.map((title, index) => (
            <th
              key={index}
              className={`
                ${stylePreset.table.headBackgroundColor}
                ${stylePreset.table.headTextColor}
                ${stylePreset.table.headBorderColor}
                border py-1 px-3 text-left
                `}
              scope="col"
            >
              <div>{title}</div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {/* Row for units */}
        <tr>
          {units.map((unit, index) => (
            <th
              key={index}
              className={`
                border px-3 py-1 text-left font-medium italic
                ${stylePreset.table.unitsBorderColor}
                `}
              scope="row"
            >
              <i>{unit}</i>
            </th>
          ))}
        </tr>

        {/* Rows for options and corresponding prices */}
        {tableData.map((row, rowIndex) => {
          const rowPrices = [...Object.values(row.prices)];

          return (
            <tr
              key={rowIndex}
              className={`
                border 
                ${stylePreset.table.highlightRow}
                ${stylePreset.table.cellBackgroundEven}
                ${stylePreset.table.cellBackgroundOdd}
              `}
            >
              <th
                className={`
                  border px-3 py-1 text-left
                  ${stylePreset.table.cellBorderColor}
                `}
                scope="row"
              >
                <PriceDisplay value={row.option} language={i18n.language} />
              </th>

              {rowPrices.map((price, priceIndex) => (
                <td
                  key={priceIndex}
                  className={`
                    border px-3 py-1 text-left
                    ${stylePreset.table.cellBorderColor}
                  `}
                >
                  <PriceDisplay
                    value={price}
                    language={i18n.language}
                    isCurrency={true}
                  />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
