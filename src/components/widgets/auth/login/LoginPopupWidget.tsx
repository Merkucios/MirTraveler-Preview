'use client';

import { useState } from 'react';
import { Popup } from '@/components/shared/popup/Popup';
import { LoginForm } from './LoginForm';
import { LoginFooter } from './LoginFooter';
import { PopupAuthManager } from '../PopupAuthManager';

export const LoginPopupWidget: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [captchaRequired, setCaptchaRequired] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  const handleLogin = () => {
    const passwordCorrect = false;
    if (!passwordCorrect) {
      setLoginAttempts((prev) => {
        const newAttempts = prev + 1;
        if (newAttempts >= 5) {
          setCaptchaRequired(true);
        }
        return newAttempts;
      });
    } else {
      setLoginAttempts(0);
      setCaptchaRequired(false);
      console.log(loginAttempts);
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Авторизация">
      <LoginForm onSubmit={handleLogin} captchaRequired={captchaRequired} />

      <div className="mt-2 flex flex-col gap-2">
        <PopupAuthManager.Recovery>
          <span className="cursor-pointer text-sm font-normal leading-tight text-dark-grey-tur hover:text-darkblue-tur hover:underline">
            Забыли пароль?
          </span>
        </PopupAuthManager.Recovery>
        <PopupAuthManager.Register>
          <div className="flex gap-2">
            <p className="text-sm font-normal leading-tight text-dark-grey-tur">
              Нет аккаунта?
            </p>
            <span className="cursor-pointer text-sm font-normal leading-tight text-dark-grey-tur hover:text-darkblue-tur hover:underline">
              Зарегестрируйтесь
            </span>
          </div>
        </PopupAuthManager.Register>
      </div>

      <LoginFooter />
    </Popup>
  );
};
