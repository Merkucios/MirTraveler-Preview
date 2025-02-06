import { Banner } from '@/components/entities/ui/banner/Banner';
import { PageWrapper } from '@/components/shared';
import {
  EmailDistributionWidget,
  HotJourneysWidget,
  NavigationCardsWidget,
  PopularEntertainmentWidget,
  PopularRentalHousingWidget,
  PopularToursExcurcionsWidget,
} from '@/components/widgets/main';
import { MainBannerWithSearch } from '@/components/widgets/main/MainBannerWithSearch';
import { PopularRentalCarWidget } from '@/components/widgets/main/PopularRentalCarWidget';
import { PushkinBannerWidget } from '@/components/widgets/main/PushkinBannerWidget';

export default function Home() {
  return (
    <>
      <MainBannerWithSearch />
      <PageWrapper>
        <div className="my-4 flex flex-col gap-3.5">
          <HotJourneysWidget />
          <NavigationCardsWidget />
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

          <PushkinBannerWidget />
        </div>
      </PageWrapper>
    </>
  );
}
