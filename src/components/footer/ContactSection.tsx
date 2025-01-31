import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { shopInfoPaths } from '../../lib/translationPaths';
import { t } from 'i18next';

export default function ContactSection() {
  return (
    <div className="flex flex-col min-w-[140px]">
      <p className="text-sm font-bold pb-2">{t(shopInfoPaths.contact)}</p>
      <p className="text-xs">
        <PhoneIcon className="mr-1" style={{ fontSize: '14px' }} />
        {shopInfoPaths.telNo}
      </p>
      <a className="text-xs">
        <AlternateEmailIcon className="mr-1" style={{ fontSize: '14px' }} />
        {shopInfoPaths.email}
      </a>
      <a className="text-xs cursor-pointer" href={shopInfoPaths.facebookUrl}>
        <FacebookIcon
          className="mr-1 text-[#0165E1]"
          style={{ fontSize: '14px' }}
        />
        Facebook
      </a>
    </div>
  );
}
