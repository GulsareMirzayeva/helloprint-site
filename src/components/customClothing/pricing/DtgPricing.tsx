import { Trans, useTranslation } from 'react-i18next';

export default function DtgPricing() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start w-[1000px]">
      <div className="">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-[#FB0036] border-b-2 border-black px-4 py-1 text-left">
                {t('customClothingPage.pricingDtg.tableHead')}
              </th>
              <th className="text-[#FB0036] border-b-2 border-black px-4 py-1 text-left">
                {t('customClothingPage.pricingDtg.tableHeadWhiteTextile')}
              </th>
              <th className="text-[#FB0036] border-b-2 border-black px-4 py-1 text-left">
                {t('customClothingPage.pricingDtg.tableHeadcolored')}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingDtg.frontChestLogo')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 8,95</td>
              <td className="border-b border-black px-4 py-1">€ 9,95</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                <Trans>
                  {t('customClothingPage.pricingDtg.frontBackLarge')}
                </Trans>
              </td>
              <td className="border-b border-black px-4 py-1">€ 11,95</td>
              <td className="border-b border-black px-4 py-1">€ 12,95</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingDtg.frontSmallBackLarge')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 18,95</td>
              <td className="border-b border-black px-4 py-1">€ 19,95</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
