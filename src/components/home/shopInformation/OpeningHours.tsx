import { TextBlock } from '../../elementTemplates/TextBlock';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../../lib/translationPaths';

export default function OpeningHours() {
  return (
    <div className="flex flex-col items-center gap-6 text-white">
      {/* Component Title */}
      <TextBlock
        value={contactInfoTextContent.openingHoursTitle}
        variant="xl5Title"
      />

      {/* Monday - Friday */}
      <div className="flex flex-col items-center">
        <TextBlock value={contactInfoTextContent.midweeks} variant="xl2Title" />
        <TextBlock
          value={shopInfoPaths.openingHoursMondayToFriday}
          variant="xlTitle"
        />
      </div>

      {/* Saturday */}
      <div className="flex flex-col items-center">
        <TextBlock value={contactInfoTextContent.saturday} variant="xl2Title" />
        <TextBlock
          value={shopInfoPaths.openingHoursSaturday}
          variant="xlTitle"
        />
      </div>

      {/* Sunday */}
      <div className="flex flex-col items-center">
        <TextBlock value={contactInfoTextContent.sunday} variant="xl2Title" />
        <TextBlock value={contactInfoTextContent.closed} variant="xlTitle" />
      </div>
    </div>
  );
}
