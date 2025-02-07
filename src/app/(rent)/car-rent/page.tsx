'use client';
import { exampleMarkers } from '@/components/entities/model/map';
import { Banner } from '@/components/entities/ui/banner/Banner';
import { CarRentPreviewCard } from '@/components/entities/ui/card/preview-card/CarRentPreviewCard';
import { LazyMap } from '@/components/entities/ui/map';
import { Carousel, PageWrapper } from '@/components/shared';
import { FilterRentCar } from '@/components/widgets/filter';
import { AdBannerWidget } from '@/components/widgets/main';
import { CarRentNavigationGrid } from '@/components/widgets/navigation-cards/navigation-section';
import { SearchWidget } from '@/components/widgets/search';

export default function CarRentPage() {
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
          imageSrc="/rent/car-rent/banner.jpg"
          title="Салон аренды автомобилей «Креон» "
          subtitle="Один из лучших салонов проката в Москве. Гибкая система скидок. Найдём машину каждому!"
          gradientMask="bg-gradient-to-bl from-[#0e67a1]/5 to-[#00678d]/35"
          badgeText="Подробнее"
          onBadgeClick={() => console.log('Badge clicked')}
          onButtonClick={() => console.log('Button clicked')}
        >
          <div className="mb-12 text-7xl font-semibold leading-10 text-white">
            Аренда транспорта
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
            <FilterRentCar />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <CarRentPreviewCard
              imageUrl={'/rent/car-rent/card-preview/1.jpg'}
              title={'Harrier LT-50 2023'}
              price={1400}
              pricePerTwoDays={2800}
              metro={'Краснопресненская '}
              distance={'Москва, Южное Бутово'}
              cityAndOdometer={'Только Москва, пробег 400 000 км.'}
              rating={4.3}
              badgeText="Есть доставка"
            />
            <CarRentPreviewCard
              imageUrl={'/rent/car-rent/card-preview/2.jpg'}
              title={'Lada Vesta FG '}
              price={4500}
              pricePerTwoDays={9000}
              metro={'Краснопресненская '}
              distance={'Москва, Южное Бутово'}
              cityAndOdometer={'Москва и Моск. область'}
              rating={4.3}
            />
            <CarRentPreviewCard
              imageUrl={'/rent/car-rent/card-preview/3.jpg'}
              title={'Cheroki 2032 GT'}
              price={10000}
              pricePerTwoDays={20000}
              metro={'Краснопресненская '}
              distance={'Москва, Южное Бутово'}
              cityAndOdometer={
                'Только Москва и Моск. область, пробег 23 000 км'
              }
              rating={4.3}
              badgeText="Для свадьбы"
            />
            <CarRentPreviewCard
              imageUrl={'/rent/car-rent/card-preview/4.jpg'}
              title={'Аренда авто «Гименей»'}
              price={6000}
              pricePerTwoDays={12000}
              metro={'Краснопресненская '}
              distance={'Москва, Южное Бутово'}
              cityAndOdometer={
                'Только Москва и Моск. область, пробег 20 000 км'
              }
              rating={4.3}
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
