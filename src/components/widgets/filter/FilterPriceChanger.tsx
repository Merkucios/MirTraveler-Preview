'use client';
import { InputField } from '@/components/shared';
import { useState } from 'react';
import { Range } from 'react-range';

export const FilterPriceChanger: React.FC = () => {
  const [values, setValues] = useState([1000, 50000]);

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <InputField
          type="number"
          placeholder="от 1000 р"
          value={values[0]}
          onChange={(e) => handleChange([+e.target.value, values[1]])}
          className="rounded-lg border border-[#8e8e8e] bg-white p-2 text-sm"
        />
        <span className="text-[#8e8e8e]">–</span>
        <InputField
          type="number"
          placeholder="до 20000 р"
          value={values[1]}
          onChange={(e) => handleChange([values[0], +e.target.value])}
          className="rounded-lg border border-[#8e8e8e] bg-white p-2 text-sm"
        />
      </div>

      <div className="w-full">
        <Range
          step={100}
          min={1000}
          max={50000}
          values={values}
          onChange={handleChange}
          renderTrack={({ props, children }) => {
            //@ts-expect-error: Property 'key' does not exist on type 'ITrackProps
            const { key, ...otherProps } = props;
            return (
              <div
                key={key}
                {...otherProps}
                className="relative h-1 rounded-md bg-[#8e8e8e]"
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => {
            const { key, ...otherProps } = props;
            return (
              <div
                key={key}
                {...otherProps}
                className="h-6 w-6 cursor-pointer rounded-full border-2 border-white bg-green-tur shadow-lg"
              />
            );
          }}
        />
      </div>
    </div>
  );
};
