import { Badge, Button } from '@/components/shared';
import { ArrowUpRight } from '@/components/shared/icons';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface BannerProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  gradientMask?: string;
  badgeText?: string;
  onBadgeClick?: () => void;
  onButtonClick?: () => void;
  children?: ReactNode;
}

export const Banner: React.FC<BannerProps> = ({
  imageSrc,
  title,
  subtitle,
  gradientMask,
  badgeText = 'Узнать подробнее',
  onBadgeClick,
  onButtonClick,
  children,
}) => {
  return (
    <div className="relative h-screen w-full">
      <Image
        className="absolute left-0 top-0 h-full w-full select-none rounded-3xl object-cover"
        src={imageSrc}
        alt={title}
        fill
        priority
      />

      <div
        className={`absolute left-0 top-0 h-full w-full rounded-3xl ${gradientMask}`}
      ></div>

      <div className="absolute bottom-12 left-6 flex flex-col gap-4 text-left sm:bottom-16 sm:left-12 md:bottom-20 md:left-16 lg:bottom-24 lg:left-20">
        {children && <div className="mb-4 w-[full]">{children}</div>}

        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h1>

        {subtitle && (
          <div className="text-lg font-medium leading-relaxed text-white">
            {subtitle}
          </div>
        )}

        <div className="flex items-center gap-4">
          <Badge
            className="cursor-pointer hover:bg-green-tur"
            onClick={onBadgeClick}
          >
            {badgeText}
          </Badge>

          <Button
            circle
            className="flex justify-center bg-white text-center hover:bg-gray-200"
            onClick={onButtonClick}
          >
            <ArrowUpRight className="h-4 w-4 stroke-dark-grey-tur sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};
