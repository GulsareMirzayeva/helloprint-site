import { useTranslation } from 'react-i18next';
import {
  cardsContentPaths,
  customPrintingContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../../elementTemplates/Notification';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/contentHolders/ContentCard';
import {
  getTableDigitalPrintBlackAndWhite,
  getTableDigitalPrintColor,
  getTableOffsetPrintColor,
} from '../../../data/tables/customPrint/businessTableContent';
import { cardsPageContent } from '../../../data/pages/pagesContent';
import { useEffect, useState } from 'react';
import i18n from '../../../utils/i18';

export default function Cards() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableDigitalPrintBlackAndWhite, setTableDigitalPrintBlackAndWhite] =
    useState(getTableDigitalPrintBlackAndWhite());

  const [tableDigitalPrintColor, setTableDigitalPrintColor] = useState(
    getTableDigitalPrintColor()
  );

  const [tableOffsetPrintColor, setTableOffsetPrintColor] = useState(
    getTableOffsetPrintColor()
  );

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableDigitalPrintBlackAndWhite(getTableDigitalPrintBlackAndWhite());
    setTableDigitalPrintColor(getTableDigitalPrintColor());
    setTableOffsetPrintColor(getTableOffsetPrintColor());
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
            image={cardsPageContent.image}
            title={cardsPageContent.pageTitle}
            introduction={cardsPageContent.pageIntroduction}
          />
        </div>
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: cardsContentPaths.cardDigitalPrint.header.title,
              cardSubTitle: cardsContentPaths.cardDigitalPrint.header.subTitle,
              cardIntroduction:
                cardsContentPaths.cardDigitalPrint.header.introduction,
              notification: customPrintingContentPaths.digitalPrintDeliveryTime,
            }}
            tableContent={[
              tableDigitalPrintBlackAndWhite,
              tableDigitalPrintColor,
            ]}
          />

          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: cardsContentPaths.cardOffsetPrint.header.title,
              cardSubTitle: cardsContentPaths.cardOffsetPrint.header.subTitle,
              cardIntroduction:
                cardsContentPaths.cardOffsetPrint.header.introduction,
              notification: customPrintingContentPaths.offsetPrintDeliveryTime,
            }}
            tableContent={[tableOffsetPrintColor]}
          />
        </div>

        <div className="z-0 w-full">
          {/* Display notification message */}
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
