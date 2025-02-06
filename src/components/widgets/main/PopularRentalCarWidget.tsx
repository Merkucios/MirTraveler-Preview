import { Carousel } from '@/components/shared';
import { FlatCard } from '@/components/entities';

export const PopularRentalCarWidget = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <h1 className="text-3xl font-semibold leading-10 text-dark-grey-tur">
        Популярное в аренде транспорта
      </h1>
      <Carousel
        uniqueId="PopularRentalCarWidget"
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
        <FlatCard imageSrc={'/car_rental/moscow_car.jpg'} title={'Москва'} />
        <FlatCard
          imageSrc={'/car_rental/saint_petersburg_car.jpg'}
          title={'Санкт-Петербург'}
        />
        <FlatCard imageSrc={'/car_rental/sochi_car.png'} title={'Сочи'} />
        <FlatCard
          imageSrc={'/car_rental/veliky_novgorod_car.jpg'}
          title={'Великий Новгород'}
        />
        <FlatCard imageSrc={'/car_rental/kazan_car.jpg'} title={'Казань'} />
      </Carousel>
    </div>
  );
};
