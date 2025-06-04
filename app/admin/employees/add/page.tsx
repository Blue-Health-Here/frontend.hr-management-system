import React from "react";
import AddEmployee from "@/components/admin/employees/add";
import AdminLayout from "@/components/layouts/AdminLayout";

function Page() {
  return (
    <AdminLayout>
      <AddEmployee />
    </AdminLayout>
  );
}

export default Page;
