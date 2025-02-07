'use client';
import { HouseRentPreviewCard } from '@/components/entities';
import { exampleMarkers } from '@/components/entities/model/map';
import { Banner } from '@/components/entities/ui/banner/Banner';
import { LazyMap } from '@/components/entities/ui/map';
import { Carousel, PageWrapper } from '@/components/shared';
import { FilterRentHouse } from '@/components/widgets/filter';
import { HouseRentNavigationGrid } from '@/components/widgets/navigation-cards/navigation-section';
import { SearchWidget } from '@/components/widgets/search';

export default function HouseRentPage() {
  return (
    <div className="mb-10">
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
          imageSrc="/rent/house-rent/banner.jpg"
          title="Апартаменты на Воздвиженской"
          subtitle="Жильё класса премиум в жилом комплексе с охраняемым паркингом"
          gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
          badgeText="Подробнее"
          onBadgeClick={() => console.log('Badge clicked')}
          onButtonClick={() => console.log('Button clicked')}
        >
          <div className="mb-12 text-7xl font-semibold leading-10 text-white">
            Аренда жилья
          </div>

          <SearchWidget
            gradientMask="border border-white/50 bg-neutral-200/40 backdrop-blur-3xl"
            className="rounded-3xl text-white placeholder:text-white"
          />
        </Banner>

        <Banner
          imageSrc="/rent/house-rent/banner.jpg"
          title="Апартаменты на Воздвиженской"
          subtitle="Жильё класса премиум в жилом комплексе с охраняемым паркингом"
          gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
          badgeText="Подробнее"
          onBadgeClick={() => console.log('Badge clicked')}
          onButtonClick={() => console.log('Button clicked')}
        >
          <div className="mb-12 text-7xl font-semibold leading-10 text-white">
            Аренда жилья
          </div>

          <SearchWidget
            gradientMask="border border-white/50 bg-neutral-200/40 backdrop-blur-3xl"
            className="rounded-3xl text-white placeholder:text-white"
          />
        </Banner>
        <Banner
          imageSrc="/rent/house-rent/banner.jpg"
          title="Апартаменты на Воздвиженской"
          subtitle="Жильё класса премиум в жилом комплексе с охраняемым паркингом"
          gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
          badgeText="Подробнее"
          onBadgeClick={() => console.log('Badge clicked')}
          onButtonClick={() => console.log('Button clicked')}
        >
          <div className="mb-12 text-7xl font-semibold leading-10 text-white">
            Аренда жилья
          </div>

          <SearchWidget
            gradientMask="border border-white/50 bg-neutral-200/40 backdrop-blur-3xl"
            className="rounded-3xl text-white placeholder:text-white"
          />
        </Banner>
        <Banner
          imageSrc="/rent/house-rent/banner.jpg"
          title="Апартаменты на Воздвиженской"
          subtitle="Жильё класса премиум в жилом комплексе с охраняемым паркингом"
          gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
          badgeText="Подробнее"
          onBadgeClick={() => console.log('Badge clicked')}
          onButtonClick={() => console.log('Button clicked')}
        >
          <div className="mb-12 text-7xl font-semibold leading-10 text-white">
            Аренда жилья
          </div>

          <SearchWidget
            gradientMask="border border-white/50 bg-neutral-200/40 backdrop-blur-3xl"
            className="rounded-3xl text-white placeholder:text-white"
          />
        </Banner>
        <Banner
          imageSrc="/rent/house-rent/banner.jpg"
          title="Апартаменты на Воздвиженской"
          subtitle="Жильё класса премиум в жилом комплексе с охраняемым паркингом"
          gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
          badgeText="Подробнее"
          onBadgeClick={() => console.log('Badge clicked')}
          onButtonClick={() => console.log('Button clicked')}
        >
          <div className="mb-12 text-7xl font-semibold leading-10 text-white">
            Аренда жилья
          </div>

          <SearchWidget
            gradientMask="border border-white/50 bg-neutral-200/40 backdrop-blur-3xl"
            className="rounded-3xl text-white placeholder:text-white"
          />
        </Banner>
      </Carousel>
      <PageWrapper>
        <div className="my-8 flex gap-6">
          <FilterRentHouse />
          <div className="flex flex-col gap-4">
            <HouseRentPreviewCard
              imageUrl={'/rent/house-rent/card-preview/housePreview.png'}
              title={'Апартаменты на Смоленской'}
              price={1400}
              pricePerTwoDays={'2800'}
              metro={'Краснопресненская 6 мин '}
              distance={'Москва, Южное Бутово'}
              area={'30 м.кв.'}
              beds={'4 спальных места'}
              rating={4.3}
            />
            <HouseRentPreviewCard
              imageUrl={'/rent/house-rent/card-preview/housePreview.png'}
              title={'Апартаменты на Смоленской'}
              price={1400}
              pricePerTwoDays={'2800'}
              metro={'Краснопресненская 6 мин '}
              distance={'Москва, Южное Бутово'}
              area={'30 м.кв.'}
              beds={'4 спальных места'}
              rating={4.3}
            />
            <HouseRentPreviewCard
              imageUrl={'/rent/house-rent/card-preview/housePreview.png'}
              title={'Апартаменты на Смоленской'}
              price={1400}
              pricePerTwoDays={'2800'}
              metro={'Краснопресненская 6 мин '}
              distance={'Москва, Южное Бутово'}
              area={'30 м.кв.'}
              beds={'4 спальных места'}
              rating={4.3}
            />
            <HouseRentPreviewCard
              imageUrl={'/rent/house-rent/card-preview/housePreview.png'}
              title={'Апартаменты на Смоленской'}
              price={1400}
              pricePerTwoDays={'2800'}
              metro={'Краснопресненская 6 мин '}
              distance={'Москва, Южное Бутово'}
              area={'30 м.кв.'}
              beds={'4 спальных места'}
              rating={4.3}
            />
            <HouseRentPreviewCard
              imageUrl={'/rent/house-rent/card-preview/housePreview.png'}
              title={'Апартаменты на Смоленской'}
              price={1400}
              pricePerTwoDays={'2800'}
              metro={'Краснопресненская 6 мин '}
              distance={'Москва, Южное Бутово'}
              area={'30 м.кв.'}
              beds={'4 спальных места'}
              rating={4.3}
            />
            <HouseRentPreviewCard
              imageUrl={'/rent/house-rent/card-preview/housePreview.png'}
              title={'Апартаменты на Смоленской'}
              price={1400}
              pricePerTwoDays={'2800'}
              metro={'Краснопресненская 6 мин '}
              distance={'Москва, Южное Бутово'}
              area={'30 м.кв.'}
              beds={'4 спальных места'}
              rating={4.3}
            />
          </div>
          <div className="hidden w-full md:block lg:w-1/3">
            <LazyMap markers={exampleMarkers} />
          </div>
        </div>
        <HouseRentNavigationGrid />
      </PageWrapper>
    </div>
  );
}
