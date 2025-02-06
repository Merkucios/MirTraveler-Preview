import { Button } from '@/components/shared';
import { ArrowUpRight } from '@/components/shared/icons';

export const HelpdeskCard = () => {
  return (
    <div className="relative mx-auto h-auto w-full max-w-lg rounded-2xl bg-light-grey-tur sm:h-48 md:h-56 lg:h-64 lg:max-w-none">
      <div className="p-6 sm:pt-0 lg:pt-12">
        <div className="text-xl font-bold leading-8 text-dark-grey-tur sm:text-2xl sm:leading-9 md:text-3xl md:leading-10">
          Служба поддержки
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 pt-0 sm:flex-row sm:items-center sm:justify-between">
        <div className="xs:text-sm text-lg font-normal leading-relaxed text-dark-grey-tur sm:max-w-[80%] sm:text-lg md:max-w-[85%] md:text-xl lg:max-w-full lg:text-lg xl:text-xl">
          Пн-Пт 9.00–19.00 <br /> Сб-Вс выходной
        </div>

        <div className="flex items-center gap-2">
          <Button className="w-full px-4 py-2 text-sm font-medium sm:w-full sm:text-base">
            Написать
          </Button>
          <Button className="px-3" circle>
            <ArrowUpRight className="h-12 w-12 stroke-white sm:h-10 sm:w-10" />
          </Button>
        </div>
      </div>
    </div>
  );
};
