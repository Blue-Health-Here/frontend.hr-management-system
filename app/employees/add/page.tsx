import React from "react";
import AddEmployee from "@/components/employees/add";
import MainLayout from "@/components/layouts/MainLayout";

function Page() {
  return (
    <MainLayout>
      <AddEmployee />
    </MainLayout>
  );
}

export default Page;
