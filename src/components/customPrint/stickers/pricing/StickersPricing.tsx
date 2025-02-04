import PricingTable from '../../../elementTemplates/PricingTable';
import { stickersCategories } from '../../../../lib/priceCategories';
import { useData } from '../../../../context/DataContext';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../../elementTemplates/TextBlock';
import { stickersContentPaths } from '../../../../lib/translationPaths';
import { TitleWithIntroduction } from '../../../elementTemplates/TitleWithIntroduction';
import { useMemo } from 'react';

export default function StickersPricing({ bgColor }: { bgColor: string }) {
  const { prices } = useData();

  const { t } = useTranslation();

  const useTranslatedOptions = (options: string[]) => {
    return useMemo(() => options.map((option) => t(option)), [options, t]);
  };

  // Defineer de header titels en units boven de return
  const headerTitleStickers: string[] = [
    t('commonWords.format'),
    t('commonWords.pricePerPrint'),
  ];

  const unitStickers: string[] = [];

  const pricePathStickers = prices
    ? [...Object.values(prices.customPrint.stickers)]
    : [];

  const translatedOptions = useTranslatedOptions(stickersCategories);

  return (
    <section>
      <div
        className={`
          flex flex-col p-2 sm:p-8 rounded-xl
          ${bgColor}  
        `}
      >
        <TitleWithIntroduction
          props={{
            mainTitle: stickersContentPaths.largeFormatCapital,
            subTitle: stickersContentPaths.vinyl,
            introduction: stickersContentPaths.introductionLargeFormatTable,
          }}
        />
        <div className="pt-8">
          {/* Title, subtitle and introduction text */}
          <div className="flex flex-col">
            <TextBlock
              value={stickersContentPaths.largeFormat}
              variant="sectionTitle"
            />
            <TextBlock value={stickersContentPaths.vinyl} variant="body" />
          </div>
          <PricingTable
            headerTitles={headerTitleStickers}
            units={unitStickers}
            options={translatedOptions}
            prices={pricePathStickers}
          />
        </div>
      </div>
    </section>
  );
}
