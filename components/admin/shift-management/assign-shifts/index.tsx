import Button from '@/components/common/Button'
import DataTable from '@/components/common/DataTable'
import Dropdown from '@/components/common/form/DropDown'
import { assignShiftsColumns, assignShiftsData, departmentOptions, employees } from '@/utils/constants'
import React from 'react'

const AssignShifts = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="bg-white rounded-2xl">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold text-gray-900">Assign Shifts</h1>
          <div className="flex items-center gap-3">
            <Dropdown
              name="department"
              id="department"
              placeholder='Department'
              options={departmentOptions.map((d) => ({
                value: d,
                label: d,
              }))}
            />
            <Dropdown
              name="employee"
              id="employee"
              placeholder='Employee'
              options={employees.map((d) => ({
                value: d,
                label: d,
              }))}
            />
          </div>
        </div>
        <DataTable columns={assignShiftsColumns} data={assignShiftsData} />
      </div>
      <div className="flex justify-end">
        <div className="w-44">
          <Button label='Save' />
        </div>
      </div>
    </div>

  )
}

export default AssignShifts