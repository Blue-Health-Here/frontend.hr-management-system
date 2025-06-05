"use client"
import React from 'react'
import Button from '@/components/common/Button'
import { Download } from 'lucide-react'
import DataTable from '@/components/common/DataTable'
import { payslipDeductionsColumns, payslipDeductionsData, payslipEarningColumns, payslipEarningData } from '@/utils/constants'

const EmployeePayslip = () => {

  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Payslip</h1>
        <div className="flex items-center gap-3">
          <Button label='Download' icon={Download} />
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl space-y-4 theme-shadow">
        <div className="flex justify-between items-start pb-4 border-b border-gray-200">
          <div className="space-y-1">
            <h1 className="text-green-600 text-3xl font-bold">SmartHR</h1>
            <div className="text-sm text-gray-600">
              3099 Kennedy Court Framingham, MA 01702
            </div>
          </div>
          <div className="text-right text-sm text-gray-500 font-bold space-y-1">
            <div>Payslip No <span className="text-red-500">#PS4283</span></div>
            <div className='flex gap-1 font-bold'>Salary Month : <p className='text-black'>October 2024</p></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 pb-4 border-b border-gray-200">
          <div>
            <h3 className="text-sm font-medium text-gray-800 mb-3">From</h3>
            <div className="space-y-1">
              <div className="font-semibold text-gray-800">XYZ Technologies</div>
              <div className="text-sm text-gray-600">2077 Chicago Avenue Orosi, CA 93647</div>
              <div className="text-sm text-gray-600">Email : xyztech@example.com</div>
              <div className="text-sm text-gray-600">Phone : +1 987 654 3210</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800 mb-3">To</h3>
            <div className="space-y-1">
              <div className="font-semibold text-gray-800">Anthony Lewis</div>
              <div className="text-sm text-gray-600">Web Designer</div>
              <div className="text-sm text-gray-600">Email : anthony@example.com</div>
              <div className="text-sm text-gray-600">Phone : +1 458 268 4738</div>
            </div>
          </div>
        </div>

        {/* Payslip Title */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">Payslip for the moth of October 2024</h2>
        </div>

        {/* Earnings and Deductions Table */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <DataTable columns={payslipEarningColumns} data={payslipEarningData} />
          <DataTable columns={payslipDeductionsColumns} data={payslipDeductionsData} />
        </div>

        {/* Net Salary */}
        <div className="">
          <div className="text-sm">
            <span className="">Net Salary : </span>
            <span className="">$3600</span>
            <span className="font-bold">(Three thousand six hundred only)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeePayslip