'use client';
import { Popup } from '@/components/shared/popup/Popup';
import { RegistrationForm } from './RegistrationForm';
import { RegistrationFooter } from './RegistrationFooter';

export const RegistrationPopupWidget: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Регистрация">
      <RegistrationForm />
      <RegistrationFooter />
    </Popup>
  );
};
