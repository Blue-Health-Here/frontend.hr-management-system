import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import PayrollPage from "@/components/admin/reports/payroll";

export const generateMetadata = () => ({
    title: "Payroll Items | SmartHR",
    description: "Manage payroll components including additions, overtime, and deductions for employee compensation.",
    keywords: [
        "payroll items",
        "salary additions",
        "payroll deductions",
        "overtime management",
        "compensation components"
    ]
});

function Page() {
    return (
        <AdminLayout>
            <PayrollPage />
        </AdminLayout>
    );
}

export default Page;
