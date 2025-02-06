'use client';
import React, { useState, useRef, useEffect } from 'react';
import { SearchCityInput } from './SearchCityInput';
import { DateValue, SearchDateInput } from './SearchDateInput';
import { SearchGuestsInput } from './SearchGuestsInput';
import { SearchIcon } from '@/components/shared/icons';
import { Button } from '@/components/shared';

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
      className={`relative flex h-14 w-full items-center rounded-full px-4 sm:px-6 ${className}`}
    >
      {gradientMask && (
        <div
          className={`absolute inset-0 rounded-full ${gradientMask} pointer-events-none`}
        ></div>
      )}

      <div className="absolute inset-y-0 left-1/3 z-10 w-px bg-gray-300"></div>
      <div className="absolute inset-y-0 left-2/3 z-10 w-px bg-gray-300"></div>

      <SearchCityInput
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        dropdown={dropdown}
        toggleDropdown={toggleDropdown}
      />

      <SearchDateInput
        dateRange={dateRange}
        setDateRange={setDateRange}
        dropdown={dropdown}
        toggleDropdown={toggleDropdown}
      />

      <SearchGuestsInput
        guests={guests}
        setGuests={setGuests}
        dropdown={dropdown}
        toggleDropdown={toggleDropdown}
      />

      <Button
        circle
        className="hover:bg-blue-tur-dark items-center justify-center bg-blue-tur stroke-white"
        onClick={() => console.log('Search triggered')}
      >
        <SearchIcon className="h-6 w-6 stroke-white" />
      </Button>
    </div>
  );
};
