import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import Designations from "@/components/admin/designations";

export const generateMetadata = () => ({
  title: "Designations | SmartHR",
  description: "View and manage company designations with the ability to add, edit, and track employee positions across departments.",
  keywords: [
    "designation management",
    "employee positions",
    "job titles",
    "company structure",
    "organization hierarchy"
  ]
});

export default function DesignationsPage() {
  return (
    <AdminLayout>
      <Designations />
    </AdminLayout>
  );
}