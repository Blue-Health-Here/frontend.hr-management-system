"use client";
import React from "react";
import { Plus } from "lucide-react";
// import DataTableListing from "../../common/leaves/DataTableListing";
import Link from "next/link";
// import { holidaysData } from "@/utils/constants";
import Button from "../../common/Button";
import DataTable from "@/components/common/DataTable";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const DepartmentsPage = () => {
    const router = useRouter();
    const handleEdit = (row: any) => {
        console.log("Editing row:", row);

        if (row && row.id) {
            router.push(`/admin/departments/${row.id}/edit`);
        } else {
            console.warn('Row is undefined or missing id');
        }
    };
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
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h1 className="text-xl md:text-2xl font-bold">Departments</h1>
                <div className="flex flex-col sm:flex-row items-stretch gap-3 w-auto">
                    <Link
                        href="/admin/departments/add"
                        className="cursor-pointer"
                    >
                        <Button label="Add Department" icon={Plus}></Button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto bg-white rounded-2xl p-4 flex flex-col gap-4 theme-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold">Departments List</h2>
                </div>
                <DataTable 
                    columns={[{ header: "Name", accessor: "name" }, { header: "Status", accessor: "status" }]} 
                    data={[
                        { id: 1, name: "IT", status: "Active" },
                        { id: 2, name: "Clinical", status: "In-Active" }
                    ]}
                    showStatus={false}
                    showActions={true}
                    actionsConfig={{ onEdit: (row) => handleEdit(row), onDelete: (row) => showDeleteConfirmation(row, "department") }}
                />
            </div>
        </>
    );
};

export default DepartmentsPage;
