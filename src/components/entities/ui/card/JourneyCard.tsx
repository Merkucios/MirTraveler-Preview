'use client';
import { Button } from '@/components/shared';
import { ArrowUpRight } from '@/components/shared/icons';
import Image from 'next/image';
import { Rating } from '../rating/Rating';
import { Location } from '../location/Location';
import { Price } from '../price/Price';

interface JourneyCardProps {
  imageSrc: string;
  title: string;
  location: string;
  price: number;
  oldPrice?: number;
  dates: string;
  travelersInfo: string;
  rating?: number;
  badgeText?: string;
  gradientMask?: string;
  onButtonClick?: () => void;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
  imageSrc,
  title,
  location,
  price,
  oldPrice,
  dates,
  travelersInfo,
  rating,
  badgeText,
  gradientMask = 'bg-gradient-to-b from-black/50 to-transparent',
  onButtonClick,
}) => {
  return (
    <div className="relative mb-1 h-auto w-80 rounded-2xl bg-light-grey-tur shadow-md">
      <div className="relative h-56 w-full">
        <Image
          src={imageSrc}
          alt={title}
          className="absolute left-0 top-0 h-full w-full rounded-2xl object-cover"
          fill
        />
        <div
          className={`absolute left-0 top-0 h-full w-full rounded-2xl ${gradientMask}`}
        ></div>
        {badgeText && (
          <div className="absolute left-4 top-4 rounded-lg bg-blue-tur px-3 py-1 text-sm font-medium text-white">
            {badgeText}
          </div>
        )}
        <div className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
          {title}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-4">
        <div className="flex items-center justify-between">
          <Location
            location={location}
            className="stroke-dark-grey-tur text-sm xl:text-sm"
          />
          {rating !== undefined && <Rating rating={rating} />}
        </div>

        <Price oldPrice={oldPrice} currentPrice={price} />

        <div className="flex items-center justify-between">
          <div className="flex w-[70%] flex-col gap-0.5">
            <span className="text-left text-xs font-medium text-dark-grey-tur">
              {dates}
            </span>
            <span className="text-left text-xs font-normal text-[#7a7a7a]">
              {travelersInfo}
            </span>
          </div>
          <Button
            circle
            className="flex items-center justify-center rounded-full border-2 border-blue-tur bg-white stroke-blue-tur text-dark-grey-tur hover:border-0 hover:bg-green-tur hover:stroke-white lg:h-10 lg:w-10"
            onClick={onButtonClick}
          >
            <ArrowUpRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
