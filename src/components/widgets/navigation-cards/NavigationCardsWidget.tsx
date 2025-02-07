import { ReactNode } from 'react';

interface NavigationCardsWidgetProps {
  children: ReactNode;
}

export const NavigationCardsWidget = ({
  children,
}: NavigationCardsWidgetProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-semibold leading-10 text-dark-grey-tur">
        Может пригодиться в путешествии
      </h1>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
};
