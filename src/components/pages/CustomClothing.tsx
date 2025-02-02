import IntroductionCustomClothing from '../customClothing/Introduction';
import FlexAndDtgPricing from '../customClothing/pricing/FlexAndDtgPricing';
import ClothingPiecesPricing from '../customClothing/pricing/ClothingPiecesPricing';
import { useTranslation } from 'react-i18next';
import {
  customClotingContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import { TextBlock } from '../elementTemplates/TextBlock';
import { cardBgColors } from '../../lib/stylePresets';
import { Divider } from '@mui/material';
import { Notification } from '../elementTemplates/Notification';

export default function CustomClothing() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionCustomClothing />
        <ClothingPiecesPricing bgColor={cardBgColors.secondary} />
        <FlexAndDtgPricing bgColor={cardBgColors.primary} />
        {/* Display notification message */}
        <div className="z-0 w-full">
          <Notification>
            <TextBlock
              value={customClotingContentPaths.notificationFirst}
              variant="bodySmall"
            />
            <TextBlock
              value={customClotingContentPaths.notificationSecond}
              variant="bodySmall"
            />
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
