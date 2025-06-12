import React from "react";
import AddRole from "@/components/admin/users/roles/add";
import AdminLayout from "@/components/layouts/AdminLayout";

export const generateMetadata = () => ({
  title: "Add Role | SmartHR",
  description: "Create and configure new user roles with status management for access control and permissions.",
  keywords: [
    "add role",
    "role management",
    "access control",
    "user permissions",
    "role status"
  ]
});

export default function AddRolePage() {

  return (
    <AdminLayout>
      <AddRole />
    </AdminLayout>
  );
}