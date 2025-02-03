import { useTranslation } from 'react-i18next';
import IntroductionPosters from '../../customPrint/posters/introduction';
import Posters160grPricing from '../../customPrint/posters/pricing/Posters160grPricing';
import Posters190grAnd260grPricing from '../../customPrint/posters/pricing/Posters190grAnd260grPricing';
import Posters80grPricing from '../../customPrint/posters/pricing/Posters80grPricing';
import PostersA3BudgetAndHqPricing from '../../customPrint/posters/pricing/PostersA3BudgetAndHqPricing';
import PostersSpecialPapersPricing from '../../customPrint/posters/pricing/PostersSpecialPapersPricing';
import {
  postersContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { colorPresets } from '../../../lib/stylePresets';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';

export default function Posters() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionPosters />
        <Posters80grPricing bgColor={colorPresets.card.backgroundColorDark} />
        <div className="flex flex-col gap-12 sm:gap-0">
          <Posters160grPricing
            bgColor={colorPresets.card.backgroundColorLight}
          />
          <Posters190grAnd260grPricing
            bgColor={colorPresets.card.backgroundColorLight}
          />
        </div>
        <PostersSpecialPapersPricing
          bgColor={colorPresets.card.backgroundColorDark}
        />
        <PostersA3BudgetAndHqPricing
          bgColor={colorPresets.card.backgroundColorLight}
        />
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
                value={postersContentPaths.notificationFirst}
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
