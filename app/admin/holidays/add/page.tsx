import React from "react";
import AddHoliday from "@/components/admin/holidays/add";
import AdminLayout from "@/components/layouts/AdminLayout";

export const generateMetadata = () => ({
  title: "Add Holiday | SmartHR",
  description: "Create and configure company holidays with title, date, description and status management for workforce planning.",
  keywords: [
    "add holiday",
    "holiday setup",
    "company calendar",
    "paid time off",
    "work schedule"
  ]
});

export default function AddHolidayPage() {
  return (
    <AdminLayout>
      <AddHoliday />
    </AdminLayout>
  );
}