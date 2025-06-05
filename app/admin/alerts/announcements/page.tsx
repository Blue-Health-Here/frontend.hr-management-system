import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import AnnouncementsPage from "@/components/admin/alerts/announcements";

function Page() {
    return (
        <AdminLayout>
            <AnnouncementsPage />
        </AdminLayout>
    );
}

export default Page;
