import { combineClasses } from '@/components/app/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={combineClasses(
        `flex min-h-10 min-w-0 max-w-full flex-wrap items-center justify-center whitespace-normal text-wrap break-words rounded-3xl bg-white px-6 py-2 text-center text-sm text-dark-grey-tur shadow-md hover:bg-darkblue-tur hover:text-white sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 md:text-lg ${className}`
      )}
    >
      <span className="font-medium">{children}</span>
    </div>
  );
};
