import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import EmployeePage from "@/components/admin/reports/employee";

export const generateMetadata = () => ({
    title: "Employees | SmartHR",
    description:
        "Manage your organization's employee directory with comprehensive profiles, status tracking, and filtering capabilities.",
    keywords: [
        "employee directory",
        "staff management",
        "employee status",
        "HR system",
        "employee records",
    ],
});

function Page() {
    return (
        <AdminLayout>
            <EmployeePage />
        </AdminLayout>
    );
}

export default Page;
