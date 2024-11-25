import { useTranslation } from 'react-i18next';

export default function CopyPrintColor() {
  const { t } = useTranslation();
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
                <p>€ 0,20</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ 0,85</p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>101 - 250</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>€ 0,15</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ 0,65</p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>251 - 500</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>€ 0,12</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ 0,55</p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>501 - 1000</p>
              </td>
              <td className="border px-4 py-2">
                <p>€ 0,10</p>
              </td>
              <td className="flex justify-between items-center border px-4 py-2">
                <p>€ 0,45</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
