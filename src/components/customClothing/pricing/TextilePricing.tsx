import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function TextilePricing() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start w-[1000px] pt-4">
      <TextBlock
        value="customClothingPage.pricingTextile.title"
        variant="title"
      />
      <div className="flex">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-[#FB0036] border-b-2 border-black px-4 py-1 text-left">
                {t('customClothingPage.pricingTextile.tableHeadType')}
              </th>
              <th className="text-[#FB0036] border-b-2 border-black px-4 py-1 text-left">
                {t('customClothingPage.pricingTextile.tableHeadBlackWhite')}
              </th>
              <th className="text-[#FB0036] border-b-2 border-black px-4 py-1 text-left">
                {t('customClothingPage.pricingTextile.tableHeadColor')}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingTextile.shirt')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 5,95</td>
              <td className="border-b border-black px-4 py-1">€ 6,95</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingTextile.polo')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 14,95</td>
              <td className="border-b border-black px-4 py-1">€ 29,95</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingTextile.sweater')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 29,95</td>
              <td className="border-b border-black px-4 py-1">€ 32,95</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border-b border-black px-4 py-1">
                {t('customClothingPage.pricingTextile.hoody')}
              </td>
              <td className="border-b border-black px-4 py-1">€ 37,95</td>
              <td className="border-b border-black px-4 py-1">€ 39,95</td>
            </tr>
          </tbody>
        </table>

        {/* Right half */}
        <div></div>
      </div>
    </div>
  );
}
