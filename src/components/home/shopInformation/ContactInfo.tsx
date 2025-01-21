import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { useData } from '../../../context/DataContext';

export default function ContactInfo() {
  const { t } = useTranslation();

  // Get acces to e-mail adress and thelephone number stored in 'src/lib/contactInfo.ts'
  const { shopInfo } = useData();

  return (
    <div className="flex flex-col items-center gap-4 text-white ">
      <TextBlock value="shopInfo.contact.title" variant="xl5Title" />
      <div className="flex text-center">
        <TextBlock value="shopInfo.contact.subtitle" variant="subTitle" />
      </div>

      <div>
        {/* Link to cantact form */}
        <div className="flex pt-2">
          <Link to="/contact" className="flex pt-8 cursor-pointer">
            <span className="text-2xl font-semibold">
              <EmailIcon className="mr-2 mb-1" />
              {t('shopInfo.contact.contactForm')}
            </span>
          </Link>
        </div>

        {/* E-mail adres */}
        <div className="flex pt-2">
          <AlternateEmailIcon className="mt-1 mr-2" />
          <TextBlock value={shopInfo.email} variant="xl2Title" />
        </div>

        {/* Phone number */}
        <div className="flex pt-2">
          <PhoneIcon className="mt-1 mr-2" />
          <TextBlock value={shopInfo.telNo} variant="xl2Title" />
        </div>
      </div>
    </div>
  );
}
