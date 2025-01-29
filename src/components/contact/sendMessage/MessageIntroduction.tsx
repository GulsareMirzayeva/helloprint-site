import contactPicture from '../../../assets/PHOTO-2022-01-26-18-36-39-scaled-370px-263px.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { contactInfoTextContent } from '../../../lib/translationPaths';

export default function MessageIntroduction() {
  return (
    <div className="flex flex-col self-start w-full mr-20">
      <TextBlock
        value={contactInfoTextContent.contactDetails}
        variant="subTitle"
      />
      <TextBlock
        value={contactInfoTextContent.contactIntroduction}
        variant="body"
      />
      <div className="flex justify-start pt-4">
        <img src={contactPicture} className="rounded-sm" />
      </div>
    </div>
  );
}
