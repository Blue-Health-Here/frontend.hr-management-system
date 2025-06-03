"use client"
import Button from '@/components/common/Button'
import DataTable from '@/components/common/DataTable'
import { rotateShiftData, shiftTimeColumns, shiftTimeData } from '@/utils/constants'
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const ShiftTimings = () => {
    return (
        <div className="bg-white rounded-2xl">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-2xl font-semibold text-gray-900">Define Shift Timings</h1>
                <div className="flex items-center gap-3">
                    <Button label='Add Shift' icon={FiPlusCircle} />
                </div>
            </div>
            <DataTable columns={shiftTimeColumns} data={shiftTimeData} />
        </div>
    )
}

export default ShiftTimings
