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
      <div className="w-full max-w-full px-6 sm:px-6 md:px-8 lg:max-w-[1280px] xl:max-w-[1500px] xl:px-10">
        {children}
      </div>
    </div>
  );
};
