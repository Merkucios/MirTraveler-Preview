'use client';
import { useState } from 'react';
import { DownArrowIcon } from '@/components/shared/icons';
import { Dropdown } from '@/components/shared';
import { languages } from '@/components/entities/model/language';

interface LanguageDropdownProps {
  className?: string;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Ru');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center px-4 py-2 text-medium-grey-tur"
        style={{ color: 'inherit' }}
      >
        {selectedLanguage}
        <DownArrowIcon
          className="ml-1 h-2 w-2"
          style={{ stroke: 'inherit', width: 'inherit' }}
        />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="w-56"
      >
        <div className="py-1">
          {languages.map((language, index) => (
            <button
              key={index}
              onClick={() => handleLanguageChange(language.label)}
              className="block w-full px-4 py-2 text-left text-sm text-dark-grey-tur hover:bg-gray-100"
            >
              {language.label}
            </button>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};
