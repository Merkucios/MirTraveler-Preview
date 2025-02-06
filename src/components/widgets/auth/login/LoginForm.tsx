'use client';
import { InputField } from '@/components/shared';
import { Button } from '@/components/shared';
import { CheckboxField } from '@/components/shared';
import { UserIcon, EyeClosedIcon, EyeIcon } from '@/components/shared/icons';
import { useState } from 'react';

export const LoginForm: React.FC<{
  onSubmit: () => void;
  captchaRequired: boolean;
}> = ({ onSubmit, captchaRequired }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
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
      <div className="mt-4 flex items-center justify-between pb-6 pt-2">
        <CheckboxField label="Запомнить меня" />
      </div>

      {captchaRequired && (
        <div className="mt-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Пожалуйста, пройдите проверку
            </p>
          </div>
        </div>
      )}
      <div className="pb-4">
        <Button className="w-full" onClick={onSubmit}>
          Войти
        </Button>
      </div>
    </div>
  );
};
