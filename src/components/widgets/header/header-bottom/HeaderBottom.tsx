'use client';
import { Button } from '@/components/shared/buttons/Button';
import { HeaderNavigationMenu } from './HeaderNavigationMenu';
import { Location } from '@/components/entities';
import { HeaderFavouriteItems } from './HeaderFavouriteItems';
import { PopupAuthManager } from '../../auth/PopupAuthManager';

export const HeaderBottom = () => {
  return (
    <div className="flex pb-2">
      <nav className="mt-4 w-full">
        <ul className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <HeaderNavigationMenu />
          <div className="flex items-center gap-6 px-8">
            <Location location="Москва" className="stroke-medium-grey-tur" />
            <HeaderFavouriteItems />
          </div>
          <li>
            <PopupAuthManager.Login>
              <Button className="h-8 w-24 rounded-3xl bg-green-tur text-sm font-normal text-white sm:w-28 sm:text-xl">
                Войти
              </Button>
            </PopupAuthManager.Login>
          </li>
        </ul>
      </nav>
    </div>
  );
};
