'use client';
import React, { ReactNode, useRef, useEffect } from 'react';

interface DropdownProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  isOpen,
  onClose,
  className = '',
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return isOpen ? (
    <div
      ref={dropdownRef}
      className={`absolute z-20 w-80 rounded-lg border border-gray-300 bg-white p-4 shadow-lg ${className}`}
    >
      {children}
    </div>
  ) : null;
};
