import React from "react";
import AddUser from "@/components/admin/users/add";
import AdminLayout from "@/components/layouts/AdminLayout";

function Page() {
  return (
    <AdminLayout>
      <AddUser />
    </AdminLayout>
  );
}

export default Page;
