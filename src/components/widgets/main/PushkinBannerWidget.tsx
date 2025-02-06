'use client';
import { Badge, Button } from '@/components/shared';
import { ArrowUpRight } from '@/components/shared/icons';
import Image from 'next/image';

export const PushkinBannerWidget = () => {
  return (
    <div className="relative mx-auto h-[274px] w-full max-w-[1500px] px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="absolute left-0 top-10 h-[232px] w-full rounded-3xl bg-[#5dd241]" />

      <div className="absolute left-5 top-10 w-full max-w-[1198px]">
        <svg
          className="h-auto w-full"
          viewBox="0 0 1198 233"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M363.051 3.19461C366.488 1.56135 370.163 0.660156 373.967 0.660156H1197.43C1197.43 0.660156 731.416 47.4302 711.677 112.879C705.385 133.74 728.362 157.451 757.861 178.254C778.536 192.833 769.154 232.837 743.856 232.837C540.795 232.837 135.315 232.837 106.973 232.837C69.0508 232.837 -90.7638 -3.59642 72.921 33.5519C217.683 66.4056 337.323 15.4219 363.051 3.19461Z"
            fill="#07ADA7"
          />
        </svg>
      </div>

      <div className="absolute left-10 top-32 w-[90%] text-lg font-semibold leading-7 text-white sm:text-xl md:left-[162px] md:top-[128px] md:w-[334px] md:text-2xl">
        Все предложения
        <br />
        по Пушкинской карте здесь
      </div>

      <div className="absolute left-10 top-44 flex items-center gap-2 sm:left-[165px] sm:top-[202px]">
        <Badge className="text-sm sm:text-base">Подписаться на рассылку</Badge>
        <Button
          circle
          className="flex items-center justify-center rounded-full bg-white p-2 hover:bg-gray-200 md:p-3"
          onClick={() => {}}
        >
          <ArrowUpRight className="h-4 w-4 stroke-dark-grey-tur sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </Button>
      </div>

      <Image
        className="object-fit absolute right-0 top-0 h-[200px] w-[80%] rounded-3xl md:h-[100%] md:w-[55%]"
        src="/pushkin.png"
        alt="Пушкинская карта"
        width={954}
        height={274}
      />

      <div className="relative h-96 w-80 sm:hidden">
        <div className="absolute left-0 top-0 h-96 w-80 rounded-3xl bg-[#5dd241]" />
        <div className="absolute left-5 top-12 w-52 font-['Gilroy'] text-2xl font-semibold leading-7 text-white">
          Все предложения
          <br />
          по Пушкинской карте здесь
        </div>
        <Image
          className="absolute left-11 top-[219px] h-64 w-72 rounded-3xl object-cover"
          src="/pushkinMobile.png"
          alt="Пушкинская карта"
          width={277}
          height={268}
        />
        <div className="absolute left-5 top-[167px] flex w-56 items-center gap-2.5">
          <Badge className="text-sm">Подписаться на рассылку</Badge>
          <Button
            circle
            className="flex items-center justify-center rounded-full bg-white p-2 hover:bg-gray-200"
            onClick={() => {}}
          >
            <ArrowUpRight className="h-4 w-4 stroke-dark-grey-tur" />
          </Button>
        </div>
      </div>
    </div>
  );
};
