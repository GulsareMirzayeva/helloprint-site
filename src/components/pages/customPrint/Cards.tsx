import { useTranslation } from 'react-i18next';
import IntroductionCards from '../../customPrint/cards/Introduction';
import CardsDigitalPrintPricing from '../../customPrint/cards/pricing/CardsDigitalPrintPricing';
import CardsOffsetPricing from '../../customPrint/cards/pricing/CardsOffsetPricing';
import {
  cardsContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';
import { cardBgColors } from '../../../lib/stylePresets';
import { Notification } from '../../elementTemplates/Notification';

export default function Cards() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionCards />
        <CardsDigitalPrintPricing bgColor={cardBgColors.secondary} />
        <CardsOffsetPricing bgColor={cardBgColors.primary} />
        <div className="z-0 w-full">
          {/* Display notification message */}
          <Notification>
            <div className="flex items-end">
              <div className="text-[#FB0036] font-semibold">
                <span>*&nbsp;</span>
              </div>
              <TextBlock
                value={cardsContentPaths.deliveryDisclaimer}
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
