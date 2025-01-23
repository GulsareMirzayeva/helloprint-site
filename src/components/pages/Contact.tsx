import { useTranslation } from 'react-i18next';
import ContactDetails from '../contact/contactDetails/ContactDetails';
import SendMessage from '../contact/SendMessage';
import Footer from '../Footer';
import { contactInfoTextContent } from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';

export default function Contact() {
  useTranslation();

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="py-10 max-w-[1000px]">
        <TextBlock
          value={contactInfoTextContent.pageTitle}
          variant={'largeTitle'}
        />
        <br />
        <TextBlock
          value={contactInfoTextContent.contactIntroduction}
          variant={'xl2TitleRegular'}
        />
      </div>
      <SendMessage />
      <ContactDetails />
      <Footer />
    </div>
  );
}
