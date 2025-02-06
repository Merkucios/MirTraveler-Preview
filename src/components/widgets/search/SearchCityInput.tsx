'use client';
import { Dropdown } from '@/components/shared';

interface CityInputProps {
  selectedCity: string | null;
  setSelectedCity: (city: string | null) => void;
  dropdown: string | null;
  toggleDropdown: (type: string) => void;
}

export const SearchCityInput: React.FC<CityInputProps> = ({
  selectedCity,
  setSelectedCity,
  dropdown,
  toggleDropdown,
}) => {
  return (
    <div className="relative flex-1 px-4">
      <input
        type="text"
        placeholder="Куда"
        value={selectedCity || ''}
        onFocus={() => toggleDropdown('destination')}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-white focus:ring-0"
      />
      <Dropdown
        isOpen={dropdown === 'destination'}
        onClose={() => toggleDropdown('')}
      >
        {[
          'Москва',
          'Санкт-Петербург',
          'Казань',
          'Сочи',
          'Астрахань',
          'Великий Устюг',
          'Нижний Новгород',
        ].map((city) => (
          <div
            key={city}
            className="cursor-pointer p-2 text-[#8e8e8e] hover:text-green-tur"
            onClick={() => {
              setSelectedCity(city);
              toggleDropdown('');
            }}
          >
            {city}
          </div>
        ))}
      </Dropdown>
    </div>
  );
};
