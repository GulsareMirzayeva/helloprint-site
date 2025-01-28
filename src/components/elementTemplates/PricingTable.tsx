import { useTranslation } from 'react-i18next';
import { PricingOptions } from '../../lib/types/basicOptionsTypes';
import { FC } from 'react';

type PricingTableTypes = {
  headerTitles: string[];
  units: string[];
  options: string[];
  prices: PricingOptions[] | number[];
};

// Function that displays prices with a dot or comma as decimal, depending on the selected language
const PriceDisplay: FC<{ price: number }> = ({ price }: { price: number }) => {
  const { i18n } = useTranslation();
  const formattedPrice = new Intl.NumberFormat(i18n.language, {
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
              className="border bg-[#FB0036] text-white border-white py-2 px-3 text-left"
              scope="col"
            >
              <div className="text-white">{title}</div>
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
              className="border border-gray-400 px-3 py-2 text-left"
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
            <tr key={rowIndex} className="border even:bg-white odd:bg-gray-50">
              <th
                className="border border-gray-400 px-3 py-1 text-left"
                scope="row"
              >
                <b>{row.option}</b>
              </th>

              {rowPrices.map((price, priceIndex) => (
                <td
                  key={priceIndex}
                  className="border border-gray-400 px-3 py-1 text-left"
                >
                  {PriceDisplay((price = { price }))}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
