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
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';

export default function Posters() {
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
        <IntroductionPosters />
        <Posters80grPricing
          bgColor={stylePreset.categoryCard.backgroundColorLight}
        />
        <div className="flex flex-col gap-12 sm:gap-0">
          <Posters160grPricing
            bgColor={stylePreset.categoryCard.backgroundColorDark}
          />
          <Posters190grAnd260grPricing
            bgColor={stylePreset.categoryCard.backgroundColorDark}
          />
        </div>
        <PostersSpecialPapersPricing
          bgColor={stylePreset.categoryCard.backgroundColorLight}
        />
        <PostersA3BudgetAndHqPricing
          bgColor={stylePreset.categoryCard.backgroundColorDark}
        />
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
                value={postersContentPaths.notificationFirst}
                variant="bodySmall"
              />
            </div>
          </Notification>
        </div>
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '16px',
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
