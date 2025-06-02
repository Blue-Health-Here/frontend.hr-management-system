import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import UsersPage from "@/components/admin/users";

function Page() {
  return (
    <MainLayout>
      <UsersPage />
    </MainLayout>
  );
}

export default Page;
