import { Leave } from "@/utils/types";
import Image from "next/image";
import React from "react";

const DataTableListing: React.FC<any> = ({ filteredLeaves }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Employee
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Leave Type
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            From
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            To
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Days
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {filteredLeaves.map((leave: Leave) => (
                        <tr key={leave.id} className="hover:bg-gray-50">
                            <td className="py-4 px-6 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <Image
                                            src={leave.employeeImage}
                                            alt={leave.employee}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-500">
                                            {leave.employee}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {leave.department}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {leave.leaveType}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {leave.from}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {leave.to}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {leave.days} Days
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default DataTableListing;