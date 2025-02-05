import { useTranslation } from 'react-i18next';
import IntroductionFlyers from '../../customPrint/folders/introduction';
import FoldersDigitalPrintPricing from '../../customPrint/folders/pricing/FoldersDigitalPrintPricing';
import FoldersOffsetPrintPricingA4 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA4';
import FoldersOffsetPrintPricingA3 from '../../customPrint/folders/pricing/FoldersOffsetPrintPricingA3';
import {
  foldersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';

export default function Folders() {
  useTranslation();
  const { stylePreset } = useData();

  return (
    <div
      className={`
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
      ${stylePreset.overall.backgroundColor}
    `}
    >
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionFlyers />
        <FoldersDigitalPrintPricing
          bgColor={stylePreset.categoryCard.backgroundColorLight}
        />
        <div className="flex flex-col gap-12 sm:gap-0">
          <FoldersOffsetPrintPricingA4
            bgColor={stylePreset.categoryCard.backgroundColorDark}
          />
          <FoldersOffsetPrintPricingA3
            bgColor={stylePreset.categoryCard.backgroundColorDark}
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
                value={foldersContentPaths.deliveryDisclaimer}
                variant="bodySmall"
              />
            </div>
          </Notification>
        </div>
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '64px',
            marginBottom: '16px',
          }}
          flexItem
          variant="fullWidth"
        />
        <div className="pb-2">
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
