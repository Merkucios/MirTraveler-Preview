import { routes } from '@/components/entities/model/routes';
import Link from 'next/link';

export const FooterLogo: React.FC = () => (
  <div className="flex flex-col gap-2 text-center lg:text-left">
    <Link href={routes.home}>
      <div className="select-none text-2xl">
        <span className="block bg-gradient-to-r from-[#22B813] to-[#57A0DC] bg-clip-text font-semibold leading-none text-transparent">
          Mir Traveler
        </span>
      </div>
    </Link>

    <p className="text-xs font-normal text-dark-grey-tur">
      © ООО «MirTravel»
      <br />
      Все права защищены
    </p>
  </div>
);
