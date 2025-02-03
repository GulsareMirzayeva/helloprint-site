import { TextBlock } from '../../elementTemplates/TextBlock';
import {
  contactInfoTextContent,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import { colorPresets } from '../../../lib/stylePresets';

export default function OpeningHours() {
  return (
    <div
      style={{ color: colorPresets.overall.textColorLight }}
      className="flex flex-col items-center px-2 gap-6"
    >
      {/* Component Title */}
      <div className="hidden md:block">
        <TextBlock
          value={contactInfoTextContent.openingHoursTitle}
          variant="xl5Title"
        />
      </div>
      <div className="block md:hidden">
        <TextBlock
          value={contactInfoTextContent.openingHoursTitle}
          variant="xl4Title"
        />
      </div>

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
