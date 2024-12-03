import { PricingRange } from '../../lib/types/basicRangeTypes';

type PricingTableTypes = {
  headerTitles: string[];
  units: string[];
  ranges: string[];
  prices: PricingRange[];
};

// Generate a table with dynamic size and content:

// headerTitles:
// The titles of each column at the top of the table
// (for example: ["Prints", "Budget", "High quality"])

// units:
// Show the used units in the column below the titles
// (for example: ["Amount", "Price per print", "Price per print"])

// ranges:
// Prices are categorized by the amount or the type of a medium (paper/clothing)
// (for example: ['1-100', '101-250', '251-500', '501-1000'])

// prices:
// An object that contains the prices for each range
// (for example: { "1-00": {"budget": x.xx, "hq": x.xx} })

export default function PricingTable({
  headerTitles,
  units,
  ranges,
  prices,
}: PricingTableTypes) {
  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Prepare data for easy acces in the table
  const tableData = ranges.map((range, index) => ({
    range,
    prices: prices[index] || [],
  }));

  return (
    <table className="table-auto">
      <thead>
        <tr>
          {/* Create a headers cell for each given header title */}
          {headerTitles.map((title) => {
            return (
              <th
                key={title}
                className="border bg-[#FB0036] text-white border-white px-4 text-left"
              >
                <div className="text-white">{title}</div>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        <tr>
          {/* At the start of the table create a row that contains the used units that are used in the table  */}
          {units.map((unit, index) => {
            return (
              <td key={index} className="border border-gray-300 px-4 py-2">
                {unit}
              </td>
            );
          })}
        </tr>

        {/* Create a row with a range and the corresponding prices */}
        {tableData.map((row, rowIndex) => {
          // Get all prices for each range
          const rowPrices = [...Object.values(row.prices)];

          return (
            <tr key={rowIndex} className="border odd:bg-white even:bg-gray-50">
              {/* Create the table cell that contains the range ("1-00" or "textile" for example) */}
              <td className="border border-gray-300 px-4 py-2">{row.range}</td>

              {/* For each range, iterate through the prices and display them in the corresponding column */}
              {row.prices !== undefined ? (
                rowPrices.map((price, priceIndex) => {
                  return (
                    <td
                      key={priceIndex}
                      className="border border-gray-300 px-4 py-2"
                    >
                      € {price.toFixed(2)}
                    </td>
                  );
                })
              ) : (
                // If the amount of columns and available data doesn't match, prevent displaying empty cells
                <td className="border border-gray-300 px-4 py-2">"N/A"</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
