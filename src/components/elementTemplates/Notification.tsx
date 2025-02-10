import InfoIcon from '@mui/icons-material/Info';
import { useData } from '../../context/DataContext';

/*

Notification message at the bottom of a page with content that has some conditions
or extra information

*/

export function Notification({ children }: { children: React.ReactNode }) {
  const { stylePreset } = useData();

  return (
    <div className="relative pt-24 pl-5">
      {/* Info Icon */}
      <div
        className={`
          absolute top-24 -left-1 -translate-x-1/2 -translate-y-1/2 z-20 pl-10
          ${stylePreset.notification.iconColor}
          `}
      >
        <InfoIcon fontSize="large" />
      </div>

      {/* Content Box */}
      <div
        className={`
          relative z-10 flex w-full px-3 py-2 border rounded-sm shadow-sm
          ${stylePreset.notification.borderColor}
          ${stylePreset.overall.textColorSecondary}
        `}
      >
        <span className="flex flex-col gap-1">{children}</span>
      </div>
    </div>
  );
}
