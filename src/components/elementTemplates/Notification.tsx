import InfoIcon from '@mui/icons-material/Info';

export function Notification({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-8 mb-4">
      {/* Info Icon */}
      <div className="absolute -top-1 -left-1 -translate-x-1/2 -translate-y-1/2 z-20 text-blue-800">
        <InfoIcon fontSize="large" />
      </div>

      {/* Content Box */}
      <div className="relative z-10 flex w-full border border-gray-200 px-3 py-2 rounded-sm shadow-sm">
        <span className="flex flex-col gap-2">{children}</span>
      </div>
    </div>
  );
}
