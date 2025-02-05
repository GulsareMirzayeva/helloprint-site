import {
  copyPrintContentPaths,
  shopInfoPaths,
} from '../../lib/translationPaths';
import SendMessage from '../contact/SendMessage';
import IntroductionCopyPrint from '../copyPrint/Introduction';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import CopyPrintBudgetPricing from '../copyPrint/pricing/CopyPrintBudgetPricing';
import CopyPrintHqPricing from '../copyPrint/pricing/CopyPrintHqPricing';
import { Divider } from '@mui/material';
import { Notification } from '../elementTemplates/Notification';
import { useData } from '../../context/DataContext';

export default function CopyPrint() {
  useTranslation();
  const { stylePreset } = useData();

  return (
    <div
      className={`
      ${stylePreset.overall.backgroundColor}
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
    `}
    >
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start gap-4 w-full px-2 pt-12">
        <IntroductionCopyPrint />
        <CopyPrintBudgetPricing
          bgColor={stylePreset.categoryCard.backgroundColorLight}
        />
        <CopyPrintHqPricing
          bgColor={stylePreset.categoryCard.backgroundColorDark}
        />
        <div className="z-0 w-full">
          <Notification>
            <div className="flex items-end">
              <div
                className={`
                font-semibold
                ${stylePreset.notification.asteriskColor}
              `}
              >
                <span>*&nbsp;</span>
              </div>
              <TextBlock
                value={copyPrintContentPaths.notificationFirst}
                variant="bodySmall"
              />
            </div>
            <TextBlock
              value={copyPrintContentPaths.notificationSecond}
              variant="bodySmall"
            />
            <TextBlock
              value={copyPrintContentPaths.notificationThird}
              variant="bodySmall"
            />
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
        <div
          className={`
          pb-2
          ${stylePreset.overall.textColorPrimary}
          `}
        >
          <TextBlock value={shopInfoPaths.contactTitle} variant={'subTitle'} />
        </div>
        <div className="w-full m-">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
