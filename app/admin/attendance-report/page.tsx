import React from "react";
import AttendanceReportView from "@/components/admin/attendance-report";
import AdminLayout from "@/components/layouts/AdminLayout";

function Page() {
  return (
    <AdminLayout>
      <AttendanceReportView />
    </AdminLayout>
  );
}

export default Page;
