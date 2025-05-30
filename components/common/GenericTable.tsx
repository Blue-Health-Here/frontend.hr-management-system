"use client";

import React, { useState } from 'react';
import DateRangeDropdown from './form/DateRangeDropdown';
import { employeAttendanceData, statusOptions } from '@/utils/constants';
import Dropdown from './form/DropDown';

const GenericTable = ({
    title = "Employee Attendance",
}) => {
    const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");

    const getStatusColor = (status: string) => {
        const statusColors: Record<string, string> = {
            Present: 'bg-green-100 text-green-800',
            Absent: 'bg-red-100 text-red-800'
        };
        return statusColors[status] || 'bg-gray-100 text-gray-800';
    };

    const getHoursColor = (type: 'success' | 'danger' | 'info' | string) => ({
        success: 'bg-green-500',
        danger: 'bg-red-500',
        info: 'bg-blue-500'
    }[type as 'success' | 'danger' | 'info'] || 'bg-gray-500');

    return (
        <div className="bg-white p-4 lg:p-6 rounded-2xl">
            <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <div className="flex gap-x-4">
                        <DateRangeDropdown
                            value={dateRangeFilter}
                            onChange={setDateRangeFilter}
                        />
                        <Dropdown
                            name="status"
                            id="status"
                            placeholder='Status'
                            options={statusOptions.map((d) => ({
                                value: d,
                                label: d,
                            }))}
                        />
                    </div>
                </div>

            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Date', 'Check In', 'Status', 'Check Out', 'Break', 'Late', 'Overtime', 'Production Hours'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {employeAttendanceData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.checkIn}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(row.status)}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.checkOut}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.break}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.late}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.overtime}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 text-xs font-semibold text-white rounded ${getHoursColor(row.hoursType)}`}>
                                        {row.hours}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GenericTable;