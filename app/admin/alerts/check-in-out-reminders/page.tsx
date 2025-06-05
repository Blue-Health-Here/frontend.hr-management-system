import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import CheckInOutRemindersPage from "@/components/admin/alerts/check-in-out-reminders";

function Page() {
    return (
        <AdminLayout>
            <CheckInOutRemindersPage />
        </AdminLayout>
    );
}

export default Page;
