import { Button, CheckboxField, InputField } from '@/components/shared';
import { UserIcon, EyeIcon, EyeClosedIcon } from '@/components/shared/icons';
import { SwitchField } from '@/components/shared/input/SwitchField';
import { useState } from 'react';

export const RegistrationForm = () => {
  // const [isRememberMe, setIsRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCorporate, setIsCorporate] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Регистрация:', {
      email,
      password,
      confirmPassword,
      isCorporate,
    });
  };

  return (
    <form>
      <div className="mt-6 space-y-4">
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<UserIcon className="stroke-medium-grey-tur" />}
          className="w-full"
        />
        <InputField
          type={showPassword ? 'text' : 'password'}
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={
            showPassword ? (
              <EyeIcon className="fill-medium-grey-tur" />
            ) : (
              <EyeClosedIcon className="fill-medium-grey-tur stroke-medium-grey-tur" />
            )
          }
          onIconClick={() => setShowPassword((prev) => !prev)}
          className="w-full"
        />
        <InputField
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Подтверждение пароля"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={
            showConfirmPassword ? (
              <EyeIcon className="fill-medium-grey-tur" />
            ) : (
              <EyeClosedIcon className="fill-medium-grey-tur stroke-medium-grey-tur" />
            )
          }
          onIconClick={() => setShowConfirmPassword((prev) => !prev)}
          className="w-full"
        />
      </div>

      <div className="mt-4">
        <SwitchField
          options={{ label1: 'Юридическое лицо', label2: 'Физическое лицо' }}
          onChange={(value) => setIsCorporate(value)}
          initialValue={isCorporate}
        />
      </div>

      <div className="mt-4 flex items-center justify-between pb-6 pt-2">
        <CheckboxField label="Запомнить меня" />
      </div>

      <Button
        className="w-full rounded-3xl bg-green-tur p-2 text-white"
        onClick={handleRegister}
      >
        Зарегистрироваться
      </Button>

      <div className="mt-4 text-xs font-medium leading-5 text-dark-grey-tur">
        <p>
          Регистрируясь, вы соглашаетесь с{' '}
          <span className="underline">обработкой персональных данных</span>
        </p>
        и{' '}
        <span className="underline">условиями пользовательских соглашений</span>
      </div>
    </form>
  );
};
