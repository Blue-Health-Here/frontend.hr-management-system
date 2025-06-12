import React from "react";
import MainLayout from "@/components/layouts/AdminLayout";
import AddDepartment from "@/components/admin/departments/add";

function Page() {
    return (
        <MainLayout>
            <AddDepartment />
        </MainLayout>
    );
}

export default Page;
