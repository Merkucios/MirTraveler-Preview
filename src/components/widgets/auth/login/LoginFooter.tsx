'use client';
import { VkIcon, OKRUIcon, YandexIcon } from '@/components/shared/icons';
import Link from 'next/link';

export const LoginFooter: React.FC = () => (
  <div className="mt-6 flex w-full flex-col items-center pb-4">
    <div className="mb-4 h-px w-full max-w-md border border-medium-grey-tur" />

    <div className="flex justify-center gap-8">
      <YandexIcon className="h-14 w-14" />
      <OKRUIcon className="h-14 w-14" />
      <VkIcon className="h-14 w-14" />
    </div>

    <div className="mt-4 w-full max-w-md px-4 text-center text-sm font-medium leading-3 text-dark-grey-tur">
      <span>Авторизуясь, вы соглашаетесь с </span>
      <Link href="#" className="underline">
        обработкой персональных данных
      </Link>
      <span> и </span>
      <Link href="#" className="underline">
        условиями пользовательских соглашений
      </Link>
    </div>
  </div>
);
