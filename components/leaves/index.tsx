"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Users, UserPlus, File, ChevronDown, Plus } from "lucide-react";
import { employeeData } from "@/utils/constants";
import LeavesCard from "./LeavesCard";
import DateRangeDropdown from "../common/DateRangeDropdown";
import { Employees, Leave } from "@/utils/types";
import { handleFilterChange } from "@/utils/helper";
import DataTableListing from "./DataTableListing";

const LeavesView = () => {
  const [employees] = useState<Employees[]>(employeeData);
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");
  const [leaveTypeFilter, setLeaveTypeFilter] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("");
  const [exportOpen, setExportOpen] = useState<boolean>(false);

  const leaveData: Leave[] = employees.map((employee) => ({
    id: employee.id,
    employee: employee.name,
    employeeImage: employee.image,
    leaveType: ["Medical Leave", "Casual Leave", "Annual Leave"][
      Math.floor(Math.random() * 3)
    ],
    from: new Date(
      Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    to: new Date(
      Date.now() - Math.floor(Math.random() * 15) * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    days: Math.floor(Math.random() * 10) + 1,
    department: employee.department,
    isPlanned: Math.random() > 0.5,
    isPending: Math.random() > 0.7,
  }));

  // Stats calculations
  const totalEmployees = employees.length;
  const totalLeaves = leaveData.length;
  const approvedLeaves = leaveData.filter((leave) => !leave.isPending).length;
  const presentEmployees = totalEmployees - approvedLeaves;
  const plannedLeaves = leaveData.filter(
    (leave) => leave.isPlanned && !leave.isPending
  ).length;
  const unplannedLeaves = leaveData.filter(
    (leave) => !leave.isPlanned && !leave.isPending
  ).length;
  const pendingRequests = leaveData.filter((leave) => leave.isPending).length;

  // const recentLeaves = leaveData.filter((leave) => {
  //   const sevenDaysAgo = new Date();
  //   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  //   const fromDate = new Date(leave.from);
  //   return fromDate >= sevenDaysAgo;
  // }).length;

  const filteredLeaves = handleFilterChange({ leaveData, dateRangeFilter, leaveTypeFilter, sortOption });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Leaves</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto">
          <div className="relative w-full xs:w-auto">
            <button
              onClick={() => setExportOpen(!exportOpen)}
              className="flex items-center justify-between xs:justify-start gap-2 px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors w-full xs:w-auto"
            >
              <div className="flex items-center gap-2">
                <File className="h-4 w-4" />
                <span>Export</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-gray-500 transition-transform ${exportOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {exportOpen && (
              <div className="absolute right-0 mt-1 w-full xs:w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="py-1">
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setExportOpen(false);
                    }}
                  >
                    Export as PDF
                  </button>
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setExportOpen(false);
                    }}
                  >
                    Export as Excel
                  </button>
                </div>
              </div>
            )}
          </div>

          <button className="flex items-center justify-center text-nowrap xs:justify-start gap-1 px-4 py-2 bg-[#f26522] text-white rounded-md text-sm font-semibold hover:bg-[#e05b1a] transition-colors w-full xs:w-auto">
            <Plus className="h-3 w-3" />
            <span>Add Leave</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <LeavesCard
          title="Total Present"
          value={presentEmployees}
          icon={Users}
          iconColor="#03c95a"
          bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-green-01.86f2351c2a8fef550174.svg"
        />

        <LeavesCard
          title="Planned Leaves"
          value={plannedLeaves}
          icon={UserPlus}
          iconColor="#1b84ff"
          bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-pink-01.8553968349c8e67b3655.svg"
        />

        <LeavesCard
          title="Unplanned Leaves"
          value={unplannedLeaves}
          icon={UserPlus}
          iconColor="#f26522"
          bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-yellow-01.b8c835230fae6319f237.svg"
        />

        <LeavesCard
          title="Pending Requests"
          value={pendingRequests}
          icon={UserPlus}
          iconColor="#ab47bc"
          bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-blue-01.260ff81ee2c2594c14d3.svg"
        />
      </div>

      {/* Leave Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-white p-4 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-semibold">Leave List</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <DateRangeDropdown
                value={dateRangeFilter}
                onChange={setDateRangeFilter}
              />

              <div className="w-full sm:w-40">
                <select
                  id="leave-type-filter"
                  value={leaveTypeFilter}
                  onChange={(e) => setLeaveTypeFilter(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                >
                  <option value="All">Leave Type</option>
                  <option value="Medical Leave">Medical Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Annual Leave">Annual Leave</option>
                </select>
              </div>

              <div className="w-full sm:w-36">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="">Sort By</option>
                  <option value="last7days">Last 7 days</option>
                  <option value="ascending">Employee Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <DataTableListing filteredLeaves={filteredLeaves} />
      </div>
    </div>
  );
};

export default LeavesView;