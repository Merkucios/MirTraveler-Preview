'use client';

import { Button, InputField } from '@/components/shared';
import { UserIcon } from '@/components/shared/icons';
import { Popup } from '@/components/shared/popup/Popup';
import { useState } from 'react';
import { PasswordRecoveryFooter } from './PasswordRecoveryFooter';

export const PasswordRecoveryPopupWidget: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    console.log('Восстановление пароля для:', email);
    onClose();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Восстановление пароля">
      <div className="space-y-6">
        <div className="relative">
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<UserIcon className="stroke-medium-grey-tur" />}
            placeholder="Email"
          />
        </div>
        <Button
          onClick={handleRecovery}
          className="w-full rounded-3xl bg-green-tur px-4 py-3 text-base font-semibold text-white"
        >
          Восстановить
        </Button>
        <PasswordRecoveryFooter />
      </div>
    </Popup>
  );
};
