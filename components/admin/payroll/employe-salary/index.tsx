"use client"
import React, { useState } from 'react'
import { designation, employeSalaryColumns, employeSalaryData, payrollItemsColumns, payrollItemsData, sortingOrder } from '@/utils/constants'
import DataTable from '@/components/common/DataTable'
import Dropdown from '@/components/common/form/DropDown'
import ExportButton from '@/components/common/ExportButton'
import Button from '@/components/common/Button'
import DateRangeDropdown from '@/components/common/form/DateRangeDropdown'
import { FiPlusCircle } from 'react-icons/fi'

const EmployeeSalary = () => {
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");

  return (
    <div>
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-normal sm:justify-between pb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Employee Salary</h1>
        <div className="flex items-center gap-3">
          <ExportButton />
          <Button label='Add Salary' className='max-w-32 min-w-32' icon={FiPlusCircle} />
        </div>
      </div>
      <div className="bg-white rounded-2xl theme-shadow">
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap gap-4 justify-between items-center p-4">
            <h2 className="text-base md:text-lg font-semibold">Employee Salary List</h2>
            <div className="flex flex-wrap gap-4 gap-x-4">
              <DateRangeDropdown
                value={dateRangeFilter}
                onChange={setDateRangeFilter}
              />
              <Dropdown
                name="sort"
                id="sort"
                placeholder='Sort By: Last 7 Days'
                options={sortingOrder.map((d) => ({
                  value: d,
                  label: d,
                }))}
                className='w-full sm:w-44'
              />
              <Dropdown
                name="sort"
                id="sort"
                placeholder='Designation'
                options={designation.map((d) => ({
                  value: d,
                  label: d,
                }))}
                className='w-full sm:w-36'
              />
            </div>
          </div>
        </div>
        <DataTable columns={employeSalaryColumns} data={employeSalaryData} />
      </div>
    </div>
  )
}

export default EmployeeSalary