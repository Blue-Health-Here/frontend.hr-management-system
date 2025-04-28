import React from "react";
import EmployeeView from "@/components/employeeView";
import MainLayout from "@/components/layouts/MainLayout";

function Page() {
  return (
    <MainLayout >
      <EmployeeView />
    </MainLayout>
  );
}

export default Page;
