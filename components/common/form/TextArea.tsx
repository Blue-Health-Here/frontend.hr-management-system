"use client";
import React from "react";
import { useField } from "formik";
import { TextAreaFieldProps } from "@/utils/types";

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  label,
  rows = 3,
  className = "",
  placeholder = "",
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={`${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <textarea
        id={name}
        {...field}
        rows={rows}
        placeholder={placeholder}
        className={`block w-full px-4 py-2 border ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        } rounded-sm focus:ring focus:ring-blue-200 focus:outline-none`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextAreaField;