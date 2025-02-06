import { combineClasses } from '@/components/app/utils';

type CheckboxFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  ...props
}) => (
  <label className="flex items-center text-sm text-gray-700">
    <input
      type="checkbox"
      {...props}
      className={combineClasses(
        'mr-2 h-4 w-4 rounded-lg border-gray-300 focus:ring-green-500',
        props.className
      )}
    />
    {label}
  </label>
);
