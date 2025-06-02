import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import EmployeesView from "@/components/admin/employees";

function Page() {
  return (
    <MainLayout>
      <EmployeesView />
    </MainLayout>
  );
}

export default Page;
