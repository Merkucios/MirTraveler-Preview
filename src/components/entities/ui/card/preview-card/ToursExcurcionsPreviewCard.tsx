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
import { PreviewCardBadge } from '@/components/shared';

interface ToursExcurcionsPreviewCardProps {
  imageUrl: string;
  title: string;
  price: number;
  pricePerHumans: number;
  countHumans: number;
  pricePerGroup: number;
  metro: string;
  distance: string;
  guidTime: string;
  rating: number;
  badgeText?: string;
}

export const ToursExcurcionsPreviewCard: React.FC<
  ToursExcurcionsPreviewCardProps
> = ({
  imageUrl,
  title,
  price,
  pricePerHumans,
  countHumans,
  pricePerGroup,
  metro,
  distance,
  guidTime,
  rating,
  badgeText,
}) => {
  return (
    <div className="grid w-full max-w-xl grid-cols-1 overflow-hidden rounded-lg bg-light-grey-tur shadow-lg sm:grid-cols-[1fr_2fr]">
      <div className="relative h-48 w-full sm:h-auto sm:w-60">
        <Image className="object-cover" src={imageUrl} alt={title} fill />

        <div className="absolute left-2 right-2 top-2 flex justify-between">
          {badgeText && (
            <PreviewCardBadge className="bg-darkblue-tur px-2 py-1 text-xs text-white hover:hover:bg-[#2b717d] sm:px-3 sm:py-1.5 sm:text-sm lg:px-4 lg:py-2 lg:text-sm">
              {badgeText}
            </PreviewCardBadge>
          )}
          <Button
            circle
            className="h-10 w-10 bg-[#f3f3f3]/25 backdrop-blur-sm hover:bg-inherit sm:h-12 sm:w-12 lg:h-10 lg:w-10"
          >
            <HeartFilledIcon className="fill-white" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <h3 className="text-lg font-bold text-darkblue-tur">{title}</h3>
          <div>
            <div className="flex items-center gap-1">
              <Price
                currentPrice={price}
                className="text-2xl font-medium text-dark-grey-tur"
              />
              <span className="text-sm text-dark-grey-tur">чел.</span>
            </div>
            <p className="text-sm text-dark-grey-tur">
              {pricePerHumans} за {countHumans} чел.
            </p>
            <p className="text-sm text-dark-grey-tur">
              {pricePerGroup} чел. группа
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
          <p className="text-wrap">{guidTime}</p>
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
