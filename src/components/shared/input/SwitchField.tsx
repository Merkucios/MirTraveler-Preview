'use client';

import { combineClasses } from '@/components/app/utils';
import { useState } from 'react';

interface SwitchProps {
  options: { label1: string; label2: string };
  onChange: (value: boolean) => void;
  initialValue?: boolean;
  className?: string;
  figureClassName?: string;
}

export const SwitchField: React.FC<SwitchProps> = ({
  options,
  onChange,
  initialValue = false,
  className = '',
  figureClassName = 'blue',
}) => {
  const [isSelected, setIsSelected] = useState(initialValue);

  const handleToggle = () => {
    const newValue = !isSelected;
    setIsSelected(newValue);
    onChange(newValue);
  };

  return (
    <div
      className={combineClasses(
        `relative h-7 w-full max-w-[320px] cursor-pointer sm:max-w-[360px] md:max-w-[400px] ${className}`
      )}
      onClick={handleToggle}
    >
      <div
        className={`absolute left-0 top-0 h-7 w-full rounded-3xl border border-${figureClassName} bg-white`}
      />

      <div
        className={`absolute top-0 h-7 w-1/2 rounded-3xl transition-transform duration-300 ease-in-out bg-${figureClassName} ${
          isSelected ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      <div
        className={`absolute left-0 top-0 flex h-7 w-1/2 items-center justify-center text-xs font-medium sm:text-sm ${
          isSelected ? 'text-medium-grey-tur' : 'text-white'
        }`}
      >
        {options.label1}
      </div>

      <div
        className={`absolute right-0 top-0 flex h-7 w-1/2 items-center justify-center text-xs font-medium sm:text-sm ${
          isSelected ? 'text-white' : 'text-medium-grey-tur'
        }`}
      >
        {options.label2}
      </div>
    </div>
  );
};
