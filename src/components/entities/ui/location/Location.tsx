import { PinIcon } from '@/components/shared/icons';
import { combineClasses } from '@/components/app/utils';

interface LocationProps {
  location: string;
  className?: string;
}

export const Location: React.FC<LocationProps> = ({ location, className }) => (
  <li
    className={combineClasses(
      `flex items-center gap-2 text-sm sm:text-xl ${className}`
    )}
  >
    <PinIcon className="h-4 w-4" />
    {location}
  </li>
);
