import { PageWrapper } from '@/components/shared';
import { ContactForm } from '@/components/widgets/contact';
import { ContactCardGrid } from '@/components/widgets/contact';

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="my-8">
        <h1 className="text-5xl font-semibold leading-10 text-dark-grey-tur">
          Контакты
        </h1>
        <div className="mt-6 flex flex-col gap-6">
          <ContactCardGrid />
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  );
}
