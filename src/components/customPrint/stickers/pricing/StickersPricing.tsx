import PricingTable from '../../../elementTemplates/PricingTable';
import { stickersCategories } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { translateTextOptions } from '../../../../utils/helperFunctions';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { stickersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';

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
    <section className="flex flex-col items-center w-full py-10">
      <div className="flex flex-col items-start">
        <TitleWithIntroduction
          props={{
            mainTitle: stickersContentPaths.subtitleLargeFormat,
            subTitle: stickersContentPaths.subtitleLargeFormat,
            introduction: stickersContentPaths.introductionLargeFormatTable,
          }}
        />
        <div className="flex gap-20 pt-10">
          <div>
            {/* Display a title and the papertype at the top of the table */}
            <div className="flex flex-col">
              <TextBlock
                value={stickersContentPaths.subtitleLargeFormat}
                variant="subTitle"
              />
              <TextBlock value={stickersContentPaths.vinyl} variant="body" />
            </div>
            <PricingTable
              headerTitles={headerTitleStickers}
              units={unitStickers}
              options={translateTextOptions(stickersCategories)}
              prices={pricePathStickers}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
