import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import AttendanceReportView from "@/components/admin/attendance-report";

function Page() {
  return (
    <MainLayout>
      <AttendanceReportView />
    </MainLayout>
  );
}

export default Page;
