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
import ContentCard from '../../elementTemplates/contentHolders/ContentCard';
import { getTableLargeFormat } from '../../../data/tables/customPrint/stickersTableContent';
import { useEffect, useState } from 'react';
import i18n from '../../../utils/i18';
import { stickersPageContent } from '../../../data/pages/pagesContent';

export default function Stickers() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling presets
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableLargeFormat, setTableLargeFormat] = useState(
    getTableLargeFormat()
  );

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableLargeFormat(getTableLargeFormat());
  }, [i18n.language]);

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
      <div className="flex flex-col px-2 pt-12">
        <div className="mb-16">
          <PageTitleAndIntroduction
            image={stickersPageContent.image}
            title={stickersPageContent.pageTitle}
            introduction={stickersPageContent.pageIntroduction}
          />
        </div>
        {/* Stickers Large format content card*/}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: '',
              cardSubTitle: '',
              cardIntroduction:
                stickersContentPaths.cardLargeFormat.header.introduction,
              notification: undefined,
            }}
            tableContent={[tableLargeFormat]}
          />
        </div>

        {/* Divider - Visually create the end of the pricing content  */}
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '32px',
            marginBottom: '64px',
          }}
          flexItem
          variant="fullWidth"
        />

        {/* Message section at the bottom, introduced by an introduction text */}
        <div className="pb-8">
          <TextBlock
            value={shopInfoPaths.contactTitle}
            variant={'subTitleMedium'}
          />
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
