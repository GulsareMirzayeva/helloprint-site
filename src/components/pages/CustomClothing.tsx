import { useTranslation } from 'react-i18next';
import {
  customClotingContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../elementTemplates/Notification';
import { useData } from '../../context/DataContext';
import PageTitleAndIntroduction from '../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../elementTemplates/contentHolders/ContentCard';
import {
  getTableDtg,
  getTableFlexMaterial,
  getTableTextileGarments,
} from '../../data/tables/customClothingTableContent';
import { useEffect, useState } from 'react';
import i18n from '../../utils/i18';
import { customClothingPageContent } from '../../data/pages/pagesContent';

export default function CustomClothing() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling presets
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableTextileGarments, setTableTextileGarments] = useState(
    getTableTextileGarments()
  );

  const [tableFlexMaterial, setTableFlexMaterial] = useState(
    getTableFlexMaterial()
  );

  const [tableDtg, setTableDtg] = useState(getTableDtg());

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableTextileGarments(getTableTextileGarments());
    setTableFlexMaterial(getTableFlexMaterial());
    setTableDtg(getTableDtg());
  }, [i18n.language]);

  return (
    <div
      className={`
      ${stylePreset.overall.backgroundColor}      
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
      `}
    >
      {/* Left empty colomn */}
      <div></div>
      {/* Page introduction - Introduction text with or without an image */}
      <div className="flex flex-col px-2 pt-12">
        <div className="mb-16">
          <PageTitleAndIntroduction
            image={customClothingPageContent.image}
            title={customClothingPageContent.pageTitle}
            introduction={customClothingPageContent.pageIntroduction}
          />
        </div>

        {/* Custom clothing  - Textile garments content card */}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle:
                customClotingContentPaths.cardTextileGarments.header.title,
              cardSubTitle:
                customClotingContentPaths.cardTextileGarments.header.subTitle,
              cardIntroduction:
                customClotingContentPaths.cardTextileGarments.header
                  .introduction,
              notification: undefined,
            }}
            tableContent={[tableTextileGarments]}
          />

          {/* Custom clothing  - Flex/Vinyl and DTG printing content card */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: customClotingContentPaths.cardFlexAndDtg.header.title,
              cardSubTitle:
                customClotingContentPaths.cardFlexAndDtg.header.subTitle,
              cardIntroduction:
                customClotingContentPaths.cardFlexAndDtg.header.introduction,
              notification: undefined,
            }}
            tableContent={[tableFlexMaterial, tableDtg]}
          />
        </div>

        {/* Display notification message */}
        <div className="z-0 w-full">
          <Notification>
            <TextBlock
              value={customClotingContentPaths.notifications.first}
              variant="bodySmall"
            />
            <TextBlock
              value={customClotingContentPaths.notifications.second}
              variant="bodySmall"
            />
            <TextBlock
              value={customClotingContentPaths.notifications.third}
              variant="bodySmall"
            />
            <TextBlock
              value={customClotingContentPaths.notifications.fourth}
              variant="bodySmall"
            />
          </Notification>
        </div>

        {/* Divider - Visually create the end of the pricing content  */}
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '16px',
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
