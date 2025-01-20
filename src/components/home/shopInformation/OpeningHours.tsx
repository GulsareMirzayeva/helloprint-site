import { TextBlock } from '../../elementTemplates/TextBlock';
import { useData } from '../../../context/DataContext';

export default function OpeningHours() {
  // Get acces to openinghours stored in 'src/lib/contactInfo.ts'
  const { shopInfo } = useData();

  return (
    <div className="flex flex-col items-center text-white">
      {/* Component Title */}
      <TextBlock value="shopInfo.openingHours.title" variant="xl5Title" />

      {/* Monday - Friday */}
      <TextBlock value="shopInfo.openingHours.midweeks" variant="xl2Title" />
      <TextBlock
        value={shopInfo.openingHoursMondayToFriday}
        variant="xlTitle"
      />

      {/* Saturday */}
      <TextBlock value="shopInfo.openingHours.saturday" variant="xl2Title" />
      <TextBlock value={shopInfo.openingHoursSaturday} variant="xlTitle" />

      {/* Sunday */}
      <TextBlock value="shopInfo.openingHours.sunday" variant="xl2Title" />
      <TextBlock value="shopInfo.openingHours.closed" variant="xlTitle" />
    </div>
  );
}
