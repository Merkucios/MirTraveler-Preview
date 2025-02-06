import { routes } from '@/components/entities';
import Link from 'next/link';

export const HeaderLogo: React.FC = () => (
  <Link href={routes.home}>
    <div className="select-none text-center text-xl">
      <span className="block bg-gradient-to-r from-[#22B813] to-[#57A0DC] bg-clip-text font-semibold leading-none text-transparent">
        Mir
      </span>
      <span className="block bg-gradient-to-r from-[#22B813] to-[#57A0DC] bg-clip-text font-semibold leading-none text-transparent">
        Traveler
      </span>
    </div>

    {/* Тёмная тема для логотипа*/}
    {/* <div className="flex h-16 w-16 items-center justify-center rounded-full bg-darkblue-tur">
      <span className="w-12 text-center text-xs font-extrabold leading-3 text-pastel-green">
        MIR TRAVEL
      </span>
    </div> */}
  </Link>
);
