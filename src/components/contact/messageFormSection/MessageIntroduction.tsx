import contactPicture from '../../../assets/PHOTO-2022-01-26-18-36-39-scaled-370px-263px.jpg';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { contactInfoTextContent } from '../../../lib/translationPaths';

export default function MessageIntroduction() {
  return (
    <div className="flex flex-col gap-2 self-start max-w-[500px]">
      <TextBlock
        value={contactInfoTextContent.contactDetails}
        variant="title"
      />
      <TextBlock
        value={contactInfoTextContent.contactIntroduction}
        variant="bodySmall"
      />
      <div className="flex justify-start mt-2 w-full">
        <img src={contactPicture} className="rounded-sm" />
      </div>
    </div>
  );
}
