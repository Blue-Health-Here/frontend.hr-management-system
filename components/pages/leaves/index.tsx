"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Users, UserPlus, File, ChevronDown, Plus } from "lucide-react";
import { employeeData } from "@/utils/constants";
import LeavesCard from "./LeavesCard";
import DateRangeDropdown from "../../common/form/DateRangeDropdown";
import { Employees, Leave } from "@/utils/types";
import { handleFilterChange } from "@/utils/helper";
import DataTableListing from "./DataTableListing";
import Link from "next/link";
import ExportButton from "../../common/ExportButton";
import Button from "../../common/Button";

const LeavesView = () => {
  const [employees] = useState<Employees[]>(employeeData);
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");
  const [leaveTypeFilter, setLeaveTypeFilter] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("");

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

  const filteredLeaves = handleFilterChange({ leaveData, dateRangeFilter, leaveTypeFilter, sortOption });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Leaves</h1>
        <div className="flex flex-row items-stretch gap-3 w-full sm:w-auto">
          <ExportButton />

          <Link href="/leaves/add">
            <Button
              label="Add Leave"
              icon={Plus}
            >
            </Button>
          </Link>
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-auto">
              <DateRangeDropdown
                value={dateRangeFilter}
                onChange={setDateRangeFilter}
              />

              <div className="relative w-full sm:w-40">
                <select
                  id="leave-type-filter"
                  value={leaveTypeFilter}
                  onChange={(e) => setLeaveTypeFilter(e.target.value)}
                  className="block w-full pl-3 pr-6 py-2 border border-gray-300 focus:outline-none text-sm rounded-md appearance-none bg-white "
                >
                  <option value="All">Leave Type</option>
                  <option value="Medical Leave">Medical Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Annual Leave">Annual Leave</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative w-full sm:w-36">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block w-full pl-3 pr-8 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md appearance-none bg-white"
                >
                  <option value="">Sort By : Last 7 Days</option>
                  <option value="ascending">Employee Name (A-Z)</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
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