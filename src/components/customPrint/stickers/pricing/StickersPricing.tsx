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
    <section>
      <div className="flex flex-col p-8 bg-gray-100 rounded-xl">
        <TitleWithIntroduction
          props={{
            mainTitle: stickersContentPaths.subtitleLargeFormat,
            subTitle: stickersContentPaths.vinyl,
            introduction: stickersContentPaths.introductionLargeFormatTable,
          }}
        />
        <div className="pt-8">
          {/* Display a title and the papertype at the top of the table */}
          <div className="flex flex-col">
            <TextBlock
              value={stickersContentPaths.subtitleLargeFormat}
              variant="sectionTitle"
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
    </section>
  );
}
