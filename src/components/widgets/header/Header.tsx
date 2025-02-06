'use client';
import { HeaderLogo } from './HeaderLogo';
import { HeaderTop } from './header-top/HeaderTop';
import { HeaderBottom } from './header-bottom/HeaderBottom';
import { HeaderMobile } from './HeaderMobile';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full rounded-2xl bg-white px-4 py-2 shadow-md">
      <div className="container mx-auto">
        <div className="hidden items-center lg:flex">
          <HeaderLogo />
          <div className="ml-4 flex-1">
            <div className="relative flex flex-col">
              <HeaderTop />
              <HeaderBottom />
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
};
