import PricingTable from '../../../elementTemplates/PricingTable';
import { paperSizes } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { postersContentPaths } from '../../../../lib/translationPaths';

export default function Posters160grPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "posters" page that will be used
  const prices160grMat = [
    ...Object.values(prices.customPrint.posters.color['160grMat']),
  ];

  const prices160grSatin = [
    ...Object.values(prices.customPrint.posters.color['160grSatin']),
  ];

  // Table headers
  const headerTitles: string[] = [
    t('commonWords.posters'),
    t('postersAmount.1-5'),
    t('postersAmount.6-10'),
    t('postersAmount.10Plus'),
  ];

  const units: string[] = [
    t('commonWords.format'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full py-20 gap-4 bg-white">
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex gap-20">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value={postersContentPaths.color} variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock
                value={postersContentPaths.type160grMat}
                variant="subTitle"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices160grMat}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex items-baseline">
              <TextBlock value={postersContentPaths.color} variant="title" />
              &nbsp; <span className="text-2xl">-</span> &nbsp;
              <TextBlock
                value={postersContentPaths.type160grSatin}
                variant="subTitle"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices160grSatin}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
