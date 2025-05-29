"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  CheckCircle,
  XCircle,
  UserPlus,
  File,
  ChevronDown,
  Plus,
} from "lucide-react";
import { employeeData, employeeStats, metrics } from "@/utils/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ExportButton from "../../common/ExportButton";
import DateRangeDropdown from "../../common/form/DateRangeDropdown";
import Button from "../../common/Button";
import MetricCard from "../../common/MetricCard";

const EmployeesView = () => {
  const router = useRouter();
  const [employees, setEmployees] = useState(employeeData);
  const [designationFilter, setDesignationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [exportOpen, setExportOpen] = useState(false);
  const [dateRange, setDateRange] = useState("04/26/2025 - 05/02/2025");

  // Calculate summary numbers
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;
  const inactiveEmployees = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const newJoiners = employees.filter((emp) => {
    const joinDate = new Date(emp.joiningDate);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return joinDate >= sevenDaysAgo;
  }).length;

  const handleDesignationChange = (id: string, newDesignation: string) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? { ...employee, designation: newDesignation }
          : employee
      )
    );
  };

  const handleFilterChange = () => {
    let filteredEmployees = [...employees];

    if (designationFilter) {
      filteredEmployees = filteredEmployees.filter(
        (employee) => employee.designation === designationFilter
      );
    }

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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Employee</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-auto">
          <ExportButton />
          <Link
            href="/employees/add"
          >
            <Button label="Add Employee" icon={Plus}></Button>
          </Link>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#212529] text-white mr-4">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">
                  Total Employee
                </p>
                <p className="text-2xl font-semibold">{totalEmployees}</p>
              </div>
            </div>
            <div className="bg-[#f0def3] px-3 py-1 rounded-full">
              <p className="text-sm font-medium text-[#ab47bc]">100%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#03c95a] text-white mr-4">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Active</p>
                <p className="text-2xl font-semibold">{activeEmployees}</p>
              </div>
            </div>
            <div className="bg-green-100 px-3 py-1 rounded-full">
              <p className="text-sm font-medium text-green-700">
                {totalEmployees > 0
                  ? Math.round((activeEmployees / totalEmployees) * 100)
                  : 0}
                %
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#e70d0d] text-white mr-4">
                <XCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Inactive</p>
                <p className="text-2xl font-semibold">{inactiveEmployees}</p>
              </div>
            </div>
            <div className="bg-red-100 px-3 py-1 rounded-full">
              <p className="text-sm font-medium text-red-700">
                {totalEmployees > 0
                  ? Math.round((inactiveEmployees / totalEmployees) * 100)
                  : 0}
                %
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#1b84ff] text-white mr-4">
                <UserPlus className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">New Joiners</p>
                <p className="text-2xl font-semibold">{newJoiners}</p>
              </div>
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded-full">
              <p className="text-sm font-medium text-blue-700">
                {totalEmployees > 0
                  ? Math.round((newJoiners / totalEmployees) * 100)
                  : 0}
                %
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {employeeStats.map((stats, index) => (
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
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-white p-4 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-semibold">Plan List</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <DateRangeDropdown value={dateRange} onChange={setDateRange} />
              <div className="w-36">
                <select
                  id="designation-filter"
                  value={designationFilter}
                  onChange={(e) => setDesignationFilter(e.target.value)}
                  className="block w-full pl-3 py-1.5 sm:py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]"
                >
                  <option value="">Designations</option>
                  <option value="Developer">Developer</option>
                  <option value="Executive">Executive</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="UX Designer">UX Designer</option>
                  <option value="Marketing Specialist">
                    Marketing Specialist
                  </option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Financial Analyst">Financial Analyst</option>
                  <option value="Operations Manager">Operations Manager</option>
                  <option value="Sales Executive">Sales Executive</option>
                </select>
              </div>
              <div className="w-32">
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full pl-3 pr-8 py-1.5 sm:py-2 border border-gray-300 focus:outline-none text-sm rounded-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]"
                >
                  <option value="All">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="w-42">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block w-full pl-3 pr-8 py-1.5 sm:py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]"
                >
                  <option value="">Sort By: Last 7 days</option>
                  <option value="ascending">Ascending</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Emp ID
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Phone
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Designation
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Joining Date
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-500">
                    {employee.id}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          src={employee.image}
                          alt={employee.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                          unoptimized
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.department}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {employee.email}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {employee.phone}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    <select
                      value={employee.designation}
                      onChange={(e) =>
                        handleDesignationChange(employee.id, e.target.value)
                      }
                      className="block w-auto pl-3 pr-8 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]"
                    >
                      <option value="Developer">Developer</option>
                      <option value="Executive">Executive</option>
                      <option value="Software Engineer">
                        Software Engineer
                      </option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="UX Designer">UX Designer</option>
                      <option value="Marketing Specialist">
                        Marketing Specialist
                      </option>
                      <option value="HR Manager">HR Manager</option>
                      <option value="Financial Analyst">
                        Financial Analyst
                      </option>
                      <option value="Operations Manager">
                        Operations Manager
                      </option>
                      <option value="Sales Executive">Sales Executive</option>
                    </select>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {employee.joiningDate}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                        }`}
                    >
                      {employee.status}
                    </span>
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

export default EmployeesView;
