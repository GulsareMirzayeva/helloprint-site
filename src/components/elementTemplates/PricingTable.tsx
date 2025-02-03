import { useTranslation } from 'react-i18next';
import { PricingOptions } from '../../lib/types/basicOptionsTypes';
import { FC } from 'react';
import i18n from '../../utils/i18';
import { colorPresets } from '../../lib/stylePresets';

type PricingTableTypes = {
  headerTitles: string[];
  units: string[];
  options: string[];
  prices: PricingOptions[] | number[];
};

// Function that displays prices with a dot or comma as decimal, depending on the selected language
const PriceDisplay: FC<{ price: number; language: string }> = ({
  price,
  language,
}) => {
  const formattedPrice = new Intl.NumberFormat(language, {
    style: 'currency',
    currency: 'EUR',
  }).format(price);

  return <span>{formattedPrice}</span>;
};

// Dynamicly render a pricing table
export default function PricingTable({
  headerTitles,
  units,
  options,
  prices,
}: PricingTableTypes) {
  const { t } = useTranslation();
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
          {headerTitles.map((title) => (
            <th
              key={title}
              style={{
                backgroundColor: colorPresets.table.headBackgroundColor,
                color: colorPresets.table.headTextColor,
                borderColor: colorPresets.table.headBorderColor,
              }}
              className={`border py-1 px-3 text-left`}
              scope="col"
            >
              <div style={{ color: colorPresets.table.headTextColor }}>
                {title}
              </div>
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
              style={{ borderColor: colorPresets.table.unitsBorderColor }}
              className="border px-3 py-1 text-left font-medium italic"
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
                ${colorPresets.table.highlightRowProperty}
                ${colorPresets.table.cellBackgroundPropertyEven}
                ${colorPresets.table.cellBackgroundPropertyOdd}
              `}
            >
              <th
                style={{ borderColor: colorPresets.table.cellBorderColor }}
                className={`border px-3 py-1 text-left`}
                scope="row"
              >
                <b>{row.option}</b>
              </th>

              {rowPrices.map((price, priceIndex) => (
                <td
                  style={{ borderColor: colorPresets.table.cellBorderColor }}
                  key={priceIndex}
                  className={`border px-3 py-1 text-left`}
                >
                  <PriceDisplay price={price} language={i18n.language} />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
