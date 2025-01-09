import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ExpandableTitle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-center w-full border-t-2 border-[#FB0036]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="font-bold text-3xl"
      >
        {title}
        {isExpanded ? (
          <KeyboardArrowUpIcon fontSize={'large'} />
        ) : (
          <KeyboardArrowDownIcon fontSize={'large'} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
        style={{ maxHeight: isExpanded ? '800px' : '0px' }}
      >
        {isExpanded && <div>{children}</div>}
      </div>
    </div>
  );
}
