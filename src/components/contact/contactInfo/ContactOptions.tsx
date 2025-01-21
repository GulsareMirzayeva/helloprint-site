import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import contactPicture from '../../../assets/PHOTO-2022-01-26-18-36-39-scaled-370px-263px.jpg';
import { useData } from '../../../context/DataContext';
import { TextBlock } from '../../elementTemplates/TextBlock';

export default function ContactOptions() {
  // Get acces to e-mail adress, telephone number and Facebook adress stored in 'src/lib/contactInfo.ts'
  const { shopInfo } = useData();

  return (
    <div className="flex flex-col self-start">
      <TextBlock value="contactPage.contactDetails" variant="title" />
      <div className="pb-8 pt-2">
        <span className="text-md">
          <PhoneIcon className="mr-1" style={{ fontSize: '14px' }} />
          {shopInfo.telNo}
        </span>
        <br />
        <a className="text-md">
          <AlternateEmailIcon className="mr-1" style={{ fontSize: '14px' }} />
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
      <img src={contactPicture} className="rounded-xl" />
    </div>
  );
}
