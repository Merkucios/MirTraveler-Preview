'use client';
import { useState } from 'react';
import { Badge } from '@/components/shared';
import { HeaderFavouriteItems } from './header-bottom/HeaderFavouriteItems';
import {
  CloseMark,
  MailMobileIcon,
  MenuBurger,
  SearchIcon,
  TelegramIconMobile,
  WhatsAppMobileIcon,
} from '@/components/shared/icons';
import { Button } from '@/components/shared/buttons/Button';
import { PopupAuthManager } from '../auth';
import { LanguageDropdown, Location } from '@/components/entities';

export const HeaderMobile: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-between bg-none sm:hidden">
      <div className="flex items-center space-x-4">
        <SearchIcon className="stroke-dark-grey-tur" />
        <HeaderFavouriteItems />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 transform">
        <span className="block bg-gradient-to-r from-[#22B813] to-[#57A0DC] bg-clip-text text-xl font-semibold leading-none text-transparent">
          MirTraveler
        </span>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-xl text-medium-grey-tur"
        >
          {isMenuOpen ? (
            <CloseMark className="stroke-black" />
          ) : (
            <MenuBurger className="stroke-black" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute left-0 top-full z-40 w-full bg-[#353535] p-4 transition-all duration-300 ease-in-out sm:hidden ${
            isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            <ul className="space-y-4 text-white">
              <li>Главная</li>
              <li>Аренда жилья</li>
              <li>Аренда транспорта</li>
              <li>Туры и экскурсии</li>
              <li>Отдых и развлечения</li>
            </ul>
            <hr className="h-px border-medium-grey-tur" />
            <ul className="space-y-4 text-white">
              <li>Контакты</li>
              <li>Блог</li>
              <li>Юридическая информация</li>
            </ul>
            <div className="flex gap-4">
              <Badge className="bg-blue hover:bg-blue-tur">
                <LanguageDropdown className="flex-start stroke-dark-grey-tur text-xl font-semibold text-dark-grey-tur" />
              </Badge>
              <Badge className="bg-blue hover:bg-blue-tur">
                <Location
                  location="Москва"
                  className="stroke-dark-grey-tur text-dark-grey-tur"
                />
              </Badge>
            </div>
            <div className="mt-4 sm:hidden">
              <PopupAuthManager.Login>
                <Button className="w-full rounded-3xl bg-green-tur px-4 py-2 text-xl text-white">
                  Войти в личный кабинет
                </Button>
              </PopupAuthManager.Login>
            </div>

            <div className="mt-4 flex gap-4 self-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <MailMobileIcon className="h-10 w-10" />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <WhatsAppMobileIcon className="h-10 w-10" />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <TelegramIconMobile className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
