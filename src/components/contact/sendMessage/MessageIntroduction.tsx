// import contactPicture from '../../../assets/PHOTO-2022-01-26-18-36-39-scaled-370px-263px.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { contactInfoTextContent } from '../../../lib/translationPaths';

// Introduction text with a picture on the Contact page
export default function MessageIntroduction() {
  return (
    <div className="flex flex-col self-start mr-20">
      <TextBlock
        value={contactInfoTextContent.messageTitle}
        variant="subTitle"
      />
      <TextBlock
        value={contactInfoTextContent.contactIntroduction}
        variant="body"
      />
      {/* <div className="pt-4">
        <img src={contactPicture} className="max-w-[300px] sm:max-w-[360px]" />
      </div> */}
    </div>
  );
}
