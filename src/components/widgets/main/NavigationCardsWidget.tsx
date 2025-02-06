import { NavigationCard } from '@/components/entities/ui/card/NavigationCard';
import { Badge } from '@/components/shared';
import {
  ArrowUpRight,
  DiskIcon,
  HoopIcon,
  PyramidIcon,
  SphereIcon,
} from '@/components/shared/icons';

export const NavigationCardsWidget = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <h1 className="text-3xl font-semibold leading-10 text-dark-grey-tur">
        Путешествуй с комфортом
      </h1>
      <div className="w-full text-lg font-normal leading-relaxed text-dark-grey-tur lg:w-96 xl:w-96">
        Запланируй путешествие заранее — у нас проверенные арендодатели и
        рекомендованные сервисы
      </div>

      <div className="flex flex-col gap-4 sm:flex-col sm:gap-4 lg:flex-row lg:gap-12 xl:flex-row">
        <div className="flex w-full flex-col gap-4 pt-20 lg:w-1/4">
          <NavigationCard gradientClass="bg-gradient-to-bl from-[#99f0ff] to-[#00a4bf]">
            <NavigationCard.Icon>
              <DiskIcon className="h-32 w-32" />
            </NavigationCard.Icon>
            <NavigationCard.Title
              href={'/'}
              className="mt-4 text-xl text-dark-grey-tur"
            >
              <div className="flex items-center text-xl font-medium leading-9">
                Аренда жилья
                <ArrowUpRight className="h-6 w-6 stroke-dark-grey-tur" />
              </div>
            </NavigationCard.Title>

            <NavigationCard.Content className="py-2.5">
              <div className="grid grid-cols-2 gap-4 text-center sm:auto-cols-fr sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:grid-cols-2 lg:grid-cols-2">
                <Badge>Хостел</Badge>
                <Badge>Апартаменты</Badge>
                <Badge>Отель</Badge>
                <Badge>Коттедж</Badge>
                <Badge>Квартира посуточно</Badge>
              </div>
            </NavigationCard.Content>
          </NavigationCard>
        </div>

        <div className="flex w-full flex-col gap-4 pt-20 lg:w-1/4">
          <NavigationCard gradientClass="bg-green-tur">
            <NavigationCard.Icon>
              <PyramidIcon className="h-32 w-32" />
            </NavigationCard.Icon>
            <NavigationCard.Title
              href={'/'}
              className="mt-4 text-xl text-dark-grey-tur"
            >
              <div className="flex items-center text-xl font-medium leading-9">
                Аренда транспорта
                <ArrowUpRight className="h-6 w-6 stroke-dark-grey-tur" />
              </div>
            </NavigationCard.Title>

            <NavigationCard.Content className="py-2.5">
              <div className="grid grid-cols-2 gap-4 text-center sm:auto-cols-fr sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:grid-cols-2 lg:grid-cols-2">
                <Badge>Мотоциклы</Badge>
                <Badge>Велосипеды</Badge>
                <Badge>Пятиместный минивэн</Badge>
              </div>
            </NavigationCard.Content>

            {/* А что если поиграться не с Grid, а с Flex ❓*/}
            {/* <NavigationCard.Content className="py-2.5">
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="max-w-full flex-wrap truncate">
                  Мотоциклы
                </Badge>
                <Badge className="max-w-full flex-wrap truncate">
                  Велосипеды
                </Badge>
                <Badge className="max-w-full flex-wrap truncate">
                  Пятиместный минивэн
                </Badge>
              </div>
            </NavigationCard.Content> */}
          </NavigationCard>
        </div>

        <div className="flex w-full flex-col gap-4 pt-20 lg:w-1/4">
          <NavigationCard gradientClass="bg-gradient-to-b from-blue to-[#007a8e]">
            <NavigationCard.Icon>
              <SphereIcon className="h-32 w-32" />
            </NavigationCard.Icon>
            <NavigationCard.Title
              href={'/'}
              className="mt-4 text-xl text-dark-grey-tur"
            >
              <div className="flex items-center text-xl font-medium leading-9">
                Туры и экскурсии
                <ArrowUpRight className="h-6 w-6 stroke-dark-grey-tur" />
              </div>
            </NavigationCard.Title>

            <NavigationCard.Content className="py-2.5">
              <div className="grid grid-cols-2 gap-4 text-center sm:auto-cols-fr sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:grid-cols-2 lg:grid-cols-2">
                <Badge>Автотур</Badge>
                <Badge>Пешеходные экскурсии</Badge>
                <Badge>Туристические маршруты</Badge>
                <Badge>Гиды</Badge>
              </div>
            </NavigationCard.Content>
          </NavigationCard>
        </div>

        <div className="flex w-full flex-col gap-4 pt-20 lg:w-1/4">
          <NavigationCard gradientClass="bg-green-tur">
            <NavigationCard.Icon>
              <HoopIcon className="h-32 w-32" />
            </NavigationCard.Icon>
            <NavigationCard.Title
              href={'/'}
              className="mt-4 text-xl text-dark-grey-tur"
            >
              <div className="flex items-center text-xl font-medium leading-9">
                Отдых и развлечения
                <ArrowUpRight className="h-6 w-6 stroke-dark-grey-tur" />
              </div>
            </NavigationCard.Title>

            <NavigationCard.Content className="py-2.5">
              <div className="grid grid-cols-2 gap-4 text-center sm:auto-cols-fr sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] lg:grid-cols-2">
                <Badge>Рестораны</Badge>
                <Badge>Бары</Badge>
                <Badge>Афиша</Badge>
                <Badge>База у моря</Badge>
                <Badge>Кафе</Badge>
              </div>
            </NavigationCard.Content>
          </NavigationCard>
        </div>
      </div>
    </div>
  );
};
