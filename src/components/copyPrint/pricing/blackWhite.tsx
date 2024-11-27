import { useTranslation } from 'react-i18next';
import { useData } from '../../../context/DataContext';
import { SplitPriceRange } from '../../../utils/priceCategories';
import { SplitPriceRangeType } from '../../../lib/types/basicRangeTypes';

export default function CopyPrintBlackWhite() {
  const { prices } = useData();

  // Let user know when data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  // Implement i18next translation
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-start">
      <div className="">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-1 text-left text-2xl">
                <p>{t('copyPrintPage.tableHeadBlackWhite')}</p>
                <p className="text-sm">(80 grams {t('commonWords.paper')})</p>
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
            {/* The first row of the table renders the title for each column */}
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

            {/* 
              Iterate through the list of categories used in the CopyPrint tables.
              Create a tablerow for each price range to render the categories with the corresponding prices
            */}

            {SplitPriceRange.map((range: keyof SplitPriceRangeType, index) => {
              return (
                <tr key={index} className="border odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    <p>{range}</p>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <p>
                      €{' '}
                      {prices.copyPrint.A4.budget.blackWhite[range].toFixed(2)}
                    </p>
                  </td>
                  <td className="flex justify-between items-center px-4 py-2">
                    <p>
                      € {prices.copyPrint.A4.hq.blackWhite[range].toFixed(2)}
                    </p>
                  </td>
                </tr>
              );
            })}
            {/* End of iteration */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
