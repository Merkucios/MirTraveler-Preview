import { Button, CheckboxField } from '@/components/shared';
import { FilterType } from '../FilterType';
import { FilterPriceChanger } from '../FilterPriceChanger';
import { FilterSection } from '../FilterSection';

export const FilterRentCar = () => {
  return (
    <div className="h-auto w-60 space-y-6 rounded-lg bg-light-grey-tur p-4">
      <FilterSection title="Цена">
        <FilterType
          label1="За 1 сутки"
          label2="За 1 час"
          onChange={(value: boolean) => console.log('Switch toggled:', value)}
        />
        <FilterPriceChanger />
      </FilterSection>

      <FilterSection title="Тип транспорта">
        {[
          'Седан',
          'Хэтчбек',
          'Универсал',
          'Внедорожник',
          'Кабриолет',
          'Кроссовер',
          'Купе',
          'Минивэн',
          'Лимузин',
          'Пикап',
          'Фургон',
          'Микроавтобус',
          'Автодом',
        ].map((type, index) => (
          <CheckboxField
            key={index}
            label={type}
            className="text-sm text-dark-grey-tur"
            onChange={(checked) => console.log(`${type} selected:`, checked)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Дополнительно">
        {['Доставка по адресу', 'Детское кресло'].map((option, index) => (
          <CheckboxField
            key={index}
            label={option}
            className="text-sm text-[#8e8e8e]"
            onChange={(checked) => console.log(`${option} selected:`, checked)}
          />
        ))}
      </FilterSection>

      <div className="flex flex-col gap-3.5">
        <Button>Применить</Button>
        <Button className="border border-[#8e8e8e] bg-transparent text-[#8e8e8e] hover:bg-[#8e8e8e] hover:text-white">
          Сбросить
        </Button>
      </div>
    </div>
  );
};
