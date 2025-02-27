import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  foldersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/contentHolders/ContentCard';
import {
  getTableOffsetPrintA3Trifold,
  getTableOffsetPrintA4Bifold,
  getTableOffsetPrintA4Trifold,
  getTableDigitalPrintBlackAndWhite,
  getTableDigitalPrintColor,
} from '../../../data/tables/customPrint/foldersTableContent';
import { useEffect, useState } from 'react';
import i18n from '../../../utils/i18';
import { foldersPageContent } from '../../../data/pages/pagesContent';

export default function Folders() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableDigitalPrintColor, setTableDigitalPrintColor] = useState(
    getTableDigitalPrintColor()
  );
  const [tableDigitalPrintBlackAndWhite, setTableDigitalPrintBlackAndWhite] =
    useState(getTableDigitalPrintBlackAndWhite());
  const [tableOffsetPrintA4Trifold, setTableOffsetPrintA4Trifold] = useState(
    getTableOffsetPrintA4Trifold()
  );
  const [tableOffsetPrintA4Bifold, setTableOffsetPrintA4Bifold] = useState(
    getTableOffsetPrintA4Bifold()
  );
  const [tableOffsetPrintA3Trifold, setTableOffsetPrintA3Trifold] = useState(
    getTableOffsetPrintA3Trifold()
  );

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableDigitalPrintColor(getTableDigitalPrintColor());
    setTableDigitalPrintBlackAndWhite(getTableDigitalPrintBlackAndWhite());
    setTableOffsetPrintA4Trifold(getTableOffsetPrintA4Trifold());
    setTableOffsetPrintA4Bifold(getTableOffsetPrintA4Bifold());
    setTableOffsetPrintA3Trifold(getTableOffsetPrintA3Trifold());
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
            image={foldersPageContent.image}
            title={foldersPageContent.pageTitle}
            introduction={foldersPageContent.pageIntroduction}
          />
        </div>

        {/* Digital print card */}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: foldersContentPaths.cardDigitalPrint.header.title,
              cardSubTitle:
                foldersContentPaths.cardDigitalPrint.header.subTitle,
              cardIntroduction:
                foldersContentPaths.cardDigitalPrint.header.introduction,
              notification: customPrintingContentPaths.digitalPrintDeliveryTime,
            }}
            tableContent={[
              tableDigitalPrintColor,
              tableDigitalPrintBlackAndWhite,
            ]}
          />

          {/* Offset print card */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: foldersContentPaths.cardOffsetPrint.header.title,
              cardSubTitle: foldersContentPaths.cardOffsetPrint.header.subTitle,
              cardIntroduction:
                foldersContentPaths.cardOffsetPrint.header.introduction,
              notification: customPrintingContentPaths.offsetPrintDeliveryTime,
            }}
            tableContent={[
              tableOffsetPrintA4Trifold,
              tableOffsetPrintA4Bifold,
              tableOffsetPrintA3Trifold,
            ]}
          />
        </div>

        {/* Display notification message table */}
        <div className="z-0 w-full">
          <Notification>
            <div className="flex items-start">
              <div
                className={`
                  font-semibold
                  ${stylePreset.notification.asteriskColor}
                  `}
              >
                <span>*&nbsp;</span>
              </div>
              <TextBlock
                value={customPrintingContentPaths.deliveryDisclaimer}
                variant="bodySmall"
              />
            </div>
          </Notification>
        </div>
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '16px',
            marginBottom: '64px',
          }}
          flexItem
          variant="fullWidth"
        />
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
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
