import { combineClasses } from '@/components/app/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  gradientClass: string;
  className?: string;
  children: ReactNode;
}

export const NavigationCard: React.FC<CardProps> & {
  Title: React.FC<{ children: ReactNode; className?: string; href: string }>;
  Icon: React.FC<{ children: ReactNode; className?: string }>;
  Content: React.FC<{ children: ReactNode; className?: string }>;
} = ({ gradientClass, className, children }) => {
  return (
    <div
      className={combineClasses(
        `relative flex h-full w-full max-w-sm flex-col md:max-w-md lg:max-w-lg ${className}`
      )}
    >
      <div
        className={combineClasses(
          `absolute left-0 top-0 h-full w-full rounded-2xl ${gradientClass}`
        )}
      />

      <div
        className={combineClasses(
          'relative z-10 flex w-full flex-col space-y-4 p-4'
        )}
      >
        {children}
      </div>
    </div>
  );
};

NavigationCard.Title = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) => (
  <Link
    className={combineClasses(`text-2xl font-medium text-white ${className}`)}
    href={href}
  >
    {children}
  </Link>
);

NavigationCard.Title.displayName = 'Card.Title';

NavigationCard.Icon = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={combineClasses(
      `absolute right-[-1rem] top-[-6rem] z-20 ${className}`
    )}
  >
    {children}
  </div>
);

NavigationCard.Icon.displayName = 'Card.Icon';

NavigationCard.Content = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={combineClasses(`text-white ${className}`)}>{children}</div>
);

NavigationCard.Content.displayName = 'Card.Content';
