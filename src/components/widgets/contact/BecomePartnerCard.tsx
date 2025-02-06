import { Button } from '@/components/shared';
import { ArrowUpRight } from '@/components/shared/icons';

export const BecomePartnerCard = () => {
  return (
    <div className="relative mx-auto h-44 w-full max-w-lg rounded-2xl bg-light-grey-tur sm:h-48 md:h-56 lg:max-w-none">
      <div className="p-6 sm:pt-0 lg:pt-12">
        <div className="text-xl font-bold leading-8 text-dark-grey-tur sm:text-2xl sm:leading-9 md:text-3xl md:leading-10">
          Стать партнёром
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <div className="max-w-[70%] text-lg font-normal leading-relaxed text-dark-grey-tur sm:max-w-[80%] sm:pt-4 md:max-w-[85%] lg:text-base xl:text-lg">
          Мы предлагаем лучшие условия и поддержку для вашего бизнеса
        </div>
        <Button circle>
          <ArrowUpRight className="h-8 w-8 stroke-white" />
        </Button>
      </div>
    </div>
  );
};
