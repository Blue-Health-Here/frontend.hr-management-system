import React from "react";
import AddEmployee from "@/components/admin/employees/add";
import AdminLayout from "@/components/layouts/AdminLayout";

export const generateMetadata = () => ({
  title: "Add New Employee | SmartHR",
  description:
    "Create new employee profiles with personal details, department information, and system access credentials.",
  keywords: [
    "add employee",
    "new employee",
    "employee onboarding",
    "HR system",
    "employee profile",
  ],
});

export default function AddEmployeePage() {
  return (
    <AdminLayout>
      <AddEmployee />
    </AdminLayout>
  );
}
