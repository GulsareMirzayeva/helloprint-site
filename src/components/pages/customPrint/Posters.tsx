import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  postersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/contentHolders/ContentCard';
import { useEffect, useState } from 'react';
import {
  getTable160gsmMatte,
  getTable160gsmSatin,
  getTable190gsmGloss,
  getTable260gsmHandmade,
  getTable260gsmSatin,
  getTable80gsmBlackAndWhite,
  getTable80gsmColor,
  getTableColorA3Budget,
  getTableColorA3Hq,
  getTablePolypropylene,
} from '../../../data/tables/customPrint/postersTableContent';
import i18n from '../../../utils/i18';
import { postersPageContent } from '../../../data/pages/pagesContent';

export default function Posters() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [table80gsmColor, setTable80gsmColor] = useState(getTable80gsmColor());
  const [table80gsmBlackAndWhite, setTable80gsmBlackAndWhite] = useState(
    getTable80gsmBlackAndWhite()
  );
  const [table160gsmMatte, setTable160gsmMatte] = useState(
    getTable160gsmMatte()
  );
  const [table160gsmSatin, setTable160gsmSatin] = useState(
    getTable160gsmSatin()
  );
  const [table190gsmGloss, setTable190gsmGloss] = useState(
    getTable190gsmGloss()
  );
  const [table260gsmSatin, setTable260gsmSatin] = useState(
    getTable260gsmSatin()
  );
  const [tablePolypropylene, setTablePolypropylene] = useState(
    getTablePolypropylene()
  );
  const [table260gsmHandmade, setTable260gsmHandmade] = useState(
    getTable260gsmHandmade()
  );
  const [tableColorA3Hq, setTableColorA3Hq] = useState(getTableColorA3Hq());
  const [tableColorA3Budget, setTableColorA3Budget] = useState(
    getTableColorA3Budget()
  );

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTable80gsmColor(getTable80gsmColor());
    setTable80gsmBlackAndWhite(getTable80gsmBlackAndWhite());
    setTable160gsmMatte(getTable160gsmMatte());
    setTable160gsmSatin(getTable160gsmSatin());
    setTable190gsmGloss(getTable190gsmGloss());
    setTable260gsmSatin(getTable260gsmSatin());
    setTablePolypropylene(getTablePolypropylene());
    setTable260gsmHandmade(getTable260gsmHandmade());
    setTableColorA3Hq(getTableColorA3Hq());
    setTableColorA3Budget(getTableColorA3Budget());
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
            image={postersPageContent.image}
            title={postersPageContent.pageTitle}
            introduction={postersPageContent.pageIntroduction}
          />
        </div>

        {/* 80 gsm color and Black and White */}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle:
                postersContentPaths.cardColorOrBlackAndWhite.header.title,
              cardSubTitle:
                postersContentPaths.cardColorOrBlackAndWhite.header.subTitle,
              cardIntroduction:
                postersContentPaths.cardColorOrBlackAndWhite.header
                  .introduction,
              notification: undefined,
            }}
            tableContent={[table80gsmColor, table80gsmBlackAndWhite]}
          />

          {/* 160 gsm to 260 gsm paper */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: postersContentPaths.cardColorHeavyPaper.header.title,
              cardSubTitle:
                postersContentPaths.cardColorHeavyPaper.header.subTitle,
              cardIntroduction:
                postersContentPaths.cardColorHeavyPaper.header.introduction,
              notification: undefined,
            }}
            tableContent={[
              table160gsmMatte,
              table160gsmSatin,
              table190gsmGloss,
              table260gsmSatin,
            ]}
          />

          {/* Special materials - 260 gsm Handmade paper and Polypropylene */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle:
                postersContentPaths.cardColorSpecialMaterials.header.title,
              cardSubTitle:
                postersContentPaths.cardColorSpecialMaterials.header.subTitle,
              cardIntroduction:
                postersContentPaths.cardColorSpecialMaterials.header
                  .introduction,
              notification: undefined,
            }}
            tableContent={[tablePolypropylene, table260gsmHandmade]}
          />

          {/* A3 Full color - Budget and High Quality*/}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: postersContentPaths.cardColorA3.header.title,
              cardSubTitle: postersContentPaths.cardColorA3.header.subTitle,
              cardIntroduction:
                postersContentPaths.cardColorA3.header.introduction,
              notification: undefined,
            }}
            tableContent={[tableColorA3Hq, tableColorA3Budget]}
          />
        </div>

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
                value={customPrintingContentPaths.pricesBasedonSelfService}
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
