"use client"

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

const AnnouncementsPage = () => {
    const [sortOption, setSortOption] = useState<string>("");
    return (
        <div className="overflow-x-auto bg-white rounded-2xl p-4 flex flex-col gap-4 theme-shadow">
            <div className="flex flex-wrap justify-between items-start md:items-center gap-4">
                <h2 className="text-lg font-semibold">
                    Announcements List
                </h2>
                    <div className="relative w-full sm:w-44">
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

            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Announcement
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Description
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Posted By
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Date
                        </th>
                        <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {[
                        {
                            id: 1, announcement: "Independence Day - Office Closed",
                            date: "March 18, 2025", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta", postedBy: "John Doe"
                        },
                        {
                            id: 2, announcement: "Maintenance Scheduled",
                            date: "March 10, 2025", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta", postedBy: "John Doe"
                        },
                        {
                            id: 3, announcement: "Company Meeting Next Week",
                            date: "March 24, 2025", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta", postedBy: "John Doe"
                        },
                    ].map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.announcement}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.description}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                                {item.postedBy}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                {item.date}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                <div className="flex gap-4">
                                    <button className="cursor-pointer">
                                        <FiEdit size={16} />
                                    </button>
                                    <button className="cursor-pointer">
                                        <IoTrashOutline size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default AnnouncementsPage;