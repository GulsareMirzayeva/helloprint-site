import { useTranslation } from 'react-i18next';
import FlyersDigitalPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA5Pricing';
import FlyersDigitalPrintA6Pricing from '../../customPrint/flyers/pricing/FlyersDigitalPrintA6Pricing';
import IntroductionFlyers from '../../customPrint/flyers/Introduction';
import FlyersOffsetPrintA5Pricing from '../../customPrint/flyers/pricing/FlyersOffsetPrintPricing';
import { customPrintingContentPaths } from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Divider } from '@mui/material';

export default function Flyers() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col items-start justify-start w-full px-2 pt-12">
        <IntroductionFlyers />
        <FlyersDigitalPrintA6Pricing />
        <FlyersDigitalPrintA5Pricing />
        <FlyersOffsetPrintA5Pricing />
        <Divider flexItem variant="fullWidth" />
        <div className="pt-16 pb-2">
          <TextBlock
            value={customPrintingContentPaths.contactTitle}
            variant={'subTitle'}
          />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
