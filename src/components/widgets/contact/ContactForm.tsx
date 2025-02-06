'use client';
import { paths } from '@/components/app/paths';
import { Button, InputField } from '@/components/shared';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto flex flex-col gap-6 rounded-2xl bg-light-grey-tur sm:flex-row sm:gap-8 lg:gap-12 lg:p-0">
      <div className="relative h-48 w-full rounded-2xl sm:h-auto sm:w-1/2">
        <div className="absolute bottom-4 left-4 text-lg font-bold text-white sm:bottom-6 sm:left-6 sm:text-2xl lg:bottom-8 lg:left-8 lg:text-3xl">
          Планируйте впечатления вместе с Mirtravel
        </div>
        <Image
          src="/contact/contact_form.png"
          alt="Mirtravel"
          width={500}
          height={300}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      <div className="w-full p-6 sm:w-1/2 sm:pt-2 lg:pt-6">
        <div className="mb-4 text-2xl font-bold text-dark-grey-tur sm:text-3xl lg:text-4xl">
          Есть вопросы?
        </div>
        <div className="mb-4 text-lg font-medium text-dark-grey-tur sm:text-xl lg:text-2xl">
          Напишите нам и мы свяжемся с вами в ближайшее время!
        </div>

        <div className="mb-4 w-full">
          <InputField
            type="text"
            name="name"
            placeholder="Имя"
            className="h-12 w-full rounded-lg bg-white px-4 text-dark-grey-tur focus:outline-none focus:ring-2 focus:ring-green-tur sm:h-14 lg:h-16"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            className="h-12 w-full rounded-lg bg-white px-4 text-dark-grey-tur focus:outline-none focus:ring-2 focus:ring-green-tur sm:h-14 lg:h-16"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full">
          <InputField
            name="telephone"
            placeholder="Телефон"
            className="h-12 w-full rounded-lg bg-white px-4 text-dark-grey-tur focus:outline-none focus:ring-2 focus:ring-green-tur sm:h-14 lg:h-16"
            value={formData.tel}
            onChange={handleChange}
            type="tel"
          />
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs font-medium text-dark-grey-tur sm:text-sm">
            <span>
              Отправляя форму, вы соглашаетесь c{' '}
              <Link
                className="underline hover:text-darkblue-tur"
                href={paths['privacy-policy']}
              >
                обработкой персональных данных
              </Link>{' '}
              и{' '}
              <Link
                className="underline hover:text-darkblue-tur"
                href={paths['user-agreement']}
              >
                условиями пользовательских соглашений
              </Link>
            </span>
          </div>
          <Button className="w-full text-lg font-semibold text-white sm:w-auto">
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};
