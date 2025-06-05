import React from "react";
import LeavesView from "@/components/admin/leaves";
import AdminLayout from "@/components/layouts/AdminLayout";

export const generateMetadata = () => ({
  title: "Leaves | SmartHR",
  description: "Track and manage employee leaves with status overview, filtering options, and approval workflows.",
  keywords: [
    "leave management",
    "employee leaves",
    "leave tracker",
    "HR system",
    "leave approval"
  ]
});

export default function LeavesPage() {
  return (
    <AdminLayout>
      <LeavesView />
    </AdminLayout>
  );
}