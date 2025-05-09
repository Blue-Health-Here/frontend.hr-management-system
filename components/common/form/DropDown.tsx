import React from 'react';
import {DropdownProps } from '@/utils/types';


const Dropdown: React.FC<DropdownProps> = ({ 
  id, 
  name, 
  label, 
  options, 
  className = '', 
  value, 
  onChange 
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          name={name}
          className="block appearance-none w-full px-4 py-2 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f26522] focus:border-[#f26522] focus:ring-2 text-sm"
          value={value}
          onChange={onChange}
        >
          <option value="" className='text-sm'>Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;