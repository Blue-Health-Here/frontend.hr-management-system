import React from 'react';
import {DropdownProps } from '@/utils/types';


const Dropdown: React.FC<DropdownProps> = ({ 
  id, 
  name, 
  label, 
  options, 
  className = '', 
  value, 
  onChange, 
  placeholder = "Select"
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          name={name}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-sm appearance-none bg-[right_0.5rem_center] bg-[length:1rem_1rem] bg-no-repeat pr-8"
          value={value}
          onChange={onChange}
        >
          <option value="" className='text-sm'>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-0 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;