import { icons } from '@/lib/icons';
import Image from 'next/image';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateSelectorProps {
  onChange: (dates: any) => void;
}


const DateRangeSelector = ({ onChange }: DateSelectorProps) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onChange(dates);
  };

  return (
    <div className="flex-1 rounded-[10px]">
      <div className="relative w-[100%] bg-basic_white ">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat={'MM.dd.yyyy'}
          placeholderText="Date Range"
          className="w-full px-4 py-2 rounded-[10px] pr-12 outline-none focus:outline-none bg-basic_white border-none"
        />
        <Image className="absolute w-6 h-6 text-gray-400 top-1/2 right-3 transform -translate-y-1/2" src={icons.add} alt='date picker' />
      </div>
    </div>
  );
};

export default DateRangeSelector;