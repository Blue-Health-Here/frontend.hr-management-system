"use client"
import React from 'react'
import { payrollItemsColumns, payrollItemsData, sortingOrder } from '@/utils/constants'
import DataTable from '@/components/common/DataTable'
import Dropdown from '@/components/common/form/DropDown'

const EmployeePayrollItems = () => {
  return (
    <div> 
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Payroll Items</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-auto">
        </div>
      </div>
         <div className="bg-white rounded-2xl">
        <div className="border-b border-gray-200">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">Additions List</h2>
            <div className="flex gap-x-4">
              <Dropdown
                name="sort"
                id="sort"
                placeholder='Sort By: Last 7 Days'
                options={sortingOrder.map((d) => ({
                  value: d,
                  label: d,
                }))}
              /> 
            </div>
          </div>
        </div>
        <DataTable columns={payrollItemsColumns} data={payrollItemsData} />
      </div>
    </div>
  )
}

export default EmployeePayrollItems