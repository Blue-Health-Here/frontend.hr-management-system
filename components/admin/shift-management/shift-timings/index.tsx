"use client"
import Button from '@/components/common/Button'
import DataTable from '@/components/common/DataTable'
import { rotateShiftData, shiftTimeColumns, shiftTimeData } from '@/utils/constants'
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import Swal from 'sweetalert2'

const ShiftTimings = () => {
    const handleEdit = (row: any) => {
        console.log(row, "row id");
    }

    const showDeleteConfirmation = (row: any, itemType: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this ${itemType}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonColor: "#d33",
            background: "#ffffff",
            buttonsStyling: false,
            customClass: {
                container: "bg-white dark:bg-gray-800",
                popup: "rounded-xl shadow-lg border border-gray-200",
                title: "text-gray-800 font-semibold",
                htmlContainer: "text-gray-600",
                confirmButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
                cancelButton: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-2"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // onConfirm();
                console.log(row, "row");
                Swal.fire({
                    title: "Deleted!",
                    text: `Your ${itemType} has been deleted.`,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    background: "#ffffff",
                    customClass: {
                        popup: "rounded-xl shadow-lg border border-gray-200"
                    }
                });
            }
        });
    };
    return (
        <div className="bg-white rounded-2xl theme-shadow">
            <div className="flex flex-wrap gap-4 items-center justify-between p-4">
                <h1 className="text-2xl font-semibold text-gray-900">Define Shift Timings</h1>
                <div className="flex items-center gap-3">
                    <Button label='Add Shift' icon={FiPlusCircle} />
                </div>
            </div>
            <DataTable columns={shiftTimeColumns} showActions={true} data={shiftTimeData}
                actionsConfig={{ onEdit: (row) => handleEdit(row), onDelete: (row) => showDeleteConfirmation(row, "shift") }} />
        </div>
    )
}

export default ShiftTimings
