import { PopupAuthManager } from '../PopupAuthManager';

export const RegistrationFooter = () => {
  return (
    <>
      <hr className="my-4 border-t-2 border-gray-300" />

      <div className="text-center">
        <span className="text-sm text-dark-grey-tur">
          Уже зарегистрированы?{' '}
        </span>
        <PopupAuthManager.Login>
          <span className="cursor-pointer text-sm font-normal leading-tight text-dark-grey-tur hover:text-darkblue-tur hover:underline">
            Войти
          </span>
        </PopupAuthManager.Login>
      </div>
    </>
  );
};
