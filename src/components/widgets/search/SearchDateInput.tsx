'use client';
import React from 'react';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css';
import './DatePickerCalendar.css';
import { Dropdown } from '@/components/shared';

type DateValuePiece = Date | null;
export type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece];

interface DateInputProps {
  dateRange: DateValue;
  setDateRange: (range: DateValue) => void;
  dropdown: string | null;
  toggleDropdown: (type: string) => void;
}

export const SearchDateInput: React.FC<DateInputProps> = ({
  dateRange,
  setDateRange,
  dropdown,
  toggleDropdown,
}) => {
  return (
    <div className="relative flex-1 px-4">
      <input
        type="text"
        placeholder="Когда"
        value={
          Array.isArray(dateRange)
            ? `${dateRange[0]?.toLocaleDateString()} - ${dateRange[1]?.toLocaleDateString()}`
            : 'Когда'
        }
        onFocus={() => toggleDropdown('when')}
        readOnly
        className="w-full bg-transparent text-sm font-semibold outline-none focus:ring-0"
      />
      <Dropdown isOpen={dropdown === 'when'} onClose={() => toggleDropdown('')}>
        <DateTimeRangePicker
          onChange={(range: DateValue) => setDateRange(range)}
          value={dateRange}
          className="rounded-lg text-black"
        />
      </Dropdown>
    </div>
  );
};
