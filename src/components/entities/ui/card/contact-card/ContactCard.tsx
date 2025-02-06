import { paths } from '@/components/app/paths';
import {
  MailCircleIcon,
  TelegramCircleIcon,
  WhatsappCircleIcon,
} from '@/components/shared/icons';
import Link from 'next/link';

export const ContactCard = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-wrap items-center gap-6 rounded-2xl bg-[#68dff2] p-6 sm:p-8">
      <div className="flex flex-col items-start gap-4 sm:w-1/2">
        <Link
          className="text-left text-xl font-bold text-darkblue-tur sm:text-2xl md:text-3xl"
          href={paths['e-mail']}
        >
          Mirtravel@mail.ru
        </Link>

        <Link
          className="text-left text-xl font-medium text-darkblue-tur sm:text-2xl md:text-3xl"
          href={paths.telephone}
        >
          8 800 555 35 35
        </Link>

        <div className="flex gap-4">
          <Link href={paths['e-mail']}>
            <MailCircleIcon className="h-6 w-6 fill-darkblue-tur sm:h-8 sm:w-8" />
          </Link>
          <Link href={paths.whatsapp}>
            <WhatsappCircleIcon className="h-6 w-6 fill-darkblue-tur sm:h-8 sm:w-8" />
          </Link>
          <Link href={paths.telegram}>
            <TelegramCircleIcon className="h-6 w-6 fill-darkblue-tur sm:h-8 sm:w-8" />
          </Link>
        </div>
      </div>

      {/* Правая часть */}
      {/* <div className="flex items-center justify-center sm:w-1/2">
        <svg
          width="609"
          height="343"
          viewBox="0 0 609 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-lg"
        >
          <path
            d="M434.501 26.5C593 55.4992 608 0 608 0C608 0 610.501 55.4992 610.501 162C610.501 221.228 610.501 290.076 610.501 323.2C610.501 334.625 602.306 344.277 590.996 345.902C500.385 358.92 121.803 408.085 47.499 332.5C-37.0445 246.499 -13.5133 94.9 166.501 152.5C346.515 210.1 319.883 5.52941 434.501 26.5Z"
            fill="#005d6e"
          />
        </svg>
      </div> */}
    </div>
  );
};
