import React from "react";
import AttendanceReportView from "@/components/admin/attendance-report";
import AdminLayout from "@/components/layouts/AdminLayout";

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

export default function AttendanceReportPage() {
  return (
    <AdminLayout>
      <AttendanceReportView />
    </AdminLayout>
  );
}
