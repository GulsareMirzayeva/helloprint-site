import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { shopInfoPaths } from '../../../lib/translationPaths';
import { t } from 'i18next';

export default function ContactSection() {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-sm pb-2">{t(shopInfoPaths.contact)}</p>
      <p className="text-sm">
        <PhoneIcon className="mr-1" style={{ fontSize: '14px' }} />
        {shopInfoPaths.telNo}
      </p>
      <a className="text-sm">
        <AlternateEmailIcon className="mr-1" style={{ fontSize: '14px' }} />
        {shopInfoPaths.email}
      </a>
      <a className="text-sm cursor-pointer">
        <FacebookIcon
          className="mr-1 text-[#0165E1]"
          style={{ fontSize: '14px' }}
        />
        Facebook
      </a>
    </div>
  );
}
