import { paths } from '@/components/app/paths';
import {
  MailCircleIcon,
  TelegramCircleIcon,
  WhatsappCircleIcon,
} from '@/components/shared/icons';
import Link from 'next/link';

export const HeaderContacts: React.FC = () => (
  <div className="flex items-center justify-center space-x-4">
    <Link href={paths['e-mail']}>
      <MailCircleIcon className="h-4 w-4 fill-black sm:h-6 sm:w-6" />
    </Link>
    <Link href={paths.whatsapp}>
      <WhatsappCircleIcon className="h-4 w-4 fill-green-tur sm:h-6 sm:w-6" />
    </Link>
    <Link href={paths.telegram}>
      <TelegramCircleIcon className="h-4 w-4 fill-blue sm:h-6 sm:w-6" />
    </Link>
  </div>
);
