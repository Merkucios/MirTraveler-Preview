'use client';

import { combineClasses } from '@/components/app/utils';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  const classes = combineClasses(
    'border-blue-500 h-16 w-16 animate-spin rounded-full border-4 border-t-transparent',
    className
  );

  return (
    <div id="spinner-container" className="space-y-10">
      <div className="flex justify-center">
        <div className={classes}></div>
      </div>
    </div>
  );
};
