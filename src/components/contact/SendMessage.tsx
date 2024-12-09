import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import contactPicture from '../../assets//contact-picture.jpg';
import MessageForm from './MessageForm';

export default function SendMessage() {
  // Subscribes the component to i18n language so when the language changes, the content will be translated inmediatly
  useTranslation();

  return (
    <section className="flex justify-center items-center w-full py-8 bg-gray-100">
      <div className="flex">
        <div className="flex flex-col self-start w-[450px]">
          <TextBlock value="contactPage.contactUs" variant="title" />
          <div className="pb-8">
            <p className="text-md">
              <PhoneIcon className="mr-1" style={{ fontSize: '14px' }} />
              050-1234567
            </p>
            <a className="text-md">
              <AlternateEmailIcon
                className="mr-1"
                style={{ fontSize: '14px' }}
              />
              info@mail.nl
            </a>
            <br />
            <a className="text-md cursor-pointer">
              <FacebookIcon
                className="mr-1 text-[#0165E1]"
                style={{ fontSize: '18px' }}
              />
              Facebook
            </a>
          </div>
          <img
            src={contactPicture}
            className="h-[230px] w-[337px] rounded-xl"
          />
        </div>

        <div className="flex flex-col pb-4 pl-8 border-l-2 border-[#FB0036]">
          <TextBlock value="contactPage.sendMessage" variant="title" />
          <i>
            <TextBlock value="contactPage.messageAlert" variant="body" />
          </i>
          <MessageForm />
        </div>
      </div>
    </section>
  );
}
