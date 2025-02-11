import { useTranslation } from 'react-i18next';
import i18n from '../../../utils/i18';
import { useData } from '../../../context/DataContext';
import { QuantityDisplay } from '../../../utils/helperFunctions';
import { BeatLoader } from 'react-spinners';
import { PricingTableTypes } from '../../../lib/types/contentCardTypes';
import { commonSentences } from '../../../lib/translationPaths';

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
    <table className="table-auto border-collapse w-full" role="table">
      {/* Caption - Stays visible for screenreaders */}
      <caption className="sr-only">{t(commonSentences.tableCaption)}</caption>

      <thead>
        <tr>
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
              {title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {/* Rows for units */}
        <tr>
          {units.map((unit, index) => (
            <th
              key={index}
              className={`
              border px-3 py-1 text-left font-medium italic
              ${stylePreset.table.unitsBorderColor}
              ${stylePreset.table.unitsBackgroundColor}
            `}
              scope="row"
            >
              {unit}
            </th>
          ))}
        </tr>

        {/* Dynamic rows */}
        {tableData.map((row, rowIndex) => {
          const rowPrices = [...Object.values(row.prices)];

          return (
            <tr
              key={rowIndex}
              className={`border ${stylePreset.table.highlightRow} ${stylePreset.table.cellBackgroundEven} ${stylePreset.table.cellBackgroundOdd}`}
              tabIndex={-1} // Rows are not interactible for keyboard
            >
              <th
                className={`border px-3 py-1 text-left ${stylePreset.table.cellBorderColor}`}
                scope="row"
              >
                <QuantityDisplay value={row.option} language={i18n.language} />
              </th>

              {rowPrices.map((price, priceIndex) => (
                <td
                  key={priceIndex}
                  className={`border px-3 py-1 text-left ${stylePreset.table.cellBorderColor}`}
                  tabIndex={0} // Cells are accessible with keyboard
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
