"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CheckInOutRemindersPage = () => {
    const [sortOption, setSortOption] = useState<string>("");
    return (
        <div className="overflow-x-auto bg-white rounded-2xl p-4 flex flex-col gap-4 theme-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-lg font-semibold">
                    Check-In/Out Reminders List
                </h2>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                    <div className="relative w-[170px] sm:w-44">
                        <select
                            id="sort"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="block w-full pl-3 pr-7 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md appearance-none bg-white"
                        >
                            <option value="">Sort By : Last 7 Days</option>
                            <option value="ascending">A-Z</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Employee
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Reminder
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Due Date
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {[
                        { id: 1, employee: "John Doe", reminder: "Check-in", dueDate: "Feb 8, 2025" },
                        { id: 2, employee: "Sarah Smith", reminder: "Check-out", dueDate: "Feb 14, 2025" },
                        { id: 3, employee: "Michael Johnson", reminder: "Check-out", dueDate: "Feb 6, 2025" },
                        { id: 4, employee: "Emily Davis", reminder: "Check-in", dueDate: "Feb 18, 2025" }
                    ].map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.employee}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-500 text-gray-200`}>
                                    {item.reminder}
                                </span>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.dueDate}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default CheckInOutRemindersPage;

