import React from "react";
import MainLayout from "@/components/layouts/AdminLayout";
import AddEmployee from "@/components/admin/employees/add";

function Page() {
    return (
        <MainLayout>
            <AddEmployee />
        </MainLayout>
    );
}

export default Page;
