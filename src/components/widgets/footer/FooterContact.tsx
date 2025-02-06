import { paths } from '@/components/app/paths';
import {
  MailCircleIcon,
  TelegramCircleIcon,
  WhatsappCircleIcon,
} from '@/components/shared/icons';
import Link from 'next/link';

export const FooterContact: React.FC = () => (
  <div className="space-y-4">
    <Link
      className="text-2xl font-normal font-semibold leading-tight text-green-tur"
      href={paths.telephone}
    >
      8 800 555 35 35
    </Link>
    <p className="text-sm font-normal leading-tight text-dark-grey-tur">
      Ежедневно с 9.00 до 18.00
    </p>
    <ul className="space-y-2 text-sm text-dark-grey-tur">
      <Link className="flex gap-2" href={paths['e-mail']}>
        <MailCircleIcon className="fill-blue-tur" />
        <li className="hover:text-blue-tur hover:underline">
          Mirtraveler@mail.ru
        </li>
      </Link>
      <Link className="flex gap-2" href={paths.whatsapp}>
        <WhatsappCircleIcon className="fill-blue-tur" />
        <li className="hover:text-blue-tur hover:underline">
          @mirtravelOfficial
        </li>
      </Link>
      <Link className="flex gap-2" href={paths.telegram}>
        <TelegramCircleIcon className="fill-blue-tur" />
        <li className="hover:text-blue-tur hover:underline">@mirtravelWorld</li>
      </Link>
    </ul>
  </div>
);
