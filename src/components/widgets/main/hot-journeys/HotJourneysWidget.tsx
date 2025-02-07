'use client';
import { JourneyCard } from '@/components/entities';
import { Carousel } from '@/components/shared';

export const HotJourneysWidget = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <h1 className="text-3xl font-semibold leading-10 text-dark-grey-tur">
        Горящие предложения
      </h1>
      <Carousel
        uniqueId="PopularEntertainmentWidget"
        effect="slide"
        pagination={false}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 150,
          },
        }}
      >
        <JourneyCard
          imageSrc="/hot_journeys/spa-parus.png"
          title="Спа - отель «Парус»"
          location="Сочи, Краснодарский край"
          oldPrice={156000}
          price={130600}
          dates="13.10.2024 — 22.10.2024 "
          rating={4.3}
          badgeText="Выгодно"
          onButtonClick={() => console.log('Подробнее')}
          gradientMask="bg-gradient-to-b from-[#00000080] to-transparent"
          travelersInfo={'Взрослых: 2 Ночей: 8'}
        />
        <JourneyCard
          imageSrc="/hot_journeys/gold-ring.png"
          title="Тур по Золотому кольцу"
          location="Сочи, Краснодарский край"
          oldPrice={156000}
          price={130600}
          dates="13.10.2024 — 22.10.2024 "
          rating={4.3}
          badgeText="Всё включено"
          onButtonClick={() => console.log('Подробнее')}
          gradientMask="bg-gradient-to-b from-[#00000080] to-transparent"
          travelersInfo={'Взрослых: 2 Ночей: 8'}
        />

        <JourneyCard
          imageSrc="/hot_journeys/ytrish.png"
          title="Утриш"
          location="Сочи, Краснодарский край"
          oldPrice={156000}
          price={130600}
          dates="13.10.2024 — 22.10.2024 "
          rating={4.3}
          badgeText="Эксклюзив"
          onButtonClick={() => console.log('Подробнее')}
          gradientMask="bg-gradient-to-b from-[#00000080] to-transparent"
          travelersInfo={'Взрослых: 2 Ночей: 8'}
        />

        <JourneyCard
          imageSrc="/hot_journeys/baikal.png"
          title="Лагерь на Байкале"
          location="Сочи, Краснодарский край"
          oldPrice={156000}
          price={130600}
          dates="13.10.2024 — 22.10.2024 "
          rating={4.3}
          badgeText="Новинка"
          onButtonClick={() => console.log('Подробнее')}
          gradientMask="bg-gradient-to-b from-[#00000080] to-transparent"
          travelersInfo={'Взрослых: 2 Ночей: 8'}
        />

        <JourneyCard
          imageSrc="/hot_journeys/spa-otel.png"
          title="Спа - отель"
          location="Сочи, Краснодарский край"
          oldPrice={156000}
          price={130600}
          dates="13.10.2024 — 22.10.2024 "
          rating={4.3}
          badgeText="Новинка"
          onButtonClick={() => console.log('Подробнее')}
          gradientMask="bg-gradient-to-b from-[#00000080] to-transparent"
          travelersInfo={'Взрослых: 2 Ночей: 8'}
        />
      </Carousel>
    </div>
  );
};
