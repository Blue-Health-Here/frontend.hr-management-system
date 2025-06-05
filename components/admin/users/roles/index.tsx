"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Users as File, ChevronDown, Plus } from "lucide-react";
import { employeeData, rolesData } from "@/utils/constants";
import { Employees, User } from "@/utils/types";
import { handleFilterChange } from "@/utils/helper";
import Link from "next/link";
import ExportButton from "@/components/common/ExportButton";
import Button from "@/components/common/Button";
import DateRangeDropdown from "@/components/common/form/DateRangeDropdown";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { GoShieldLock } from "react-icons/go";

const RolesPage = () => {
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
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h1 className="text-2xl font-bold">Roles</h1>
                <div className="flex flex-row items-stretch gap-3 w-auto">
                    <ExportButton /> {/* Use the new component here */}

                    <Link href="/admin/users/roles/add" className="cursor-pointer">
                        <Button label="Add New Role" icon={Plus}></Button>
                    </Link>
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl flex flex-col gap-4 p-4 theme-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h2 className="text-lg font-semibold">Roles List</h2>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                        <DateRangeDropdown
                            value={dateRangeFilter}
                            onChange={setDateRangeFilter}
                        />

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
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                                Name
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                                Created Date
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                                Status
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {rolesData.map((item: any, index: number) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                    {item.name}
                                </td>
                                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                    {item.created_at}
                                </td>
                                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                    <p className="flex items-center gap-2">
                                        <Link href={`/admin/users/permissions?role=${item.name.toLowerCase()}`}>
                                            <GoShieldLock className="w-5 h-5" />
                                        </Link>
                                        <Link href="/admin/users/roles/add">
                                            <BiEdit className="w-5 h-5" />
                                        </Link>
                                        <MdDelete className="w-5 h-5 cursor-pointer" />
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RolesPage;
