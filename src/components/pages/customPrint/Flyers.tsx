import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  flyersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../../elementTemplates/Notification';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/contentHolders/ContentCard';
import { useEffect, useState } from 'react';
import i18n from '../../../utils/i18';
import {
  getTableDigitalPrintA6SingleSided,
  getTableDigitalPrintA6DoubleSided,
  getTableDigitalPrintA5SingleSided,
  getTableDigitalPrintA5DoubleSided,
  getTableOffsetPrintA5DoubleSided,
  getTableOffsetPrintA6DoubleSided,
} from '../../../data/tables/customPrint/FlyersTableContent';
import { flyersPageContent } from '../../../data/pages/pagesContent';

export default function Flyers() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableDigitalPrintA6SingleSided, setTableDigitalPrintA6SingleSided] =
    useState(getTableDigitalPrintA6SingleSided());
  const [tableDigitalPrintA6DoubleSided, setTableDigitalPrintA6DoubleSided] =
    useState(getTableDigitalPrintA6DoubleSided());
  const [tableDigitalPrintA5SingleSided, setTableDigitalPrintA5SingleSided] =
    useState(getTableDigitalPrintA5SingleSided());
  const [tableDigitalPrintA5DoubleSided, setTableDigitalPrintA5DoubleSided] =
    useState(getTableDigitalPrintA5DoubleSided());
  const [tableOffsetPrintA6DoubleSided, setTableOffsetPrintA6DoubleSided] =
    useState(getTableOffsetPrintA5DoubleSided());
  const [tableOffsetPrintA5DoubleSided, setTableOffsetPrintA5DoubleSided] =
    useState(getTableOffsetPrintA6DoubleSided());

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableDigitalPrintA6SingleSided(getTableDigitalPrintA6SingleSided());
    setTableDigitalPrintA6DoubleSided(getTableDigitalPrintA6DoubleSided());
    setTableDigitalPrintA5SingleSided(getTableDigitalPrintA5SingleSided());
    setTableDigitalPrintA5DoubleSided(getTableDigitalPrintA5DoubleSided());
    setTableOffsetPrintA6DoubleSided(getTableOffsetPrintA5DoubleSided());
    setTableOffsetPrintA5DoubleSided(getTableOffsetPrintA6DoubleSided());
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
            image={flyersPageContent.image}
            title={flyersPageContent.pageTitle}
            introduction={flyersPageContent.pageIntroduction}
          />
        </div>
        {/* Digital print card */}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: flyersContentPaths.cardDigitalPrint.header.title,
              cardSubTitle: flyersContentPaths.cardDigitalPrint.header.subTitle,
              cardIntroduction:
                flyersContentPaths.cardDigitalPrint.header.introduction,
              notification: customPrintingContentPaths.digitalPrintDeliveryTime,
            }}
            tableContent={[
              tableDigitalPrintA6SingleSided,
              tableDigitalPrintA6DoubleSided,
              tableDigitalPrintA5SingleSided,
              tableDigitalPrintA5DoubleSided,
            ]}
          />

          {/* Offset print card */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: flyersContentPaths.cardOffsetPrint.header.title,
              cardSubTitle: flyersContentPaths.cardOffsetPrint.header.subTitle,
              cardIntroduction:
                flyersContentPaths.cardOffsetPrint.header.introduction,
              notification: customPrintingContentPaths.offsetPrintDeliveryTime,
            }}
            tableContent={[
              tableOffsetPrintA5DoubleSided,
              tableOffsetPrintA6DoubleSided,
            ]}
          />
        </div>

        {/* Display notification message */}
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
