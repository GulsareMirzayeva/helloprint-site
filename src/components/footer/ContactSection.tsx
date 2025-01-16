import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useData } from '../../context/DataContext';

export default function ContactSection() {
  const { shopInfo } = useData();

  return (
    <div className="flex flex-col">
      <p className="text-sm font-bold pb-2">Contact</p>
      <p className="text-xs">
        <PhoneIcon className="mr-1" style={{ fontSize: '14px' }} />
        {shopInfo.telNo}
      </p>
      <a className="text-xs">
        <AlternateEmailIcon className="mr-1" style={{ fontSize: '14px' }} />
        {shopInfo.email}
      </a>
      <a className="text-xs cursor-pointer">
        <FacebookIcon
          className="mr-1 text-[#0165E1]"
          style={{ fontSize: '14px' }}
        />
        Facebook
      </a>
    </div>
  );
}
