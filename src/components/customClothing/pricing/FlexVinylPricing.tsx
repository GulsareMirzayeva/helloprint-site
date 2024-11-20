import { Trans, useTranslation } from 'react-i18next';

export default function FlexVinylPricing() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start w-[1000px]">
      <div className="">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-[#FB0036] border-b-2 border-black px-4 py-1 text-left">
                {t('customClothingPage.pricingFlexVinyl.tableHead')}
              </th>
              <th className="border-b-2 border-black px-4 py-1"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingFlexVinyl.frontChestLogo')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 9,95</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                <Trans>
                  {t('customClothingPage.pricingFlexVinyl.frontBackLarge')}
                </Trans>
              </td>
              <td className="border-b border-black px-4 py-1">€ 14,95</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingFlexVinyl.frontSmallBackLarge')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 16,95</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
