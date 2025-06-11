"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Users, UserPlus, File, ChevronDown, Plus, DollarSign } from "lucide-react";
import { employeeData } from "@/utils/constants";
import DateRangeDropdown from "../../common/form/DateRangeDropdown";
import { Employees, Leave } from "@/utils/types";
import { handleFilterChange } from "@/utils/helper";
import LeavesCard from "@/components/common/leaves/LeavesCard";
import DataTableListing from "@/components/common/leaves/DataTableListing";
import Link from "next/link";
import ExportButton from "../../common/ExportButton";
import Button from "../../common/Button";
import { MdCoPresent } from "react-icons/md";
import { FcLeave } from "react-icons/fc";
import { RiPassPendingFill } from "react-icons/ri";
import { AiFillCalendar, AiFillCloseSquare } from "react-icons/ai";

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
 const metrics = [
    {
      title: "Total Present",
      value: "567",
      color: "blue" as const,
      icon: MdCoPresent,
      iconColor: "blue" as const,

    },
    {
      title: "Planned Leaves",
      value: "143",
      subtitle: "visitors",
      color: "purple" as const,
      icon: AiFillCalendar ,
      iconColor: "purple" as const,


    },
    {
      title: "Unplanned Leaves",
      value: "103",
      subtitle: "messages",
      color: "green" as const,
      icon: AiFillCloseSquare,
      iconColor: "green" as const,


    },
    {
      title: "Pending Requests",
      value: "10%",
      color: "pink" as const,
      icon: RiPassPendingFill,
      iconColor: "pink" as const,
    }
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Leaves</h1>
        {/* <div className="flex flex-row items-stretch gap-3 w-full sm:w-auto">
          <ExportButton />

          <Link href="/admin/leaves/add">
            <Button
              label="Add Leave"
              icon={Plus}
            >
            </Button>
          </Link>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6 bg-white rounded-2xl theme-shadow p-4">
     {metrics.map((metric, index) => (
            <LeavesCard
              key={index}
              title={metric.title}
              value={metric.value}
              color={metric.color}
              icon={metric.icon}
              iconColor={metric.iconColor}
            />
          ))}
      </div>

      {/* Leave Table */}
      <div className="overflow-x-auto bg-white rounded-2xl theme-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4">
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

        {/* Table */}
        <DataTableListing filteredLeaves={filteredLeaves} />
      </div>
    </div>
  );
};

export default LeavesView;