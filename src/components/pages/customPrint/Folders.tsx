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
import { colorPresets } from '../../../lib/stylePresets';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';

export default function Folders() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionFlyers />
        <FoldersDigitalPrintPricing
          bgColor={colorPresets.card.backgroundColorDark}
        />
        <div className="flex flex-col gap-12 sm:gap-0">
          <FoldersOffsetPrintPricingA4
            bgColor={colorPresets.card.backgroundColorLight}
          />
          <FoldersOffsetPrintPricingA3
            bgColor={colorPresets.card.backgroundColorLight}
          />
        </div>
        {/* Display notification message table */}
        <div className="z-0 w-full">
          <Notification>
            <div className="flex items-end">
              <div
                style={{ color: colorPresets.notification.asteriskColor }}
                className="font-semibold"
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
        <Divider flexItem variant="fullWidth" />
        <div className="pt-16 pb-2">
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
