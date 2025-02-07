import React from 'react';
import { Badge } from '@/components/shared';
import { combineClasses } from '@/components/app/utils';

interface PreviewCardBadgeProps {
  children: string;
  className?: string;
}

export const PreviewCardBadge: React.FC<PreviewCardBadgeProps> = ({
  className,
  children,
}) => {
  return (
    <Badge
      className={combineClasses(
        `md:text-md px-2 py-1 text-xs text-white hover:bg-[#4caf37] sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 lg:px-5 lg:py-2.5 lg:text-sm ${className}`
      )}
    >
      {children}
    </Badge>
  );
};
