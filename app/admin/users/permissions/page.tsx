import React from "react";
import PermissionsPage from "@/components/admin/users/permissions";
import AdminLayout from "@/components/layouts/AdminLayout";

function Page() {
    return (
        <AdminLayout>
            <PermissionsPage />
        </AdminLayout>
    );
}

export default Page;
