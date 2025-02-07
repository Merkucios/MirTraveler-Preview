import { Banner } from '@/components/entities/ui/banner/Banner';
import { PageWrapper } from '@/components/shared';
import {
  EmailDistributionWidget,
  HotJourneysWidget,
  PopularEntertainmentWidget,
  PopularRentalHousingWidget,
  PopularToursExcurcionsWidget,
} from '@/components/widgets/main';
import { MainBannerWithSearch } from '@/components/widgets/main/banners/MainBannerWithSearch';
import { PopularRentalCarWidget } from '@/components/widgets/main/popular-carousel/PopularRentalCarWidget';
import { AdBannerWidget } from '@/components/widgets/main/banners/AdBannerWidget';
import { MainNavigationCardsWidget } from '@/components/widgets/navigation-cards';

export default function Home() {
  return (
    <>
      <MainBannerWithSearch />
      <PageWrapper>
        <div className="my-4 flex flex-col gap-3.5">
          <HotJourneysWidget />
          <MainNavigationCardsWidget />
        </div>
      </PageWrapper>

      <Banner
        gradientMask="bg-gradient-to-b from-[#0e67a1]/5 to-[#00678d]/35 to-transparent"
        imageSrc={'/mountains.png'}
        title={'Подари себе горы'}
      />
      <PageWrapper>
        <div className="mt-6 flex flex-col gap-12">
          <PopularRentalHousingWidget />
          <PopularRentalCarWidget />
          <div className="mt-16">
            <EmailDistributionWidget />
          </div>
          <PopularEntertainmentWidget />
          <PopularToursExcurcionsWidget />

          <AdBannerWidget
            title="Все предложения по Пушкинской карте здесь"
            badgeText="Подписаться на рассылку"
            imageSrc="/pushkin.png"
            mobileImageSrc="/pushkinMobile.png"
            bgColor="#5dd241"
          />
        </div>
      </PageWrapper>
    </>
  );
}
