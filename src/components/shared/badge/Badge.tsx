import { combineClasses } from '@/components/app/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={combineClasses(
        `flex items-center justify-center rounded-3xl bg-white px-7 py-2 text-xs text-dark-grey-tur shadow-md hover:bg-darkblue-tur hover:text-white sm:h-10 sm:text-sm md:h-12 md:text-base lg:h-12 lg:text-lg xl:h-12 xl:text-xl ${className}`
      )}
    >
      <span className="font-medium">{children}</span>
    </div>
  );
};
