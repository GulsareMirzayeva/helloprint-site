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
import { Notification } from '../../elementTemplates/Notification';
import { useData } from '../../../context/DataContext';

export default function Flyers() {
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
        <div className="flex flex-col">
          <FlyersDigitalPrintA6Pricing
            bgColor={stylePreset.categoryCard.backgroundColorLight}
          />
          <FlyersDigitalPrintA5Pricing
            bgColor={stylePreset.categoryCard.backgroundColorLight}
          />
        </div>
        <FlyersOffsetPrintA5Pricing
          bgColor={stylePreset.categoryCard.backgroundColorDark}
        />
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
                value={flyersContentPaths.deliveryDisclaimer}
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
