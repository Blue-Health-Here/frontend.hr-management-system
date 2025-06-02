import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import PermissionsPage from "@/components/admin/users/permissions";

function Page() {
    return (
        <MainLayout>
            <PermissionsPage />
        </MainLayout>
    );
}

export default Page;
