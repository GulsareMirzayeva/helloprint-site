import { useTranslation } from 'react-i18next';
import {
  shopInfoPaths,
  stickersContentPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/cards/ContentCard';
import { t } from 'i18next';

export default function Stickers() {
  useTranslation();
  const { stylePreset, prices } = useData();

  // Get prices, if available
  const pricePathStickers = prices
    ? [...Object.values(prices.customPrint.stickers)]
    : [];

  // Stickers Large Format - Collect data for pricing table
  const tableLargeFormat = {
    hasAsterisk: false,
    tableTitle:
      stickersContentPaths.cardLargeFormat.tableLargeFormat.header.title,
    tableSubTitle:
      stickersContentPaths.cardLargeFormat.tableLargeFormat.header.subTitle,
    data: {
      headerTitles: [t('commonWords.format'), t('commonWords.pricePerPrint')],
      units: [],
      options: [
        t(
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.rowHeaders.headerOne'
        ),
        t(
          'customPrintPage.stickers.cardLargeFormat.tableLargeFormat.rowHeaders.headerTwo'
        ),
      ],
      prices: pricePathStickers,
    },
  };

  return (
    <div
      className={`
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
      ${stylePreset.overall.backgroundColor}
    `}
    >
      {/* Left empty colomn */}
      <div></div>

      {/* Page introduction - Introduction text with or without an image */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <div className="mb-16">
          <PageTitleAndIntroduction
            image={stickersContentPaths.data.image}
            title={stickersContentPaths.pageHeader.title}
            introduction={stickersContentPaths.pageHeader.introduction}
          />
        </div>
        {/* Stickers Large format content card*/}
        <ContentCard
          bgColor={stylePreset.categoryCard.backgroundColorLight}
          headerContent={{
            cardTitle: stickersContentPaths.cardLargeFormat.header.title,
            cardSubTitle: stickersContentPaths.cardLargeFormat.header.subTitle,
            cardIntroduction:
              stickersContentPaths.cardLargeFormat.header.introduction,
            notification: undefined,
          }}
          tableContent={[tableLargeFormat]}
        />

        {/* Divider - Visually create the end of the pricing content  */}
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '16px',
            marginBottom: '16px',
          }}
          flexItem
          variant="fullWidth"
        />

        {/* Message section at the bottom, introduced by an introduction text */}
        <div className="pb-2">
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>

      {/* Right empty colomn */}
      <div></div>
    </div>
  );
}
