'use client';
import React, { useState, useRef, useEffect } from 'react';
import { SearchCityInput } from './SearchCityInput';
import { DateValue, SearchDateInput } from './SearchDateInput';
import { SearchGuestsInput } from './SearchGuestsInput';
import { SearchIcon } from '@/components/shared/icons';

interface SearchWidgetProps {
  className?: string;
  gradientMask?: string;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({
  className = '',
  gradientMask = '',
}) => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateValue>([
    new Date(),
    new Date(),
  ]);
  const [guests, setGuests] = useState<number>(2);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (type: string) => {
    setDropdown(dropdown === type ? null : type);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const calendar = document.querySelector('.react-calendar');
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      (!calendar || !calendar.contains(event.target as Node))
    ) {
      setDropdown(null);
    }
  };

  useEffect(() => {
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown]);

  return (
    <div
      ref={dropdownRef}
      className={`relative flex w-full items-center rounded-full shadow-md sm:h-14 ${className}`}
    >
      {gradientMask && (
        <div
          className={`absolute inset-0 rounded-full ${gradientMask} pointer-events-none`}
        ></div>
      )}

      {/* Город */}
      <div className="relative flex-1 px-4 sm:px-6">
        <SearchCityInput
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          dropdown={dropdown}
          toggleDropdown={toggleDropdown}
        />
        <div className="absolute right-0 top-1/2 h-5 w-px -translate-y-1/2 bg-gray-300"></div>
      </div>

      {/* Даты */}
      <div className="relative flex-1 px-4 sm:px-6">
        <SearchDateInput
          dateRange={dateRange}
          setDateRange={setDateRange}
          dropdown={dropdown}
          toggleDropdown={toggleDropdown}
        />
        <div className="absolute right-0 top-1/2 h-5 w-px -translate-y-1/2 bg-gray-300"></div>
      </div>

      {/* Гости */}
      <div className="relative flex-1 px-4 sm:px-6">
        <SearchGuestsInput
          guests={guests}
          setGuests={setGuests}
          dropdown={dropdown}
          toggleDropdown={toggleDropdown}
        />
        <div className="absolute right-0 top-1/2 h-5 w-px -translate-y-1/2 bg-gray-300"></div>
      </div>

      {/* Кнопка поиска */}
      <div className="relative flex items-center justify-center px-4 sm:px-6">
        <SearchIcon className="h-6 w-6 stroke-white" />
      </div>
    </div>
  );
};
