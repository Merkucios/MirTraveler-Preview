import React from 'react';
import { HeaderContacts } from './HeaderContacts';
import { LanguageDropdown } from '@/components/entities';
import Link from 'next/link';
import { paths } from '@/components/app/paths';

export const HeaderTop: React.FC = () => (
  <div className="relative flex flex-wrap items-center justify-between space-y-2 border-b border-medium-grey-tur pb-2 sm:space-y-0">
    <nav className="w-full sm:w-auto">
      <ul className="flex flex-wrap justify-center space-x-4 text-xs text-medium-grey-tur sm:space-x-8 sm:text-sm md:space-x-16 lg:text-sm">
        <Link href={paths.contact}>
          <li className="hover:text-blue-tur hover:underline">Контакты</li>
        </Link>
        <Link href={paths.blog}>
          <li className="hover:text-blue-tur hover:underline">Блог</li>
        </Link>
        <Link href={paths['law-information']}>
          <li className="hover:text-blue-tur hover:underline">
            Юридическая информация
          </li>
        </Link>
      </ul>
    </nav>

    <div className="flex w-full flex-wrap items-center justify-center space-x-0 space-y-2 sm:w-auto sm:space-x-4 sm:space-y-0">
      <div className="flex items-center space-x-2 sm:pr-4 md:pr-12">
        <LanguageDropdown className="stroke-medium-grey-tur text-medium-grey-tur" />
        <div className="text-xs text-medium-grey-tur sm:text-sm">
          <Link href={paths.telephone}>8 800 555 35 35</Link>
        </div>
      </div>
      <HeaderContacts />
    </div>
  </div>
);
