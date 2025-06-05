import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import PaySlipNotificationsPage from "@/components/admin/alerts/payslip-notifications";

function Page() {
    return (
        <AdminLayout>
            <PaySlipNotificationsPage />
        </AdminLayout>
    );
}

export default Page;
