import { useTranslation } from 'react-i18next';
import ContactDetails from '../contact/ContactDetails';
import SendMessage from '../contact/SendMessage';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';
import { useData } from '../../context/DataContext';

export default function Contact() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  return (
    <div
      className={`
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
      ${stylePreset.overall.backgroundColor}
    `}
    >
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col justify-start items-start w-full p-2 pt-12">
        <div className="flex flex-col pb-8">
          <TextBlock
            value={contactInfoTextContent.pageTitle}
            variant={'pageTitle'}
          />
          <TextBlock value={shopInfoPaths.contactTitle} variant={'body'} />
        </div>
        <div>
          <SendMessage />
        </div>
        {/* <Divider flexItem variant="middle" /> */}
        <ContactDetails />
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
