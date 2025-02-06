'use client';
import { useState, useEffect } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderTop } from './header-top/HeaderTop';
import { HeaderBottom } from './header-bottom/HeaderBottom';
import { HeaderMobile } from './HeaderMobile';

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`relative w-full rounded-2xl px-4 py-2 shadow-md ${
        isMobile ? 'bg-transparent shadow-none' : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto">
        <div className="hidden items-center sm:flex">
          <HeaderLogo />

          <div className="ml-4 flex-1">
            <div className="relative flex flex-col">
              <HeaderTop />
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 transform border-t border-medium-grey-tur"></div>
              <HeaderBottom />
            </div>
          </div>
        </div>

        {isMobile && <HeaderMobile />}
      </div>
    </header>
  );
};
