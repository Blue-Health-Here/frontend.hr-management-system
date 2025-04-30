import React from "react";
import AttendanceReportView from "@/components/attendance-report";
import MainLayout from "@/components/layouts/MainLayout";

function Page() {
  return (
    <MainLayout>
      <AttendanceReportView />
    </MainLayout>
  );
}

export default Page;
