import { ContactCard, HelpdeskCard } from '@/components/entities';
import { BecomePartnerCard } from './BecomePartnerCard';

export const ContactCardGrid = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-1">
        <ContactCard />
      </div>

      <div className="flex flex-col gap-6 lg:w-1/2">
        <BecomePartnerCard />
        <HelpdeskCard />
      </div>
    </div>
  );
};
