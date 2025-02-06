import { combineClasses } from '@/components/app/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  circle?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  circle = false,
  ...props
}) => {
  return (
    <button
      className={combineClasses(
        `inline-flex items-center justify-center transition-all duration-300 ease-in-out ${
          circle
            ? 'rounded-full bg-green-tur p-0 hover:bg-[#4caf37] hover:shadow-md focus:outline-none focus:ring-2'
            : 'rounded-3xl bg-green-tur px-4 py-2 hover:bg-[#4caf37] focus:outline-none focus:ring-2'
        } text-sm text-white sm:text-base md:text-lg lg:text-xl`,
        circle
          ? 'h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-14 lg:w-14'
          : 'sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-3.5',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
