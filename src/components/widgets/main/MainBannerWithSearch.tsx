'use client';
import { Banner } from '@/components/entities/ui/banner/Banner';
import { Carousel } from '@/components/shared';
import { SearchWidget } from '../search';

export const MainBannerWithSearch = () => {
  return (
    <Carousel
      enableNavigation={false}
      enablePagination={true}
      autoplay={{
        delay: 300000,
        disableOnInteraction: false,
      }}
      uniqueId={'MainBannerWithSearch'}
    >
      <Banner
        imageSrc="/city.png"
        title="Лучшие осенние маршруты"
        subtitle="Самые популярные направления на осенние каникулы"
        gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
        badgeText="Выбрать тур"
        onBadgeClick={() => console.log('Badge clicked')}
        onButtonClick={() => console.log('Button clicked')}
      >
        <SearchWidget
          gradientMask="border border-white/50 bg-neutral-200/40 backdrop-blur-3xl"
          className="rounded-3xl text-white placeholder:text-white"
        />
      </Banner>

      <Banner
        imageSrc="/city.png"
        title="Лучшие осенние маршруты"
        subtitle="Самые популярные направления на осенние каникулы"
        gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
        badgeText="Выбрать тур"
        onBadgeClick={() => console.log('Badge clicked')}
        onButtonClick={() => console.log('Button clicked')}
      />
      <Banner
        imageSrc="/city.png"
        title="Лучшие осенние маршруты"
        subtitle="Самые популярные направления на осенние каникулы"
        gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
        badgeText="Выбрать тур"
        onBadgeClick={() => console.log('Badge clicked')}
        onButtonClick={() => console.log('Button clicked')}
      />
      <Banner
        imageSrc="/city.png"
        title="Лучшие осенние маршруты"
        subtitle="Самые популярные направления на осенние каникулы"
        gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
        badgeText="Выбрать тур"
        onBadgeClick={() => console.log('Badge clicked')}
        onButtonClick={() => console.log('Button clicked')}
      />
      <Banner
        imageSrc="/city.png"
        title="Лучшие осенние маршруты"
        subtitle="Самые популярные направления на осенние каникулы"
        gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
        badgeText="Выбрать тур"
        onBadgeClick={() => console.log('Badge clicked')}
        onButtonClick={() => console.log('Button clicked')}
      />
    </Carousel>
  );
};
