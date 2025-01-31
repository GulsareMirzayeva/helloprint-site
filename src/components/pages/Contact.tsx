import { useTranslation } from 'react-i18next';
import ContactDetails from '../contact/ContactDetails';
import SendMessage from '../contact/SendMessage';
import {
  contactInfoTextContent,
  customPrintingContentPaths,
} from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';

export default function Contact() {
  useTranslation();

  return (
    <div className="grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full">
      <div></div> {/* Left empty colomn */}
      <div className="flex flex-col justify-start items-start w-full p-2 pt-8">
        <div className="flex flex-col pb-8">
          <TextBlock
            value={contactInfoTextContent.pageTitle}
            variant={'pageTitle'}
          />
          <TextBlock
            value={customPrintingContentPaths.contactTitle}
            variant={'sectionIntroduction'}
          />
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
