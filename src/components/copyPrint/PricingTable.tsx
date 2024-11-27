import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';
import { SplitPriceRange } from '../../utils/priceCategories';
import { SplitPriceRangeType } from '../../lib/types/basicRangeTypes';
import { TextBlock } from '../textContentTemplates/TextBlock';

type CopyPrintBlackWhiteTypes = {
  variant: 'blackWhite' | 'color';
};

export default function CopyPrintBlackWhite({
  variant,
}: CopyPrintBlackWhiteTypes) {
  // Implement i18next translation
  const { t } = useTranslation();

  const { prices } = useData();

  // Let user know if data is loading
  if (!prices) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-start">
      <div>
        <div className="flex flex-col">
          {variant === 'blackWhite' && (
            <>
              <TextBlock
                value="copyPrintPage.tableHeadBlackWhite"
                variant="title"
              />
              <p className="text-sm">
                <TextBlock value="paperTypes.80gr" variant="body" />
              </p>
            </>
          )}

          {variant === 'color' && (
            <>
              <TextBlock value="copyPrintPage.tableHeadColor" variant="title" />
              <p className="text-sm">
                <TextBlock value="paperTypes.90gr" variant="body" />
              </p>
            </>
          )}
        </div>

        <table className="table-auto">
          <thead>
            <tr>
              <th className="border bg-[#FB0036] text-white border-white px-4 text-left">
                {/* {variant === 'blackWhite' && (
                  <>
                    {t('copyPrintPage.tableHeadBlackWhite')}
                    <p className="text-sm">
                      (80 grams {t('commonWords.paper')})
                    </p>
                  </>
                )}
                {variant === 'color' && (
                  <>
                    {t('copyPrintPage.tableHeadColor')}
                    <p className="text-sm">
                      (90 grams {t('commonWords.paper')})
                    </p>
                  </>
                )} */}
              </th>
              <th className="border bg-[#FB0036] border-white px-4 py-1 text-base">
                <div className="text-white">
                  <p className="text-white">{t('copyPrintPage.budget')}</p>
                </div>
              </th>
              <th className="border bg-[#FB0036] border-white px-4 py-1 text-base">
                <p className="text-white">{t('copyPrintPage.highQuality')}</p>
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
            {/* End of iteration */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
