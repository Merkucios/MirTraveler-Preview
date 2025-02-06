import { combineClasses } from '@/components/app/utils';

type InputFieldProps = {
  type: string;
  name?: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className = '',
  icon,
  onIconClick,
}) => (
  <div className="relative w-full">
    <input
      type={type}
      value={value}
      name={name!}
      onChange={onChange}
      placeholder={placeholder}
      className={combineClasses(
        'h-12 w-full rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-green-tur',
        className
      )}
    />
    {icon && (
      <div
        className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
        onClick={onIconClick}
      >
        {icon}
      </div>
    )}
  </div>
);
