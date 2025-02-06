import { HelpdeskCard } from '@/components/entities';
import { PageWrapper } from '@/components/shared';
import { BecomePartnerCard } from '@/components/widgets/contact/BecomePartnerCard';
import { LawInformationWidget } from '@/components/widgets/law-information';

export default function LawInformationPage() {
  return (
    <PageWrapper>
      <div className="my-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-semibold leading-tight text-dark-grey-tur sm:text-3xl lg:text-5xl">
            Юридическая информация
          </h1>

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <div className="flex-1">
              <LawInformationWidget />
            </div>

            <div className="flex flex-col gap-6 lg:w-1/3">
              <BecomePartnerCard />
              <HelpdeskCard />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
