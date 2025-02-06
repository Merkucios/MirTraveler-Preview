import { paths } from '@/components/app/paths';
import Link from 'next/link';

export const FooterBottom: React.FC = () => (
  <div className="mt-10 flex flex-col items-center justify-between border-t border-medium-grey-tur pt-4 text-sm text-dark-grey-tur sm:gap-6 md:flex-row md:items-center md:space-y-0">
    <p className="text-center md:text-left">
      При использовании материалов ссылка
      <br className="hidden md:block" />
      на{' '}
      <Link
        href={paths.home}
        className="hover:text-darkblue-tur hover:underline"
      >
        www.mirtraveler.ru
      </Link>{' '}
      обязательна
    </p>
    <div className="mt-4 flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-6 md:mt-0">
      <Link
        href={paths['privacy-policy']}
        className="hover:text-darkblue-tur hover:underline"
      >
        Политика конфиденциальности
      </Link>
      <Link
        href={paths['user-agreement']}
        className="hover:text-darkblue-tur hover:underline"
      >
        Пользовательское соглашение
      </Link>
      <p>2024 г.</p>
    </div>
  </div>
);
