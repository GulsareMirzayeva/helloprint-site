import PricingTable from '../../../elementTemplates/PricingTable';
import { paperSizes } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { BeatLoader } from 'react-spinners';
import { postersContentPaths } from '../../../../lib/translationPaths';

export default function Posters190grAnd260grPricing() {
  const { prices } = useData();
  const { t } = useTranslation();

  // Let user know if data is loading
  if (!prices) {
    return <BeatLoader color="#FB0036" />;
  }

  // Get all prices for the "posters" page that will be used
  const prices190grGloss = [
    ...Object.values(prices.customPrint.posters.color['190grGloss']),
  ];

  const prices260grSatin = [
    ...Object.values(prices.customPrint.posters.color['260grSatin']),
  ];

  // Table headers
  const headerTitles: string[] = [
    t('commonWords.posters'),
    t('customPrintPage.posters.postersAmount.1-5'),
    t('customPrintPage.posters.postersAmount.6-10'),
    t('customPrintPage.posters.postersAmount.10Plus'),
  ];

  const units: string[] = [
    t('commonWords.format'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
    t('commonWords.pricePerPiece'),
  ];

  return (
    <section className="flex flex-col items-start p-8 w-full rounded-b-xl">
      <div className="flex flex-col items-start">
        <div className="flex gap-16">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col items-baseline">
              <TextBlock
                value={postersContentPaths.color}
                variant="sectionTitle"
              />
              <TextBlock
                value={postersContentPaths.type190grGloss}
                variant="body"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices190grGloss}
            />
          </div>
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col items-baseline">
              <TextBlock
                value={postersContentPaths.color}
                variant="sectionTitle"
              />
              <TextBlock
                value={postersContentPaths.type260grSatin}
                variant="body"
              />
            </div>
            <PricingTable
              headerTitles={headerTitles}
              units={units}
              options={paperSizes}
              prices={prices260grSatin}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
