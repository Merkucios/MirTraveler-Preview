import { formatPrice } from './formatPrice';

interface PriceProps {
  currentPrice: number;
  oldPrice?: number;
  currencySymbol?: string;
  className?: string;
}

export const Price: React.FC<PriceProps> = ({
  currentPrice,
  oldPrice,
  currencySymbol = '₽',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-0.5 self-start ${className}`}
    >
      {oldPrice && (
        <span className="text-sm font-normal text-neutral-600 line-through">
          {formatPrice(oldPrice)} {currencySymbol}
        </span>
      )}

      <span className="text-xl font-semibold text-dark-grey-tur">
        {formatPrice(currentPrice)} {currencySymbol}
      </span>
    </div>
  );
};
