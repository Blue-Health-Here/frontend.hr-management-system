"use client";
import { AttendanceCardProps } from "@/utils/types";
import React from "react";

const AttendanceCard: React.FC<AttendanceCardProps> = ({
  title,
  value,
  percentage,
  iconColor,
  progressWidth,
  trendText,
  iconPath,
}) => {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-2">
        <svg
          className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColor} mr-1.5 mt-3`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={iconPath}
          />
        </svg>
        <h3 className="text-xs sm:text-sm font-semibold">{title}</h3>
      </div>
      <p className="text-lg sm:text-xl font-bold mb-1 ml-7 sm:ml-8">{value}</p>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
        <div
          className="bg-[#03c95a] h-1.5 rounded-full"
          style={{ width: progressWidth }}
        ></div>
      </div>
      <p className="text-xs">
        <span className="text-secondary-green">{percentage}</span>
        <span className="text-gray-500"> {trendText}</span>
      </p>
    </div>
  );
};

export default AttendanceCard;