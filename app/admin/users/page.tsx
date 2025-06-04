import React from "react";
import UsersPage from "@/components/admin/users";
import AdminLayout from "@/components/layouts/AdminLayout";

function Page() {
  return (
    <AdminLayout>
      <UsersPage />
    </AdminLayout>
  );
}

export default Page;
