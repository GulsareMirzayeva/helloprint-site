import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import contactPicture from '../../assets//contact-picture.jpg';
import MessageForm from './MessageForm';
import { useData } from '../../context/DataContext';

export default function SendMessage() {
  // Subscribes the component to i18n language so when the language changes, the content will be translated inmediatly
  useTranslation();

  const { shopInfo } = useData();

  return (
    <section className="flex justify-center items-center w-full py-12 ">
      <div className="flex">
        <div className="flex flex-col pr-12 mr-12 border-r-2 border-[#FB0036]">
          <TextBlock value="contactPage.sendMessage" variant="title" />
          <i>
            <TextBlock value="contactPage.messageAlert" variant="body" />
          </i>
          <MessageForm />
        </div>
        <div className="flex flex-col self-start">
          <TextBlock value="contactPage.contactUs" variant="title" />
          <div className="pb-8">
            <p className="text-md">
              <PhoneIcon className="mr-1" style={{ fontSize: '14px' }} />
              {shopInfo.telNo}
            </p>
            <a className="text-md">
              <AlternateEmailIcon
                className="mr-1"
                style={{ fontSize: '14px' }}
              />
              {shopInfo.email}
            </a>
            <br />
            <a
              className="text-md cursor-pointer"
              href={shopInfo.facebookUrl}
              target="_blank"
            >
              <FacebookIcon
                className="mr-1 text-[#0165E1]"
                style={{ fontSize: '18px' }}
              />
              Facebook
            </a>
          </div>
          <img
            src={contactPicture}
            className="h-[250px] w-[370px] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
