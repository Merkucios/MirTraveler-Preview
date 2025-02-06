import { twMerge } from 'tailwind-merge';

export const combineClasses = (...classNames: (string | undefined)[]) => {
  return twMerge(classNames.filter((className) => className !== undefined));
};
