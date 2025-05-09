"use client";
import React, { useState } from "react";
import { Users as  File, ChevronDown, Plus } from "lucide-react";
import { employeeData } from "@/utils/constants";
import DateRangeDropdown from "../common/form/DateRangeDropdown";
import { Employees, User } from "@/utils/types";
import { handleFilterChange } from "@/utils/helper";
import DataTableListing from "../leaves/DataTableListing";
import Link from "next/link";


const UsersPage = () => {
  const [employees] = useState<Employees[]>(employeeData);
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");
  const [roleFilter, setRoleFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("");
  const [exportOpen, setExportOpen] = useState<boolean>(false);

  const userData: User[] = employees.map((employee) => ({
    id: employee.id,
    name: employee.name,
    email: `${employee.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
    createdDate: new Date(
      Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    role: Math.random() > 0.5 ? "Employee" : "Client",
    status: Math.random() > 0.3 ? "Active" : "Inactive",
    image: employee.image,
  }));

  // Stats calculations
  const totalEmployees = userData.length;
  const activeUsers = userData.filter((user) => user.status === "Active").length;
  const inactiveUsers = totalEmployees - activeUsers;
  const employeeUsers = userData.filter((user) => user.role === "Employee").length;
  const clientUsers = totalEmployees - employeeUsers;

  const filteredUsers = handleFilterChange({ 
    userData, 
    dateRangeFilter, 
    roleFilter, 
    statusFilter, 
    sortOption 
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Users</h1>
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

          <Link href="/users/add" className="flex items-center justify-center text-nowrap xs:justify-start gap-1 px-4 py-2 bg-[#f26522] text-white rounded-md text-sm font-semibold hover:bg-[#e05b1a] transition-colors w-full xs:w-auto">
            <Plus className="h-3 w-3" />
            <span>Add New User</span>
          </Link>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-white p-4 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-semibold">User List</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <DateRangeDropdown
                value={dateRangeFilter}
                onChange={setDateRangeFilter}
              />

              <div className="w-full sm:w-40">
                <select
                  id="role-filter"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                >
                  <option value="All">Role</option>
                  <option value="Employee">Employee</option>
                  <option value="Client">Client</option>
                </select>
              </div>

              <div className="w-full sm:w-40">
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                >
                  <option value="All">Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
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
                  <option value="ascending">Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <DataTableListing filteredUsers={filteredUsers as User[]} />
      </div>
    </div>
  );
};

export default UsersPage;