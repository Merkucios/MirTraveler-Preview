'use client';

import { ReactNode, useEffect, useState } from 'react';

interface PopupProps {
  children: ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({
  children,
  title,
  isOpen,
  onClose,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).dataset.overlay) {
      onClose();
    }
  };

  return shouldRender ? (
    <div
      data-overlay="true"
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`relative w-full max-w-lg rounded-[32px] bg-white p-14 shadow-lg transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-90'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <span className="sr-only">Закрыть</span>&times;
        </button>
        {title && (
          <h2 className="pb-6 text-center text-xl font-semibold uppercase tracking-wide text-green-tur">
            {title}
          </h2>
        )}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  ) : null;
};
