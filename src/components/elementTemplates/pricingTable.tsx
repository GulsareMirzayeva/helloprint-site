import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';

type pricingTableTypes = {
  headerTitles: string[];
  units: string[];
  ranges: string[];
  variant: string;
};

export default function pricingTable({
  headerTitles,
  units,
  ranges,
  variant,
}: pricingTableTypes) {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  return (
    <table className="table-auto">
      <thead>
        <tr>
          {/* Create a headers cell for each given header title */}
          {headerTitles.map((title) => {
            return (
              <th className="border bg-[#FB0036] text-white border-white px-4 text-left">
                <div className="text-white">
                  <p className="text-white">{t(title)}</p>
                </div>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        <tr>
          {/* At the start of the table create a row that contains the used units that are used in the table  */}
          {units.map((unit) => {
            return (
              <td className="border border-gray-300 px-4 py-2">
                <p>{t(unit)}</p>
              </td>
            );
          })}
        </tr>

        {/* For each range, create a row with the range and corresponding prices */}
        {ranges.map((range: string, index: number) => {
          return (
            <tr key={index} className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>{range}</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>
                  €{' '}
                  {variant === 'blackWhite' &&
                    prices.copyPrint.A4.budget.blackWhite[range].toFixed(2)}
                  {variant === 'color' &&
                    prices.copyPrint.A4.budget.color[range].toFixed(2)}
                </p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>
                  €{' '}
                  {variant === 'blackWhite' &&
                    prices.copyPrint.A4.hq.blackWhite[range].toFixed(2)}
                  {variant === 'color' &&
                    prices.copyPrint.A4.hq.color[range].toFixed(2)}
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
