"use client";
import { Search, Download, Plus, ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavigationProps, Employee } from "./types";
import { UserPlus } from "lucide-react";

export default function EmployeeView({ navigateTo }: NavigationProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>("All Departments");
  const [selectedStatus, setSelectedStatus] = useState<string>("All Status");

  const employees: Employee[] = [
    {
      id: 1,
      name: "Sarah Williams",
      jobTitle: "Senior Designer",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      department: "Design",
      workDetail: "Full-time",
      status: "On Leave",
      startDate: "2019-03-15",
      contact: "sarah.williams@example.com",
    },
    {
      id: 2,
      name: "Michael Brown",
      jobTitle: "Sales Representative",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      department: "Sales",
      workDetail: "Full-time",
      status: "On Leave",
      startDate: "2020-07-22",
      contact: "michael.brown@example.com",
    },
    {
      id: 3,
      name: "John Doe",
      jobTitle: "Senior Software Engineer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      department: "Engineering",
      workDetail: "Full-time",
      status: "Active",
      startDate: "2020-05-15",
      contact: "john.doe@example.com",
    },
    {
      id: 4,
      name: "Jane Smith",
      jobTitle: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      department: "Marketing",
      workDetail: "Full-time",
      status: "Active",
      startDate: "2019-08-22",
      contact: "jane.smith@example.com",
    },
    {
      id: 5,
      name: "Alex Johnson",
      jobTitle: "HR Coordinator",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      department: "Human Resources",
      workDetail: "Full-time",
      status: "Active",
      startDate: "2021-01-10",
      contact: "alex.johnson@example.com",
    },
    {
      id: 6,
      name: "Emily Davis",
      jobTitle: "Financial Analyst",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      department: "Finance",
      workDetail: "Full-time",
      status: "Active",
      startDate: "2020-11-05",
      contact: "emily.davis@example.com",
    },
    {
      id: 7,
      name: "Robert Wilson",
      jobTitle: "Operations Specialist",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      department: "Operations",
      workDetail: "Full-time",
      status: "Active",
      startDate: "2022-03-18",
      contact: "robert.wilson@example.com",
    },
    {
      id: 8,
      name: "Lisa Thompson",
      jobTitle: "Sales Executive",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      department: "Sales",
      workDetail: "Full-time",
      status: "Active",
      startDate: "2021-07-30",
      contact: "lisa.thompson@example.com",
    },
    {
      id: 9,
      name: "David Lee",
      jobTitle: "IT Support Engineer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      department: "IT",
      workDetail: "Full-time",
      status: "Active",
      startDate: "2022-02-14",
      contact: "david.lee@example.com",
    },
  ];

  // Get all unique departments
  const departments = [
    "All Departments",
    ...new Set(employees.map((e) => e.department)),
  ];

  // Status options
  const statusOptions = ["All Status", "Active", "On Leave", "Terminated"];

  // Filter employees based on search term, department and status
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.contact.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      employee.department === selectedDepartment;

    const matchesStatus =
      selectedStatus === "All Status" || employee.status === selectedStatus;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-100 pt-8 -mt-8 pb-4">
        <h1 className="text-xl font-semibold text-gray-800">Employees</h1>
        <hr className="my-4 border-t border-gray-300" />
      </div>

      {/* Employee Directory Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Employee Directory
          </h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-normal text-black hover:bg-gray-50">
              <Download size={16} />
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-md text-sm font-medium text-white">
              <UserPlus className="h-4 w-4" />
              Add Employee
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}

        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={16} />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-gray-300 sm:text-sm"
                placeholder="Search by name or contact info..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Department Dropdown */}
            <div className="relative w-full md:w-48">
              <label htmlFor="department-filter" className="sr-only">
                Department
              </label>
              <select
                id="department-filter"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="appearance-none block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="text-gray-400" size={16} />
              </div>
            </div>

            {/* Status Dropdown */}
            <div className="relative w-full md:w-48">
              <label htmlFor="status-filter" className="sr-only">
                Status
              </label>
              <select
                id="status-filter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="appearance-none block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-0 focus:border-gray-300 sm:text-sm"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status} className="text-gray-700">
                    {status}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="text-gray-400" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Employee Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">
                  Job Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">
                  Work Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={employee.image}
                          alt={employee.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.contact}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.jobTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {employee.workDetail}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : employee.status === "On Leave"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(employee.startDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-bold">
                    ...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
