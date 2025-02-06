import { HeartIcon } from '@/components/shared/icons';

export const HeaderFavouriteItems: React.FC = () => (
  <li className="relative flex items-center text-sm text-dark-grey-tur hover:text-blue-tur hover:underline sm:text-xl">
    <HeartIcon className="h-4 w-4 stroke-dark-grey-tur" />
    <span className="absolute left-2 top-1 h-3 w-3 rounded-full bg-green-tur text-center text-xs leading-none text-white">
      6
    </span>
  </li>
);
