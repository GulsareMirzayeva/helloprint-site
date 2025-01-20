import PricingTable from '../../../elementTemplates/PricingTable';
import { stickersCategories } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../../utils/helperFunctions';
import { TextBlock } from '../../../elementTemplates/TextBlock';

export default function StickersPricing() {
  const { prices } = useData(); // Hook altijd bovenaan
  const { t } = useTranslation(); // Hook altijd bovenaan

  // Defineer de header titels en units boven de return
  const headerTitleStickers: string[] = [
    t('commonWords.format'),
    t('commonWords.pricePerPrint'),
  ];

  const unitStickers: string[] = [];

  const pricePathStickers = prices
    ? [...Object.values(prices.customPrint.stickers)]
    : [];

  return (
    <section className="flex flex-col items-center w-full py-20 gap-8 bg-gray-100">
      <div>
        <div className="flex flex-col pb-4">
          <TextBlock
            value="customPrintPage.stickers.subtitleLargeFormat"
            variant="subTitle"
          />
          <TextBlock
            value="customPrintPage.stickers.largeFormatContent"
            variant="body"
          />
        </div>
        {!pricePathStickers ? (
          <div>Loading...</div>
        ) : (
          <div className="flex self-center gap-24">
            <div>
              <PricingTable
                headerTitles={headerTitleStickers}
                units={unitStickers}
                options={translateTextOptions(stickersCategories)}
                prices={pricePathStickers}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
