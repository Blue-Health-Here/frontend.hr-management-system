import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import LeavePage from "@/components/admin/reports/leave";

export const generateMetadata = () => ({
    title: "Leaves | SmartHR",
    description: "Track and manage employee leaves with status overview, filtering options, and approval workflows.",
    keywords: [
        "leave management",
        "employee leaves",
        "leave tracker",
        "HR system",
        "leave approval"
    ]
});

function Page() {
    return (
        <AdminLayout>
            <LeavePage />
        </AdminLayout>
    );
}

export default Page;
