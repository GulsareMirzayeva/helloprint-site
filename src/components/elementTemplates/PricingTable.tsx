import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';

type PricePaths = {
  [key: string]: string;
};

type pricingTableTypes = {
  headerTitles: string[];
  units: string[];
  ranges: string[];
  variant: string;
  pricePaths: PricePaths;
};

const resolvePath = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
};

export default function pricingTable({
  headerTitles,
  units,
  ranges,
  variant,
  pricePaths,
}: pricingTableTypes) {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Dynamische prijsdata ophalen op basis van de pricePaths prop
  const pricePathsKeys = Object.keys(pricePaths); // Dit haalt alle prijssoorten (bijv. budget, hq, etc.)

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
                <div className="text-white">{t(title)}</div>
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
                {t(unit)}
              </td>
            );
          })}
        </tr>

        {/* For each range, create a row with the range and corresponding prices */}
        {ranges.map((range, index) => {
          return (
            <tr key={index} className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{range}</td>

              {/* Render columns for each price*/}
              {pricePathsKeys.map((path, colIndex) => {
                const value = resolvePath(
                  prices,
                  `${pricePaths[path]}.${variant}.${range}`
                );
                return (
                  <td
                    key={colIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    € {value?.toFixed(2) || 'N/A'}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
