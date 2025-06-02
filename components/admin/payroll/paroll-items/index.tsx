"use client"
import React, { useState } from 'react'
import { payrollItemsColumns, payrollItemsData, sortingOrder } from '@/utils/constants'
import DataTable from '@/components/common/DataTable'
import Dropdown from '@/components/common/form/DropDown'
import ExportButton from '@/components/common/ExportButton'
import Button from '@/components/common/Button'
import { FiPlusCircle } from 'react-icons/fi'

const EmployeePayrollItems = () => {
  const [activeButton, setActiveButton] = useState('Additions');

  const buttons = ['Additions', 'Overtime', 'Deductions'];
  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">Payroll Items</h1>
          <div className="flex space-x-3">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setActiveButton(button)}
                className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${activeButton === button
                  ? 'bg-green-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 '
                  }`}>
                {button}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ExportButton />
          <Button label='Add Additions' icon={FiPlusCircle} />
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