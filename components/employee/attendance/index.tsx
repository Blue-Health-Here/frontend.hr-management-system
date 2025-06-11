"use client";

import React, { useState } from 'react'
import { employeeAttendanceColumns, employeeAttendanceData, statusOptions,employeesAttendanceData } from '@/utils/constants'
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
      <div className="flex flex-col lg:flex-row gap-6">
        <EmployeeTimeCard />
        <div className="flex-1 space-y-6">
          <div className="grid gap-4">
            {employeesAttendanceData.map((item, index) => (
              <MetricCard
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
          {/* <WorkingHoursTimeline /> */}
        </div>
      </div>
      <div className="bg-white theme-shadow rounded-2xl">
        <div className="border-b border-gray-200 flex flex-wrap gap-4 justify-between items-center p-4">
          <h2 className="text-lg font-semibold">Employee Attendance</h2>
          <div className="flex gap-4 w-full md:w-max">
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
              className='w-full sm:w-36'
            />
          </div>
        </div>
        <DataTable columns={employeeAttendanceColumns} data={employeeAttendanceData} />
      </div>

    </div>
  )
}

export default EmployeeAttendance