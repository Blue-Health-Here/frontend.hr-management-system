"use client";
import React from "react";
import { Plus } from "lucide-react";
// import DataTableListing from "../../common/leaves/DataTableListing";
import Link from "next/link";
// import { holidaysData } from "@/utils/constants";
import Button from "../../common/Button";
import DataTable from "@/components/common/DataTable";
import { useRouter } from "next/navigation";

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
    const handleDelete = (row: any) => {
        console.log('Delete row:', row);
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
                    actionsConfig={{
                        onEdit: handleEdit,
                        onDelete: handleDelete
                    }}
                />
            </div>
        </>
    );
};

export default DepartmentsPage;
