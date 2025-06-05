import React from "react";
import Holidays from "@/components/admin/holidays";
import AdminLayout from "@/components/layouts/AdminLayout";

export const generateMetadata = () => ({
  title: "Holiday | SmartHR",
  description: "View and manage company holidays with the ability to add new holiday entries to the calendar.",
  keywords: [
    "holiday management",
    "company holidays", 
    "holiday calendar",
    "work schedule",
    "paid holidays"
  ]
});

export default function HolidaysPage() {
  return (
    <AdminLayout>
      <Holidays />
    </AdminLayout>
  );
}