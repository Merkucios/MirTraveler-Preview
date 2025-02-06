import { Button, CheckboxField } from '@/components/shared';
import { FilterSection } from '../FilterSection';
import { FilterType } from '../FilterType';
import { FilterPriceChanger } from '../FilterPriceChanger';

export const FilterRentHouse = () => {
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

      <FilterSection title="Тип жилья">
        {[
          'Квартира',
          'Апарт-отель',
          'Хостел',
          'Комната',
          'Дом, коттедж',
          'Гостевой дом',
          'Студия',
          'Отель, гостиница',
        ].map((type, index) => (
          <CheckboxField
            key={index}
            label={type}
            className="text-sm text-dark-grey-tur"
            onChange={(checked) => console.log(`${type} selected:`, checked)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Количество комнат">
        {['Одна', 'Две', 'Три', 'Четыре', 'Пять', 'Студия'].map(
          (room, index) => (
            <CheckboxField
              key={index}
              label={room}
              className="text-sm text-[#8e8e8e]"
              onChange={(checked) => console.log(`${room} selected:`, checked)}
            />
          )
        )}
      </FilterSection>

      <FilterSection title="Дополнительно">
        {['Можно с детьми', 'Можно с животными'].map((option, index) => (
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
