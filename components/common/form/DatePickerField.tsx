"use client";
import React, { useState, useEffect, useRef } from "react";
import { useField } from "formik";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerFieldProps {
  label?: string;
  name: string;
  className?: string;
  dateplaceholder?: string;
  onChange?: (date: string) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  className,
  label,
  name,
  dateplaceholder = "Select a date",
  onChange,
}) => {
  const [field, meta, helpers] = useField(name);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openCalendar, setOpenCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (field.value) {
      setSelectedDate(new Date(field.value));
    }
  }, [field.value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setOpenCalendar(false);
      }
    }

    if (openCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCalendar]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);

    const formattedDate = date
      ? date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0")
      : "";
    helpers.setValue(formattedDate);
    if (onChange && formattedDate) {
      onChange(formattedDate);
    }
    setOpenCalendar(false);
  };

  const handleClearDate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDate(null);
    helpers.setValue("");
    if (onChange) {
      onChange("");
    }
  };

  return (
    <div ref={calendarRef} className={className}>
      {/* {label && <Label className="text-xs text-grey">{label}</Label>} */}
      <div className="relative w-full">
        <div
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs items-center justify-between cursor-pointer"
          onClick={() => setOpenCalendar(!openCalendar)}
        >
          <span className="text-muted-foreground">
            {selectedDate ? selectedDate.toDateString() : dateplaceholder}
          </span>
          <div className="flex items-center">
            {selectedDate && (
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 mr-2"
                onClick={handleClearDate}
              >
                ✕
              </button>
            )}
            <Calendar size={14} className="text-gray-500" />
          </div>
        </div>
        {openCalendar && (
          <div
            className="absolute left-0 top-full z-50 bg-white shadow-lg rounded-md"
            style={{
              padding: 0,
              lineHeight: 0,
              display: "inline-block",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          </div>
        )}
      </div>

      {meta.touched && meta.error && (
        <p className="text-red-500 text-xs mt-1 font-semibold">{meta.error}</p>
      )}
    </div>
  );
};

export default DatePickerField;