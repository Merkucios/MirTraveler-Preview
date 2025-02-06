'use client';

import { ReactNode } from 'react';
import { combineClasses } from '../app/utils';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={combineClasses(
        `flex min-h-screen w-full flex-col items-center justify-start bg-white ${className}`
      )}
    >
      <div className="w-full max-w-[1280px] px-6 sm:px-6 md:px-8 lg:px-8">
        {children}
      </div>
    </div>
  );
};
