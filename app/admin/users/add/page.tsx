import React from "react";
import AddUser from "@/components/admin/users/add";
import AdminLayout from "@/components/layouts/AdminLayout";

export const generateMetadata = () => ({
  title: "Add New User | SmartHR",
  description: "Create and configure new user accounts with role assignments and granular permission settings.",
  keywords: [
    "add user",
    "user management",
    "role assignment",
    "user permissions",
    "account creation"
  ]
});

export default function AddUserPage() {
  return (
    <AdminLayout>
      <AddUser />
    </AdminLayout>
  );
}