"use client";

import React from "react";
import { useField } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  className,
  icon,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block font-medium text-gray-500 mt-4 text-[10px] sm:text-[14px] sm:text-base"
        style={{ color: 'rgb(32, 44, 75)' }} 
      >
        {label}
      </label>

      <div className="relative mt-1">
        {icon && (
          <div className="absolute inset-y-0 right-0 p-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          {...field}
          id={name}
          name={name}
          type={type}
          className={`block w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200 focus:outline-none ${
            icon ? "pl-10" : ""
          }`}
          placeholder={placeholder}
        />
      </div>

      {meta.touched && meta.error && (
        <p className="text-red-500 text-xs mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default InputField;
