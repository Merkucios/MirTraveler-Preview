import React from 'react';
import Image from 'next/image';
import { Rating } from '../../rating/Rating';
import { Button } from '@/components/shared';
import { Price } from '../../price/Price';
import {
  ArrowUpRight,
  DirectionIcon,
  HeartFilledIcon,
  PinCircleIcon,
} from '@/components/shared/icons';

interface HouseRentPreviewCardProps {
  imageUrl: string;
  title: string;
  price: number;
  pricePerTwoDays: string;
  metro: string;
  distance: string;
  area: string;
  beds: string;
  rating: number;
}

export const HouseRentPreviewCard: React.FC<HouseRentPreviewCardProps> = ({
  imageUrl,
  title,
  price,
  pricePerTwoDays,
  metro,
  distance,
  area,
  beds,
  rating,
}) => {
  return (
    <div className="grid w-full max-w-xl grid-cols-1 overflow-hidden rounded-lg bg-light-grey-tur shadow-lg sm:grid-cols-[1fr_2fr]">
      <div className="relative h-48 w-full sm:h-auto sm:w-60">
        <Image className="object-cover" src={imageUrl} alt={title} fill />

        <Button
          circle
          className="absolute left-2 top-2 h-10 w-10 bg-[#f3f3f3]/25 backdrop-blur-sm hover:bg-inherit sm:h-12 sm:w-12 lg:h-10 lg:w-10"
        >
          <HeartFilledIcon className="fill-white" />
        </Button>
      </div>

      <div className="flex flex-col justify-between p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <h3 className="text-lg font-bold text-darkblue-tur">{title}</h3>
          <div>
            <Price
              currentPrice={price}
              className="text-2xl font-medium text-dark-grey-tur"
            />
            <p className="text-sm text-dark-grey-tur">
              {pricePerTwoDays} р за 2 суток
            </p>
          </div>
        </div>

        <div className="space-y-1 text-sm text-dark-grey-tur">
          <p className="flex items-center gap-1">
            <DirectionIcon className="stroke-[#8e8e8e]" /> {metro}
          </p>
          <p className="flex items-center gap-1">
            <PinCircleIcon className="stroke-[#8e8e8e]" /> {distance}
          </p>
          <p>
            {area} {beds}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Rating rating={rating} />
          <Button
            circle
            className="h-10 w-10 bg-white stroke-[#8e8e8e] hover:bg-green-tur hover:stroke-white sm:h-12 sm:w-12 lg:h-10 lg:w-10"
          >
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
