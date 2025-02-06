'use client';

import { useState, ReactNode, createContext, useContext } from 'react';
import { PasswordRecoveryPopupWidget } from './password-recovery';
import { RegistrationPopupWidget } from './registration';
import { LoginPopupWidget } from './login';

interface PopupAuthContextProps {
  openLogin: () => void;
  openRegister: () => void;
  openRecovery: () => void;
  closePopup: () => void;
}

const PopupAuthContext = createContext<PopupAuthContextProps | null>(null);

const PopupAuthManagerBase: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [popupType, setPopupType] = useState<
    'login' | 'register' | 'recovery' | null
  >(null);
  const [isClosing, setIsClosing] = useState(false);

  const openLogin = () => {
    setPopupType('login');
    setIsClosing(false);
  };

  const openRegister = () => {
    setPopupType('register');
    setIsClosing(false);
  };

  const openRecovery = () => {
    setPopupType('recovery');
    setIsClosing(false);
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPopupType(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <PopupAuthContext.Provider
      value={{ openLogin, openRegister, openRecovery, closePopup }}
    >
      {children}
      {popupType === 'login' && (
        <LoginPopupWidget isOpen={!isClosing} onClose={closePopup} />
      )}
      {popupType === 'register' && (
        <RegistrationPopupWidget isOpen={!isClosing} onClose={closePopup} />
      )}
      {popupType === 'recovery' && (
        <PasswordRecoveryPopupWidget isOpen={!isClosing} onClose={closePopup} />
      )}
    </PopupAuthContext.Provider>
  );
};

export const PopupAuthManager = Object.assign(PopupAuthManagerBase, {
  Login: ({ children }: { children: ReactNode }) => {
    const context = useContext(PopupAuthContext);

    if (!context) return null;

    const { openLogin } = context;
    return <span onClick={openLogin}>{children}</span>;
  },

  Register: ({ children }: { children: ReactNode }) => {
    const context = useContext(PopupAuthContext);

    if (!context) return null;

    const { openRegister } = context;
    return <span onClick={openRegister}>{children}</span>;
  },

  Recovery: ({ children }: { children: ReactNode }) => {
    const context = useContext(PopupAuthContext);

    if (!context) return null;

    const { openRecovery } = context;
    return <span onClick={openRecovery}>{children}</span>;
  },
});
