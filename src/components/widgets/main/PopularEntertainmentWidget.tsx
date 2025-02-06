import { Carousel } from '@/components/shared';
import { FlatCard } from '@/components/entities';

export const PopularEntertainmentWidget = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <h1 className="text-3xl font-semibold leading-10 text-dark-grey-tur">
        Популярные развлечения
      </h1>
      <Carousel
        uniqueId="PopularEntertainmentWidget"
        effect="slide"
        pagination={false}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 5,
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
          className="h-80 w-80"
          imageSrc={'/popular_entertainment/moscow.jpg'}
          title={'Москва'}
        />
        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_entertainment/saint_petersburg.png'}
          title={'Санкт-Петербург'}
        />
        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_entertainment/sochi.jpg'}
          title={'Сочи'}
        />

        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_entertainment/kazan.jpg'}
          title={'Казань'}
        />
        <FlatCard
          className="h-80 w-80"
          imageSrc={'/popular_entertainment/veliky_novgorod.jpg'}
          title={'Великий Новгород'}
        />
      </Carousel>
    </div>
  );
};
