import InfoIcon from '@mui/icons-material/Info';
import { useData } from '../../context/DataContext';

export function Notification({ children }: { children: React.ReactNode }) {
  const { stylePreset } = useData();

  return (
    <div className="relative mt-8 mb-4">
      {/* Info Icon */}
      <div
        style={{ color: stylePreset.notification.iconColor }}
        className="absolute -top-1 -left-1 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <InfoIcon fontSize="large" />
      </div>

      {/* Content Box */}
      <div
        className={`border ${stylePreset.notification.borderProperty} relative z-10 flex w-full px-3 py-2 rounded-sm shadow-sm`}
      >
        <span className="flex flex-col gap-2">{children}</span>
      </div>
    </div>
  );
}
