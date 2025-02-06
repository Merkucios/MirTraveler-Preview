import { paths } from '@/components/app/paths';
import {
  CarIcon,
  GlobeAmericas,
  HomeIcon,
  LegoSmileIcon,
} from '@/components/shared/icons';
import Link from 'next/link';

type MenuItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
};

const menuItems: MenuItem[] = [
  { label: 'Главная', href: paths.home },
  {
    label: 'Аренда жилья',
    href: paths['house-rent'],
    icon: <HomeIcon className="h-4 w-4 fill-medium-grey-tur" />,
  },
  {
    label: 'Аренда транспорта',
    href: paths['car-rent'],
    icon: <CarIcon className="h-4 w-4 stroke-medium-grey-tur" />,
  },
  {
    label: 'Туры и экскурсии',
    href: paths['tours-excursions'],
    icon: <GlobeAmericas className="h-4 w-4 fill-medium-grey-tur" />,
  },
  {
    label: 'Отдых и развлечения',
    href: paths['leisure-entertainment'],
    icon: <LegoSmileIcon className="h-4 w-4 stroke-medium-grey-tur" />,
  },
];

export const HeaderNavigationMenu: React.FC = () => (
  <>
    {menuItems.map((item, index) => (
      <Link key={index} href={item.href!}>
        <li
          key={index}
          className="flex items-center gap-2 text-sm text-dark-grey-tur hover:text-blue-tur hover:underline sm:text-xl"
        >
          {item.icon}
          {item.label}
        </li>
      </Link>
    ))}
  </>
);
