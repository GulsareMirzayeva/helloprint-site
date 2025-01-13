import { PricingOptions } from '../../lib/types/basicOptionsTypes';

type PricingTableTypes = {
  headerTitles: string[];
  units: string[];
  options: string[];
  prices: PricingOptions[] | number[];
};

// Generate a table with dynamic size and content:

// headerTitles:
// The titles of each column at the top of the table
// (for example: ["Prints", "Budget", "High quality"])

// units:
// Show the used units in the column below the titles
// (for example: ["Amount", "Price per print", "Price per print"])

// options:
// Prices are categorized by the amount or the type of a medium (paper/clothing)
// (for example: ['1-100', '101-250', '251-500', '501-1000'])

// prices:
// An object that contains the prices for each option
// (for example: { "1-00": {"budget": x.xx, "hq": x.xx} })

export default function PricingTable({
  headerTitles,
  units,
  options,
  prices,
}: PricingTableTypes) {
  // Prepare data for easy acces in the table
  const tableData = options.map((option, index) => ({
    option,
    prices: prices[index] || [],
  }));

  return (
    <table className="table-auto">
      <thead>
        <tr>
          {/* Create a headers cell for each given header title */}
          {headerTitles.map((title) => (
            <th
              key={title}
              className="border bg-[#FB0036] text-white border-white py-2 px-4 text-left"
            >
              <div className="text-white">{title}</div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          {/* At the start of the table create a row that contains the used units */}
          {units.map((unit, index) => (
            <td key={index} className="border border-gray-300 px-4 py-2">
              <i>{unit}</i>
            </td>
          ))}
        </tr>

        {/* Create rows for each option and corresponding prices */}
        {tableData.map((row, rowIndex) => {
          const rowPrices = [...Object.values(row.prices)];

          return (
            <tr key={rowIndex} className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <b>{row.option}</b>
              </td>

              {rowPrices.map((price, priceIndex) => (
                <td
                  key={priceIndex}
                  className="border border-gray-300 px-4 py-2"
                >
                  € {price.toFixed(2)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
