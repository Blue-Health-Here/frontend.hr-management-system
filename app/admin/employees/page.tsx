import React from "react";
import EmployeesView from "@/components/admin/employees";
import AdminLayout from "@/components/layouts/AdminLayout";

function Page() {
  return (
    <AdminLayout>
      <EmployeesView />
    </AdminLayout>
  );
}

export default Page;
