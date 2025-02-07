'use client';
import { ToursExcurcionsPreviewCard } from '@/components/entities';
import { exampleMarkers } from '@/components/entities/model/map';
import { Banner } from '@/components/entities/ui/banner/Banner';
import { LazyMap } from '@/components/entities/ui/map';
import { Carousel, PageWrapper } from '@/components/shared';
import { FilterToursExcursions } from '@/components/widgets/filter';
import { AdBannerWidget } from '@/components/widgets/main';
import { CarRentNavigationGrid } from '@/components/widgets/navigation-cards/navigation-section';
import { SearchWidget } from '@/components/widgets/search';

export default function ToursExcursionsRentPage() {
  return (
    <div className="mb-6">
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
          imageSrc="/rent/tours-excurcions/banner.jpg"
          title="Пешие экскурсии для всех возрастов"
          subtitle="Агентство «Москвич» — лучшее турбюро в Москве 2024 года по версии ПРН. Гибкая система скидок для групповых экскурсий!"
          gradientMask="bg-gradient-to-bl from-black/10 to-black/45 to-transparent"
          badgeText="Подробнее"
          onBadgeClick={() => console.log('Badge clicked')}
          onButtonClick={() => console.log('Button clicked')}
        >
          <div className="mb-12 text-7xl font-semibold leading-10 text-white">
            Туры и экскурсии
          </div>

          <SearchWidget
            gradientMask="border border-white/50 bg-neutral-200/40 backdrop-blur-3xl"
            className="rounded-3xl text-white placeholder:text-white"
          />
        </Banner>
      </Carousel>
      <PageWrapper>
        <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <FilterToursExcursions />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <ToursExcurcionsPreviewCard
              badgeText="Групповая"
              imageUrl={'/rent/tours-excurcions/card-preview/1.png'}
              title={'Апартаменты на Смоленской'}
              price={1400}
              pricePerHumans={2800}
              metro={'Встреча у м. Курская'}
              distance={'Москва, Южное Бутово'}
              rating={4.3}
              pricePerGroup={700}
              guidTime={'Опытный гид, 3 часа'}
              countHumans={6}
            />
          </div>

          <div className="hidden md:block lg:col-span-2">
            <LazyMap markers={exampleMarkers} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <AdBannerWidget
            figureViewbox="0 0 300 200 "
            figureFillColor="fill-blue"
            title={'Доступные автомобили для семейных путешествий'}
            badgeText={'Подписаться на рассылку'}
            imageSrc={'/rent/car-rent/carBanner.png'}
            mobileImageSrc={'/rent/car-rent/carBanner.png'}
          />

          <CarRentNavigationGrid />
        </div>
      </PageWrapper>
    </div>
  );
}
