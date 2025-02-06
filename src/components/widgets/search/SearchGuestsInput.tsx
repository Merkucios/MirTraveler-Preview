'use client';
import React from 'react';
import { Button, Dropdown } from '@/components/shared';

interface GuestsInputProps {
  guests: number;
  setGuests: (guests: number) => void;
  dropdown: string | null;
  toggleDropdown: (type: string) => void;
}

export const SearchGuestsInput: React.FC<GuestsInputProps> = ({
  guests,
  setGuests,
  dropdown,
  toggleDropdown,
}) => {
  return (
    <div className="relative flex-1 px-4">
      <input
        type="text"
        placeholder="Гости"
        value={`${guests} гостей`}
        onFocus={() => toggleDropdown('guests')}
        readOnly
        className="w-full bg-transparent text-sm font-semibold outline-none focus:ring-0"
      />
      <Dropdown
        isOpen={dropdown === 'guests'}
        onClose={() => toggleDropdown('')}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-semibold leading-normal text-green-tur">
            Количество гостей
          </span>
          <div className="flex items-center gap-2">
            <button
              className="flex h-6 w-6 items-center justify-center text-green-tur"
              onClick={() => setGuests(Math.max(1, guests - 1))}
            >
              {'<'}
            </button>
            <span className="text-gray-700">{guests}</span>
            <button
              className="flex h-6 w-6 items-center justify-center text-green-tur"
              onClick={() => setGuests(guests + 1)}
            >
              {'>'}
            </button>
          </div>
        </div>
        <Button
          className="w-full rounded-lg font-medium text-white"
          onClick={() => toggleDropdown('')}
        >
          Готово
        </Button>
      </Dropdown>
    </div>
  );
};
