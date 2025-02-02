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
import { cardBgColors } from '../../../lib/stylePresets';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';

export default function Posters() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionPosters />
        <Posters80grPricing bgColor={cardBgColors.secondary} />
        <Posters160grPricing bgColor={cardBgColors.primary} />
        <Posters190grAnd260grPricing bgColor={cardBgColors.secondary} />
        <PostersSpecialPapersPricing bgColor={cardBgColors.primary} />
        <PostersA3BudgetAndHqPricing bgColor={cardBgColors.secondary} />
        <div className="z-0 w-full">
          <Notification>
            <div className="flex items-end">
              <div className="text-[#FB0036] font-semibold">
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
