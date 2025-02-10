import { useTranslation } from 'react-i18next';
import { PricingOptions } from '../../lib/types/basicOptionsTypes';
import i18n from '../../utils/i18';
import { useData } from '../../context/DataContext';
import { QuantityDisplay } from '../../utils/helperFunctions';
import { BeatLoader } from 'react-spinners';

type PricingTableTypes = {
  headerTitles: string[];
  units: string[];
  options: string[];
  prices: PricingOptions[] | number[] | null;
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

  // Show loader icon if prices are not received yet
  if (!prices)
    return (
      <div>
        <BeatLoader />
      </div>
    );

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
                <QuantityDisplay value={row.option} language={i18n.language} />
              </th>

              {rowPrices.map((price, priceIndex) => (
                <td
                  key={priceIndex}
                  className={`
                    border px-3 py-1 text-left
                    ${stylePreset.table.cellBorderColor}
                  `}
                >
                  <QuantityDisplay
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
