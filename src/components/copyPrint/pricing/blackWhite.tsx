import { useTranslation } from 'react-i18next';
import TitleBlock from '../../TitleBlock';

export default function CopyPrintBlackWhite() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start">
      <TitleBlock value="Prijsoverzicht" />
      <div className="">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border bg-[#FB0036] border-white text-white px-4 py-1 text-left text-4xl">
                <p>{t('copyPrintPage.tableHeadBlackWhite')}</p>
                <p className="text-sm">(80 gr. papier)</p>
              </th>
              <th className="border bg-[#FB0036] border-white px-4 py-1 text-base">
                <p className="text-white ml-1">{t('copyPrintPage.budget')}</p>
              </th>
              <th className="border bg-[#FB0036] border-white px-4 py-1 text-base">
                <p className="text-white ml-1">
                  {t('copyPrintPage.highQuality')}
                </p>
              </th>
              {/* <th className="border bg-[#FB0036] border-black px-4 py-1 text-2xl"></th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>1 - 100</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>€ 0,15</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ 0,35</p>
                <p className="text-sm">
                  <i>p/print</i>
                </p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>101 - 250</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>€ 0,10</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ 0,30</p>
                <p className="text-sm">
                  <i>p/print</i>
                </p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>251 - 500</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>€ 0,07</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ 0,25</p>
                <p className="text-sm">
                  <i>p/print</i>
                </p>
              </td>
            </tr>
            <tr className="border odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <p>501 - 1000</p>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <p>€ 0,06</p>
              </td>
              <td className="flex justify-between items-center px-4 py-2">
                <p>€ 0,20</p>
                <p className="text-sm">
                  <i>p/print</i>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
