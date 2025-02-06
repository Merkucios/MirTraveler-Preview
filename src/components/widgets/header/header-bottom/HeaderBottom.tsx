'use client';
import { Button } from '@/components/shared/buttons/Button';
import { HeaderNavigationMenu } from './HeaderNavigationMenu';
import { Location } from '@/components/entities';
import { HeaderFavouriteItems } from './HeaderFavouriteItems';
import { PopupAuthManager } from '../../auth/PopupAuthManager';

export const HeaderBottom = () => {
  return (
    <div className="pb-2">
      <nav className="mt-4 w-full">
        <ul className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-1 justify-center gap-6 sm:justify-start">
            <HeaderNavigationMenu />
          </div>

          <div className="flex items-center gap-4 px-4 sm:gap-6 sm:px-6 lg:px-8">
            <Location location="Москва" className="stroke-medium-grey-tur" />
            <HeaderFavouriteItems />
          </div>

          <li className="flex w-full justify-center sm:w-auto sm:justify-end">
            <PopupAuthManager.Login>
              <Button className="h-8 w-24 rounded-3xl bg-green-tur text-sm font-normal text-white sm:w-28 sm:text-lg lg:w-32 lg:text-xl">
                Войти
              </Button>
            </PopupAuthManager.Login>
          </li>
        </ul>
      </nav>
    </div>
  );
};
