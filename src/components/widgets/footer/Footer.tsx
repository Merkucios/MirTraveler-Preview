import { FooterLogo } from './FooterLogo';
import { FooterNav } from './FooterNav';
import { FooterSubscription } from './FooterSubscription';
import { FooterContact } from './FooterContact';
import { FooterBottom } from './FooterBottom';

export const Footer: React.FC = () => (
  <footer className="relative rounded-tl-2xl rounded-tr-2xl bg-light-grey-tur px-5 py-10 md:px-10">
    <div className="flex flex-col justify-start gap-10 sm:justify-start md:flex-row md:justify-start lg:justify-start xl:justify-start">
      <FooterLogo />
      <FooterNav />
      <FooterSubscription />
      <FooterContact />
    </div>

    <FooterBottom />
  </footer>
);
