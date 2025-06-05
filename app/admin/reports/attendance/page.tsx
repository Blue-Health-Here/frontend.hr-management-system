import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import AttendancePage from "@/components/admin/reports/attendance";

export const generateMetadata = () => ({
    title: "Attendance | SmartHR",
    description:
        "Track employee attendance with detailed reports, check-in/out times, and status overview.",
    keywords: [
        "attendance report",
        "employee attendance",
        "time tracking",
        "HR system",
        "work hours",
    ],
});

function Page() {
    return (
        <AdminLayout>
            <AttendancePage />
        </AdminLayout>
    );
}

export default Page;
