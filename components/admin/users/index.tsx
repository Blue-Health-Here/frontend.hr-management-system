"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Users as File, ChevronDown, Plus } from "lucide-react";
import { employeeData } from "@/utils/constants";
import DateRangeDropdown from "../../common/form/DateRangeDropdown";
import { Employees, User } from "@/utils/types";
import { handleFilterChange } from "@/utils/helper";
import DataTableListing from "../../common/leaves/DataTableListing";
import Link from "next/link";
import ExportButton from "../../common/ExportButton";
import Button from "../../common/Button";

const UsersPage = () => {
  const [employees] = useState<Employees[]>(employeeData);
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");
  const [roleFilter, setRoleFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("");

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
        <h1 className="text-xl md:text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-stretch gap-3 w-auto">
          <ExportButton /> {/* Use the new component here */}

          <Link href="/admin/users/add" className="cursor-pointer">
            <Button label="Add New User" icon={Plus}></Button>
          </Link>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white rounded-2xl p-4 flex flex-col gap-4 theme-shadow">
        <div className="flex flex-wrap justify-between items-start md:items-center gap-4">
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
                className="block w-full pl-3 pr-10 py-2  border border-gray-300 focus:outline-none text-sm rounded-md"
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
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none text-sm rounded-md"
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
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md"
              >
                <option value="">Sort By : Last 7 Days</option>
                <option value="ascending">Name (A-Z)</option>
              </select>
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