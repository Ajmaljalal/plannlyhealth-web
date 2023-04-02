'use client'
import React, { useState } from 'react';
import Select from 'react-select';
import { icons } from '@/lib/icons';
import Image from 'next/image';

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: state.isFocused ? '1px solid #807896' : '1px solid #807896',
    borderRadius: '8px',
    boxShadow: 'none',
    '&:hover': {
      border: state.isFocused ? 'border' : 'border',
    },
    padding: '0 24px',
    cursor: 'pointer',
    height: '48px'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '0',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#ebeaf1' : '#FFFFFF',
    color: '#1F2937',
    '&:hover': {
      backgroundColor: state.isSelected ? '#ebeaf1' : '#f2f4f7',
    },
    margin: '0',
    cursor: 'pointer',

  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 1000,
    padding: 'none',
    borderRadius: '8px',
    overflow: 'hidden',
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: '0',
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: state.isFocused ? '#1F2937' : '#807896',
    margin: '0',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    border: 'none',
    padding: '0',
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    height: '40px',
    color: state.isFocused ? '#1F2937' : '#807896',
    display: 'flex',
    alignItems: 'center',
  }),
};

interface DropdownProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: any;
  value: any;
  onChange: (e: any) => void;
  isSearchable?: boolean;
  className?: string;
  disabled?: boolean;
}

const Dropdown = ({ isSearchable = false, disabled = false, onChange, className, placeholder, options, value }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    onChange && onChange(option);

  };

  return (
    <div className={`h-[48px] pt-[0.5px] flex-1 ${className}`}>
      <Select
        value={options.find((option: any) => option.value === selectedOption)}
        instanceId={options[0].value}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        isSearchable={isSearchable}
        isDisabled={disabled}
        components={{
          DropdownIndicator: () => {
            return (
              <Image src={icons.arrow} alt='arrow down' />
            );
          }
        }}
      />
    </div>
  );
};

export default Dropdown;