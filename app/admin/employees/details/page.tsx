// HRDashboard.tsx

import EmployeeDetailsView from "@/components/pages/employees/details";
import MainLayout from "@/components/layouts/MainLayout";

export default function HRDashboard() {
  return (
    <MainLayout>
      <EmployeeDetailsView />
    </MainLayout>
  );
}
