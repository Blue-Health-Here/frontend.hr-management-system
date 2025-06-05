import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import CheckInOutRemindersPage from "@/components/admin/alerts/check-in-out-reminders";
export const generateMetadata = () => ({
    title: "Check-In/Out Reminders | SmartHR",
    description:
        "Monitor and send reminders for pending employee check-ins and check-outs to ensure accurate attendance records.",
    keywords: [
        "check-in reminders",
        "check-out alerts",
        "employee attendance",
        "HR reminders",
        "SmartHR",
    ],
});

function Page() {
    return (
        <AdminLayout>
            <CheckInOutRemindersPage />
        </AdminLayout>
    );
}

export default Page;
