import React from 'react'
import DataTableListing from '../../leaves/DataTableListing'
import { holidaysData } from '@/utils/constants'

const EmployeePayrollItems = () => {
  return (
    <div> 
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Payroll Items</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-auto">
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-2xl p-4 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-lg font-semibold">Additions List</h2>
        </div>
      </div></div>
  )
}

export default EmployeePayrollItems