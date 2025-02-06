import { StarIcon } from '@/components/shared/icons';
import { combineClasses } from '@/components/app/utils';

interface RatingProps {
  rating: number;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ rating, className = '' }) => {
  return (
    <div
      className={combineClasses(
        `flex items-center gap-2 rounded-lg bg-[#5dd241] px-3 py-1 text-sm font-medium text-white${className}`
      )}
    >
      <span>{rating}</span>
      <StarIcon className="fill-white stroke-white" />
    </div>
  );
};
