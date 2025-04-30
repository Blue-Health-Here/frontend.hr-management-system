"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { employeeData } from "@/utils/constants";
import AttendanceCard from "./attendanceCard";

const AttendanceReportView = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [employees, setEmployees] = useState(employeeData);
  const [dateRangeFilter, setDateRangeFilter] = useState(
    "04/24/2025 - 04/30/2025"
  );
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Sample data for the graph
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const presentData = [80, 75, 90, 85, 95, 88, 92, 87, 89, 93, 91, 94];
  const absentData = [20, 25, 10, 15, 5, 12, 8, 13, 11, 7, 9, 6];

  const handleFilterChange = () => {
    let filteredEmployees = [...employees];

    if (statusFilter !== "All") {
      filteredEmployees = filteredEmployees.filter(
        (employee) => employee.status === statusFilter
      );
    }

    if (sortOption === "ascending") {
      filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "last7days") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      filteredEmployees = filteredEmployees.filter((employee) => {
        const joinDate = new Date(employee.joiningDate);
        return joinDate >= sevenDaysAgo;
      });
    }

    return filteredEmployees;
  };

  const filteredEmployees = handleFilterChange();

  return (
    <div className="p-2 sm:p-4">
      {/* Header section with export button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h1 className="text-lg sm:text-xl font-bold">Attendance Report</h1>
        <div className="relative self-end sm:self-auto">
          <button
            className="bg-white text-gray border border-gray-300 px-3 py-2 rounded flex items-center text-xs sm:text-sm"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              className="w-3 h-3 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Export
            <svg
              className="w-3 h-3 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button className="flex items-center w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100">
                  <svg
                    className="w-3 h-3 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Export as PDF
                </button>
                <button className="flex items-center w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100">
                  <svg
                    className="w-3 h-3 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Export as Excel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <AttendanceCard
            title="Total Working Days"
            value="25"
            percentage="+20.01%"
            iconColor="text-[#f26522]"
            progressWidth="75%"
            trendText="from last month"
            iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />

          <AttendanceCard
            title="Total Leave Taken"
            value="12"
            percentage="+20.01%"
            iconColor="text-[#1b84ff]"
            progressWidth="40%"
            trendText="from last month"
            iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />

          <AttendanceCard
            title="Total Holidays"
            value="6"
            percentage="+20.01%"
            iconColor="text-[#fd3995]"
            progressWidth="30%"
            trendText="from last month"
            iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />

          <AttendanceCard
            title="Total Holidays"
            value="6"
            percentage="+20.01%"
            iconColor="text-[#ffc107]"
            progressWidth="30%"
            trendText="from last month"
            iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </div>

        {/* Right section with attendance graph */}
        <div className="w-full lg:w-1/2 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <h3 className="text-xs sm:text-sm font-semibold mb-3">Attendance</h3>
          <div className="h-40 sm:h-48">
            <div className="h-full flex">
              <div className="flex flex-col justify-between h-full mr-1 text-2xs sm:text-xs text-gray-500">
                <span>100</span>
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>
              <div className="flex-grow flex flex-col">
                <div className="flex-grow flex items-end px-1 sm:px-2">
                  {months.map((month, index) => (
                    <div
                      key={month}
                      className="flex flex-col items-center mx-0.5"
                      style={{ width: "7%" }}
                    >
                      <div
                        className="flex items-end w-full"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="w-full bg-green-500 rounded-t mr-0.5"
                          style={{ height: `${presentData[index]}%` }}
                        ></div>
                        <div
                          className="w-full bg-red-500 rounded-b"
                          style={{ height: `${absentData[index]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between px-1 sm:px-2 mt-1 text-2xs sm:text-xs text-gray-500">
                  {months.map((month) => (
                    <span key={month} className="w-4 text-center">
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-2">
            <div className="flex items-center mr-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              <span className="text-2xs sm:text-xs">Present</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              <span className="text-2xs sm:text-xs">Absent</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Filter Row */}
        <div className="bg-white p-3 sm:p-4 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
            <h2 className="text-base sm:text-lg font-semibold">
              Employee Attendance
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
              <div className="w-full sm:w-40 md:w-48">
                <div className="relative">
                  <select
                    id="date-range-filter"
                    value={dateRangeFilter}
                    onChange={(e) => setDateRangeFilter(e.target.value)}
                    className="block appearance-none w-full pl-3 pr-6 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md truncate"
                  >
                    <option value="04/24/2025 - 04/30/2025">
                      04/24/2025 - 04/30/2025
                    </option>
                    <option value="Today">Today</option>
                    <option value="Yesterday">Yesterday</option>
                    <option value="Last 7 Days">Last 7 Days</option>
                    <option value="Last 30 Days">Last 30 Days</option>
                    <option value="This month">This month</option>
                    <option value="Last Month">Last Month</option>
                    <option value="Custom Range">Custom Range</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-28 md:w-32">
                <div className="relative">
                  <select
                    id="status-filter"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="block appearance-none w-full pl-3 pr-6 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none rounded-md"
                  >
                    <option value="All">All Status</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Late">Late</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-32 md:w-36">
                <div className="relative">
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="block appearance-none w-full pl-3 pr-6 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  >
                    <option value="">Sort By</option>
                    <option value="last7days">Last 7 days</option>
                    <option value="ascending">Ascending</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Name
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Date
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Check In
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Status
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Check Out
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Break
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Late
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Overtime
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Hours
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                        <Image
                          src={employee.image}
                          alt={employee.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                          unoptimized
                        />
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-500">
                          {employee.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {employee.designation}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    09:15 AM
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-2xs sm:text-xs leading-5 font-semibold rounded-full ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {employee.status === "Active" ? "Present" : "Absent"}
                    </span>
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    06:30 PM
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    01:00
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    15 min
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    00:30
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    08:15
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReportView;
