"use client";

import React from "react";
import { useField } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  className,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block font-medium text-gray-500 mt-4 text-xs sm:text-base"
      >
        {label}
      </label>

      <input
        {...field}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
      />

      {meta.touched && meta.error && (
        <p className="text-red-500 text-xs mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default InputField;
