'use client';
import { Button, InputField } from '@/components/shared';
import { ArrowUpRight, BagGraphicIcon } from '@/components/shared/icons';
import Link from 'next/link';
import { useState } from 'react';

export const EmailDistributionWidget: React.FC = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="relative w-full p-4">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#029fd8] to-[#68dff2]"></div>

      <div className="absolute left-0 top-0 h-32 w-32 transform sm:top-[2rem] sm:h-48 sm:w-48 md:-left-16 md:-top-16 md:h-64 md:w-64 lg:-left-20 lg:-top-20 lg:h-80 lg:w-80">
        <BagGraphicIcon className="h-full w-full" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:gap-6">
        <div className="my-6 max-w-lg pl-32 sm:pl-36 md:pl-48 lg:pl-64">
          <h2 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
            Самые лучшие предложения
          </h2>
          <p className="mt-2 text-sm font-medium text-white md:text-lg">
            Подпишитесь на полезную рассылку от платформы Mirtravel и сделайте
            отдых выгодным и интересным!
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 px-4 sm:px-4 md:mt-0 md:flex-1 lg:px-16">
          <div className="flex items-center gap-2">
            <InputField
              type="email"
              placeholder="Почта"
              className="w-full rounded-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              circle
              className="flex items-center justify-center rounded-full bg-white hover:bg-gray-200"
              onClick={() => {}}
            >
              <ArrowUpRight className="h-4 w-4 stroke-dark-grey-tur sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
            </Button>
          </div>
          <p className="text-xs font-normal leading-3 text-white sm:text-sm">
            Заполняя форму, вы соглашаетесь с{' '}
            <Link href="#" className="underline">
              политикой обработки персональных данных
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
