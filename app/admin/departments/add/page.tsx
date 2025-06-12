import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import AddDepartment from "@/components/admin/departments/add";

export const generateMetadata = () => ({
  title: "Add Department | SmartHR",
  description: "Create and configure company holidays with title, date, description and status management for workforce planning.",
  keywords: [
    "add holiday",
    "holiday setup",
    "company calendar",
    "paid time off",
    "work schedule"
  ]
});

export default function AddDepartmentPage() {
  return (
    <AdminLayout>
      <AddDepartment />
    </AdminLayout>
  );
}