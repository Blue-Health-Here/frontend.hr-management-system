"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Plus } from "lucide-react";
import { adminAttendanceStats, employeeData, employeeStats } from "@/utils/constants";
import ExportButton from "../../common/ExportButton";
import DateRangeDropdown from "../../common/form/DateRangeDropdown";
import Button from "../../common/Button";
import MetricCard from "@/components/common/MetricCard";

const AttendanceReportView = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [dateRangeFilter, setDateRangeFilter] = useState(
    "04/24/2025 - 04/30/2025"
  );
  const [statusFilter, setStatusFilter] = useState("All");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");

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
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h1 className="text-lg sm:text-2xl font-bold">Attendance Report</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-4">
        {adminAttendanceStats.map((stats, index) => (
          <MetricCard
            key={`stats-${index}`}
            title={stats.title}
            value={stats.value}
            icon={stats.icon}
            iconBgColor={stats.iconBgColor}
            percentage={stats.percentage}
             percentageColor={stats.percentColor}
            textColor={stats.textColor}
            isShowCradFooter={false}
          />
        ))}
      </div>
      <div className="bg-white rounded-2xl overflow-hidden p-4 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
          <h2 className="text-base sm:text-lg font-semibold">
            Attendance List
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-auto">
            <div className="w-full sm:w-48 md:w-56">
              <DateRangeDropdown
                value={dateRangeFilter}
                onChange={setDateRangeFilter}
              />
            </div>

            <div className="w-auto sm:w-32 md:w-36">
              <div className="relative">
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block appearance-none w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none rounded-md"
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
            <div className="w-auto sm:w-32 md:w-36">
              <div className="relative">
                <select
                  id="department-filter"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="block appearance-none w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none rounded-md"
                >
                  <option value="All">All Department</option>
                  <option value="Admin">Admin</option>
                  <option value="HR">HR</option>
                  <option value="Manager">Manager</option>
                  <option value="Team-Lead">Team Lead</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-36 md:w-40">
              <div className="relative">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block appearance-none w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                >
                  <option value="">Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
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
                  Employee
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Date
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Check In
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Check Out
                </th>
                <th className="py-2 px-3 sm:py-3 sm:px-6 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Status
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
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    06:30 PM
                  </td>
                  <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-2xs sm:text-xs leading-5 font-semibold rounded-full ${employee.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                        }`}
                    >
                      {employee.status === "Active" ? "Present" : "Absent"}
                    </span>
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