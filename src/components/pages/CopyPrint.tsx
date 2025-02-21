import {
  copyPrintContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { Notification } from '../elementTemplates/Notification';
import { useData } from '../../context/DataContext';
import ContentCard from '../elementTemplates/contentHolders/ContentCard';
import {
  getTableDataBudgetBlackAndWhite,
  getTableDataBudgetColor,
  getTableDataHq,
} from '../../data/tables/copyPrintTableContent';
import { useEffect, useState } from 'react';
import i18n from '../../utils/i18';
import { copyPrintPageContent } from '../../data/pages/pagesContent';
import PageTitleAndIntroduction from '../elementTemplates/PageTitleAndIntroduction';

export default function CopyPrint() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableDataBudgetColor, setTableDataBudgetColor] = useState(
    getTableDataBudgetColor()
  );

  const [tableDataBudgetBlackAndWhite, setTableDataBudgetBlackAndWhite] =
    useState(getTableDataBudgetBlackAndWhite());

  const [tableDataHq, setTableDataHq] = useState(getTableDataHq());

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableDataBudgetColor(getTableDataBudgetColor());
    setTableDataBudgetBlackAndWhite(getTableDataBudgetBlackAndWhite());
    setTableDataHq(getTableDataHq());
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
            image={copyPrintPageContent.image}
            title={copyPrintPageContent.pageTitle}
            introduction={copyPrintPageContent.pageIntroduction}
            subTitle={copyPrintContentPaths.pageHeader.subTitle}
            subText={copyPrintContentPaths.pageHeader.subText}
          />
        </div>

        {/* Budget pricing tables */}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: copyPrintContentPaths.cardBudget.header.title,
              cardSubTitle: copyPrintContentPaths.cardBudget.header.subTitle,
              cardIntroduction:
                copyPrintContentPaths.cardBudget.header.introduction,
            }}
            tableContent={[tableDataBudgetColor, tableDataBudgetBlackAndWhite]}
          />

          {/* High quality pricing table */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: copyPrintContentPaths.cardHq.header.title,
              cardSubTitle: copyPrintContentPaths.cardHq.header.subTitle,
              cardIntroduction:
                copyPrintContentPaths.cardHq.header.introduction,
            }}
            tableContent={[tableDataHq]}
          />
        </div>

        {/* Notification - If needed, place a notification message at the bottom of the page */}
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
                value={copyPrintContentPaths.notifications.first}
                variant="bodySmall"
              />
            </div>
            <TextBlock
              value={copyPrintContentPaths.notifications.second}
              variant="bodySmall"
            />
            <TextBlock
              value={copyPrintContentPaths.notifications.third}
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
        <div
          className={`
          pb-8
          ${stylePreset.overall.textColorPrimary}
          `}
        >
          <TextBlock
            value={shopInfoPaths.contactTitle}
            variant={'subTitleMedium'}
          />
        </div>
        <div className="w-full m-">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
