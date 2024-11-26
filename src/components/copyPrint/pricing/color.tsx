import { useTranslation } from 'react-i18next';
import { useData } from '../../../context/DataContext';

export default function CopyPrintColor() {
  const { prices, isLoading, error } = useData();
  const { t } = useTranslation();

  if (!prices) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-start">
      <div className="">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border bg-[#FB0036] border-gray-300 px-4 py-1 text-left text-2xl">
                <p className="text-white">
                  {t('copyPrintPage.tableHeadColor')}
                </p>
                <p className="text-white text-sm">
                  (90 grams {t('commonWords.paper')})
                </p>
              </th>
              <th className="border bg-[#FB0036] border-white px-4 py-1 text-base">
                <p className="text-white ml-1">{t('copyPrintPage.budget')}</p>
              </th>
              <th className="border bg-[#FB0036] border-white px-4 py-1 text-base">
                <p className="text-white ml-1">
                  {t('copyPrintPage.highQuality')}
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>Aantal prints</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>Prijs per print</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>Prijs per print</p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>1 - 100</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>€ {prices.copyPrint.A4.budget.color['1-100'].toFixed(2)}</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ {prices.copyPrint.A4.hq.color['1-100'].toFixed(2)}</p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>101 - 250</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>
                  € {prices.copyPrint.A4.budget.color['101-250'].toFixed(2)}
                </p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ {prices.copyPrint.A4.hq.color['101-250'].toFixed(2)}</p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>251 - 500</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>
                  € {prices.copyPrint.A4.budget.color['251-500'].toFixed(2)}
                </p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ {prices.copyPrint.A4.hq.color['251-500'].toFixed(2)}</p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>501 - 1000</p>
              </td>
              <td className="border px-4 py-2">
                <p>
                  € {prices.copyPrint.A4.budget.color['501-1000'].toFixed(2)}
                </p>
              </td>
              <td className="flex justify-between items-center border px-4 py-2">
                <p>€ {prices.copyPrint.A4.hq.color['501-1000'].toFixed(2)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
