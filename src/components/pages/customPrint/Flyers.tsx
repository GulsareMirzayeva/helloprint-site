import { useTranslation } from 'react-i18next';
import FlyersDigitalPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA5Pricing';
import FlyersDigitalPrintA6Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA6Pricing';
import IntroductionFlyers from '../../customPrint/flyers/Introduction';
import FlyersOffsetPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersOffsetPrintPricing';
import {
  flyersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { colorPresets } from '../../../lib/stylePresets';
import { Notification } from '../../elementTemplates/Notification';

export default function Flyers() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionFlyers />
        <div className="flex flex-col">
          <FlyersDigitalPrintA6Pricing
            bgColor={colorPresets.card.backgroundColorDark}
          />
          <FlyersDigitalPrintA5Pricing
            bgColor={colorPresets.card.backgroundColorDark}
          />
        </div>
        <FlyersOffsetPrintA5Pricing
          bgColor={colorPresets.card.backgroundColorLight}
        />
        {/* Display notification message */}
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
                value={flyersContentPaths.deliveryDisclaimer}
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
