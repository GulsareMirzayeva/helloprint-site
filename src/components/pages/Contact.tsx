import { useTranslation } from 'react-i18next';
import ContactDetails from '../contact/contactDetails/ContactDetails';
import SendMessage from '../contact/SendMessage';
import {
  contactInfoTextContent,
  customPrintingContentPaths,
} from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';

export default function Contact() {
  useTranslation();

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="flex flex-col gap-2 py-10 max-w-[1000px]">
        <TextBlock
          value={contactInfoTextContent.pageTitle}
          variant={'largeTitle'}
        />
        <TextBlock
          value={customPrintingContentPaths.contactTitle}
          variant={'xlTitleRegular'}
        />
      </div>
      <div className="w-[1000px]">
        <SendMessage />
      </div>
      <ContactDetails />
    </div>
  );
}
