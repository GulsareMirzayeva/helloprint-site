import { TextBlock } from '../../elementTemplates/TextBlock';
import { useData } from '../../../context/DataContext';
import { contactInfoTextContent } from '../../../lib/contactInfo';

export default function OpeningHours() {
  // Get acces to openinghours stored in 'src/lib/contactInfo.ts'
  const { shopInfo } = useData();

  return (
    <div className="flex flex-col items-center text-white">
      {/* Component Title */}
      <TextBlock
        value={contactInfoTextContent.openingHoursTitle}
        variant="xl5Title"
      />

      {/* Monday - Friday */}
      <TextBlock value={contactInfoTextContent.midweeks} variant="xl2Title" />
      <TextBlock
        value={shopInfo.openingHoursMondayToFriday}
        variant="xlTitle"
      />

      {/* Saturday */}
      <TextBlock value={contactInfoTextContent.saturday} variant="xl2Title" />
      <TextBlock value={shopInfo.openingHoursSaturday} variant="xlTitle" />

      {/* Sunday */}
      <TextBlock value={contactInfoTextContent.sunday} variant="xl2Title" />
      <TextBlock value={contactInfoTextContent.closed} variant="xlTitle" />
    </div>
  );
}
