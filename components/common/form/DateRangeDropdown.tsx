"use client";
import React, { useState } from "react";
import { DateRangeDropdownProps } from "@/utils/types";


const DateRangeDropdown: React.FC<DateRangeDropdownProps> = ({ value, onChange }) => {
  const [showCustomRangePicker, setShowCustomRangePicker] = useState(false);
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");

  const handleCustomRangeApply = () => {
    if (customStartDate && customEndDate) {
      onChange("Custom Range");
      setShowCustomRangePicker(false);
    }
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Custom Range") {
      setShowCustomRangePicker(true);
    } else {
      onChange(e.target.value);
      setShowCustomRangePicker(false);
    }
  };

  return (
    <div className="relative w-full sm:w-56">
      <select
        id="date-range-filter"
        value={value}
        onChange={handleDropdownChange}
        className="block w-full pl-2 pr-3 py-2  border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md"
      >
        <option value="04/26/2025 - 05/02/2025">04/26/2025 - 05/02/2025</option>
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
        <option value="Last 7 Days">Last 7 Days</option>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="This Month">This Month</option>
        <option value="Last Month">Last Month</option>
        <option value="Custom Range">Custom Range</option>
      </select>

      {showCustomRangePicker && (
        <div className="absolute z-10 mt-1 p-4 bg-white border border-gray-300 rounded-md shadow-lg w-full sm:w-96">
          <div className="flex justify-between gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={customStartDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomStartDate(e.target.value)}
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={customEndDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomEndDate(e.target.value)}
                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowCustomRangePicker(false)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleCustomRangeApply}
              className="px-4 py-2 text-sm bg-[#f26522] text-white rounded-md hover:bg-[#e05b1a]"
              disabled={!customStartDate || !customEndDate}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeDropdown;