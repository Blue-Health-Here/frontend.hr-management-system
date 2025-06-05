import React from "react";
import ShiftTimings from "@/components/admin/shift-management/shift-timings";
import AdminLayout from "@/components/layouts/AdminLayout";

export const generateMetadata = () => ({
  title: "Shift Timings | SmartHR",
  description: "Define and manage shift schedules including timing parameters, rotation patterns, and shift categories.",
  keywords: [
    "shift timings",
    "work schedule configuration",
    "shift rotation",
    "workforce scheduling",
    "shift patterns"
  ]
});

export default function ShiftTimingsPage() {
  return (
    <AdminLayout>
      <ShiftTimings />
    </AdminLayout>
  );
}