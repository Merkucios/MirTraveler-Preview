import { Badge, Button } from '@/components/shared';
import { ArrowUpRight } from '@/components/shared/icons';
import { combineClasses } from '@/components/app/utils';
import Image from 'next/image';

interface FlatCardProps {
  className?: string;
  imageSrc: string;
  title: string;
  gradientMask?: string;
  onBadgeClick?: () => void;
  onButtonClick?: () => void;
}

export const FlatCard: React.FC<FlatCardProps> = ({
  className,
  imageSrc,
  title: location,
  gradientMask = 'bg-gradient-to-b from-[#68dff2]/25 to-[#00688d]/50 via-transparent to-transparent',
  onBadgeClick,
  onButtonClick,
}) => {
  return (
    <div
      className={combineClasses(
        'relative h-44 w-80 overflow-hidden rounded-2xl shadow-md',
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={location}
        className="absolute left-0 top-0 h-full w-full object-cover"
        fill
        priority
      />

      <div
        className={`absolute left-0 top-0 h-full w-full ${gradientMask}`}
      ></div>

      <div className="absolute bottom-4 left-4 flex items-center gap-4">
        <Badge
          className="inline-flex items-center justify-center gap-2.5 rounded-3xl bg-white px-7"
          onClick={onBadgeClick}
        >
          {location}
        </Badge>

        <Button
          circle
          className="flex items-center justify-center rounded-full bg-white hover:bg-gray-200"
          onClick={onButtonClick}
        >
          <ArrowUpRight className="h-4 w-4 stroke-dark-grey-tur sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
        </Button>
      </div>
    </div>
  );
};
