import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TextBlock } from '../../elementTemplates/TextBlock';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../../lib/translationPaths';

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 text-white ">
      <TextBlock value={contactInfoTextContent.title} variant="xl5Title" />
      <div className="flex text-center">
        <TextBlock value={contactInfoTextContent.subtitle} variant="subTitle" />
      </div>

      <div>
        {/* Link to cantact form */}
        <div className="flex pt-2">
          <Link to="/contact" className="flex pt-8 cursor-pointer">
            <span className="text-2xl font-semibold">
              <EmailIcon className="mr-2 mb-1" />
              {t(contactInfoTextContent.contactForm)}
            </span>
          </Link>
        </div>

        {/* E-mail adres */}
        <div className="flex pt-2">
          <AlternateEmailIcon className="mt-1 mr-2" />
          <TextBlock value={shopInfoPaths.email} variant="xl2Title" />
        </div>

        {/* Phone number */}
        <div className="flex pt-2">
          <PhoneIcon className="mt-1 mr-2" />
          <TextBlock value={shopInfoPaths.telNo} variant="xl2Title" />
        </div>
      </div>
    </div>
  );
}
