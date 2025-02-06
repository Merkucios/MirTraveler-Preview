'use client';
import { LanguageDropdown, Location } from '@/components/entities';
import { InputField } from '@/components/shared';
import { Button } from '@/components/shared/buttons/Button';
import { ArrowUpRight } from '@/components/shared/icons';
import { useState } from 'react';

export const FooterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="max-w-xs md:max-w-md lg:max-w-md">
      <form className="flex items-center gap-2 sm:flex-row">
        <InputField
          type="email"
          placeholder="Почта"
          className="w-full rounded-3xl bg-white px-4 py-2 text-sm text-dark-grey-tur sm:text-base md:text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button circle>
          <ArrowUpRight className="h-6 w-6 stroke-white" />
        </Button>
      </form>
      <p className="mt-4 text-center text-xs text-medium-grey-tur sm:text-left sm:text-sm">
        Заполняя форму, вы соглашаетесь с политикой обработки персональных
        данных
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 sm:justify-start">
        <div className="flex items-center gap-2 rounded-3xl bg-blue-tur px-4 text-white">
          <LanguageDropdown className="flex-start stroke-white text-xl font-semibold text-white" />
        </div>
        <div className="flex items-center gap-2 rounded-3xl bg-blue-tur px-4 py-2 text-white">
          <Location location="Москва" className="stroke-white text-white" />
        </div>
      </div>
    </div>
  );
};
