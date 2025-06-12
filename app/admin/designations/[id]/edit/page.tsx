import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import AddDesignation from "@/components/admin/designations/add";

export const generateMetadata = () => ({
  title: "Edit Designation | SmartHR",
  description: "Create and manage employee designations by setting job titles, assigning departments, and configuring status for effective organizational structure.",
  keywords: [
    "add designation",
    "job title setup",
    "position management",
    "organizational structure",
    "employee roles",
    "department assignment",
    "job position status"
  ]
});

export default function AddDesignationPage() {
  return (
    <AdminLayout>
      <AddDesignation />
    </AdminLayout>
  );
}