import { Carousel } from '@/components/shared';
import { FlatCard } from '@/components/entities';

export const PopularToursExcurcionsWidget = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <h1 className="text-3xl font-semibold leading-10 text-dark-grey-tur">
        Популярные туры и экскурсии
      </h1>
      <Carousel
        uniqueId="PopularToursExcurcionsWidget"
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
        <FlatCard
          className="h-80 w-80 bg-gradient-to-b from-[#68dff2] to-[#00688d]"
          imageSrc={'/popular_tours_excursions/moscow.jpg'}
          title={'Москва'}
        />
        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_tours_excursions/saint_petersburg.jpg'}
          title={'Санкт-Петербург'}
        />
        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_tours_excursions/sochi.png'}
          title={'Сочи'}
        />

        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_tours_excursions/kazan.jpg'}
          title={'Казань'}
        />
        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_tours_excursions/veliky_novgorod.jpg'}
          title={'Великий Новгород'}
        />
      </Carousel>
    </div>
  );
};
