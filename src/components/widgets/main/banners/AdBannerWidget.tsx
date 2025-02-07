'use client';
import { Badge, Button } from '@/components/shared';
import { ArrowUpRight } from '@/components/shared/icons';
import Image from 'next/image';

interface AdBannerWidgetProps {
  title: string;
  badgeText: string;
  imageSrc: string;
  mobileImageSrc: string;
  bgColor?: string;
  figureFillColor?: string;
  figureViewbox?: string;
}

export const AdBannerWidget: React.FC<AdBannerWidgetProps> = ({
  title,
  badgeText,
  imageSrc,
  mobileImageSrc,
  figureFillColor = 'fill-blue-tur',
  figureViewbox = '0 0 1198 233',
  bgColor = '#5dd241',
}) => {
  return (
    <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-8 md:px-12 lg:px-16">
      <div
        className="relative hidden min-h-[250px] items-center justify-between overflow-hidden rounded-3xl p-8 sm:flex"
        style={{ backgroundColor: bgColor }}
      >
        <svg
          className={`${figureFillColor} absolute inset-0 h-full w-full`}
          viewBox={figureViewbox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M363.051 3.19461C366.488 1.56135 370.163 0.660156 373.967 0.660156H1197.43C1197.43 0.660156 731.416 47.4302 711.677 112.879C705.385 133.74 728.362 157.451 757.861 178.254C778.536 192.833 769.154 232.837 743.856 232.837C540.795 232.837 135.315 232.837 106.973 232.837C69.0508 232.837 -90.7638 -3.59642 72.921 33.5519C217.683 66.4056 337.323 15.4219 363.051 3.19461Z"
            fill="current"
          />
        </svg>

        <div className="relative z-10 flex max-w-[40%] flex-col gap-4 px-4 text-white">
          <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
          <div className="flex items-center gap-2">
            <Badge className="text-sm sm:text-base">{badgeText}</Badge>
            <Button
              circle
              className="flex items-center justify-center rounded-full bg-white p-2 hover:bg-gray-200"
              onClick={() => {}}
            >
              <ArrowUpRight className="h-4 w-4 stroke-dark-grey-tur sm:h-6 sm:w-6 md:h-8 md:w-8" />
            </Button>
          </div>
        </div>

        <div className="relative z-10 w-[50%]">
          <Image
            className="rounded-3xl object-cover"
            src={imageSrc}
            alt="Баннер"
            width={954}
            height={274}
          />
        </div>
      </div>

      <div
        className="relative flex flex-col items-center overflow-hidden rounded-3xl p-6 text-center sm:hidden"
        style={{ backgroundColor: bgColor }}
      >
        <svg
          className={`${figureFillColor} absolute inset-0 h-full w-full`}
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M363.051 3.19461C366.488 1.56135 370.163 0.660156 373.967 0.660156H1197.43C1197.43 0.660156 731.416 47.4302 711.677 112.879C705.385 133.74 728.362 157.451 757.861 178.254C778.536 192.833 769.154 232.837 743.856 232.837C540.795 232.837 135.315 232.837 106.973 232.837C69.0508 232.837 -90.7638 -3.59642 72.921 33.5519C217.683 66.4056 337.323 15.4219 363.051 3.19461Z"
            fill="current"
          />
        </svg>

        <h2 className="relative z-10 text-xl font-semibold text-white">
          {title}
        </h2>
        <Image
          className="relative z-10 mt-4 w-4/5 rounded-3xl object-cover"
          src={mobileImageSrc}
          alt="Баннер"
          width={277}
          height={268}
        />
        <div className="relative z-10 mt-4 flex items-center gap-2.5">
          <Badge className="text-sm">{badgeText}</Badge>
          <Button
            circle
            className="flex items-center justify-center rounded-full bg-white p-2 hover:bg-gray-200"
            onClick={() => {}}
          >
            <ArrowUpRight className="h-4 w-4 stroke-dark-grey-tur" />
          </Button>
        </div>
      </div>
    </div>
  );
};
