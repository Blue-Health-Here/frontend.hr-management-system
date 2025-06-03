"use client"
import Button from '@/components/common/Button'
import DataTable from '@/components/common/DataTable'
import { rotateShiftColumns, rotateShiftData, shiftTimeColumns, shiftTimeData } from '@/utils/constants'
import React from 'react'

const RotateShifts = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="bg-white rounded-2xl">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold text-gray-900">Rotate Shifts</h1>
          <div className="flex items-center gap-3">
            <p>Auto-Rotate</p>
            <label className="cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
        <DataTable columns={rotateShiftColumns} data={rotateShiftData} />
      </div>
      <div className="flex justify-end">
        <div className="w-44">
          <Button label='Roate' />
        </div>
      </div>
    </div>
  )
}

export default RotateShifts
