"use client";

import React, { useState } from 'react'
import { employeeAttendanceColumns, employeeAttendanceData, statusOptions, timeTrackingData } from '@/utils/constants'
import EmployeeTimeCard from './EmployeeTimeCard'
// import WorkingHoursTimeline from './WorkingHoursTimeline'
import DataTable from '../../common/DataTable'
import MetricCard from '@/components/common/MetricCard'
import DateRangeDropdown from '@/components/common/form/DateRangeDropdown'
import Dropdown from '@/components/common/form/DropDown'

const EmployeeAttendance = () => {
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");
  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        <EmployeeTimeCard />
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timeTrackingData.map((item, index) => (
              <MetricCard
                key={index}
                icon={item.icon}
                value={item.value}
                target={item.target}
                iconBgColor={item.iconColor} />
            ))}
          </div>
          {/* <WorkingHoursTimeline /> */}
        </div>
      </div>
      <div className="bg-white rounded-2xl">
        <div className="border-b border-gray-200">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">Employee Attendance</h2>
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
        <DataTable columns={employeeAttendanceColumns} data={employeeAttendanceData} />
      </div>

    </div>
  )
}

export default EmployeeAttendance