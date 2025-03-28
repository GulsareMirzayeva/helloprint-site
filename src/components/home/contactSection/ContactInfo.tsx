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
import { useData } from '../../../context/DataContext';

export default function ContactInfo() {
  // Make text content translatable
  const { t } = useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  return (
    <div
      className={`
        flex flex-col items-center px-2 gap-6
        ${stylePreset.overall.textColorLight}
        `}
    >
      <div className="hidden md:block">
        <TextBlock value={contactInfoTextContent.title} variant="xl5Title" />
      </div>
      <div className="block md:hidden">
        <TextBlock value={contactInfoTextContent.title} variant="xl4Title" />
      </div>

      <div className="flex text-center">
        <TextBlock
          value={contactInfoTextContent.homePagesubtitle}
          variant="xlTitle"
        />
      </div>

      <div>
        {/* Link to cantact form */}
        <div className="flex pt-2">
          <Link to="/contact" className="flex mt-8 cursor-pointer">
            <span className="text-xl font-semibold">
              <EmailIcon className="mr-2 mb-1" />
              {t(contactInfoTextContent.contactForm)}
            </span>
          </Link>
        </div>

        {/* E-mail adres */}
        <div className="flex pt-2">
          <AlternateEmailIcon className="mt-1 mr-2" />
          <TextBlock value={shopInfoPaths.email} variant="xlTitle" />
        </div>

        {/* Phone number */}
        <div className="flex pt-2">
          <PhoneIcon className="mt-1 mr-2" />
          <TextBlock value={shopInfoPaths.telNo} variant="xlTitle" />
        </div>
      </div>
    </div>
  );
}
