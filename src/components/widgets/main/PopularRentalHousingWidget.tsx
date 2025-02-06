import { Carousel } from '@/components/shared';
import { FlatCard } from '@/components/entities';

export const PopularRentalHousingWidget = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <h1 className="text-3xl font-semibold leading-10 text-dark-grey-tur">
        Популярное в аренде жилья
      </h1>
      <Carousel
        uniqueId="PopularRentalHousingWidget"
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
        <FlatCard imageSrc={'/housing_rental/moscow.png'} title={'Москва'} />
        <FlatCard
          imageSrc={'/housing_rental/saint_petersburg.png'}
          title={'Санкт-Петербург'}
        />
        <FlatCard imageSrc={'/housing_rental/sochi.png'} title={'Сочи'} />
        <FlatCard
          imageSrc={'/housing_rental/veliky_novgorod.png'}
          title={'Великий Новгород'}
        />
        <FlatCard imageSrc={'/housing_rental/kazan.png'} title={'Казань'} />
      </Carousel>
    </div>
  );
};
