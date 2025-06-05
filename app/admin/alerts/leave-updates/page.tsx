import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import LeaveUpdatesPage from "@/components/admin/alerts/leave-updates";

function Page() {
    return (
        <AdminLayout>
            <LeaveUpdatesPage />
        </AdminLayout>
    );
}

export default Page;
