import { PricingOptions } from '../../lib/types/basicOptionsTypes';

type PricingTableTypes = {
  headerTitles: string[];
  units: string[];
  options: string[];
  prices: PricingOptions[] | number[];
};

export default function PricingTable({
  headerTitles,
  units,
  options,
  prices,
}: PricingTableTypes) {
  // Prepare data for easy access in the table
  const tableData = options.map((option, index) => ({
    option,
    prices: prices[index] || [],
  }));

  return (
    <table className="table-auto" role="table">
      <caption className="sr-only">
        Table showing pricing options with their corresponding units and prices.
      </caption>
      <thead>
        <tr>
          {/* Create a header cell for each given header title */}
          {headerTitles.map((title) => (
            <th
              key={title}
              className="border bg-[#FB0036] text-white border-white py-2 px-4 text-left"
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
              className="border border-gray-300 px-4 py-2"
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
            <tr key={rowIndex} className="border odd:bg-white even:bg-gray-50">
              <th className="border border-gray-300 px-4 py-2" scope="row">
                <b>{row.option}</b>
              </th>

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
