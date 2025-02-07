import { NavigationCard } from '@/components/entities';
import { Badge, Button } from '@/components/shared';
import {
  ArrowUpRight,
  CrescentIcon,
  GlobeGraphicIcon,
  SphereIcon,
} from '@/components/shared/icons';
import { NavigationCardsWidget } from '../NavigationCardsWidget';
import { paths } from '@/components/app/paths';

export const CarRentNavigationGrid = () => {
  return (
    <NavigationCardsWidget>
      <NavigationCard
        gradientClass="bg-green-tur"
        className="flex min-h-[200px] flex-col justify-between p-6"
      >
        <div className="flex w-full justify-between">
          <NavigationCard.Title
            href={paths['house-rent']}
            className="flex gap-6 text-3xl font-bold"
          >
            Аренда жилья
            <GlobeGraphicIcon className="h-full w-full" />
          </NavigationCard.Title>
        </div>

        <NavigationCard.Content className="flex items-center gap-4">
          <Badge>Читать подробнее</Badge>
          <Button circle className="bg-white p-2 hover:bg-gray-200">
            <ArrowUpRight className="h-6 w-6 stroke-dark-grey-tur" />
          </Button>
        </NavigationCard.Content>
      </NavigationCard>

      <NavigationCard
        gradientClass="bg-gradient-to-tr from-[#029fd8] to-[#68dff2]"
        className="flex min-h-[200px] flex-col justify-between p-6"
      >
        <div className="flex w-full justify-between">
          <NavigationCard.Title
            href={paths['tours-excursions']}
            className="flex gap-6 text-3xl font-bold"
          >
            Туры и экскурсии
            <CrescentIcon className="h-full w-full lg:h-32 lg:w-32" />
          </NavigationCard.Title>
        </div>

        <NavigationCard.Content className="flex items-center gap-4">
          <Badge>Читать подробнее</Badge>
          <Button circle className="bg-white p-2 hover:bg-gray-200">
            <ArrowUpRight className="h-6 w-6 stroke-dark-grey-tur" />
          </Button>
        </NavigationCard.Content>
      </NavigationCard>

      <NavigationCard
        gradientClass="bg-green-tur"
        className="flex min-h-[200px] flex-col justify-between p-6"
      >
        <div className="flex w-full justify-between">
          <NavigationCard.Title
            href={paths['leisure-entertainment']}
            className="flex gap-4 text-3xl font-bold"
          >
            Отдых и развлечения
            <SphereIcon className="h-full w-full lg:h-48 lg:w-48" />
          </NavigationCard.Title>
        </div>

        <NavigationCard.Content className="flex items-center gap-4">
          <Badge>Читать подробнее</Badge>
          <Button circle className="bg-white p-2 hover:bg-gray-200">
            <ArrowUpRight className="h-6 w-6 stroke-dark-grey-tur" />
          </Button>
        </NavigationCard.Content>
      </NavigationCard>
    </NavigationCardsWidget>
  );
};
