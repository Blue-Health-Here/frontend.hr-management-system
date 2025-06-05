"use client"
import React, { useState } from 'react'
import { designation, employeSalaryColumns, employeSalaryData, payrollItemsColumns, payrollItemsData, sortingOrder } from '@/utils/constants'
import DataTable from '@/components/common/DataTable'
import Dropdown from '@/components/common/form/DropDown'
import ExportButton from '@/components/common/ExportButton'
import Button from '@/components/common/Button'
import DateRangeDropdown from '@/components/common/form/DateRangeDropdown'
import { FiPlusCircle, FiEdit } from 'react-icons/fi'
import DeleteConfirmation from '@/components/common/DeleteConfirmation'

const EmployeeSalary = () => {
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");
  const [data, setData] = useState(employeSalaryData);

  const handleDelete = (id:string) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const columns = employeSalaryColumns.map(col => {
    if (col.accessor === 'actions') {
      return {
        ...col,
        render: (_: any, row: any) => (
          <div className="flex gap-4">
            <button className="cursor-pointer">
              <FiEdit size={16} />
            </button>
            <DeleteConfirmation 
              onConfirm={() => handleDelete(row.id)} 
              itemType="employee salary"
            />
          </div>
        ),
      };
    }
    return col;
  });

  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Employee Salary</h1>
        <div className="flex items-center gap-3">
          <ExportButton />
          <Button label='Add Salary' icon={FiPlusCircle} />
        </div>
      </div>
      <div className="bg-white rounded-2xl theme-shadow">
        <div className="border-b border-gray-200">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">Employee Salary List</h2>
            <div className="flex gap-x-4">
              <DateRangeDropdown
                value={dateRangeFilter}
                onChange={setDateRangeFilter}
              />
              <Dropdown
                name="sort"
                id="sort"
                placeholder='Designation'
                options={designation.map((d) => ({
                  value: d,
                  label: d,
                }))}
              />
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
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default EmployeeSalary