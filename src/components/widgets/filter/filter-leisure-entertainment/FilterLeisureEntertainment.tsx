import { Button, CheckboxField } from '@/components/shared';
import { FilterPriceChanger } from '../FilterPriceChanger';
import { FilterSection } from '../FilterSection';

export const FilterLeisureEntertainment = () => {
  return (
    <div className="h-auto w-60 space-y-6 rounded-lg bg-light-grey-tur p-4">
      <FilterSection title="Цена">
        <FilterPriceChanger />
      </FilterSection>

      <FilterSection title="Тип развлечения">
        {['Кино', 'Концерты', 'Театр', 'Ёлки', 'Шоу', 'Парки', 'Аквапарки'].map(
          (type, index) => (
            <CheckboxField
              key={index}
              label={type}
              className="text-sm text-dark-grey-tur"
              onChange={(checked) => console.log(`${type} selected:`, checked)}
            />
          )
        )}
      </FilterSection>

      <FilterSection title="Вид развлечения">
        {['Семейные', 'Детские', 'Взрослые'].map((room, index) => (
          <CheckboxField
            key={index}
            label={room}
            className="text-sm text-[#8e8e8e]"
            onChange={(checked) => console.log(`${room} selected:`, checked)}
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
